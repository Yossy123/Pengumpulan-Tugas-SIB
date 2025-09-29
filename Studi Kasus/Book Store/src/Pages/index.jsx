import Footer from "../component/shared/Footer/index.jsx";
import Header from "../component/shared/Header.jsx";
import Hero from "../component/shared/Hero/index.jsx";
import ProductList from "../component/shared/ProductList/index.jsx";

export default function Home() {
    return(
        <>
        <Header />
        <Hero />
        <ProductList />
        <Footer />
        </>
    );
}