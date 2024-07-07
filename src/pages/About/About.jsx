import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div>
            <Helmet>
              <title>Doc-House | about</title>
            </Helmet>
           <div className="hero bg-teal-900 min-h-screen">
            <p className="text-white mt-12 ">Home/Doctor Profile</p>
            <h2 className="text-white font-semibold">Doctor Profilr</h2>
            </div>
        </div>
    );
};

export default About;