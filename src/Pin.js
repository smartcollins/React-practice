import {useState} from "react";
import Interest from "./Interest";
import Home from "./Home";
import {ArrowLeft,Circle,CheckCircle} from "phosphor-react";

function Pin(){
	const [create,setCreate] = useState(false)
	const [home,setHome] = useState(false)

	function onCreate(){
		setCreate(true)
	}

	function onHome(){
		setHome(true)
	}


	return(
		<div>
			{	
				home ? 
					<Home/> :
				create ? 
					<div>
						<div className="success">
							<Interest/>
						</div>
						<div className="great">
							<div>
								<CheckCircle size={30} color="#ffffff" weight="fill" />
							</div>
							<h2>Great!</h2>
							<p>You account has been created succesfully</p>
							<button onClick={onHome} className="nxt">Go to Home</button>
						</div>
					</div> :
					<div>
						<div className="forgot-top">
							<ArrowLeft size={32} color="#2fe22c" weight="duotone"/>
							<h2>Create Your Pin</h2>
						</div>
						<p>Please remember this PIN because it will be used when you want to to up, withdraw, or donate.</p>
						<div className="create">
							<h2>Create PIN</h2>
							<Circle size={16} color="#35e01f" weight="fill" />
							<Circle size={16} color="#35e01f" weight="fill" />
							<Circle size={16} color="#35e01f" weight="fill" />
							<Circle size={16} color="#35e01f" weight="fill" />
							<Circle size={16} color="#E6E6E6" weight="fill" />
							<Circle size={16} color="#E6E6E6" weight="fill" />
						</div>
						<button onClick={onCreate} className="nxt">Create PIN</button>
					</div>
			}
		</div>
		)
}

export default Pin;