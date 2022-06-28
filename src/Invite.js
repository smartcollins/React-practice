import {useState} from "react"
import Setting from "./Setting"
import {ArrowLeft,Circle} from "phosphor-react"

function Invite(){
	const [back,setBack] = useState(false)
	const [invite,setInvite] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onInvite(){
		setInvite(true)
	}

	return(
		<div>
			{
				back?
				<Setting/>:
				<div className="invite">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h1>Invite Friends</h1>
						</div>
					</div>
					<div className="activity-sub">
						<div className="activity-min">
							<div className="activity-img"></div>
							<div className="activity-txt">
								<h3>Jane copper</h3>
								<p>+62-818-5551-661</p>
							</div>
						</div>
						<button
							 onClick={onInvite}
							 style={
							 	invite?
							 	{
							 		backgroundColor:"#1EBA60",
							 		color:"white",
							 		border:"none"
							 	}:
							 	{color:"#1EBA60"}
							 }
						>
							{invite?"Invited":"invite"}
						</button>
					</div>
					<div className="activity-sub">
						<div className="activity-min">
							<div className="activity-img2"></div>
							<div className="activity-txt">
								<h3>Cameron Williamson</h3>
								<p>+62-818-5551-661</p>
							</div>
						</div>
						<button
							 onClick={onInvite}
							 style={
							 	invite?
							 	{
							 		backgroundColor:"#1EBA60",
							 		color:"white",
							 		border:"none"
							 	}:
							 	{color:"#1EBA60"}
							 }
						>
							{invite?"Invited":"invite"}
						</button>
					</div>
					<div className="activity-sub">
						<div className="activity-min">
							<div className="activity-img3"></div>
							<div className="activity-txt">
								<h3>Leslie Alexander</h3>
								<p>+62-802-5221-61</p>
							</div>
						</div>
						<button
							 onClick={onInvite}
							 style={
							 	invite?
							 	{
							 		backgroundColor:"#1EBA60",
							 		color:"white",
							 		border:"none"
							 	}:
							 	{color:"#1EBA60"}
							 }
						>
							{invite?"Invited":"invite"}
						</button>
					</div>
					<div className="activity-sub">
						<div className="activity-min">
							<div className="activity-img4"></div>
							<div className="activity-txt">
								<h3>Esther Howard</h3>
								<p>+62-818-5331-61</p>
							</div>
						</div>
						<button
							 onClick={onInvite}
							 style={
							 	invite?
							 	{
							 		backgroundColor:"#1EBA60",
							 		color:"white",
							 		border:"none"
							 	}:
							 	{color:"#1EBA60"}
							 }
						>
							{invite?"Invited":"invite"}
						</button>
					</div>
					<div className="activity-sub">
						<div className="activity-min">
							<div className="activity-img5"></div>
							<div className="activity-txt">
								<h3>Savannah Nguyen</h3>
								<p>+62-818-5551-11</p>
							</div>
						</div>
						<button
							 onClick={onInvite}
							 style={
							 	invite?
							 	{
							 		backgroundColor:"#1EBA60",
							 		color:"white",
							 		border:"none"
							 	}:
							 	{color:"#1EBA60"}
							 }
						>
							{invite?"Invited":"invite"}
						</button>
					</div>
				</div>
			}
		</div>
		)
}

export default Invite;