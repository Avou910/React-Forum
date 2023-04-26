import { signInWithGoogle } from '../services/firebase';

import './LoginPage.css';


const Login = () => {
  return (

    <div className="login-container">
        <h1>Forum</h1>
      <button className="button" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i>Sign in with Google
      </button>
    </div>
  )
}

export default Login;