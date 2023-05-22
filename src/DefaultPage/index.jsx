import Header from "../Components/Header";
import Footer from "../Components/Footer";

function DefaultPage({ children }){
    return (<>
        <Header />
            { children }
        <Footer />
    </>)
}

export default DefaultPage;