import Image from "next/image"



const sponsorsLogo = [
 "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg",
 "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg",
 "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg",
 "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg",
 "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"  
]
const Sponsors = ()=>{
  return(
    <section className="container container-primary-px" tabIndex={-1}>
        <div className="flex items-center justify-center  gap-[3vw] py-[2.5rem] flex-wrap border-b-[1px]  sm:flex-col sm:gap-[1rem]">
          <span className="text-third uppercase text-[0.80rem] font-semibold tracking-[0.2em] ">
            as seen in:
          </span>
        <div className="flex items-center gap-[3vw] sm:justify-center sm:gap-[.8rem] sm:flex-wrap ">
        {sponsorsLogo.map((imgSrc,idx)=>(
            <Image src={imgSrc} key={idx} alt="sponsor logo" height={100} width={179}/>   
            ))}
        </div>
            </div>
    </section>
  )
}

export default Sponsors