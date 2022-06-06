import {useState} from "react"
import Menu from "./Menu"
import {UsersThree,DotsThreeVertical,CaretRight,CaretLeft,SmileySad,BookmarkSimple,ArrowLeft} from "phosphor-react"


function MyDonation(){
	const [make,setMake] = useState(false)
	const [see,setSee] = useState(false)

	function onMake(){
		setMake(true)
	}

	function onSee(){
		setSee(true)
	}

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
					
					{
						make ?
						<div>
							{
								see ?
								<div>
									<div className="bookmark-top">
										<div className="back">
											<ArrowLeft size={30} color="#35e01f"/>
											<h1>My Donation (7)</h1>
										</div>
										<button className="dot3">
											<DotsThreeVertical size={30} color="#35e01f"/>
										</button>
									</div>
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img4">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Victims of the Impact of Volcano</h3>
													<div className="search-fund">
														<span>$2,277</span>
														<p>fund raised from $6,310</p>
													</div>
												</div>
												<div className="search-bar-min">
													<div className="urgent-bar"></div>
												</div>
												<div className="urgent-end">
													<p><span>938</span> Donators</p>
													<p><span>26</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<h4>You have Donated<span>$22</span></h4>
											<button>Donate Again</button>
										</div>
									</div>
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img5">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Victims of Flash Flood In Asia</h3>
													<div className="search-fund">
														<span>$8,775 </span>
														<p>fund raised from $10,540</p>
													</div>
												</div>
												<div className="urgent-bar"></div>
												<div className="urgent-end">
													<p><span>2,277</span> Donators</p>
													<p><span>29</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<h4>You have Donated<span>$22</span></h4>
											<button>Donate Again</button>
										</div>
									</div>		
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Overcome Malnutrition in Mali</h3>
													<div className="search-fund">
														<span>$2,277</span>
														<p>fund raised from $6,310</p>
													</div>
												</div>
												<div className="search-bar-min">
													<div className="urgent-bar"></div>
												</div>
												<div className="urgent-end">
													<p><span>2,475</span> Donators</p>
													<p><span>21</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<h4>You have Donated<span>$20</span></h4>
											<button>Donate Again</button>
										</div>
									</div>
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img8">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Victims of Earthquake in South Africa</h3>
													<div className="search-fund">
														<span>$4,378 </span>
														<p>fund raised from $11,340</p>
													</div>
												</div>
												<div className="urgent-bar"></div>
												<div className="urgent-end">
													<p><span>5,389</span> Donators</p>
													<p><span>19</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<h4>You have Donated<span>$25</span></h4>
											<button>Donate Again</button>
										</div>
									</div>
								</div> :
								<div>
									<div className="urgent-top">
										<h3>Donation(7)</h3>
										<h5 onClick={onSee}>See all</h5>
									</div>
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img4">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Victims of the Impact of Volcano</h3>
													<div className="search-fund">
														<span>$2,277</span>
														<p>fund raised from $6,310</p>
													</div>
												</div>
												<div className="search-bar-min">
													<div className="urgent-bar"></div>
												</div>
												<div className="urgent-end">
													<p><span>938</span> Donators</p>
													<p><span>26</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<h4>You have Donated<span>$22</span></h4>
											<button>Donate Again</button>
										</div>
									</div>
									<div className="mydonation-donation">
										<div className="search-result">
											<div className="search-img5">
												<div className="urgent-mark">
													<BookmarkSimple size={20} color="#fafafa" weight="duotone" />
												</div>
											</div>
											<div className="search-detail">
												<div className="search-note">
													<h3>Help Victims of Flash Flood In Asia</h3>
													<div className="search-fund">
														<span>$8,775 </span>
														<p>fund raised from $10,540</p>
													</div>
												</div>
												<div className="urgent-bar"></div>
												<div className="urgent-end">
													<p><span>4,471</span> Donators</p>
													<p><span>9</span> days left</p>
												</div>
											</div>
										</div>
										<div className="mydonation-donation-end">
											<h4>You have Donated<span>$22</span></h4>
											<button>Donate Again</button>
										</div>
									</div>
								</div>
							}
						</div> :
						<div className="mydonation-end">
							<h3>My Donation (0)</h3>
							<div className="great">
								<div>
									<SmileySad size={30} color="#ffffff" weight="fill" />
								</div>
								<h2>Great!</h2>
								<p>You have not made a donation</p>
								<button className="nxt" onClick={onMake}>Make a Donation Now</button>
							</div>
							<Menu/>
						</div>
					}

				</div>
			}
		</div>
		)
}


export default MyDonation;