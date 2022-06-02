import {useState} from "react"
import Share from "./Share"
import {ArrowLeft,MagnifyingGlass} from "phosphor-react"

function Donators(){
	const [back,setBack] = useState(false)
	function onBack(){
		setBack(true)
	}
	return(
		<div>
			{
				back ?
				<Share/> :
				<div className="donators-main">
					<div className="notification-top">
						<div className="back">
							<ArrowLeft size={30} color="#35e01f" onClick={onBack} />
							<h1>3,438 Donators</h1>
						</div>
						<button className="dot3">
							<MagnifyingGlass size={20} color="#35e01f" />
						</button>
					</div>
				</div>
			}
		</div>
		)
}

export default Donators;