// import Header from '/components/headers/header';
// import CartDrawer from '/components/global/cart-drawer/cart'
import Nav from '/components/global/navigation/nav';
import Footer from '/components/global/footer/footer'
import Hero from '/components/sections/heros/hero-1/hero';
import Sixproductscollection from '/components/sections/six-products/six-products-collection';
import TwoCollections from '../components/sections/two-Collections/two-Collections';

const Index = () => (
    <div>
        {/* <CartDrawer/> */}
        <Nav/>
            <div className={["content-Layout container-fluid"]}>
            <Hero/>
                <div className="container">
                    <Sixproductscollection/>
                    <TwoCollections/>
                    <Sixproductscollection/>
                </div>
                <Footer/>
            </div>
        
    </div>
)
export default Index