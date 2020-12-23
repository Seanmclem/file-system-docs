(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(107)),l={id:"filesystemdirectoryhandle",title:"A Directory Reference",sidebar_label:"FileSystemDirectoryHandle"},o={unversionedId:"filesandfolders/filesystemdirectoryhandle",id:"filesandfolders/filesystemdirectoryhandle",isDocsHomePage:!1,title:"A Directory Reference",description:"FileSystemDirectoryHandle",source:"@site/docs/filesandfolders/filesystemdirectoryhandle.md",slug:"/filesandfolders/filesystemdirectoryhandle",permalink:"/file-system-docs/docs/filesandfolders/filesystemdirectoryhandle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/filesandfolders/filesystemdirectoryhandle.md",version:"current",sidebar_label:"FileSystemDirectoryHandle",sidebar:"someSidebar",previous:{title:"Opening a folder",permalink:"/file-system-docs/docs/"},next:{title:"A File Reference",permalink:"/file-system-docs/docs/filesandfolders/filesystemfilehandle"}},s=[{value:"FileSystemDirectoryHandle",id:"filesystemdirectoryhandle",children:[]},{value:"Data",id:"data",children:[]},{value:"Methods",id:"methods",children:[{value:"<strong>.keys()</strong>",id:"keys",children:[]},{value:"<strong>.values()</strong>",id:"values",children:[]},{value:"<strong>.entries()</strong>",id:"entries",children:[]},{value:"Using no method",id:"using-no-method",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"filesystemdirectoryhandle"},"FileSystemDirectoryHandle"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Obtained from opening a directory with window.",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/filesandfolders/showdirectorypicker"}),"showDirectoryPicker"),"(), or from being in the contents of another FileSystemDirectoryHandle    ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It contains a couple data points and some methods to act on its children, which would be the files or folders contained in the directory.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each child is also a FileSystem",Object(i.b)("em",{parentName:"p"},"File"),"Handle or FileSystem",Object(i.b)("em",{parentName:"p"},"Directory"),"Handle, which are FileSystemHandles with a ",Object(i.b)("inlineCode",{parentName:"p"},"type"),' of "file" or "directory"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data: {",Object(i.b)("inlineCode",{parentName:"p"},'{ kind: "directory" | "file", name: string }'),"}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Methods;  keys(), values(), entries(), or the directory itself as an async iterable.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each method returns NativeFileSystemDirectoryIterator, aka {",Object(i.b)("inlineCode",{parentName:"p"},"AsyncIterableIterator<FileSystemHandle>"),"}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Loop over the iterator with a function resemling the following to get certain results, depending on the method, for every item in the directory. "))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/// Extracting array of FileSystemHandles from the async iterator pulled from keys(), values(), or entries()\nasync function toArray(asyncIterator){\n    const array = [];\n    for await(const fileSystemhandle of asyncIterator) {\n        array.push(fileSystemhandle);\n    }\n    return array;\n}\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"data"},"Data"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Example\nkind: "directory"\nname: "chromium-fs-api-examples-ts"\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"keys"},Object(i.b)("strong",{parentName:"h3"},".keys()")),Object(i.b)("p",null,"Returns a string-key for each of the drectory children from the iterator,\nwhich is just the name of the folder, one for every handle/child."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Example\n[\n    "filesystem_api_tests",\n    "chromium-fs-api-examples-ts"\n]\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"values"},Object(i.b)("strong",{parentName:"h3"},".values()")),Object(i.b)("p",null,"Returns an iterator of the selected directories children. Which would be a FileSystemFileHandle or FileSystemDirectoryHandle  ",Object(i.b)("br",null),"\nfor each of the children, from the iterator.  ",Object(i.b)("br",null)),Object(i.b)("p",null,"Each child will contain ",Object(i.b)("inlineCode",{parentName:"p"},"kind/name")," values, and also all file or directory ",Object(i.b)("inlineCode",{parentName:"p"},"methods")," -since each child is also a FileSystemHandle.\nSo each can be used to access a file or traverse deeper into more directories."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Example\n[\n    {\n        kind: "directory",\n        name: "my-example-directory"\n    },\n    {\n        kind: "file",\n        name: "pic-example.png"\n    }\n]\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"entries"},Object(i.b)("strong",{parentName:"h3"},".entries()")),Object(i.b)("p",null,"Returns an item for each of the directory children from the iterator. ",Object(i.b)("br",null),"\nEach item contains an array of 2 items.",Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Item 0")," is just a string of the name of the child file/folder, ",Object(i.b)("br",null),"\nand ",Object(i.b)("inlineCode",{parentName:"p"},"Item 1")," is a FileSystemHandle of that child. ",Object(i.b)("br",null),"\nContaining the same two data properties ",Object(i.b)("inlineCode",{parentName:"p"},"kind/name")," again, and all file or directory methods\n-since it is a FileSystemHandle.\nSo, again, you can use it to access a file or traverse deeper itno more directories"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Example\n[\n    [\n        "package.json",\n        {\n            kind: "file",\n            name: "package.json"\n        }\n    ],\n    [\n        "src",\n        {\n            kind: "directory",\n            name: "src"\n        }\n    ],\n]\n')),Object(i.b)("h3",{id:"using-no-method"},"Using no method"),Object(i.b)("p",null,"You can point your array-iterator loop directly at the directory handle and get the same result as using the entries() function on the handle."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mdx"}),"test")))}d.isMDXComponent=!0}}]);