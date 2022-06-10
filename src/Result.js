import {useState} from "react"
import Edit from "./Edit"
import MyFundraising from "./MyFundraising"
import{ArrowLeft,DotsThreeVertical,BookmarkSimple} from "phosphor-react"

function Result(){
	const [back,setBack] = useState(false)
	const [dot,setDot] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onDot(){
		setDot(true)
	}

	return(
		<div>
			{
				back ?
				<MyFundraising/>:
				dot ?
				<Edit/> :
				<div className="result">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h3>See Result</h3>
						</div>
						<button className="dot3" onClick={onDot}>
							<DotsThreeVertical size={30} color="#1EBA60" />
						</button>
					</div>
					<div className="search-result">
						<div className="search-img8">
							<div className="urgent-mark">
								<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
							</div>
						</div>
						<div className="search-detail">
							<div className="search-note">
								<h3>Help Victims of Flash Flooding</h3>
								<div className="search-fund">
									<p><span>$8,775</span> fund required</p>
								</div>
							</div>
							<div className="urgent-bar"></div>
							<div className="urgent-end">
								<p><span>4,471</span> Donators</p>
								<p><span>2</span> days left</p>
							</div>
						</div>
					</div>
					<div>
						<h3>Fundraising Result</h3>
						<div className="result-btn">
							<button>
								<p>$8,775</p>
								<p>Funds gained</p>
							</button>
							<button>
								<p>$1,765</p>
								<p>Funds left</p>
							</button>
							<button>
								<p>4.471</p>
								<p>Donators</p>
							</button>
							<button>
								<p>9</p>
								<p>9 days left</p>
							</button>
							<button>
								<p>82%</p>
								<p>Funds reached</p>
							</button>
							<button>
								<p>2.389</p>
								<p>Prayers</p>
							</button>
						</div>
						<div>
							<button className="nxt">Withdraw Funds ($8,775)</button>
						</div>
					</div>
				</div>
			}
		</div>
		)
}

export default Result;