import {AppleLogo, GoogleLogo, FacebookLogo  } from "phosphor-react";
import {useState} from "react";
import SignUp2 from "./SignUp2";
import SignIn from "./SignIn"


function SignUp(){
	const [signUp,setSignUp] = useState(false)
	const [signIn,setSignIn] = useState(false)

	function onSignUp(){
		setSignUp(true)
	}

	function onSignIn(){
		setSignIn(true)
	}

	return(
			<div>
				{
					signUp ?
						<SignUp2/> :
					signIn ? 
						<SignIn/> :
					<div className="signup">
						<img className="people2" src="https://images.ctfassets.net/ly2f59p4unnn/34lOB5oA2JdeeXYQ95kSai/38e3bca4afe952da5392336dd30d18a5/undraw_welcome_cats_thqn.png" alt="logo"/>
						<h2>Let's you in </h2>	
						<div className="signup-btn">
							<button>
								<FacebookLogo size={20} color="#0d1be3" weight="fill" />
								<p className="logo-text">Facebook</p>
							</button>
							<button>
								<GoogleLogo size={20} color="#ec0909" weight="fill" />
								<p className="logo-text">Google</p>
							</button>
							<button>
								<AppleLogo size={20} color="#3f2727" weight="fill" />
								<p className="logo-text">Apple</p>
							</button>
							<p>Or</p>
							<button onClick={onSignIn} className="sign-in">Sign in With Password</button>	
							<div className="no-acc">
								<p>don't have an account ? <span onClick={onSignUp}>Sign Up</span></p>
							</div>
						</div>
					</div>
				}
			</div>
		)
}

export default SignUp;