import { useEffect, useState } from "react";

import "./App.css";
import TextEditor from "./components/TextEditor";
function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [php, setPhp] = useState("");
  const [files, setFiles] = useState(["html", "css", "javascript"]);
  const [iframeSrc, setIframeSrc] = useState("");
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

  
  return (
    <div className="w-full min-h-100vh bg-black">
      <header>
        <div className="add">+add</div>
      </header>
      <div className="flex">
        {files.map((file) => (
          <TextEditor
            key={file}
            file={file}
            setHtml={setHtml}
            setCss={setCss}
            setJs={setJs}
            setPhp={setPhp}
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
