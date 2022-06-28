import {useState} from "react"
import Help from "./Help"
import {ArrowLeft} from "phosphor-react"

function Privacy(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back?
				<Help/>:
				<div className="terms">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
							<h1>Privacy</h1>
						</div>
					</div>
					<div>
						<h3>Types of Data We Collect</h3>
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
					</div>
					<div>
						<h3>Use of Your Personal Data</h3>
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
							Quisque luctus est ac nisl cursus, vel interdum est condimentum.
							Nunc tincidunt tempor ipsum eu pulvinar. Cras lobortis leo sit amet condimentum aliquet.
							Pellentesque laoreet vulputate mauris, a tempor nunc vehicula eget.
							
						</p>
					</div>
				</div>
			}
		</div>
		)
}

export default Privacy;