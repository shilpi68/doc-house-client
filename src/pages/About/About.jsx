import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCard from "../../hooks/useCard";
import AboutTab from "./AboutTab/AboutTab";
import { useParams } from "react-router-dom";



const About = () => {

    const categories = ["Dr. John Smith","Dr. Emily Johnson","Dr. Michael Brown","Dr. Sarah Davis","Dr. James Wilson"]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [card] = useCard()
    const [tabIndex, setTabIndex] = useState(initialIndex);
    


    const DrJohn = card.filter(item =>item.name === "Dr. John Smith")
    const DrEmily = card.filter(item =>item.name === "Dr. Emily Johnson")
    const DrMichael = card.filter(item =>item.name === "Dr. Michael Brown")
    const DrSarah = card.filter(item =>item.name === "Dr. Sarah Davis")
    const DrJames = card.filter(item =>item.name === "Dr. James Wilson")

    return (
        <div>
            <Helmet>
                <title>Doc-House | about</title>
            </Helmet>
            <div className="hero bg-teal-900 min-h-screen">
                <p className="text-white mt-12 ">Home/Doctor Profile</p>
                <h2 className="text-white font-semibold">Doctor Profilr</h2>
            </div>
           <div className="ml-32 mt-10">
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Dr.John-Smith</Tab>
                    <Tab>Dr.Emily-Johnson</Tab>
                    <Tab>Dr.Michael-Brown</Tab>
                    <Tab>Dr.Sarah-Davis</Tab>
                    <Tab>Dr.James-Wilson</Tab>
                </TabList>
                <TabPanel>
                 <AboutTab items={DrJohn}></AboutTab>
                    </TabPanel>
                <TabPanel>
                    <AboutTab items={DrEmily}></AboutTab>
                </TabPanel>
                <TabPanel>
                <AboutTab items={DrMichael}></AboutTab>
                </TabPanel>
                <TabPanel>
                <AboutTab items={ DrSarah}></AboutTab>
                </TabPanel>
                <TabPanel>
                <AboutTab items={DrJames}></AboutTab>
                </TabPanel>
            </Tabs>
            
           </div>
        </div>
    );
};

export default About;