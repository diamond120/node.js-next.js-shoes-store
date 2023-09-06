import Header from "./header/header";
import Footer from "./footer/"
interface propsI{
    children : React.ReactNode ;
}

const Layout = ({children}:propsI)=>{
   
    return (
        <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
)
}
export default Layout ;