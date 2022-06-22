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
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h3>Jane Cooper</h3>
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
					<div>
						<div className="recent">
							<h3>Today</h3>
						</div>
						<div className="message-txt">
							<p>Hello, good morning!😊 </p>
							<p>09:41</p>
						</div>
						<div className="message-txt">
							<p>I am interested in making a donation. May i know what the donation program you have just published is for?😊 </p>
							<p>09:41</p>
						</div>
						<div className="response">
							<p>Hi, good afternoon. Donations will be distributed to flood victims in Surabuya.You can see detailed information in my post</p>
							<p>09:41</p>
						</div>
						<div className="message-txt">
							<p>Great, thanks a lot for the information</p>
							<p>09:41</p>
						</div>
						<div className="message-txt">
							<p>i will make a donation as soon as possible after this</p>
							<p>09:41</p>
						</div>
						<div className="response">
							<p>You're welcome. Thank you for the donations that will be given.</p>
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


