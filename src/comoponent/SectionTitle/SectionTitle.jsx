

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mt-6 md:w-3/6 text-center mx-auto">
            <p className="uppercase  text-xl text-orange-500 font-bold">--- {subHeading} ---</p>
            <h3 className="text-lg p-2 border-y-2 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
