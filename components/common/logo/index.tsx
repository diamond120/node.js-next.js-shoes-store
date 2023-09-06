import Image from "next/image";


interface PropsI{
     width:number;
     height:number;
     className?:string;
     [key:string]:any;
}

const Logo = ({width,height,className,...rest}:PropsI)=>{
   return(
    <div className={className}>
     <Image  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg" alt="logo" width={width} height={height} {...rest}/>
</div>
   )
}


export default Logo ;