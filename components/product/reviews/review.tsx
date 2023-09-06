import Image from "next/image";
import Rating from "../../common/rating";

interface propsI{
    review: any
}
const Review = ({review}:propsI)=>{
  return(
    <div>
                     <div className="flex gap-[1rem]">
                         <div className="rounded-full overflow-hidden " >
                             <Image src={review.image}  alt={`${review.name} profile image`} layout="fixed" objectFit="cover" className="rounded-full" width={60} height={60}/>
                         </div>
                     <div >
                         <div>
                             <p className="capitalize text-fourth text-[1.5rem] font-inter mb-[.5rem]">{review.name}</p>
                               
                            <Rating rating={5} className="text-[1.3rem]"/>
                         </div>
                     <p className="text-fourth text-[1.2rem] leading-8 pt-[.9rem]">
                         {review.description}
                     </p>
                     </div>
                 </div>
                 </div>
  )
}
export default Review;