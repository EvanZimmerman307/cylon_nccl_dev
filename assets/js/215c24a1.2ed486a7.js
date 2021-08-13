(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{102:function(n,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return f}));var t=a(0),r=a.n(t);function o(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function p(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var d=r.a.createContext({}),s=function(n){var e=r.a.useContext(d),a=e;return n&&(a="function"==typeof n?n(e):i(i({},e),n)),a},c=function(n){var e=s(n.components);return r.a.createElement(d.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,o=n.originalType,l=n.parentName,d=p(n,["components","mdxType","originalType","parentName"]),c=s(a),b=t,f=c["".concat(l,".").concat(b)]||c[b]||m[b]||o;return a?r.a.createElement(f,i(i({ref:e},d),{},{components:a})):r.a.createElement(f,i({ref:e},d))}));function f(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:t,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},76:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return p})),a.d(e,"default",(function(){return s}));var t=a(3),r=a(8),o=(a(0),a(102)),l={id:"python",title:"Python"},i={unversionedId:"python",id:"python",isDocsHomePage:!1,title:"Python",description:"PyCylon is the Python binding for LibCylon (C++ Cylon). The uniqueness of PyCylon",source:"@site/docs/python.md",sourceDirName:".",slug:"/python",permalink:"/docs/python",editUrl:"https://github.com/cylondata/cylon/edit/master/docs/docs/python.md",version:"current",frontMatter:{id:"python",title:"Python"},sidebar:"someSidebar",previous:{title:"Cylon Conda Binaries",permalink:"/docs/conda"},next:{title:"C++",permalink:"/docs/cpp"}},p=[{value:"Dataframe",id:"dataframe",children:[{value:"Initialize",id:"initialize",children:[]},{value:"Load a Table",id:"load-a-table",children:[]},{value:"PyCylon Operations",id:"pycylon-operations",children:[]},{value:"Distributed Operations",id:"distributed-operations",children:[]}]},{value:"PyCylon Examples",id:"pycylon-examples",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Python API docs",id:"python-api-docs",children:[]}],d={toc:p};function s(n){var e=n.components,a=Object(r.a)(n,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"PyCylon is the Python binding for LibCylon (C++ Cylon). The uniqueness of PyCylon\nis that it can be used as a library or a framework. PyCylon seamlessly\nintegrates with PyArrow and can transform between with Pandas, Numpy and Tensors.\nAs a framework we support distributed relational algebra operations."),Object(o.b)("h2",{id:"dataframe"},"Dataframe"),Object(o.b)("p",null,"PyCylon API is a Pandas like Dataframe API which supports fast, scalable, distributed memory, parallel operations."),Object(o.b)("h3",{id:"initialize"},"Initialize"),Object(o.b)("p",null,"In a Cylon programme, if you use Cylon with ",Object(o.b)("inlineCode",{parentName:"p"},"MPI")," backend, the distributed envrionment\nmust be initialized as follows;"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from pycylon import DataFrame, CylonEnv\nfrom pycylon.net import MPIConfig\nenv = CylonEnv(config=MPIConfig())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Note: In the current release, Cylon only supports MPI as a distributed backend\n")),Object(o.b)("h3",{id:"load-a-table"},"Load a Table"),Object(o.b)("p",null,"Using Cylon"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from pycylon import DataFrame, read_csv\ndf = read_csv('path/to/csv')\n")),Object(o.b)("p",null,"Using Pandas and convert to PyCylon Table"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from pycylon import DataFrame, read_csv\nimport pandas as pd\ndf = DataFrame(pd.read_csv("http://path/to/csv"))\n')),Object(o.b)("p",null,"Cylon Table can be converted to a PyArrow Table, Pandas Dataframe or a Numpy Array"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"pyarrow_tb = cylon_tb.to_arrow()\npandas_df = cylon_tb.to_pandas()\nnumpy_arr = cylon_tb.to_numpy()\n")),Object(o.b)("h3",{id:"pycylon-operations"},"PyCylon Operations"),Object(o.b)("p",null,"Local Operations"),Object(o.b)("p",null,"Local operations of PyCylon are backed by a high performance C++ core and\ncan be simply executed as follows."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from pycylon import DataFrame\ndf1 = DataFrame([random.sample(range(10, 100), 50),\n                 random.sample(range(10, 100), 50)])\ndf2 = DataFrame([random.sample(range(10, 100), 50),\n                 random.sample(range(10, 100), 50)])\ndf2.set_index([0], inplace=True)\n\ndf3 = df1.join(other=df2, on=[0])\nprint(df3)\n")),Object(o.b)("h3",{id:"distributed-operations"},"Distributed Operations"),Object(o.b)("p",null,"Same operations can be executed in a distributed environment\nby simply passing the CylonEnv to the same function."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from pycylon import DataFrame, CylonEnv\nfrom pycylon.net import MPIConfig\n\nenv = CylonEnv(config=MPIConfig())\n\ndf1 = DataFrame([random.sample(range(10*env.rank, 15*(env.rank+1)), 5),\n                 random.sample(range(10*env.rank, 15*(env.rank+1)), 5)])\ndf2 = DataFrame([random.sample(range(10*env.rank, 15*(env.rank+1)), 5),\n                 random.sample(range(10*env.rank, 15*(env.rank+1)), 5)])\n\ndf2.set_index([0], inplace=True)\n\ndf3 = df1.join(other=df2, on=[0], env=env)\nprint(df3)\n")),Object(o.b)("h2",{id:"pycylon-examples"},"PyCylon Examples"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/blob/master/python/examples/dataframe/data_loading.py"},"Data Loading"))),Object(o.b)("p",null,"This example shows how data can be loaded into Cylon using it's built in APIs and also using other frameworks like Pandas.\nWhen loading from Pandas, Numpy or Apache Arrow to Cylon, there is no additional data copying overhead. When running on\na distributed environment, data can be either pre-partitioned and load based on the worker ID, or Cylon provide additional flags\nto partition data if all the workers are configured to read from the same source."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from pycylon import DataFrame, read_csv, CylonEnv\nfrom pycylon.net import MPIConfig\nimport sys\nimport pandas as pd\n\n# using cylon native reader\ndf = read_csv(sys.argv[1])\nprint(df)\n\n# using pandas to load csv\ndf = DataFrame(pd.read_csv(\n    "http://data.un.org/_Docs/SYB/CSV/SYB63_1_202009_Population,%20Surface%20Area%20and%20Density.csv", skiprows=6, usecols=[0, 1]))\nprint(df)\n\n# loading json\ndf = DataFrame(pd.read_json("https://api.exchangerate-api.com/v4/latest/USD"))\nprint(df)\n\n# distributed loading : run in distributed mode with MPI or UCX\nenv = CylonEnv(config=MPIConfig())\ndf = read_csv(sys.argv[1], slice=True, env=env)\nprint(df)\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/blob/master/python/examples/dataframe/concat.py"},"Concat"))),Object(o.b)("p",null,"The Concat operation is analogous to the Union operation in databases when applied across axis 0.\nIf applied across axis 1, it will be similar to doing a Join."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import random\n\nimport pycylon as cn\nfrom pycylon import DataFrame, CylonEnv\nfrom pycylon.net import MPIConfig\n\ndf1 = DataFrame([random.sample(range(10, 100), 5),\n                 random.sample(range(10, 100), 5)])\ndf2 = DataFrame([random.sample(range(10, 100), 5),\n                 random.sample(range(10, 100), 5)])\ndf3 = DataFrame([random.sample(range(10, 100), 10),\n                 random.sample(range(10, 100), 10)])\n\n# local unique\ndf4 = cn.concat(axis=0, objs=[df1, df2, df3])\nprint(\"Local concat axis0\")\nprint(df4)\n\ndf2.rename(['00', '11'])\ndf3.rename(['000', '111'])\ndf4 = cn.concat(axis=1, objs=[df1, df2, df3])\nprint(\"Local concat axis1\")\nprint(df4)\n\n# distributed unique\nenv = CylonEnv(config=MPIConfig())\n\ndf1 = DataFrame([random.sample(range(10 * env.rank, 15 * (env.rank + 1)), 5),\n                 random.sample(range(10 * env.rank, 15 * (env.rank + 1)), 5)])\ndf2 = DataFrame([random.sample(range(10 * env.rank, 15 * (env.rank + 1)), 5),\n                 random.sample(range(10 * env.rank, 15 * (env.rank + 1)), 5)])\ndf3 = DataFrame([random.sample(range(10 * env.rank, 15 * (env.rank + 1)), 10),\n                 random.sample(range(10 * env.rank, 15 * (env.rank + 1)), 10)])\nprint(\"Distributed concat axis0\", env.rank)\ndf4 = cn.concat(axis=0, objs=[df1, df2, df3], env=env)\nprint(df4)\n\ndf2.rename(['00', '11'])\ndf3.rename(['000', '111'])\ndf4 = cn.concat(axis=1, objs=[df1, df2, df3], env=env)\nprint(\"Distributed concat axis1\", env.rank)\nprint(df4)\n\nenv.finalize()\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/blob/master/python/examples/dataframe/join.py"},"Join"))),Object(o.b)("p",null,"Join operation can be used to merge two DataFrames across the index columns. Cylon currently support two join algorithms(Sort Join and Hash Join)\nand four join types(Left, Right, Inner, Full Outer)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from pycylon import DataFrame, CylonEnv\nfrom pycylon.net import MPIConfig\nimport random\n\ndf1 = DataFrame([random.sample(range(10, 100), 50),\nrandom.sample(range(10, 100), 50)])\ndf2 = DataFrame([random.sample(range(10, 100), 50),\nrandom.sample(range(10, 100), 50)])\ndf2.set_index([0], inplace=True)\n\n\n# local join\ndf3 = df1.join(other=df2, on=[0])\nprint("Local Join")\nprint(df3)\n\n# distributed join\nenv = CylonEnv(config=MPIConfig())\n\ndf1 = DataFrame([random.sample(range(10*env.rank, 15*(env.rank+1)), 5),\nrandom.sample(range(10*env.rank, 15*(env.rank+1)), 5)])\ndf2 = DataFrame([random.sample(range(10*env.rank, 15*(env.rank+1)), 5),\nrandom.sample(range(10*env.rank, 15*(env.rank+1)), 5)])\ndf2.set_index([0], inplace=True)\nprint("Distributed Join")\ndf3 = df1.join(other=df2, on=[0], env=env)\nprint(df3)\n\nenv.finalize()\n')),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/blob/master/python/examples/dataframe/merge.py"},"Merge"))),Object(o.b)("p",null,"Unlike the Join, Merge can be applied on non index columns. Similar to Join, Merge can be performed using two join algorithms(Sort Join and Hash Join)\nand four join types(Left, Right, Inner, Full Outer)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from pycylon import DataFrame, CylonEnv\nfrom pycylon.net import MPIConfig\nimport random\n\ndf1 = DataFrame([random.sample(range(10, 100), 50),\n                 random.sample(range(10, 100), 50)])\ndf2 = DataFrame([random.sample(range(10, 100), 50),\n                 random.sample(range(10, 100), 50)])\n\n# local merge\ndf3 = df1.merge(right=df2, on=[0])\nprint("Local Merge")\nprint(df3)\n\n# distributed join\nenv = CylonEnv(config=MPIConfig())\n\ndf1 = DataFrame([random.sample(range(10*env.rank, 15*(env.rank+1)), 5),\n                 random.sample(range(10*env.rank, 15*(env.rank+1)), 5)])\ndf2 = DataFrame([random.sample(range(10*env.rank, 15*(env.rank+1)), 5),\n                 random.sample(range(10*env.rank, 15*(env.rank+1)), 5)])\nprint("Distributed Merge")\ndf3 = df1.merge(right=df2, on=[0], env=env)\nprint(df3)\n\nenv.finalize()\n')),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/blob/master/python/examples/dataframe/sort.py"},"Sort"))),Object(o.b)("p",null,"Sort operation can be used to re-arrange the rows of a DataFrame based on one or more columns. If two(or more) columns are specified,\nsort will be first done on the first column and then rows having similar values in the first column will be sorted based on the second column."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'import random\n\nfrom pycylon import DataFrame, CylonEnv\nfrom pycylon.net import MPIConfig\n\ndf1 = DataFrame([random.sample(range(10, 100), 50),\n                 random.sample(range(10, 100), 50)])\n\n# local sort\ndf3 = df1.sort_values(by=[0])\nprint("Local Sort")\nprint(df3)\n\n# distributed sort\nenv = CylonEnv(config=MPIConfig())\n\ndf1 = DataFrame([random.sample(range(10 * env.rank, 15 * (env.rank + 1)), 5),\n                 random.sample(range(10 * env.rank, 15 * (env.rank + 1)), 5)])\nprint("Distributed Sort", env.rank)\ndf3 = df1.sort_values(by=[0], env=env)\nprint(df3)\n\n# distributed sort\nprint("Distributed Sort with sort options", env.rank)\nbins = env.world_size * 2\ndf3 = df1.sort_values(by=[0], num_bins=bins, num_samples=bins, env=env)\nprint(df3)\n\nenv.finalize()\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/cylondata/cylon/blob/master/python/examples/dataframe/groupby.py"},"Group By"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from pycylon import DataFrame\n\ndf1 = DataFrame([[0, 0, 1, 1], [1, 10, 1, 5], [10, 20, 30, 40]])\n\ndf3 = df1.groupby(by=0).agg({\n    "1": "sum",\n    "2": "min"\n})\nprint(df3)\n\ndf4 = df1.groupby(by=0).min()\nprint(df4)\n\ndf5 = df1.groupby(by=[0, 1]).max()\nprint(df5)\n')),Object(o.b)("p",null,"Group BY works similar to GROUP BY operator in databases. This should be coupled with an aggregate operation such as min, max, std, etc."),Object(o.b)("h2",{id:"logging"},"Logging"),Object(o.b)("p",null,"PyCylon is backed by a C++ implementation to accelerate the operations. C++ implementation writes logs to the console for debugging purposes.\nBy default, logging from C++ is disabled in PyCylon. However, logging can be enabled as follows by setting CYLON_LOG_LEVEL environment variable."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"export CYLON_LOG_LEVEL=<log_level_flag>\npython python/examples/dataframe/join.py\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Log Level"),Object(o.b)("th",{parentName:"tr",align:null},"Flag"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"INFO"),Object(o.b)("td",{parentName:"tr",align:null},"0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"WARN"),Object(o.b)("td",{parentName:"tr",align:null},"1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERROR"),Object(o.b)("td",{parentName:"tr",align:null},"2")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"FATAL"),Object(o.b)("td",{parentName:"tr",align:null},"3")))),Object(o.b)("p",null,"Additionally, this can be done programmatically as follows."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from pycylon.util.logging import log_level, disable_logging\n\n\nlog_level(0) # set an arbitrary log level\ndisable_logging() # disable logging completely\n")),Object(o.b)("h2",{id:"python-api-docs"},"Python API docs"),Object(o.b)("p",null,"Use blow link to navigate to the PyCylon API docs."),Object(o.b)("a",{href:"/pydocs/frame.html"},"Python API docs"))}s.isMDXComponent=!0}}]);