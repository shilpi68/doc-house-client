import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Location = () => {
    return (
        <div>
            <div className="stats  shadow mt-10  hover:bg-orange-400 flex items-center text-center flex-col md:flex-row-reverse">
  <div className="stat place-items-center flex">
    <div>
        <CiClock2 className="text-2xl"></CiClock2>
    </div>
    <div>
    <div className="stat-title">Opening Hours</div>
    <div >Open 9.00 am to 5.00 pm</div>
    <div className="stat-desc">Everyday</div>
    </div>
  </div>

  <div className="stat place-items-center flex">
    <div>
        <IoLocationOutline className="text-2xl"></IoLocationOutline>
    </div>
    <div>
    <div className="stat-title">Our Locations</div>
    <div >Dhanmondi 18,Dhaka</div>
    <div >1200,Bangladesh</div>
    </div>
  </div>

  <div className="stat place-items-center flex">
    <div>
      <FaPhoneAlt className="text-2xl"></FaPhoneAlt>
    </div>
   <div>
   <div className="stat-title">Contact Us</div>
    <div>+880125361200</div>
    <div className="stat-desc">+880125361200</div>
   </div>
  </div>
</div>
            
        </div>
    );
};

export default Location;