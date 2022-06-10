import React from "react"
import {useState} from "react"
import Watch2 from "./Watch2"
import {ArrowLeft,PlayCircle,Gear,ArrowClockwise,ArrowCounterClockwise,SpeakerHigh} from "phosphor-react"

function Watchfull(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back ?
				<Watch2/> :
				<div>
					<div className="watchfull">
						<div className="back">
							<ArrowLeft size={40} color="#1EBA60" onClick={onBack} />
						</div>
						<div className="watchfull-note">
							<h3>Brian Surgrey was Successful</h3>
							<div className="urgent-bar"></div>
						</div>
						<div className="watchfull-end">
							<div>
								<p>03:27 / 10:38</p>
							</div>
							<div>
								<ArrowCounterClockwise size={20} color="#1EBA60" weight="bold" />
								<PlayCircle size={30} color="#1EBA60" weight="bold" />
								<ArrowClockwise size={20} color="#1EBA60" weight="bold" />
							</div>
							<div>
								<SpeakerHigh size={20} color="#1EBA60" weight="bold" />
								<Gear size={20} color="#1EBA60" weight="bold" />
							</div>
						</div>
					</div>
				</div>
			}
		</div>
		)
}


export default Watchfull;