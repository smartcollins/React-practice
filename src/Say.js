import {useState} from "react"
import MyFundraising from "./MyFundraising"
import {ArrowLeft,DotsThreeVertical,Circle,PaperPlaneRight} from "phosphor-react"

function Say(){
	const [back,setBack] = useState(false)
	const [send,setSend] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onSend(){
		setSend(true)
	}

	const style ={
		border: send && "2px solid #0da542"
	}

	return(
		<div>
			{
				back ?
				<MyFundraising/>:
				<div className="say">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft onClick={onBack} size={30} color="#1EBA60"/>
							<h1>Jane Cooper</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#1EBA60" weight="duotone" />
						</button>
					</div>
					<div className="recent">
						<h3>Today</h3>
					</div>
					<div className="activity-sub">
						<div className="activity-min">
							<div className="activity-img">
								<Circle className="active-btn" size={16} color="#1eba60" weight="fill"/>
							</div>
							<div className="activity-txt">
								<p>
									<span>Jane copper </span>
									 has donated 
									 <span> $25</span>
								</p>
							</div>
						</div>
					</div>
					<div className="response">
						<p>Thank you very much Jane, God bless your kindness</p>
						<p>09:41</p>
					</div>
					<div className="send" onClick={onSend} style={style}>
						<input placeholder="Send your prayers..." />
						<PaperPlaneRight size={25} color="#0da542" weight="bold" />
					</div>
				</div>
			}
		</div>
		)
}

export default Say;