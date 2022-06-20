import {useState} from "react"
import Share from "./Share"
import Info from "./Info"
import {ArrowLeft,MagnifyingGlass,SmileyWink,Smiley,House} from "phosphor-react"

function Donators(props){
	const [back,setBack] = useState(false)
	const [healthy,setHealthy] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onHealthy(){
		setHealthy(true)
	}

	return(
		<div>
			{
				healthy ?
				<Info/> :
				back ?
				<Share/> :
				<div className="donators-main">
					<div className="notification-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h1>3,438 Donators</h1>
						</div>
						<button className="dot3">
							<MagnifyingGlass size={20} color="#1EBA60" />
						</button>
					</div>
					<div>
						<div className="donator-info">
							<div className="donator-ayms">
								<div>
									<House size={30} color="#ffffff" onClick={onHealthy}/>
								</div>
								<p>Healthy Home</p>
							</div>
						</div>
						<div className="donator-info">
							<div className="donator-img"></div>
							<p>Kathryn Murphy</p>
						</div>
						<div className="donator-info">
							<div className="donator-img"></div>
							<p>Wade Warren</p>
						</div>
						<div className="donator-ayms">
							<div>
								<SmileyWink size={30} color="#ffffff" />
							</div>
							<p>Anonymous</p>
						</div>
						<div className="donator-info">
							<div className="donator-img"></div>
							<p>Jane Cooper</p>
						</div>
						<div className="donator-ayms">
							<div>
								<Smiley size={30} color="#ffffff" />
							</div>
							<p>Anonymous</p>
						</div>
						<div className="donator-ayms">
							<div>
								<SmileyWink size={30} color="#ffffff" />
							</div>
							<p>Anonymous</p>
						</div>
						<div className="donator-info">
							<div className="donator-img"></div>
							<p>Guy Hawkins</p>
						</div>
						<div className="donator-info">
							<div className="donator-img"></div>
							<p>Leslie Alexander</p>
						</div>
						<div className="donator-ayms">
							<div>
								<Smiley size={30} color="#ffffff" />
							</div>
							<p>Anonymous</p>
						</div>
					</div>
				</div>
			}
			
		</div>
		)
}

export default Donators;