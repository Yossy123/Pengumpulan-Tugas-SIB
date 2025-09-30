import Footer from "../component/shared/Footer/index.jsx";
import Header from "../component/shared/Header/index.jsx";
import BookList from "../component/shared/BookList/index.jsx";
import Hero from "../component/shared/Hero/index.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <BookList />
            <Footer />
        </>
    );
}