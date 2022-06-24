import {useState} from "react"
import WalletCenter from "./WalletCenter"
import {ArrowLeft,DotsThreeVertical,QrCode,Wallet,CurrencyBtc,CurrencyEth,AppleLogo,CreditCard,Envelope,Circle,CheckCircle} from "phosphor-react"

function Withdraw(){
	const [back,setBack] = useState(false)
	const [cont1,setCont1] = useState(false)
	const [cont2,setCont2] = useState(false)
	const [cont3,setCont3] = useState(false)
	const [confirm,setConfirm] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onCont1(){
		setCont1(true)
	}

	function onCont2(){
		setCont2(true)
	}

	function onCont3(){
		setCont3(true)
	}

	function onConfirm(){
		setCont3(false)
		setConfirm(true)
	}

	function onSuccess(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<WalletCenter/>:
				<div>
					{
						cont2?
						<div className="message">
							{
								confirm ?
								<div className="great">
									<div>
										<CheckCircle size={30} color="#ffffff" weight="fill" />
									</div>
									<h2>Top up Succesful!</h2>
									<p>You have successfully top up your wallet for $100</p>
									<button onClick={onSuccess} className="nxt">Ok</button>
								</div>:
								<div></div>
							}
							<div className={confirm?"success":"topup2"}>
								<div className="bookmark-top">
									<div className="back">
										<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
										<h1>{cont3?"Enter Pin":"Withdraw"}</h1>
									</div>
								</div>
								{
									cont3?
									<div>
										<div className="create">
											<h3>Please Enter Your Pin</h3>
											<Circle size={16} color="#1EBA60" weight="fill" />
											<Circle size={16} color="#1EBA60" weight="fill" />
											<Circle size={16} color="#1EBA60" weight="fill" />
											<Circle size={16} color="#1EBA60" weight="fill" />
											<Circle size={16} color="#E6E6E6" weight="fill" />
											<Circle size={16} color="#E6E6E6" weight="fill" />
										</div>
									</div>:
									<div>
										<div className="mail"></div>
										<div className="fund-detail">
											<p>PayPal Email <span>*</span></p>
											<div className="user-input">
												<input placeholder="PayPal Email"/>
												<Envelope size={20} color="#7d7d7d" weight="fill" />
											</div>
										</div>
									</div>	
								}
								<br/>
								<br/>
								{
									cont3?
									<button onClick={onConfirm} className="nxt">Confirm</button>:
									<button onClick={onCont3} className="nxt">Continue</button>
								}
							</div>
						</div>:
						cont1?
						<div className="topup2">
							<div className="bookmark-top">
								<div className="back">
									<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
									<h1>Withdraw</h1>
								</div>
							</div>
							<div className="coming-top">
								<h3>Select Withdraw Method</h3>
								<h5>Add Card</h5>
							</div>
							<div className="payment-btn">
								<div className="home-mid">
									<div className="wallet">
										<button>
											<CurrencyBtc size={20} color="#1EBA60" />
										</button>
										<p>Bitcoin wallet</p>
									</div>
									<input id="donate" type="radio"/>
								</div>
								<div className="home-mid">
									<div className="wallet">
										<button>
											<CreditCard size={20} color="#1EBA60" weight="duotone" />
										</button>
										<p>Credit card</p>
									</div>
									<input id="donate" type="radio"/>
								</div>
								<div className="home-mid">
									<div className="wallet">
										<button>
											<AppleLogo size={20} color="#1EBA60" weight="duotone"/>
										</button>
										<p>Apple play</p>
									</div>
									<input id="donate" type="radio"/>
								</div>
							</div>
							<br/>
							<br/>
							<div>
								<button onClick={onCont2} className="nxt">Continue</button>
							</div>
						</div>:
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
			}
		</div>
		)
}

export default Withdraw;