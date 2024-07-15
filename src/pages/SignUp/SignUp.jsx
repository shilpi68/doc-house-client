import { Helmet } from 'react-helmet-async';
import Img from '../../assets/LoginImg.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';


const SignUp = () => {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const {createuser, updateUserProfile} = useContext(AuthContext)
 const navigate = useNavigate()


  const onSubmit = data => {
    console.log(data);
    createuser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name,data.photoURL)
      .then(() =>{
          console.log('user profile info updated')
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created SuccessFully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
      })
      .catch(error =>console.log(error))
    } )
  }; 
      
  
  return (
    <div>
      <Helmet>
        <title>Doc-House | signup</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center  md:w-1/2 lg:text-left">
            <h1 className="text-2xl font-bold">Signup to Doc House</h1>
            <img src={Img} alt="" />
          </div>
          <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" required />
                {errors.name && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered" required />
                {errors.photoURL && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" required />
               {errors.email && <span className='text-red-600'>email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" {...register("password" , { required: true, minLength: 6,maxLength: 20 })} placeholder="password" className="input input-bordered" required />
                {errors.password && <span className='text-red-600'>password is required</span>}
               {errors.password?.type === 'minLength' && <p className='text-red-600'>password must be 6 characters </p>}
               {errors.password?.type === 'maxLength' && <p className='text-red-600'>password must be less 20 characters </p>}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn border-0 border-b-2 bg-slate-300 text-black   hover:bg-slate-700 hover:text-white"
                  type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center mb-4"><small>Please register at first.
              <Link to="/login" 
              className="text-sm font-medium  text-orange-700">
                Go to SIGN UP</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignUp;