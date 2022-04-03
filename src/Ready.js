import {useState} from "react";
import Home from "./Home";

function Ready(){
	const [home,setHome] = useState(false)

	function onHome(){
		setHome(true)
	}

	return(
			<div>
				{
					home ?
						<Home/> :
					<div className="ready">
						<img className="people2" src="https://5.imimg.com/data5/AA/IF/TH/SELLER-1594742/download-free-bulk-whatsapp-sending-software-1000x1000.png" alt="logo"/>
						<h2>Congratulations!</h2>
						<p>Your account is ready to use</p>
						<button onClick={onHome} className="nxt">Go to Homepage</button>
					</div>
				}
			</div>
		)
}

export default Ready;