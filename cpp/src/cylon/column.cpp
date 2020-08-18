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

#include "column.hpp"

namespace cylon {

std::shared_ptr<Column> Column::FromArrow(std::shared_ptr<arrow::Array> &array) {
  this->data = array;
  return std::make_shared<Column>(*this);
}

std::shared_ptr<arrow::Array> Column::GetColumnData() {
  return this->data;
}

//template<typename T, typename>
//std::shared_ptr<Column> VectorColumn::FromVector(std::vector<T>) {
//
//  return std::shared_ptr<Column>();
//}

}  // namespace cylon
