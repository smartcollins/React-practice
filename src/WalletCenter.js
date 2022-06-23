import {useState} from "react"
import Userprofile from "./Userprofile"
import {ArrowLeft,DotsThreeVertical,ArrowFatLineUp,ArrowFatLineDown,CheckCircle,Bell,XCircle} from "phosphor-react"

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
							<DotsThreeVertical size={30} color="#1EBA60" />
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
					<div className="notify">
						<h3>Activity</h3>
						<p>Today, December 25 2023</p>
					</div>
					<div className="notify">
						<div className="notify-bar">
							<button className="notify-logo">
								<CheckCircle size={20} color="#ffffff" weight="fill"/>
							</button>
							<div>
								<h5>Top up Successful</h5>
								<p>You have successsfully top up your wallet in the amount of $100</p>
							</div>
						</div>
						<div className="notify-bar">
										<button className="notify-logo cancel">
											<XCircle size={20} color="#ffffff" weight="fill"/>
										</button>
										<div>
											<h5>Donation Cancelled!</h5>
											<p>You have cancel donation for victims of natural disasters</p>
										</div>

									</div>
									<p>Yesterday, December 24 2023</p>
									<div className="notify-bar">
										<button className="notify-logo new">
											<Bell size={20} color="#ffffff" weight="fill" />
										</button>
										<div>
											<h5>New Feature Available</h5>
											<p>You can now invite friends to join donation with you</p>
										</div>
									</div>

					</div>
				</div>
			}
		</div>
		)
}

export default WalletCenter;