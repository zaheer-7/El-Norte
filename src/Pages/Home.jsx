import AdditionalServices from "../Components/AdditionalServices";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChoose";

export default function Home () {
    return (
        <div className=" overflow-x-hidden h-screen overflow-y-scroll">
        <Hero/>
        <Services/>
        <AdditionalServices/>
        <WhyChooseUs/>
        <Footer/>
        </div>
    )
}