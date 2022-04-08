    import React,{useState} from "react";
    import axios from "axios";
    import { useNavigate } from "react-router-dom";




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email : email,
                password : password,
            });
            navigate('/home');

        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    } 

    return (
        <div className="hero has-background-grey-light  is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box" onSubmit={ Auth }>
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email atau Username</label>
                                        <div className="controls">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Username"
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                        <div className="controls">
                                            <input
                                                type="password"
                                                className="input"
                                                placeholder="Password"
                                                value={password} onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    
                                </div>
                                <div className="field mt-5">
                                    <div className="label">
                                        <div className="controls">
                                            <button className="button is-primary">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
<form class="box">
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" placeholder="e.g. alex@example.com"/>
    </div>
  </div>

  <div class="field">
    <label class="label">Password</label>
    <div class="control">
      <input class="input" type="password" placeholder="********"/>
    </div>
  </div>

  <button class="button is-primary">Sign in</button>
</form>