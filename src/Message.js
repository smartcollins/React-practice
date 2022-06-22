import {useState} from "react"
import Inbox from "./Inbox"
function Message(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Inbox/>:
				<div>qwerftgrfhv</div>
			}
		</div>
		)
}

export default Message;
