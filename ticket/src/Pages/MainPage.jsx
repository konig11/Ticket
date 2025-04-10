// src/pages/MainPage.jsx
import HeroSection from '../components/MainPage/HeroSection';
import FeaturedProducts from '../components/MainPage/FeaturedProducts';
import CallToAction from '../components/MainPage/CallToAction';

function MainPage() {
    return (
        <div>
            <HeroSection />
            <FeaturedProducts />
            <CallToAction />
        </div>
    );
}

export default MainPage;