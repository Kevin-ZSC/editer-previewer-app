import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";


function CreateEditorPage({ inputValue, handleInputChange,toggleFullScreen,isFullScreen, isHidden}) {
  

  return (
    <div className={`editor-container ${isFullScreen  ? 'fullscreen' : ''} ${isHidden ? 'hidden': ''}`}>
      <div className="header">
        <div className="icon-name">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <p>Editor</p>
        </div>
        <div className="maximize">
          <FontAwesomeIcon icon={faMaximize} onClick={toggleFullScreen}/>
        </div>
      </div>
      <textarea
        id="editor"
        value={inputValue}
        onChange={handleInputChange}
        className={`editor ${isFullScreen  ? 'fullscreen' : ''}`}
      ></textarea>
    </div>
  );
}

CreateEditorPage.propTypes = {
 
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  toggleFullScreen: PropTypes.func.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
export default CreateEditorPage;
