import {useState} from "react"
import Setting from "./Setting"
import {ArrowLeft,ToggleLeft,ToggleRight,Eye} from "phosphor-react"

function Security(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Setting/>:
				<div className="security">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h1>Security</h1>
						</div>
					</div>
					<div className="setting-mid">
						<p>Face ID</p>
						<ToggleRight size={30} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>Remember me</p>
						<ToggleRight size={30} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>Touch ID</p>
						<ToggleLeft size={30} color="#9098a1" weight="fill" />
					</div>
					<button className="nxt">Change Password</button>
					<button className="nxt">Change PIN</button>
				</div>
			}
		</div>
		)
}

export default Security;