import {useState} from "react"
// import Say from "./Say"
import Inbox from "./Inbox"
import {ArrowLeft,DotsThreeVertical,Circle,PaperPlaneRight,Prohibit} from "phosphor-react"


function Message(){
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
				back?
				<Inbox/>:
				<div className="message">
					<div className="say">
						<div className="bookmark-top">
							<div className="back">
								<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
								<h3>Kathryn Murphy</h3>
							</div>
							<div className="prayer2-top">
								<button className="dot3">
									<Prohibit size={20} color="#1EBA60" />
								</button>
								<button className="dot3">
									<DotsThreeVertical size={20} color="#1EBA60" />
								</button>
							</div>
						</div>
						<div className="recent">
							<h3>Today</h3>
						</div>
						<div className="activity-sub">
							<div className="activity-min">
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
				</div>
			}
		</div>
		)
}

export default Message;


