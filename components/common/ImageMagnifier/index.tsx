import * as React from "react";


interface propsI{
    children : React.ReactNode;
    imgUrl: string;
}

const ImageMagnifier = ({children,imgUrl}:propsI)=>{
    const productImgRef = React.useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;
        let image = productImgRef.current ;
        if(image === null){
         return ;
        } 
        const width = image.clientWidth;
        const height = image.clientHeight;
        const widthPercentage = (x / width) * 100;
        const heightPercentage = (y/height) * 100
        const zoomRatio = 2 ;
        if(widthPercentage <= 0 || widthPercentage >= 100 || heightPercentage <= 0 || heightPercentage >= 100){
         
         image.style.backgroundSize =  "cover" ;
         image.style.backgroundPositionX = "center"  
         image.style.backgroundPositionY = "center"
 
        }else{
            image.style.backgroundSize =  `${width * zoomRatio}px` ;
            image.style.backgroundPositionX = `${widthPercentage}%`  
            image.style.backgroundPositionY = `${heightPercentage}%`
            
        }
     }
     const handleMouseOut = ()=>{
         let image = productImgRef.current ;
         if(image===null){
          return ;
         } 
         image.style.backgroundSize =  "cover" ;
         image.style.backgroundPositionX = "center"  
         image.style.backgroundPositionY = "center"
     }
    return(
        <div style={{backgroundImage:`url(${imgUrl})`}}  className="w-full py-[16.5rem] self-start bg-cover sm:py-[10rem] xsm:py-[7rem] relative" onMouseMove={handleMouseMove} onMouseOut= {handleMouseOut} ref={productImgRef}> 
                 {children}
                 </div>
    )
}
export default ImageMagnifier ; 