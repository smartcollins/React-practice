import {useState} from "react"
import TopUp from "./TopUp"
import {ArrowLeft,CalendarBlank,CaretDown,CurrencyDollar,QrCode,CurrencyBtc,CreditCard,AppleLogo} from "phosphor-react"

function Add(){
	const [back,setBack] = useState(false)
	const [add,setAdd] = useState(false)
	const [cont,setCont] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onAdd(){
		setAdd(true)
	}

	function onCont(){
		setCont(true)
	}

	return(
		<div>
			{
				back?
				<TopUp/>:
				<div>
					{
						add?
						<div>
							<div className="bookmark-top">
								<div className="back">
									<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
									<h1>Top up</h1>
								</div>
								<button className="dot3">
									<QrCode size={30} color="#1EBA60" />
								</button>
							</div>
							<div className="coming-top">
								<h3>Select Top up Method</h3>
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
								<h3>Pay with Debit/Credit Card</h3>
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
						</div>:
						<div>
							<div className="bookmark-top">
								<div className="back">
									<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
									<h1>Add New Card</h1>
								</div>
							</div>
							<div className="fund-detail">
								<p>Full Name <span>*</span></p>
								<div className="user-input">
									<input type="text" placeholder="Full Name"/>
								</div>

								<p>Card Number <span>*</span></p>
								<div className="user-input">
									<input type="text" placeholder="Card Number"/>
									<CaretDown size={20} color="#7d7d7d" weight="fill" />
								</div>
								<div className="add-end">
									<div>
										<p>Expiry Date <span>*</span></p>
										<div className="user-input">
											<input type="text" placeholder="Expiry Date Donation Required"/>
											<CurrencyDollar size={20} color="#7d7d7d" weight="fill" />
										</div>
									</div>
									<div>	
										<p>CVV <span>*</span></p>
										<div className="user-input">
											<input type="text" placeholder="Select Date"/>
											<CalendarBlank size={20} color="#858c94" weight="duotone" />
										</div>
									</div>	
								</div>	
							</div>
							<div>
								<button onClick={onAdd} className="nxt">Add New Card</button>
							</div>
						</div>
					}
				</div>
			}
		</div>
		)
}

export default Add;