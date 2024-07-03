import bannerimg1 from "../../../assets/doctor1.jpeg"
import bannerimg2 from "../../../assets/doctor2.jpeg"
import bannerimg3 from "../../../assets/doctor3.jpeg"


const Banner = () => {
    return (
        <>
          
      <div className="hero bg-teal-900 min-h-screen">
  <div className="hero-content flex-col  lg:flex-row-reverse">
   <div className="flex-1 flex group">
  <img className="w-40  group-hover:scale-110 relative mb-12 h-40 " src={bannerimg1} alt="" />
  <img className="w-40  group-hover:scale-110 h-40 relative mt-20  mb-20 " src={bannerimg2} alt="" />
  <img className="w-40  group-hover:scale-110 h-40 relative mb-10 mt-6 " src={bannerimg3} alt="" />
 </div>
   
    <div className="text-white flex-1">
      <h1 className="text-5xl font-bold">Your Best Medical Help Center</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn  font-bold bg-orange-300">All Service</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Banner;