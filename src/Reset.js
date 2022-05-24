import {useState} from "react";
import {ArrowLeft} from "phosphor-react";
import Reset2 from "./Reset2"

function Reset(){
	const [verify,setVerify] = useState(false);

	function onVerify(){
		setVerify(true)
	}

	return(
		<div>
			{
				verify ?
					<Reset2/> :
				<div className="resend">
					<div className="back">
						<ArrowLeft size={32} color="#2fe22c" weight="duotone" />
						<h2>Forgot password</h2>
					</div>
					<p>Code has been sent to +6262*****39</p>
					<div className="code-slot">
						<button>4</button>
						<button>2</button>
						<button>7</button>
						<button>9</button>
						<p>Resend code in <span>56</span> s</p>
					</div>
					<div className="forgot-end">
						<button className="nxt" onClick={onVerify}>Verify</button>
					</div>
				</div>
			}
		</div>
		)
}

export default Reset;