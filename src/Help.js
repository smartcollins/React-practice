import {useState} from "react"
import Setting from "./Setting"
import {ArrowLeft,InstagramLogo,TwitterLogo,GlobeHemisphereEast,YoutubeLogo,CaretRight} from "phosphor-react"

function Help(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Setting/>:
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
					<div className="setting-mid">
						<p>FAQs</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
					<div className="setting-mid">
						<p>Contact us</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
					<div className="setting-mid">
						<p>Terms & Conditions</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
					<div className="setting-mid">
						<p>Privacy Policy</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
					<div className="setting-mid">
						<p>About Us</p>
						<CaretRight size={20} color="#1EBA60" />
					</div>
				</div>
			}
		</div>
		)
}

export default Help;