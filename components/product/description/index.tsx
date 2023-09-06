
interface propsI{
  description : string;
}
const Description = ({description}:propsI)=>{
  return(
    <p className="text-fourth text-[1.2rem] leading-8 pt-[1.1rem]">
      {description}
    </p>
  )
}



export default Description;