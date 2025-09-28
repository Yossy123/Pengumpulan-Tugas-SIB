import { Footer } from "../src/components/shared/Footer";
import { Header } from "../src/components/shared/Header";
import { Hero } from "../src/components/shared/Hero";
import ProductList from "../src/components/shared/ProductList";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <ProductList />
            <Footer />
        </>
    );
}
