import {useState} from "react"
import MyFundraising from "./MyFundraising"
import{ArrowLeft,DotsThreeVertical,BookmarkSimple} from "phosphor-react"

function Result(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back ?
				<MyFundraising/>:
				<div className="result">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#35e01f" onClick={onBack} />
							<h3>See Result</h3>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#35e01f" />
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
				</div>
			}
		</div>
		)
}

export default Result;