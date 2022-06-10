import React from "react"
import {useState}  from "react"
import Watch from "./Watch"
import Watchfull from "./Watchfull"
import {ArrowLeft,DotsThreeVertical, PlayCircle} from "phosphor-react"

function Watch2(){
	const [back,setBack] = useState(false)
	const [play,setPlay] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onPlay(){
		setPlay(true)
	}

	return(
		<div>
			{	play ?
				<Watchfull/> :
				back ?
				<Watch/> :
				<div className="watch2-main">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h3>Watch the impact of</h3>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#1EBA60" />
						</button>
					</div>
					<div className="watch-main-video">
						<div className="watch-main">
							<div className="watch-play">
								<PlayCircle size={30} color="#1EBA60" weight="bold" onClick={onPlay} />
							</div>
							<div className="watch-txt">
								<p>Help improve Nutrition in Africa</p>
							</div>
						</div>
						<div className="watch-main2">
							<div className="watch-play">
								<PlayCircle size={30} color="#1EBA60" weight="bold" />
							</div>
							<div className="watch-txt">
								<p>Siamese Twins Surgrey Was Successful</p>
							</div>
						</div>
						<div className="watch-main3">
							<div className="watch-play">
								<PlayCircle size={30} color="#1EBA60" weight="bold" />
							</div>
							<div className="watch-txt">
								<p>Help Combat Poverty in Africa</p>
							</div>
						</div>
						<div className="watch-main">
							<div className="watch-play">
								<PlayCircle size={30} color="#1EBA60" weight="bold" />
							</div>
							<div className="watch-txt">
								<p>Help Victims of Flash Flood in Sudan</p>
							</div>
						</div>
						<div className="watch-main">
							<div className="watch-play">
								<PlayCircle size={30} color="#1EBA60" weight="bold" />
							</div>
							<div className="watch-txt">
								<p>Help Homeless People in Durban</p>
							</div>
						</div>
						<div className="watch-main6">
							<div className="watch-play">
								<PlayCircle size={30} color="#1EBA60" weight="bold" />
							</div>
							<div className="watch-txt">
								<p>Fight Poilio in Europe</p>
							</div>
						</div>
					</div>

				</div>
			}
		</div>
		)
}

export default Watch2;