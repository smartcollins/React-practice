import {useState} from "react"
import Donators from "./Donators"
import {CircleWavyCheck,ArrowLeft,DotsThreeVertical,House,ChatText,UserPlus} from "phosphor-react"

function Info(){
	const [back,setBack] = useState(false)
	function onBack(){
		setBack(true)
	}
	return(
		<div>
			{
				back ?
				<Donators/> :
				<div>
					<div className="notification-top">
						<div className="back">
							<ArrowLeft size={30} color="#35e01f" onClick={onBack} />
							<h1>Profile</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={20} color="#35e01f" />
						</button>
					</div>
					<div>
						<button></button>
						<div>
							<h3>Healthy Home</h3>
							<CircleWavyCheck size={20} color="#35e01f"/>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Info;