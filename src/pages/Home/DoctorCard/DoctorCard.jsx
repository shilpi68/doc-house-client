import SectionTitle from "../../../comoponent/SectionTitle/SectionTitle";
import useCard from "../../../hooks/useCard";
import Card from "./Card";


const DoctorCard = () => {
    const [card] = useCard()
    
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