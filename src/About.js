import {useState} from "react"
import Help from "./Help"
import {ArrowLeft,Users} from "phosphor-react"

function About(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Help/>:
				<div className="about">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={50} color="#1EBA60" onClick={onBack} />
							<h1>About</h1>
						</div>
					</div>
					<div className="about-btn">
						<button>
							<Users size={50} color="#ffffff" weight="duotone" />
						</button>
						<h3>Wecare</h3>
					</div>
					<h3>We Focus on Digital Charity</h3>
					<div className="terms">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Sed convallis tellus eu imperdiet consequat. Quisque quis lectus sed est dignissim mollis.
							Quisque luctus est ac nisl cursus, vel interdum est condimentum.
							Nunc tincidunt tempor ipsum eu pulvinar. Cras lobortis leo sit amet condimentum aliquet.
							Pellentesque laoreet vulputate mauris, a tempor nunc vehicula eget.
							Quisque a nunc quis diam aliquet viverra.
							Nam sagittis accumsan turpis, at pharetra ex sagittis ac. 
							Quisque luctus est ac nisl cursus, vel interdum est condimentum.
							Nunc tincidunt tempor ipsum eu pulvinar. Cras lobortis leo sit amet condimentum aliquet.
							Pellentesque laoreet vulputate mauris, a tempor nunc vehicula eget.
							Quisque a nunc quis diam aliquet viverra.							
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Sed convallis tellus eu imperdiet consequat. Quisque quis lectus sed est dignissim mollis.
							Quisque luctus est ac nisl cursus, vel interdum est condimentum.
							Nunc tincidunt tempor ipsum eu pulvinar. Cras lobortis leo sit amet condimentum aliquet.
							Pellentesque laoreet vulputate mauris, a tempor nunc vehicula eget.
							Quisque a nunc quis diam aliquet viverra.
							Nam sagittis accumsan turpis, at pharetra ex sagittis ac. 
							Quisque luctus est ac nisl cursus, vel interdum est condimentum.
							Nunc tincidunt tempor ipsum eu pulvinar. Cras lobortis leo sit amet condimentum aliquet.
							Pellentesque laoreet vulputate mauris, a tempor nunc vehicula eget.
							Quisque a nunc quis diam aliquet viverra.							
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Sed convallis tellus eu imperdiet consequat. Quisque quis lectus sed est dignissim mollis.
							Quisque luctus est ac nisl cursus, vel interdum est condimentum.
							Nunc tincidunt tempor ipsum eu pulvinar. Cras lobortis leo sit amet condimentum aliquet.
							Pellentesque laoreet vulputate mauris, a tempor nunc vehicula eget.
							Quisque a nunc quis diam aliquet viverra.
							Nam sagittis accumsan turpis, at pharetra ex sagittis ac. 
							Quisque luctus est ac nisl cursus, vel interdum est condimentum.
						</p>
					</div>
				</div>
			}
		</div>
		)
}

export default About;