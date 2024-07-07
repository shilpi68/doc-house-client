import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


const Contact = () => {
    return (
        <div className="mt-10 mb-10 flex  bg-teal-900 min-h-screen text-white">
            <div className="flex-1 px-10 pt-32  m-6 ">
                <h1 className="mb-3 font-bold text-2xl">Contact With Us</h1>
                <p className="mb-3">Expertscape
                    super-specialized medical expertise <br />
                    among millions of physicians worldwide,<br />
                    then shares the results with you.</p>
                <div className="flex mb-3">
                    <div> <FaPhoneAlt className="text-2xl"></FaPhoneAlt></div>
                    <div className="ml-4">+880135656565</div>
                </div>
                <div className="flex">
                    <div><IoLocationOutline className="text-2xl"></IoLocationOutline></div>
                    <div className="ml-4">Dhanmondi,Dhaka,Bangladesh</div>
                </div>
            </div>
            <div className="flex-1 px-10 pt-32">
                <from className=" flex-row md:flex gap-5 " >
                    <div>
                        <label className="label ">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text text-white">Mobile number</span>
                        </label>
                        <input type="number" placeholder="Mobile number" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text text-white">Date</span>
                        </label>
                        <input type="Date" placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text text-white">Doctor name</span>
                        </label>
                        <input type="text" placeholder="Doctor name" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text text-white">Time</span>
                        </label>
                        <input type="time" placeholder="Time" className="input input-bordered" required />


                    </div>

                </from>
                <div className="form-control mt-6 ">
                        <button className="btn btn-block bg-orange-300 hover:bg-orange-600">Login</button>
                    </div>
            </div>

        </div>
    );
};

export default Contact;