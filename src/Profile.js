import {useState} from "react";
import {ArrowLeft,User,Envelope,MapPin,Phone,CaretDown,PencilSimple} from "phosphor-react";
import profile from "./image/dp.jpg";


function Profile(){
	const [edit,setEdit] = useState(false)


	function onEdit(){
		setEdit(oldEdit=>!edit)
	}

	return(
		<div>
			{
				<div className="profile">
					<div className="forgot-top">
						<ArrowLeft size={32} color="#2fe22c" weight="duotone"/>
						<h2>Fill Your Profile</h2>
					</div>
					<div className={edit?"user":"user-2"}>
						<User size={32} color="#7d7d7d" weight="duotone"/>
						<div className="user-pen" onClick={onEdit}>
							<PencilSimple size={16} color="#ffffff" />
						</div>
					</div>
					
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
					<button className="nxt">Verify</button>
				</div>
			}
		</div>
	)
}

export default Profile;