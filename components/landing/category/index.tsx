



const Category = ()=>{
    return(
     <section className="container container-primary-px grid grid-cols-auto-fit gap-[2.5rem] py-[6rem]">
        <div className="bg-menCat w-full flex justify-center items-center py-[13rem] bg-cover bg-center">
           <div>
            <h3 className="text-fifth font-poppins font-medium capitalize text-[2.5rem] text-center pb-[2rem]">
                men
            </h3>
    <button className="bg-transparent text-fifth border-2 border-fifth text-[0.87rem] text-center uppercase font-medium font-inter tracking-widest py-[1em] px-[2.1em] transition-all ease-out duration-[.3s] hover:bg-fifth hover:text-third focus:bg-fifth focus:text-third">
        shop men
    </button>
           </div>
        </div>
        <div className="bg-womenCat w-full flex justify-center items-center py-[13rem] bg-cover bg-center">
          <div>
       <h3 className="text-fifth font-poppins font-medium capitalize text-[2.5rem] text-center pb-[2rem]">
        women
       </h3>
       <button className="bg-transparent text-fifth border-2 border-fifth text-[0.87rem] text-center uppercase font-medium font-inter tracking-widest py-[1em] px-[2.1em] transition-all ease-out duration-[.3s] hover:bg-fifth hover:text-third focus:bg-fifth focus:text-third">
        shop women
       </button>
          </div>
        </div>
     </section>
    )
}
export default Category;