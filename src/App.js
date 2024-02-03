import { useEffect, useState } from "react";
import "./App.css";
import TextEditor from "./components/TextEditor";
import { MdDarkMode } from "react-icons/md";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [files, setFiles] = useState(["html", "css"]);
  const [iframeSrc, setIframeSrc] = useState("");
  const [dark,setDark] = useState(true)
  const options = ["html", "css", "javascript"];
  const btn =
    "font-bold text-white cursor-pointer mx-1 w-[120px] my-auto py-1 bg-purple-700 rounded-lg text-center";
  const darkMode = " text-black bg-white absolute right-[5px] top-[5px] h-[30px] w-[30px] rounded-full "
  const lightMode = " bg-black text-white absolute right-[5px] top-[5px] h-[30px] w-[30px] rounded-full "
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIframeSrc(`<html><body>
      <style>${css}</style>
      ${html}
      
      <script>${js}</script>
      </body>
      
      </html>`);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  function handleFileAdd(k) {
    setFiles([...files, k]);
  }
  return (
    <div className="w-full min-h-100vh bg-black">
      <header className="flex h-[40px] w-full bg-zinc-900">
        {options.map((k) =>
          !files.includes(k) ? (
            <div key={k} onClick={() => handleFileAdd(k)} className={btn}>
              +add {k}
            </div>
          ) : (
            ""
          )
        )}

        <div className="">
          <MdDarkMode onClick={()=>setDark(!dark)} className={ dark?darkMode:lightMode} />
        </div>
      </header>
      <div className="flex overflow-auto b">
        {files.map((file) => (
          <TextEditor
            key={file}
            file={file}
            html={html}
            setHtml={setHtml}
            css={css}
            setCss={setCss}
            js={js}
            setJs={setJs}
            setFiles={setFiles}
            files={files}
            dark={dark}
          />
        ))}
      </div>

      <iframe
        srcDoc={iframeSrc}
        className="overflow-y-auto h-[450px] w-full bg-white"
        title="HTMLRENDER"
      ></iframe>
    </div>
  );
}

export default App;
