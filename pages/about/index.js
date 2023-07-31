import React from "react";
//import "./index.css";


function About(){

	return (
		<React.Fragment>

			<h1>How well do you know the Maritime Collision Regulations?</h1>

			<section className="wrapper note">

					<h2> What ColReg Quiz is about </h2>

					<p>
						The International Regulations for Preventing Collisions at Sea (the COLREG or rules of the road) is a very important
						maritime document albeit a very lenghty one. The aim of the COLREG is to establish rules for collision-avoidance 
						and safety at sea. Hence, navigating officers are required to assimilate the rules.										
					</p>

					<p>
						That is probably easier said than done. Without practising the actual contents of the regulations, you run the risk of forgetting
						what you have read, just like every other human being (or worse, every other student!). You read some, forget some, relearn some
						and ignore some. Its really messy to keep track of what you remember and {"what you don't"}.
					</p>

					<p>
						This is where testing your knowledge can help. Here, your knowledge are tested not by asking you to state any of the rules, 
						but by asking questions that you would have to apply the contents of the document at random. So have fun while you learn!
					</p>


					<br/><br/><br/>
					<h2 id="maker"> Who Created This Quiz </h2>

					<p>
						This COLREG quiz app is created by <a target="_blank" rel="noreferrer" href="https://www.ioweb.pro">Ibrahim Oduola</a>.
					</p>

					<p>
						Ibrahim is a first class graduate of nautical science from Regional Maritime University, Ghana. 
						He has also dedicated a significant part of time to pursue his interest in computer program development. 
						And so when he was learning the COLREG himself, there were some hiccups. And so he thought it would be 
						helpful if he can get randomly tested after every reading. And voila, this COLREG quiz tests
						was born! Hope it helps you too!
					</p>

					<p>
						You can reach me via <a target="_blank" rel="noreferrer" href="https://www.twitter.com/ioweb_pro/">my twitter (@ioweb_pro)</a> 
					</p>

			</section>

		</React.Fragment>


		)
}

export default About;
