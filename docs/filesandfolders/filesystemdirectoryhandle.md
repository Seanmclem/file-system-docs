---
id: filesystemdirectoryhandle
title: A Directory Reference
sidebar_label: FileSystemDirectoryHandle
---

## FileSystemDirectoryHandle

* Obtained from opening a directory with window.[showDirectoryPicker](/filesandfolders/showdirectorypicker)(), or from being in the contents of another FileSystemDirectoryHandle    
* It contains a couple data points and some methods to act on its children, which would be the files or folders contained in the directory.
* Each child is also a FileSystem*File*Handle or FileSystem*Directory*Handle, which are FileSystemHandles with a `type` of "file" or "directory"

* Data: {`{ kind: "directory" | "file", name: string }`}
* Methods;  keys(), values(), entries(), or the directory itself as an async iterable.
* Each method returns NativeFileSystemDirectoryIterator, aka {`AsyncIterableIterator<FileSystemHandle>`}
* Loop over the iterator with a function resemling the following to get certain results, depending on the method, for every item in the directory. 

```javascript
/// Extracting array of FileSystemHandles from the async iterator pulled from keys(), values(), or entries()
async function toArray(asyncIterator){
    const array = [];
    for await(const fileSystemhandle of asyncIterator) {
        array.push(fileSystemhandle);
    }
    return array;
}
```

---


## Data

```javascript
// Example
kind: "directory"
name: "chromium-fs-api-examples-ts"
```
---
## Methods

### **.keys()** 
Returns a string-key for each of the drectory children from the iterator, 
which is just the name of the folder, one for every handle/child.

```javascript
// Example
[
    "filesystem_api_tests",
    "chromium-fs-api-examples-ts"
]
```
---
### **.values()** 
Returns an iterator of the selected directories children. Which would be a FileSystemFileHandle or FileSystemDirectoryHandle  <br />
for each of the children, from the iterator.  <br />

Each child will contain `kind/name` values, and also all file or directory `methods` -since each child is also a FileSystemHandle.
So each can be used to access a file or traverse deeper into more directories.

```javascript
// Example
[
    {
        kind: "directory",
        name: "my-example-directory"
    },
    {
        kind: "file",
        name: "pic-example.png"
    }
]
```
---
### **.entries()**
Returns an item for each of the directory children from the iterator. <br />
Each item contains an array of 2 items.<br />
`Item 0` is just a string of the name of the child file/folder, <br />
and `Item 1` is a FileSystemHandle of that child. <br />
Containing the same two data properties `kind/name` again, and all file or directory methods 
-since it is a FileSystemHandle.
So, again, you can use it to access a file or traverse deeper itno more directories

```javascript
// Example
[
    [
        "package.json",
        {
            kind: "file",
            name: "package.json"
        }
    ],
    [
        "src",
        {
            kind: "directory",
            name: "src"
        }
    ],
]
```


### Using no method
You can point your array-iterator loop directly at the directory handle and get the same result as using the entries() function on the handle.


[test](/docs/mdx)