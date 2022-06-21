import {useState} from "react"
import Result from "./Result"
import MyFundraising from "./MyFundraising"
import Create from "./Create"
import {ArrowLeft,Trash,CaretDown,CurrencyDollar,TrashSimple} from "phosphor-react"

function Edit(){
	const [back,setBack] = useState(false)
	const [del,setDel] = useState(false)
	const [update,setUpdate] = useState(false)
	const [unpublish,setUnpublish] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onDel(){
		setDel(true)
	}

	function onUpdate(){
		setUpdate(true)
	}

	function onCancel(){
		setDel(false)
	}

	function onPublish(){
		setUnpublish(true)
	}


	return(
		<div>
			{
				back ?
				<Result/> :
				<div>
					{
						update ?
						<MyFundraising/> :
						unpublish ?
						<Create/> :
						<div className="edit">
							<div className="great">
								<div>
									<TrashSimple size={30} color="#ffffff" weight="fill" />
								</div>
								<h2>Stop Publishing Fundraising</h2>
								<div>
									<p>After you stop this publication, you cannot republish it </p>
									<p>Are you sure ?</p>
								</div>
								<div className="great-btn">
									<button onClick={onCancel}>Cancel</button>
									<button onClick={onPublish}>Yes,Unpublish</button>
								</div>
							</div>
							<div className={del ? "success" : "edit"}>
								<div className="bookmark-top">
									<div className="back">
										<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
										<h3>Edit Fundraising</h3>
									</div>
									<button onClick={onDel} className="dot3">
										<Trash size={20} color="#fe5071" weight="duotone" />
									</button>
								</div>
								<div>
									<div className="edit-img"></div>
									<div className="edit-grid">
										<div className="edit-img2"></div>
										<div className="edit-img3"></div>
										<div className="edit-img4"></div>
										<div className="edit-img5"></div>
									</div>
								</div>
								<div className="fund-detail">
									<h3>Fundraising Details</h3>
									<div className="user-input">
										<input type="text" placeholder="Title"/>
										
									</div>
									<div className="user-input">
										<input type="text" placeholder="Category"/>
										<CaretDown size={20} color="#7d7d7d" weight="fill" />
									</div>
									<div className="user-input">
										<input type="text" placeholder="Total Donation Required"/>
										<CurrencyDollar size={20} color="#7d7d7d" weight="fill" />
									</div>
									<button onClick={onUpdate} className="nxt">Update & Submit</button>
								</div>
							</div>
						</div>
					}
				</div>
			}
		</div>
		)
}

export default Edit;