import {useState} from "react"
import Result from "./Result"
import {ArrowLeft,Trash,CaretDown} from "phosphor-react"

function Edit(){
	const [back,setBack] = useState(false)
	const [update,setUpdate] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onUpdate(){
		setUpdate(true)
	}


	return(
		<div>
			{
				back ?
				<Result/> :
				<div>
					{
						update ?
						<div></div> :
						<div className="edit">
							<div className="bookmark-top">
								<div className="back">
									<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
									<h3>Edit Fundraising</h3>
								</div>
								<button className="dot3">
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
							<div>
								
							</div>
							
						</div>
					}
				</div>
			}
		</div>
		)
}

export default Edit;