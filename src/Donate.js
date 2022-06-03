import {useState} from "react"
import Pin from "./Pin"
import Fundraiser from "./Fundraiser"
import {ArrowLeft,DotsThreeVertical} from "phosphor-react"

function Donate(){
	const [anonymus,setAnonymus] = useState(false)
	const [btn,setBtn] = useState(false)
	const [back,setBack] = useState(false)

	function onAnonymus(){
		setAnonymus(oldAnonymus => !anonymus)
	}

	function onBtn(){
		setBtn(true)
	}

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{	
				back ?
				<Fundraiser/> :
				btn ? 
				<h1>Section for pin</h1>:
				<div className="donate-main">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#35e01f" onClick={onBack}/>
							<h1>Donate</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#35e01f" />
						</button>
					</div>
					<div>
						<h3>Enter the Amount</h3>
						<button className="donated">{anonymus ? "$200" : "$0"}</button>
						<div className="amount">
							<button>$5</button>
							<button>$10</button>
							<button>$25</button>
							<button>$50</button>
							<button>$100</button>
							<button>$200</button>
						</div>
					</div>
					<div className="anonymus">
						<input
	                        id="donate"
	                        type="checkbox"
	                        onClick={onAnonymus}
	                    />
						<label htmlFor="donate" onClick={onAnonymus}>Donate as anonymus</label>
					</div>
					<div className="donate-end">
						<button className="nxt" onClick={onBtn}>Continue</button>
					</div>
				</div>
			}
		</div>
		)
}

export default Donate;