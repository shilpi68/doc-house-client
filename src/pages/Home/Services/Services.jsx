import servicesimg from "../../../assets/doctorFinger.png"

const Services = () => {
    return (
        <div className="flex mt-10 ">
            <div className="flex-1">
                <img src={servicesimg} alt="" />
            </div>
            <div className="flex-1 ml-12">
                <h2 className="text-2xl font-semibold">Electro  Gastrology Therapy</h2>
                <p className="text-xl font-thin">Sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem
                    accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae
                    ab illo inve ntore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                    Sed ut perspiciatis unde omnis iste natus error </p>
                    <br />
                <p className="text-xl font-thin">Sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inve ntore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="join join-vertical lg:join-horizontal mt-7">
                    <button className="btn bg-orange-200 hover:bg-orange-500 join-item">Cavity Protection</button>
                    <button className="btn bg-orange-200 hover:bg-orange-500 join-item">Cosmetic Dentisty</button>
                    <button className="btn bg-orange-200 hover:bg-orange-500 join-item">Oral Surgery</button>
                </div>
              <div>
              <button  className=" mt-9 btn btn-outline btn-warning">More Details</button>
              </div>
            </div>

        </div>
    );
};

export default Services;