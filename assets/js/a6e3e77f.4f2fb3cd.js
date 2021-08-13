(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{102:function(n,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return y}));var t=a(0),o=a.n(t);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function c(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,t,o=function(n,e){if(null==n)return{};var a,t,o={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(o[a]=n[a]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(o[a]=n[a])}return o}var d=o.a.createContext({}),s=function(n){var e=o.a.useContext(d),a=e;return n&&(a="function"==typeof n?n(e):c(c({},e),n)),a},u=function(n){var e=s(n.components);return o.a.createElement(d.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,r=n.originalType,l=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),u=s(a),b=t,y=u["".concat(l,".").concat(b)]||u[b]||p[b]||r;return a?o.a.createElement(y,c(c({ref:e},d),{},{components:a})):o.a.createElement(y,c({ref:e},d))}));function y(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var r=a.length,l=new Array(r);l[0]=b;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c.mdxType="string"==typeof n?n:t,l[1]=c;for(var d=2;d<r;d++)l[d]=a[d];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},87:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return i})),a.d(e,"default",(function(){return s}));var t=a(3),o=a(8),r=(a(0),a(102)),l={id:"conda",title:"Cylon Conda Binaries",sidebar_label:"Conda"},c={unversionedId:"conda",id:"conda",isDocsHomePage:!1,title:"Cylon Conda Binaries",description:"PyCylon can be built using Conda. There are Conda packages for libcylon and pycylon.",source:"@site/docs/conda.md",sourceDirName:".",slug:"/conda",permalink:"/docs/conda",editUrl:"https://github.com/cylondata/cylon/edit/master/docs/docs/conda.md",version:"current",sidebar_label:"Conda",frontMatter:{id:"conda",title:"Cylon Conda Binaries",sidebar_label:"Conda"},sidebar:"someSidebar",previous:{title:"Cylon Docker Image",permalink:"/docs/docker"},next:{title:"Python",permalink:"/docs/python"}},i=[{value:"Installing from Conda",id:"installing-from-conda",children:[]},{value:"Building in a Conda environment",id:"building-in-a-conda-environment",children:[{value:"Install Conda &amp; Prerequisites",id:"install-conda--prerequisites",children:[]},{value:"Build Cylon",id:"build-cylon",children:[]}]}],d={toc:i};function s(n){var e=n.components,a=Object(o.a)(n,["components"]);return Object(r.b)("wrapper",Object(t.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"PyCylon can be built using Conda. There are Conda packages for libcylon and pycylon."),Object(r.b)("h2",{id:"installing-from-conda"},"Installing from Conda"),Object(r.b)("p",null,"The following command will install the latest version of Cylon."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"conda create -n cylon-0.4.0 -c cylondata pycylon python=3.7\nconda activate cylon-0.4.0\n")),Object(r.b)("p",null,"Now you can run an example to see if everything is working fine."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"from pycylon import DataFrame, CylonEnv\nfrom pycylon.net import MPIConfig\n\ndf1 = DataFrame([[1, 2, 3], [2, 3, 4]])\ndf2 = DataFrame([[1, 1, 1], [2, 3, 4]])\ndf3 = df1.merge(right=df2, on=[0, 1])\nprint(df3)\n")),Object(r.b)("h2",{id:"building-in-a-conda-environment"},"Building in a Conda environment"),Object(r.b)("p",null,"Now lets try to build Cylon in a Conda environment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ubuntu 16.04 or higher")),Object(r.b)("h3",{id:"install-conda--prerequisites"},"Install Conda & Prerequisites"),Object(r.b)("p",null,"First download and install Conda for your Linux distribution."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade\nsudo apt install software-properties-common\nsudo add-apt-repository ppa:deadsnakes/ppa\nsudo apt-get install -y --no-install-recommends --no-install-suggests libssl-dev curl wget vim git build-essential python3.7-dev python3.7 maven libnuma-dev libc-dev python3-venv openmpi-bin libopenmpi-dev python3-pip python3-dev\n")),Object(r.b)("p",null,"Here are some commands used to install conda. Note this is an example and you can choose your own version of Conda."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"wget https://repo.anaconda.com/archive/Anaconda3-2020.11-Linux-x86_64.sh\nchmod +x Anaconda3-2020.11-Linux-x86_64.sh\n./Anaconda3-2020.11-Linux-x86_64.sh\n")),Object(r.b)("p",null,"After installing conda we need to activate the conda environment. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'eval "$(~/anaconda3/bin/conda shell.bash hook)"\n')),Object(r.b)("h3",{id:"build-cylon"},"Build Cylon"),Object(r.b)("p",null,"Here are the commands to build Cylon using the conda-build. These commands will build the Cylon and PyCylon packages.\nWe need conda-build package to build Cylon."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cylondata/cylon.git\ncd cylon\n\nconda create --name build_env python=3.7\nconda activate build_env\nconda install conda-build\n\nconda-build conda/recipes/cylon/\nconda-build conda/recipes/pycylon/\n")),Object(r.b)("p",null,"Now you can install these packages into your conda environment. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"conda install --use-local cylon\nconda install --use-local pycylon\n")),Object(r.b)("p",null,"After that you can use the package."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"conda create -n cylon-0.4.0 -c cylondata pycylon python=3.7\nconda activate cylon-0.4.0\n")))}s.isMDXComponent=!0}}]);