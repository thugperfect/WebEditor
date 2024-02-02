import { useEffect, useState } from "react";
import "./App.css";
import TextEditor from "./components/TextEditor";
function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [php, setPhp] = useState("");
  const [files, setFiles] = useState(["html", "css"]);
  const [iframeSrc, setIframeSrc] = useState("");
  const options = ["html", "css", "javascript", "php"];
  const btn = "font-bold text-white cursor-pointer mx-1 w-[120px] m-2 bg-purple-700 rounded-lg text-center"
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIframeSrc(`<html><body>
      <style>${css}</style>
      ${html}
      <?php 
      ${php} 
      ?>
      <script>${js}</script>
      </body></html>`);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, js, php]);
  function handleFileAdd(k) {
    setFiles([...files, k]);
  }
  return (
    <div className="w-full min-h-100vh bg-black">
      <header className="flex mx-3">
        {options.map((k) =>
          !files.includes(k) ? (
            <div
              key={k}
              onClick={() => handleFileAdd(k)}
              className={btn}
            >
              +add {k}
            </div>
          ) : (
            ""
          )
        )}
      </header>
      <div className="flex overflow-auto ">
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
            php={php}
            setPhp={setPhp}
            setFiles={setFiles}
            files={files}
          />
        ))}
      </div>

      <iframe
        srcDoc={iframeSrc}
        className="overflow-y-auto h-[330px] w-full bg-white"
        title="HTMLRENDER"
      ></iframe>
    </div>
  );
}

export default App;
