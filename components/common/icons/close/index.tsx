



interface propsI{
    color:string;
    size?:string;
    [key:string]:any;
}

const Close = ({color,size,...rest}:propsI)=>{
    return(
        <div {...rest} tabIndex={0}>
            <svg  fill={color} version="1.1" xmlns="http://www.w3.org/2000/svg"  height={!size?"24":size} width={!size?"24":size} viewBox="0 0 24 24"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
        </div>
    )
}

export default Close;