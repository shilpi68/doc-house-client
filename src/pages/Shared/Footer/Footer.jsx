import logo from "../../../assets/docHouseIcons.jpeg"

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-base-200 text-base-content p-10">
                <aside>
                  <div className="flex">
                 <div>
                 <img className="w-20 rounded-3xl h-20 mr-3" src={logo} alt="" />
                 </div>
                  <div>
                  <h1 className="font-bold text-2xl"><span className="text-orange-300">Doc</span> House</h1>
                  </div>
                  </div>
                   <div>
                   <p>
                    The DOC is active and expansive.<br/>
                     Students completed construction Cabin,
                    <br/> the  largest student  in the DOC history.
                     </p>
                     <button className="btn btn-outline mt-4 btn-warning">Appointment</button>
                   </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Doctors</a>
                    <a className="link link-hover">Departments</a>
                    <a className="link link-hover">Online Payment</a>
                    <a className="link link-hover">My Account</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Doc House Services</h6>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Diagnosis clinic</a>
                    <a className="link link-hover">Cardiac Clinic</a>
                    <a className="link link-hover">Laboratory Analysis</a>
                    <a className="link link-hover">Gynecological Clinic</a>
                    <a className="link link-hover">personal Counseling</a>
                    <a className="link link-hover">Dental Clinic</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Working Hours</h6>
                    <a className="link link-hover">Monday - 10 am to 8 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 8 pm</a>
                    <a className="link link-hover">Wednesday - 10 am to 8 pm</a>
                    <a className="link link-hover">Thursday - 10 am to 8 pm</a>
                    <a className="link link-hover">Friday - 10 am to 8 pm</a>
                    <a className="link link-hover">Saturday - 10 am to 8 pm</a>
                    <a className="link link-hover">Sunday - 10 am to 8 pm</a>
                </nav>

            </div>
            <hr />
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by  Doc House Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;