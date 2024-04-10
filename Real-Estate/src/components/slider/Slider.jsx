import './slider.scss' ;
import { useState } from 'react';

export default function Slider({images}){

    const [imageIndex ,setImageIndex]  = useState(null);


    const changeSlide = (direction)=>{
        if(direction ==="left"){
          if(imageIndex === 0){
           setImageIndex(images.lengt-1)
          }else{
            setImageIndex(imageIndex-1)
          }
        }else{
            if(imageIndex === images.lengt-1){
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex+1)
            }
        }
    }

    return (
        <div className="slider">
            { imageIndex != null && (
            <div className="fullSlider">
              <div className="arrow" onClick={()=>direction("left")}>  
                <img src="./arrow.png " alt="leftarrow" /> 
              </div>
              <div className="imgContainer"> 
                <img src={images[0]} alt="property image" />
              </div>
              <div className="arrow" onClick={()=>direction("right")}>
              <img src="./arrow.png " className="right"alt="rightarrow" />
              </div>
              <div className="close" onClick={()=>setImageIndex(null)}>X</div>
            </div>)}
            <div className="bigImage">
            <img src={images[imageIndex]} alt="" onClick={()=>setImageIndex(0)} />
            </div>
            
            <div className="smallImages">
               {images.slice(1).map((image,index)=>{
                <img src={image} alt='' key={index} onClick={()=>setImageIndex(index+1)} />
               })}
            </div>
        </div>
    )
}