import {useState} from "react"
import WalletCenter from "./WalletCenter"
import {ArrowLeft,DotsThreeVertical} from "phosphor-react"

function Withdraw(){
	const [back,setBack] = useState(false)
	const [cont1,setCont1] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onCont1(){
		setCont1(true)
	}
	return(
		<div>
			{
				back?
				<WalletCenter/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
							<h1>Withdraw</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#1EBA60" />
						</button>
					</div>
					<div>
						<button className="donated">
							<p>$300</p>
						</button>
					</div>
					<div className="amount">
						<button>$5</button>
						<button>$10</button>
						<button>$25</button>
						<button>$50</button>
						<button>$100</button>
						<button>$200</button>
					</div>
					<div>
						<button onClick={onCont1} className="nxt">Continue</button>
					</div>
				</div>
			}
		</div>
		)
}

export default Withdraw;