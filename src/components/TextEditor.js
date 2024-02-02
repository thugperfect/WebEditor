import React, { useState } from "react";
import { FaExpandAlt } from "react-icons/fa";
import Editor from "@monaco-editor/react";
const TextEditor = (props) => {
  const { file,setHtml,setCss,setJs,setPhp } = props;
  const [expand, handleExpand] = useState(true);
  function setData(file, e) {
    switch (file) {
      case "html":
        setHtml(e);
        break;
      case "css":
        setCss(e);
        break;
      case "javascript":
        setJs(e);
        break;
      case "php":
        setPhp(e);
        break;
      default:
        console.log("invalidFile");
    }
  }
  return (
    <div className={` ${ expand ? "flexy" : "coll"}`}>
      <div className="px-3 font-bold flex justify-between ">
        <div className="text-white">{file}</div>
        <div onClick={() => handleExpand(!expand)}>
          <FaExpandAlt className="bg-red-500" />
        </div>
      </div>
      <Editor
        height={"360px"}
        theme="vs-dark"
        defaultLanguage={file}
        onChange={(e) => setData(file, e)}
      />
    </div>
  );
};

export default TextEditor;
