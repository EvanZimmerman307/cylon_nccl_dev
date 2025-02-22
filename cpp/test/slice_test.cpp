/*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "common/test_header.hpp"
#include "test_utils.hpp"
#include <cylon/table.hpp>

namespace cylon {


void testDistSlice(std::shared_ptr<Table>& global_table,
                  std::shared_ptr<Table>& table,
                  int64_t offset,
                  int64_t length) {
  
  std::shared_ptr<Table> out;
  auto ctx = table->GetContext();
  std::shared_ptr<arrow::Table> arrow_output;

  CHECK_CYLON_STATUS(DistributedSlice(table, offset, length, &out));
  INFO(RANK << "slice res:" << out->Rows());

  std::vector<std::shared_ptr<Table>> gathered;
  CHECK_CYLON_STATUS(ctx->GetCommunicator()->Gather(out, /*root*/0, /*gather_from_root*/true,
                                                    &gathered));
  if (RANK == 0) {
    std::shared_ptr<Table> result, global_out;
    CHECK_CYLON_STATUS(Slice(global_table, offset, length, &global_out));

    for (size_t i = 0; i < gathered.size(); i++) {
      INFO("gathered " << i << ":" << gathered[i]->Rows());
    }
    REQUIRE(WORLD_SZ == (int) gathered.size());

    CHECK_CYLON_STATUS(Merge(gathered, result));
    CHECK_ARROW_EQUAL(global_out->get_table(), result->get_table());
  }
}

namespace test {

TEST_CASE("Dist Slice testing", "[dist slice]") {
  auto schema = arrow::schema({{arrow::field("a", arrow::int64())},
                               {arrow::field("b", arrow::float32())}});
  auto global_arrow_table = TableFromJSON(schema, {R"([{"a":  3, "b":0.025},
                                         {"a": 26, "b":0.394},
                                         {"a": 51, "b":0.755},
                                         {"a": 20, "b":0.030},
                                         {"a": 33, "b":0.318},
                                         {"a": 12, "b":0.813},
                                         {"a": 72, "b":0.968},
                                         {"a": 29, "b":0.291},
                                         {"a": 41, "b":0.519},
                                         {"a": 29, "b":0.291},
                                         {"a": 41, "b":0.519},
                                         {"a": 43, "b":0.419},
                                         {"a": 57, "b":0.153},
                                         {"a": 25, "b":0.479},
                                         {"a": 26, "b":0.676},
                                         {"a": 70, "b":0.504},
                                         {"a":  7, "b":0.232},
                                         {"a": 45, "b":0.734},
                                         {"a": 61, "b":0.685},
                                         {"a": 57, "b":0.314},
                                         {"a": 59, "b": 0.837},
                                         {"a": 67, "b": 0.086},
                                         {"a": 14, "b": 0.193},
                                         {"a": 21, "b": 0.853},
                                         {"a": 10, "b": 0.808},
                                         {"a": 13, "b": 0.085},
                                         {"a": 31, "b": 0.122},
                                         {"a": 20, "b": 0.689},
                                         {"a": 37, "b": 0.491},
                                         {"a": 62, "b": 0.262},
                                         {"a": 1 , "b": 0.868},
                                         {"a": 19, "b": 0.422},
                                         {"a": 64, "b": 0.528},
                                         {"a": 37, "b": 0.834},
                                         {"a": 33, "b": 0.010},
                                         {"a": 76, "b": 0.927},
                                         {"a": 4 , "b": 0.529},
                                         {"a": 13, "b": 0.201},
                                         {"a": 45, "b": 0.898},
                                         {"a": 67, "b": 0.407}])"});

  int64_t rows_per_tab = global_arrow_table->num_rows() / WORLD_SZ;
  std::shared_ptr<Table> table1;
  CHECK_CYLON_STATUS(Table::FromArrowTable(
      ctx, global_arrow_table->Slice(RANK * rows_per_tab, rows_per_tab),
      table1));
  std::shared_ptr<Table> global_table;

  CHECK_CYLON_STATUS(
      Table::FromArrowTable(ctx, global_arrow_table, global_table));

  SECTION("dist_slice_test_1_single_table") {
    testDistSlice(global_table, table1, 2, 5);
  }

  SECTION("dist_slice_test_2_multiple_table") {
    testDistSlice(global_table, table1, 1, 15);
  }

  SECTION("dist_sort_test_3_skipped_two_table") {
    testDistSlice(global_table, table1, 15, 8);
  }

  SECTION("dist_slice_test_4_multiple_table") {
    testDistSlice(global_table, table1, 1, 0);
  }

  SECTION("dist_slice_test_5_multiple_table") {
    testDistSlice(global_table, table1, 0, 0);
  }

  SECTION("dist_slice_test_5_multiple_table") {
    testDistSlice(global_table, table1, global_table->Rows(), INT64_MAX);
  }

  SECTION("dist_slice_test_5_multiple_table") {
    testDistSlice(global_table, table1, global_table->Rows() - 1, 1000);
  }

  SECTION("failing case") {
    REQUIRE_FALSE(DistributedSlice(table1, 1000, 1000, nullptr).is_ok());
  }

  SECTION("dist_sort_test_5_one_empty_table") {
    auto pool = cylon::ToArrowPool(ctx);

    std::shared_ptr<arrow::Table> arrow_empty_table;
    auto arrow_status = util::CreateEmptyTable(table1->get_table()->schema(),
                                               &arrow_empty_table, pool);
    REQUIRE(arrow_status.ok());
    auto empty_table = std::make_shared<Table>(ctx, std::move(arrow_empty_table));

    std::shared_ptr<Table> out1, out2;
    std::shared_ptr<arrow::Table> arrow_output;
    CHECK_CYLON_STATUS(DistributedSlice(empty_table, 0, 10, &out1));
    CHECK_CYLON_STATUS(DistributedSlice(empty_table, 0, 5, &out2));
    CHECK_ARROW_EQUAL(out1->get_table(), out2->get_table());
  }

}

TEST_CASE("Slice testing", "[equal]") {
    std::string path1 = "../data/input/csv1_0.csv";
    std::string path2 = "../data/input/csv1_1.csv";
    std::string path3 = "../data/input/csv1_0_shuffled.csv";
    std::string path4 = "../data/input/csv1_0_col_order_change.csv";
    std::shared_ptr<Table> table1, table2, table3, table4, out;

    auto read_options = io::config::CSVReadOptions().UseThreads(false);

    CHECK_CYLON_STATUS(FromCSV(ctx, std::vector<std::string>{path1, path2, path3, path4},
                            std::vector<std::shared_ptr<Table> *>{&table1, &table2, &table3, &table4},
                            read_options));

    SECTION("Testing Local Slice") {

        CHECK_CYLON_STATUS(Slice(table1, 13, 8, &out));

        CHECK_CYLON_STATUS(Slice(table2, 15, 5, &out));

        CHECK_CYLON_STATUS(Slice(table3, 0, 10, &out));

        CHECK_CYLON_STATUS(Slice(table4, 2, 15, &out));
    }
}

TEST_CASE("Distributed Slice testing", "[distributed slice]") {
    std::string path1 = "../data/input/csv1_" + std::to_string(RANK) +".csv";
    std::string path2 = "../data/input/csv2_" + std::to_string(RANK) +".csv";
    std::shared_ptr<Table> table1, table2, out;

    auto read_options = io::config::CSVReadOptions().UseThreads(false);

    CHECK_CYLON_STATUS(FromCSV(ctx, std::vector<std::string>{path1, path2},
                    std::vector<std::shared_ptr<Table> *>{&table1, &table2},
                            read_options));

    SECTION("Testing Distributed Slice") {
        CHECK_CYLON_STATUS(DistributedSlice(table1, 10, 15, &out));

        CHECK_CYLON_STATUS(DistributedSlice(table2, 12, 8, &out));
    }
}

}
}