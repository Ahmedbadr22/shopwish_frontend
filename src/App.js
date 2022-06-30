import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Wishlist from "./pages/Wishlist";
import NavHeader from "./components/navigations/nav-header/NavHeader";
import Navbar from "./components/navigations/navbar/Navbar";
import Footer from "./components/navigations/footer/Footer";

function App() {
    return (
        <>
            <NavHeader/>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/product-detail/:id" element={<ProductDetails/>}/>
                <Route exact path="/sign-in" element={<SignIn/>}/>
                <Route exact path="/sign-up" element={<SignUp/>}/>
                <Route exact path="/contact-us" element={<ContactUs/>}/>
                <Route path="*" element={<PageNotFound/>}/>
                <Route exact path="/wishlist" element={<Wishlist/>}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
