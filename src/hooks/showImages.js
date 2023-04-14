import { TIFFViewer } from "react-tiff";
export function toggle(JSX, state){
    return (
      <div>
        {state? JSX: null}
      </div>);
  }

export function toggle_between_jsx(JSX_1,JSX_2, state){
    return (
        <div>
            {state? JSX_1: JSX_2}
        </div>);
}

export function show_images(img_1,img_2){
    return (
      <div>
        <deiv>
          Before:
          <TIFFViewer tif={img_1} />
        </deiv>
        <div>
          After:
          <TIFFViewer tif={img_2} />
        </div>
      </div>
    );
  }