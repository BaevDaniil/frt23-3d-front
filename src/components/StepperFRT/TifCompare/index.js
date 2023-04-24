import { TIFFViewer } from "react-tiff";
import './tif_compare.css'
const TifCompare = ({img_1,img_2}) => {
  
  const handleButtonClick = (e) => {
    e.preventDefault();
  }

    return(
        <div className="tif-container">
          <div className="tif-viewer">
            <div className="viewer-label">Before:</div>
            <TIFFViewer key={img_1.id} tiff={img_1.data} paginate='bottom' buttonColor='#337fd6' onClick={handleButtonClick}/>
          </div>
          <div className="tif-viewer">
            <div className="viewer-label">After:</div>
            <TIFFViewer key={img_2.id} tiff={img_2.data} paginate='bottom' buttonColor='#337fd6' onClick={handleButtonClick}/>
          </div>
        </div>
    );
}

export default TifCompare;