import {useState} from "react"
import Setting from "./Setting"
import {ArrowLeft,User,PencilSimple,Envelope,Phone,CaretDown,MapPin} from "phosphor-react"


function Editprofile(){
	const [back,setBack] = useState(false)

	const [edit,setEdit] = useState(false)
	const [verify,setVerify] =useState(false)


	function onBack(){
		setBack(true)
	}

	function onEdit(){
		setEdit(oldEdit=>!edit)
	}

	function onVerify(){
		setVerify(true)
	}


	return(
		<div>
			{
				back?
				<Setting/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={50} color="#1EBA60" onClick={onBack} />
							<h1>Edit profile</h1>
						</div>
					</div>
					<div className={edit?"user":"user-2"}>
						{
							edit ?
							<User className="user-icon" size={32} color="#7d7d7d" weight="duotone"/>:
							<User style={{visibility: "hidden"}} className="user-icon" size={32} color="#7d7d7d" weight="duotone"/>
						}
						<div className="user-pen" onClick={onEdit}>
							<PencilSimple size={16} color="#ffffff" />
						</div>
					</div>
					<div className="editprofile-info">
						<div className="user-detail">
						<div className="user-input">
							<input placeholder="Full name"/>
						</div>
						<div className="user-input">
							<input placeholder="Email"/>
							<Envelope size={20} color="#7d7d7d" weight="fill" />
						</div>
						<div className="user-input">
							<input placeholder="Phone Number"/>
							<Phone size={20} color="#7d7d7d" weight="duotone" />
						</div>
						<div className="user-input">
							<input placeholder="Gender"/>
							<CaretDown size={20} color="#7d7d7d" weight="duotone" />
						</div>
						<div className="user-input">
							<input placeholder="City"/>
							<MapPin size={20} color="#7d7d7d" />
						</div>
					</div>
					<button onClick={onVerify} className="nxt">Verify</button>
					</div>
				</div>
			}
		</div>
		)
}

export default Editprofile;