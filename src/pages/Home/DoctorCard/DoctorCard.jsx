import { useEffect, useState } from "react";
import SectionTitle from "../../../comoponent/SectionTitle/SectionTitle";
import Card from "./Card";


const DoctorCard = () => {
    const [card, SetCard] = useState([])
    useEffect(() =>{
        fetch("card.json")
        .then(res => res.json())
        .then(data => SetCard(data))
        console.log(card.length)
    },[card.length])
    return (
        <section>
            <SectionTitle
            heading={"Emergency Medicine Specialists"}
            subHeading={"Our Expert Doctors"}
            ></SectionTitle>
           <div className="gap-6 mt-5  grid grid-cols-1 md:grid-cols-2 ">
           {
                card.map(cards =><Card key={cards.id} cards={cards}></Card>)
            }
           </div>
            
        </section>
    );
};

export default DoctorCard;