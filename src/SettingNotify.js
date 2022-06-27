import {useState} from "react"
import Setting from "./Setting"
import {ArrowLeft,ToggleLeft,ToggleRight,Eye} from "phosphor-react"

function SettingNotify(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Setting/>:
				<div>
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h1>Notification</h1>
						</div>
					</div>
					<div className="setting-mid">
						<p>Sound</p>
						<ToggleRight size={30} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>Vibrate</p>
						<ToggleRight size={30} color="#1EBA60" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>New tip available</p>
						<ToggleLeft size={30} color="#9098a1" weight="fill" />
					</div>
					<div className="setting-mid">
						<p>New service available</p>
						<ToggleLeft size={30} color="#9098a1" weight="fill" />
					</div>
				</div>
			}
		</div>
		)
}

export default SettingNotify;