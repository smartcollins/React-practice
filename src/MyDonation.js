import {useState} from "react"
import Menu from "./Menu"
import {UsersThree,DotsThreeVertical,CaretRight,CaretLeft,SmileySad} from "phosphor-react"


function MyDonation(){
	return(
		<div>
			{
				<div>
					<div className="bookmark-top">
						<div className="back">
							<UsersThree size={30} color="#35e01f"/>
							<h1>My Donation</h1>
						</div>
						<button className="dot3">
							<DotsThreeVertical size={30} color="#35e01f"/>
						</button>
					</div>
					<div className="calender">
						<div className="calender-date">
							<h3>December 2023</h3>
							<div>
								<CaretLeft size={20} color="#121212"/>
								<CaretRight size={20} color="#35e01f" weight="bold" />
							</div>
						</div>
						<div className="calender-top">
							<h4>Mo</h4>
							<h4>Tu</h4>
							<h4>We</h4>
							<h4>Th</h4>
							<h4>Fr</h4>
							<h4>Sa</h4>
							<h4>Su</h4>
							<button>1</button>
							<button>2</button>
							<button>3</button>
							<button>4</button>
							<button>5</button>
							<button>6</button>
							<button>7</button>

							<button>8</button>
							<button>9</button>
							<button>10</button>
							<button>11</button>
							<button>12</button>
							<button>13</button>
							<button>14</button>

							<button>15</button>
							<button>16</button>
							<button>17</button>
							<button>18</button>
							<button>19</button>
							<button>20</button>
							<button>21</button>

							<button>22</button>
							<button className="diff">23</button>
							<button>24</button>
							<button>25</button>
							<button>26</button>
							<button>27</button>
							<button>28</button>

							<button>29</button>
							<button>30</button>
							<button>31</button>
						</div>
					</div>
					<div className="mydonation-end">
						<h3>My Donation (0)</h3>
						<div className="great">
							<div>
								<SmileySad size={30} color="#ffffff" weight="fill" />
							</div>
							<h2>Great!</h2>
							<p>You have not made a donation</p>
							<button className="nxt">Make a Donation Now</button>
						</div>
						<Menu/>
					</div>

				</div>
			}
		</div>
		)
}


export default MyDonation;