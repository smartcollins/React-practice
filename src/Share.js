import {useState} from "react"
import Donators from "./Donators"
import {ChatText,Chats,TiktokLogo,EnvelopeSimple,FacebookLogo,WhatsappLogo,TwitterLogo,InstagramLogo,Circle} from "phosphor-react"

function Share(){
	const [top,setTop] = useState(false)

	function onTop(){
		setTop(true)
	}

	return(
		<div>
			{
				top ?
				<Donators/> :
				<div className="share">
					<div className="share-top" onClick={onTop}>
						<div className="donation-img">
							<div className="donation-circle">
								<Circle size={15} color="#35e01f" weight="fill"/>
								<Circle size={15} color="#FaFaFa" weight="duotone"/>
								<Circle size={15} color="#FaFaFa" weight="duotone"/>
								<Circle size={15} color="#FaFaFa" weight="duotone"/>
								<Circle size={15} color="#FaFaFa" weight="duotone"/>
							</div>
						</div>
						<div className="donation-txt">
							<div className="urgent-note">
								<h3>Help Siamese Twins Surgery</h3>
								<div className="donation-txt-top">
									<p>$6,679 </p>
									<p>	fund raised from $8,200</p>
								</div>
							</div>
							<div className="urgent-bar"></div>
							<div className="urgent-end">
								<p><span>3,438</span> Donators</p>
								<p><span>11</span> days left</p>
							</div>
						</div>
					</div>
					<div className="share-main">
						<h3>Share</h3>
						<div className="share-end">
							<div>
								<button className="btn1">
									<WhatsappLogo size={25} color="#ffffff" weight="fill" />
								</button>
								<p>Whatsapp</p>
							</div>
							<div>
								<button className="btn2">
									<TwitterLogo size={25} color="#ffffff" weight="fill" />
								</button>
								<p>Twitter</p>
							</div>
							<div>
								<button className="btn2">
									<FacebookLogo size={25} color="#ffffff" weight="fill" />
								</button>
								<p>Facebook</p>
							</div>
							<div>
								<button className="btn3">
									<InstagramLogo size={25} color="#ffffff"/>
								</button>
								<p>Instagram</p>
							</div>
							<div>
								<button className="btn4">
									<EnvelopeSimple size={25} color="#ffffff" weight="fill" />
								</button>
								<p>Yahoo</p>
							</div>
							<div>
								<button className="btn5">
									<TiktokLogo size={25} color="#ffffff" weight="duotone" />
								</button>
								<p>Tiktok</p>
							</div>
							<div>
								<button className="btn2">
									<ChatText size={25} color="#ffffff" weight="fill" />
								</button>
								<p>Chat</p>
							</div>
							<div>
								<button className="btn1">
									<Chats size={25} color="#ffffff" weight="fill" />
								</button>
								<p>WeChat</p>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
		)
}


export default Share;