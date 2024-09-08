import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"; 


export function UserLogin(){


    const [users, setUsers] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies('userid')
    let navigate = useNavigate();

    useEffect(()=>{

        axios.get('https://honbeed.onrender.com/users')
        .then(response=>{
             setUsers(response.data);
        });

    },[]);

  const formik = useFormik({
       initialValues: {
           UserId: '',
           Password: ''
       },
       onSubmit : (formdata)=>{
            var userdetails = users.find(user=> user.UserId===formdata.UserId);
            if(userdetails.Password===formdata.Password) {
                setCookie('userid',formdata.UserId);
                navigate('/product');
                window.location.reload();
            } else {
                navigate('/inv');
            }
       }
  })

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={formik.handleSubmit} className="bg-light w-25 p-2">
                    <h2>User Login</h2>
                    <dl>
                        <dt>User Id</dt>
                        <dd> <input type="text" className="w-100" onChange={formik.handleChange} name="UserId"/> </dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="w-100" onChange={formik.handleChange} name="Password" /></dd>
                    </dl>
                    <button className="btn btn-warning w-100">Login</button>
                    <Link to='/register' className="btn btn-primary w-100">Sign up</Link>
            </form>
        </div>
    )
}