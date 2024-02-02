import React, { useEffect, useState } from "react";
import { FaExpandAlt } from "react-icons/fa";
import Editor from "@monaco-editor/react";
import { BsArrowsCollapseVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
const TextEditor = (props) => {
  const { file, setHtml, setCss, setJs, setPhp,setFiles ,files,html,css,js,php} = props;
  const [expand, handleExpand] = useState(true);
  const [parentValue,setParentValue] = useState()
  useEffect(()=>{
    switch (file) {
        case "html":
            setParentValue(html);
          break;
        case "css":
            setParentValue(css);
          break;
        case "javascript":
            setParentValue(js);
          break;
        case "php":
            setParentValue(php);
          break;
        default:
          console.log("invalidFile");
      }
  })
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
  function handleChangeFile(f){
    let filtered = files.filter(k=>k!==f)
    setFiles(filtered)
  }
  
  return (
    <div className={` ${expand ? "flexy" : "coll"}`}>
      <div className="px-3 font-bold flex justify-between ">
        <div className="text-white">{file}</div>
        <div className="flex">
          <div onClick={() => handleExpand(!expand)}>
            {!expand ? (
              <FaExpandAlt className="bg-green-500 mx-2" />
            ) : (
              <BsArrowsCollapseVertical className="bg-blue-500 mx-2" />
            )}
          </div>
          <div className="">
            {
                file!=="html"?<IoCloseCircle onClick={()=>handleChangeFile(file)} className="bg-red-500" />:<></>
            }
          </div>
        </div>
      </div>
      <Editor
        height={"360px"}
        theme="vs-dark"
        className="w-full"
        defaultLanguage={file}
        onChange={(e) => setData(file, e)}
        value={parentValue}
      />
    </div>
  );
};

export default TextEditor;
