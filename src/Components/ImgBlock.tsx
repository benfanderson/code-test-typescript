
import React, {FC, ReactElement} from 'react';
import '../App.css';
import camera from '../assets/camera.svg';
type imgProp = {
    url: string | undefined,
    captionText: string | undefined
}

const ImgBlock: FC<imgProp> =({url, captionText}): ReactElement => {
      return (
        <div className="imgBlock">
            <img className='img' src={url} alt={captionText} />
            <figcaption> <img src={camera} alt='Camera icon'/> {captionText}</figcaption>
        </div>
    )
    
};

export default ImgBlock