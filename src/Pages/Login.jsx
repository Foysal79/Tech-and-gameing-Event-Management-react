import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContexApi/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

  const {LogIn} = useContext(AuthContext);
  const navigate = useNavigate();
    const location = useLocation();
    const handelLogin = (e) => {
      e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
       

        LogIn(email, password)
        .then(result => {
          console.log(result.user)
          toast.success('Successfully Login !')
          navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
          console.log(error)
          toast.error(error.message)

        })
    }




    return (
        <div className="hero p-4 w-full">
  <div className="hero-content flex-col w-full">
    <div className="text-center  ">
      <h1 className="text-5xl font-bold">Login</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
        
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
        <div className="form-control mt-6 gap-4">
          <button className="btn btn-primary">Login</button>
          <p > don not account? pls <Link className="text-xl  font-bold text-blue-600" to='/register' >Registrations</Link> </p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;