import * as React from "react";
import Image from "next/image";
import Rating from "../../common/rating";
import AddReview from "./addReview";
import Review from "./review";


const reviews = [
    {
        name: "alex",
        image : "https://secure.gravatar.com/avatar/5a061861a1d9cd5bf192296831033b83?s=60&d=mm&r=g",
        rating : 5,
        description : "Best shoes ever. So comfortable and cool looking. And very good quality materials. Totally recommend!"
    },
    {
        name: "alex",
        image : "https://secure.gravatar.com/avatar/5a061861a1d9cd5bf192296831033b83?s=60&d=mm&r=g",
        rating : 5,
        description : "Best shoes ever. So comfortable and cool looking. And very good quality materials. Totally recommend!"
    },
    {
        name: "alex",
        image : "https://secure.gravatar.com/avatar/5a061861a1d9cd5bf192296831033b83?s=60&d=mm&r=g",
        rating : 5,
        description : "Best shoes ever. So comfortable and cool looking. And very good quality materials. Totally recommend!"
    }
 ]

const Reviews = ()=>{
    return(
        <React.Fragment>
        <div className="pt-[1.5rem] flex flex-col gap-[1.6rem]">
           {
             reviews.map((review,idx)=>(
              <Review review={review} key={idx}/>
             ))
           }
        </div>      
        <AddReview/>
        </React.Fragment>
    )
}

export default Reviews;