import {useState} from "react"
import Help from "./Help"
import {ArrowLeft} from "phosphor-react"

function Terms(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Help/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={50} color="#1EBA60" onClick={onBack} />
							<h1>Terms</h1>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Terms;