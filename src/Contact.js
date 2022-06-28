import {useState} from "react"
import Help from "./Help"
import {ArrowLeft,EnvelopeSimple,PaperPlaneRight} from "phosphor-react"

function Contact(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Help/>:
				<div className="contact">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={50} color="#1EBA60" onClick={onBack} />
							<h1>Contact</h1>
						</div>
					</div>
					<div className="fund-detail">
						<div className="user-detail">
							<p>Full Name <span>*</span></p>
							<div className="user-input">
								<input placeholder="Full name"/>
							</div>
							<p>Email <span>*</span></p>
							<div className="user-input">
								<input type="email" placeholder="Email"/>
								<EnvelopeSimple size={20} color="#7d7d7d" weight="duotone" />
							</div>
							<div>
								<div className="coming-top">
									<p><label for="mytext">Fund Usage <span>*</span></label></p>
									<p>max word 250</p>
								</div>
								<textarea id="mytext" name="mytext" rows="2" cols="50">
								lorem ipsum dolor sit amet, consectetur adipiscing elit,
									Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam,quis nostrad.
									Ut labore et dolore magna aliqua. Ut enim ad minim.
								At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
								</textarea>
							</div>
						</div>
						<div>
							<button className="nxt">
								<p>Send Messages</p>
								<PaperPlaneRight size={20} color="#ffffff" />
							</button>
						</div>
					</div>
					
				</div>
			}
		</div>
		)
}

export default Contact;