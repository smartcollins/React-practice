import {useState} from "react"
import Userprofile from "./Userprofile"
import {ArrowLeft,DotsThreeVertical,ArrowFatLineUp,ArrowFatLineDown,CheckCircle,XCircle} from "phosphor-react"

function WalletCenter(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Userprofile/>:
				<div className="wallet-center">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
							<h1>Wallet Center</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#" />
						</button>
					</div>
					<div>
						<button className="donated">
							<p>$349</p>
							<p>Balance</p>
						</button>
					</div>
					<div className="remove-btn">
						<button>
							<ArrowFatLineUp size={20} color="#ffffff" />
							<p>Top up</p>
						</button>
						<button>
							<ArrowFatLineDown size={20} color="#1EBA60" />
							<p>Withdraw</p>
						</button>
					</div>
				</div>
			}
		</div>
		)
}

export default WalletCenter;