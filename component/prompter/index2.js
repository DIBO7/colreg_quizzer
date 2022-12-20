import React, {useState} from "react";


import SelectLevel from "../levelset";
import Share from "../sharer";

function Prompt({chapters, setChapters, beginGame}){

	let [tell, setToTell] = useState(false) 
	//when this is true the user clicked on "tell a friend" and is ready to share our websites with friends
	let [play, setPlay] = useState(false) // this turns true when the user clicks on 'start quiz' 
	//and turns false again when user "cancels" the test chapters selections

	return(
		<section className="wrapper">

			<section className='panel'>
				<p>
					Hello there! Are you ready to begin your quiz on the maritime Collision Regulations?
				</p>				
			</section>

			<div className="sets">
				
				{
					tell ?					
					<Share />
				:
				<React.Fragment>
					<button onClick={()=>setPlay(true)}> <span className="left"> </span> Yes, Start Quiz <span className="right"> </span> </button>

					<a href={`/about`} className="glass" > <span className="left"> </span> What is this about? <span className="right"> </span> </a>

					<a href={`/about#maker`} className="glass"> <span className="left"> </span> Who made this? <span className="right"> </span> </a>

					<button onClick={()=>setToTell(true)}> <span className="left"> </span> Tell a friend <span className="right"> </span> </button>
				</React.Fragment>				
				}

			</div>

			{play && <SelectLevel 
				closer={()=>setPlay(false)}
				selected = {chapters}
				setSelected = {setChapters}
				enter = {()=>beginGame()}
				/>}

		</section>

		)
}

export default Prompt;