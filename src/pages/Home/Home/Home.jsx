import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import DoctorCard from "../DoctorCard/DoctorCard";
import Location from "../Location/Location";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Doc-House | Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Location></Location>
            <Testimonials></Testimonials>
            <DoctorCard></DoctorCard>
            <Contact></Contact>
        </div>
    );
};

export default Home;