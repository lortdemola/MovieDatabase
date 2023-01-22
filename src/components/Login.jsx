import './css/cont_SU.css';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";

import axios from './api/axios';
const LOGIN_URL = '/auth';



const LOGIN = (props) => { 
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
    e.preventDefault();

    
        axios.post('https://at.usermd.net/api/user/auth', {
                login: user,
                password: pwd

        })
        .then(function (response) {
            // handle success
            console.log(" ");
            const s = response.data.token.toString();
            window.localStorage.setItem('userID', s);
            window.location.href="/";
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            errRef.current.focus();
          });
       
    
}

return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (
            <section className={"center"}>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <a href="signup">Sign Up</a>
                    </span>
                </p>
            </section>
        )}
    </>
)
};
export default LOGIN;
