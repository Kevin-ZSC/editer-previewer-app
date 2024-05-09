import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function CreatePreviewPage({  toggleFullScreen, isFullScreen, isHidden,outputValue}) {
  return (
    <div className={`preview-container ${isFullScreen ? 'fullscreen' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="header">
        <div className="icon-name">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <p>Previewer</p>
        </div>
        <div className="maximize">
          <FontAwesomeIcon icon={faMaximize} onClick={toggleFullScreen}/>
        </div>
      </div>
      <textarea id="preview" value={outputValue} readOnly className={`preview ${isFullScreen  ? 'fullscreen' : ''}`}></textarea>
    </div>
  );
}
CreatePreviewPage.propTypes = {
  
  outputValue: PropTypes.string.isRequired,
    toggleFullScreen: PropTypes.func.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
};
export default CreatePreviewPage;
