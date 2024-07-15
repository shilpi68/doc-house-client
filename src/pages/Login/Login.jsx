import { Helmet } from "react-helmet-async";
import Img from '../../assets/LoginImg.jpeg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {

  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"
console.log('state in the location login page',location.state)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Login SuccessFull",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from ,{replace:true})
      })
  }
  return (
    <div>
      <Helmet>
        <title>Doc-House | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center  md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login  to Doc House</h1>
            <img src={Img} alt="" />
          </div>
          <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn border-0 border-b-2 bg-slate-300 hover:bg-slate-700 text-white"
                  type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center mb-4"><small>New Here ? 
              <Link to="/signup" 
              className="text-sm font-medium  text-orange-700">
                Create an account</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;