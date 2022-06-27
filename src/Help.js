import {useState} from "react"
import Setting from "./Setting"
import Faqs from "./Faqs"
import Contact from "./Contact"
import Terms from "./Terms"
import Privacy from "./Privacy"
import About from "./About"
import {ArrowLeft,InstagramLogo,TwitterLogo,GlobeHemisphereEast,YoutubeLogo,CaretRight} from "phosphor-react"

function Help(){
	const [back,setBack] = useState(false)
	const [faq,setFaq] = useState(false)
	const [contact,setContact] = useState(false)
	const [term,setTerm] = useState(false)
	const [privacy,setPrivacy] = useState(false)
	const [about,setAbout] = useState(false)
	
	function onBack(){
		setBack(true)
	}

	function onFaq(){
		setFaq(true)
	}

	function onContact(){
		setContact(true)
	}

	function onTerm(){
		setTerm(true)
	}

	function onPrivacy(){
		setPrivacy(true)
	}

	function onAbout(){
		setAbout(true)
	}


	return(
		<div>
			{
				back?
				<Setting/>:
				faq?
				<Faqs/>:
				contact?
				<Contact/>:
				term?
				<Terms/>:
				privacy?
				<Privacy/>:
				about?
				<About/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={50} color="#1EBA60" onClick={onBack} />
							<h1>Help</h1>
						</div>
					</div>
					<div className="help-btn">
						<button>
							<InstagramLogo size={30} color="#ffffff" weight="fill"/>
							Instagram
						</button>
						<button>
							<TwitterLogo size={30} color="#ffffff" weight="fill"/>
							Twitter
						</button>
						<button>
							<GlobeHemisphereEast size={30} color="#ffffff" weight="fill"/>
							Website
						</button>
						<button>
							<YoutubeLogo size={30} color="#ffffff" weight="fill"/>
							YouTube
						</button>
					</div>
					<div onClick={onFaq} className="setting-mid">
						<p>FAQs</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
					<div onClick={onContact} className="setting-mid">
						<p>Contact us</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
					<div onClick={onTerm} className="setting-mid">
						<p>Terms & Conditions</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
					<div onClick={onPrivacy} className="setting-mid">
						<p>Privacy Policy</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
					<div onClick={onAbout} className="setting-mid">
						<p>About Us</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
				</div>
			}
		</div>
		)
}

export default Help;