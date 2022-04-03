import {useState} from "react";
import { Horse, AppleLogo, GoogleLogo, FacebookLogo  } from "phosphor-react";
import SignUp2 from "./SignUp2";
import Forgot from "./Forgot";

function SignIn(){

	const [signUp,setSignUp] = useState(false)
	const [forgot,setForgot] = useState(false)
	const [form,setForm] = useState({
       email:"",
       password:"",
       password2:"",
       join: true
   })
   
   function handle(e){
       const {name,value,type,checked} = e.target
       setForm(prevForm =>{
           return {
               ...prevForm,
               [name] : type === "checkbox" ? checked : value,
               
           }
       })
   }
   console.log(form)
    function handleSubmit(event) {
        event.preventDefault()
    }    

    function onSignUp(){
    	setSignUp(true)
    }

    function onForgot(){
    	setForgot(true)
    }

	return(
			<div>
				{
					signUp ?
						<SignUp2/> :
					forgot ?
						<Forgot/> :
					<div className="SignUp2">
						<img className="people2" src="https://5.imimg.com/data5/AA/IF/TH/SELLER-1594742/download-free-bulk-whatsapp-sending-software-1000x1000.png" alt="head"/>
						<h2>We care</h2>
						<div className="form-container">
							<h2>Sign in into your account</h2>
				            <form className="form" onSubmit={handleSubmit}>
				                <input 
				                    type="email" 
				                    placeholder="Email address"
				                    className="form--input"
				                    name="email"
				                    value={form.email}
				                    onChange={handle}
				                />
				                <input 
				                    type="password" 
				                    placeholder="Password"
				                    className="form--input"
				                    name="password"
				                    value={form.password}
				                    onChange={handle}
				                />
				                <div className="form--marketing">
				                    <input
				                        id="okayToEmail"
				                        type="checkbox"
				                        name="join"
				                        checked={form.join}
				                        onChange={handle}
				                    />
				                    <label htmlFor="okayToEmail">Keep me always logged in</label>
				                </div>
				                <button className="form--submit">Sign in</button>
				            </form>
				        </div>
				        <p onClick={onForgot} className="forget">forgot password ?</p>
				        <p>Or continue with</p>
				        <div className="icons">
							<FacebookLogo size={32} color="#0d1be3" weight="fill" />
							<GoogleLogo size={32} color="#ec0909" weight="fill" />
							<AppleLogo size={32} color="#3f2727" weight="fill" />
				        </div>
				        <div className="no-acc">
							<p>Already have an account ? <span onClick={onSignUp}>Sign Up</span></p>
						</div>
					</div>
				}
			</div>
		)
}


export default SignIn;