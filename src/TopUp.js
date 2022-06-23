import React from "react"
import {useState} from "react"
import WalletCenter from "./WalletCenter"
import {ArrowLeft,DotsThreeVertical,QrCode,Wallet,CurrencyBtc,CurrencyEth,AppleLogo,CreditCard} from "phosphor-react"


function TopUp(){
	const [back,setBack] = useState(false)
	const [cont1,setCont1] = useState(false)
	const [cont2,setCont2] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onCont1(){
		setCont1(true)
	}

	function onCont2(){
		setCont2(true)
	}

	function onMethod(){
		setCont2(true)
	}

	const style={
		border: "2px solid #1EBA60"
	}


	return(
		<div>
			{
				back?
				<WalletCenter/>:
				<div>
					{
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
										
									</div>
									<input id="donate" type="radio"/>
								</div>
								<div className="home-mid">
									<div className="wallet">
										<button>
											<CreditCard size={20} color="#1EBA60" weight="duotone" />
										</button>
									</div>
									<input id="donate" type="radio"/>
								</div>
								<div className="home-mid">
									<div className="wallet">
										<button>
											<AppleLogo size={20} color="#1EBA60" weight="duotone"/>
										</button>
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
								<h3>Enter Amount</h3>
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

export default TopUp;