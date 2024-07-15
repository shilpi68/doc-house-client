import DocterVejitCard from "../../DocterVejitCard/DocterVejitCard";


const AboutTab = ({items}) => {
    return (
        <div className="mt-20 mb-20">
                  {
                        items.map(cards =><DocterVejitCard
                        key={cards._id}
                        cards={cards}
                        ></DocterVejitCard>)
                    }
                  </div>
    );
};

export default AboutTab;