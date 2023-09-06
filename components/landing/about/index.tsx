import Image from "next/image";



const About = ()=>{
  return(
    <section className="container container-primary-px py-[6rem]" tabIndex={-1}>
        <div className="flex gap-[4.5rem] lg:flex-col lg:justify-center lg:items-center">
            <div className="shrink-0"> 
     <Image src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg" alt="about" width={600} height={640} />
            </div>
        <div className="flex flex-col justify-center ">
            <div>
                <h2 className="text-secondary uppercase text-[.95rem] font-semibold tracking-[0.1em] sm:text-center">
                    about us
                </h2>
                <h3 className="text-[2.3rem]  text-third font-semibold font-poppins w-[30vw] my-[1.7rem] mx-[0rem] lg:w-[100%] md:text-[1.5rem] sm:text-center">
                Selected materials designed for comfort and sustainability
                </h3>
                <p className="text-fourth text-[1.1rem] w-[71%] sm:w-[100%] sm:text-center">
                Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.
                </p>
                <button className="text-third uppercase text-[.95rem] font-semibold tracking-[0.1em] mt-[2rem] border-b-[2px] border-secondary transform-all duration-[.5s] hover:border-third hover:border-third sm:block sm:w-fit sm:mx-auto" >
                    read more
                </button>
            </div>
        </div>
        </div>

    </section>
  )
}
export default About;