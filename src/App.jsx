// import marked from "marked";
import { marked } from "marked";
import { useState } from "react";
import "./App.css";
import CreateEditorPage from "./Components/Editor";
import CreatePreviewPage from "./Components/Preview";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [editorFullScreen, setEditorFullScreen] = useState(false);
  const [previewFullScreen, setPreviewFullScreen] = useState(false);

  const convertToHtml = (markdownText) => {
    const htmlText = marked(markdownText);
     return { __html: htmlText };
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const htmlOutput = convertToHtml(e.target.value);
    setOutputValue(htmlOutput.__html);
  };

  const toggleFullScreen = (component) => {
    if (component === "CreateEditorPage") {
      setEditorFullScreen(!editorFullScreen);
    } else if (component === "CreatePreviewPage") {
      setPreviewFullScreen(!previewFullScreen);
    }
  };

  return (
    <div>
      <CreateEditorPage
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        toggleFullScreen={() => toggleFullScreen("CreateEditorPage")}
        isFullScreen={editorFullScreen}
        isHidden={previewFullScreen}
      />
      <CreatePreviewPage
        inputValue={inputValue}
        toggleFullScreen={() => toggleFullScreen("CreatePreviewPage")}
        isFullScreen={previewFullScreen}
        isHidden={editorFullScreen}
        outputValue={outputValue}
      />
    </div>
  );
}

export default App;
