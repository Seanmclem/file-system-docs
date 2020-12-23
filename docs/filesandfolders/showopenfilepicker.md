---
id: showopenfilepicker
title: Opening a folder
sidebar_label: ShowOpenFilePicker
slug: /
---

## ShowOpenFilePicker

>The entry point to the File System Access API is window.showOpenFilePicker(). When called, it shows a file picker dialog box, and prompts the user to select a file. After they select a file, the API returns an array of [file handles](/docs/filesandfolders/filesystemfilehandle). 

>An optional options parameter lets you influence the behavior of the file picker, for example, by allowing the user to select multiple files, or directories, or different file types. Without any options specified, the file picker allows the user to select a single file. This is perfect for a text editor.

>Once the user selects a file, showOpenFilePicker() returns an array of handles, in this case a one-element array with one [FileSystemFileHandle](/docs/filesandfolders/filesystemfilehandle) that contains the properties and methods needed to interact with the file.

> Ref https://web.dev/file-system-access/#opening-a-directory-and-enumerating-its-contents

[test](/docs/mdx)