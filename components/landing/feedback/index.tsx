import Image from "next/image";

const feedbacks = [
    {
        text:"Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer",
        rating:5,
        review : {
            name : "julia keys",
            src : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg"
        }
    },
    {
        text:"Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer",
        rating:5,
        review : {
            name : "luis adrian",
            src : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-2.jpg"
        }
    },
    {
        text:"Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer",
        rating:5,
        review : {
            name : "maria anna",
            src : "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-1.jpg"
        }
    }
]
const Feedback = ()=>{
 return(
    <section className="container container-primary-px py-[6rem]">
         <h2 className="h2-primary">
            <span className="capitalize">our costumer</span> speak for us
         </h2>
        <div className="grid grid-cols-auto-fit gap-[1.5rem] pt-[3rem]">
        {
            feedbacks.map((feedback,idx)=>(
                <div key={idx} className="bg-fifth px-[1.5rem] py-[1.8rem] border-[1px]   border-[#e4e6e7]">
                        {new Array(5).fill(undefined).map((_,idx)=>(
                             <span key={idx} className={`fa fa-star  ${feedback.rating >= idx+1 ? `text-secondary` : `text-fourth`  } `}></span>  
                         ))}
                         <p className="text-[1.12rem] text-third font-semibold py-[1.8rem]">
                    
                         &ldquo;{feedback.text}&rdquo; 
                         </p>
                          <div className="flex items-center gap-[1rem]">
                           <div className="rounded-full overflow-hidden ">
                             <Image src={feedback.review.src} alt={`${feedback.review.name} profile image`} height={40} width={40} layout="fixed" className="rounded-full" objectFit="cover"/>
                            </div>            
                            <p className="uppercase font-inter text-[0.9rem] text-primary tracking-widest">
                            {feedback.review.name}
                            </p>
                          </div>   
                </div>
            ))
        }
        </div>
        <p className="text-fourth text-center pt-[3rem] text-[1.1rem] font-semibold">
        4.8 average rating from 1814 reviews
        </p>
    </section>
 )
}

export default Feedback;
