import {useState} from "react";
import {ArrowLeft,GraduationCap,UsersThree,FirstAidKit,Buildings,Palette,GlobeHemisphereEast,Fish,House
,Wheelchair,Users,Gift,YinYang,Heartbeat}  from "phosphor-react";

import Pin from "./Pin"


function Interest(){
	const[interest,setInterest] = useState(false)
	const[next,setNext] = useState(false)

	function onInterest(){
		setInterest(oldInterest=>!interest)
	}

	function onContinue(){
		setNext(true)
	}

	const style={
		backgroundColor: interest ? "#35e01f" : "blue"
	}

	return(
		<div>
			{
				next ? 
				<Pin/> :
				<div className="interest">
					<div className="forgot-top">
						<ArrowLeft size={32} color="#2fe22c" weight="duotone"/>
						<h2>Select Your Interest</h2>
					</div>
					<p>Choose your interest to donate. Dont worry you can always change it later</p>
					<div className="interests">
						<button onClick={onInterest} style={style}>
							<GraduationCap size={28} color="#35e01f" />
							<p>Education</p>
						</button>
						<button onClick={onInterest} style={style}>
							<YinYang size={28} color="#35e01f" weight="duotone" />							
							<p>Environment</p>
						</button>
						<button onClick={onInterest} style={style}>
							<UsersThree size={28} color="#35e01f" />
							<p>Social</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Heartbeat size={28} color="#35e01f" weight="thin" />
							<p>Sick Child</p>
						</button>
						<button onClick={onInterest} style={style}>
							<FirstAidKit size={28} color="#35e01f" />
							<p>Medical</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Buildings size={28} color="#35e01f" />
							<p>Infrastructure</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Palette size={28} color="#35e01f" />
							<p>Art</p>
						</button>
						<button onClick={onInterest} style={style}>
							<GlobeHemisphereEast size={28} color="#35e01f" />
							<p>Disaster</p>
						</button>
						<button onClick={onInterest} style={style}>
							<House size={28} color="#35e01f" weight="duotone" />
							<p>Orphanage</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Wheelchair size={28} color="#35e01f" weight="duotone" />
							<p>Diasable</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Users size={28} color="#35e01f" weight="light" />
							<p>Humanity</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Gift size={28} color="#35e01f" weight="duotone" />
							<p>Others</p>
						</button>
					</div>
					<button onClick={onContinue} className="nxt">Verify</button>
				</div>
			}
		</div>
		)
}

export default Interest;