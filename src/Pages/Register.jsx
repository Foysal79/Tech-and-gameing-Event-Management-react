import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContexApi/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


const Register = () => {
  const { createUser, GoogleAccount } = useContext(AuthContext)


    const handelRegister = (e) => {
      e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, img, email, password);
        if(password.length < 6)
        {
          toast.error("your password should have at lest 6 character");
          return;

        }
        else if(!/[A-Z]/.test(password))
        {
          toast.error("your password should have at lest one uppercase");
          return;
        }
        else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password))
        {
          toast.error("your password should have at lest one spacial character");
          return;
        }
        createUser(email, password)
        .then(result => {
          toast.success('Successfully Registrations')
          console.log(result.user);
          updateProfile(auth.currentUser, {
            displayName:name,
             photoURL: img
          })
          .then(result => {
            console.log(result.user);
          })
          .catch(error => {
            console.log(error.message);
          })
        })
        .catch(error => {
          toast.error(error.message)

          
        })
    }




    return (
        <div className="hero p-4 w-full">
  <div className="hero-content flex-col w-full">
    <div className="text-center  ">
      <h1 className="text-5xl font-bold">Registrations</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="img" type="text" placeholder="photo" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 gap-5">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-500 ">Registration</button>
          <p> Already Registrations? pls <Link className="text-xl  font-bold text-blue-600" to='/login' >Login</Link> </p>
          <div className="flex justify-center">
             <FaGoogle onClick={() => GoogleAccount()} className="text-4xl"></FaGoogle>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;