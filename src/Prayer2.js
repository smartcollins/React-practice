import React from "react"
import {useState} from "react"
import Prayer from "./Prayer"
import {ArrowLeft,DotsThreeVertical,MagnifyingGlass,DotsThreeOutlineVertical,Heart,ShareNetwork,PaperPlaneRight} from "phosphor-react"

function Prayer2(){
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
				<Prayer/>:
				<div className="prayer2">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#35e01f" onClick={onBack} />
							<h3>Prayer from Good People</h3>
						</div>
						<div className="prayer2-top">
							<button className="dot3">
								<MagnifyingGlass size={20} color="#35e01f" />
							</button>
							<button className="dot3">
								<DotsThreeVertical size={20} color="#35e01f" />
							</button>
						</div>
					</div>
					<div className="prayer-all">
						<div className="prayer-card">
							<div className="prayer-top">
								<div className="prayer-detail">
									<div className="prayer-img"></div>
									<div className="prayer-profile">
										<h6>Esther Howard</h6>
										<span>Today</span>
									</div>
								</div>
								<DotsThreeOutlineVertical size={20} color="#0da542" weight="light" />
							</div>
							<div className="prayer-comment">
								<p>Hopefully Audrey can get surgrey soon, recover from her illeness, and play with her friends..</p>
								<span>You and 48 others sent this prayer</span>
								<div className="prayer-like">
									<div>
										<Heart size={20} color="#0da542" weight="fill" />
										<p>Aamin</p>
									</div>
									<div>
										<ShareNetwork size={20} color="#0da542" weight="fill" />
										<p>share</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="prayer-all">
						<div className="prayer-card">
							<div className="prayer-top">
								<div className="prayer-detail">
									<div className="prayer-img"></div>
									<div className="prayer-profile">
										<h6>Jane Cooper</h6>
										<span>Today</span>
									</div>
								</div>
								<DotsThreeOutlineVertical size={20} color="#0da542" weight="light" />
							</div>
							<div className="prayer-comment">
								<p>Hopefully the victims affected by flash flood disaster in Surabuya will soon get better and be healthy. </p>
								<span>You and 126 others sent this prayer</span>
								<div className="prayer-like">
									<div>
										<Heart size={20} color="#0da542" />
										<p>Aamin</p>
									</div>
									<div>
										<ShareNetwork size={20} color="#0da542" weight="fill" />
										<p>share</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="prayer-all">
						<div className="prayer-card">
							<div className="prayer-top">
								<div className="prayer-detail">
									<div className="prayer-img"></div>
									<div className="prayer-profile">
										<h6>Jenny Wilson</h6>
										<span>Today</span>
									</div>
								</div>
								<DotsThreeOutlineVertical size={20} color="#0da542" weight="light" />
							</div>
							<div className="prayer-comment">
								<p>Hopefully orphans in Africa can get treatment and nutrition improvement soon..</p>
								<span>You and 118 others sent this prayer</span>
								<div className="prayer-like">
									<div>
										<Heart size={20} color="#0da542" weight="fill" />
										<p>Aamin</p>
									</div>
									<div>
										<ShareNetwork size={20} color="#0da542" weight="fill" />
										<p>share</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="prayer-send">
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


export default Prayer2;