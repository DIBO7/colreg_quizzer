import React, {useState} from 'react';
//import "./index.css";

import Prompt from "../component/prompter";
import Quiz from "../component/quizer";


function MainPage(){
	
	let [chapters, setChapters] = useState([]) 
	//the chapters to test as selected by the user ["A", "B", "C", "D"...]
	let [gameOn, setGameOn] = useState(false) 
	//this goes on when we have selected the chapters and ready to begin the game

	return (
		<React.Fragment>

			<h1>How well do you know the Maritime Collision Regulations?</h1>

			{
				gameOn ?
					<Quiz 
						chapterList = {chapters}
					/>
				:
					<Prompt 
						chapters = {chapters}
						setChapters = {setChapters}
						beginGame = {()=>setGameOn(true)}
					/>	
			}
			

		</React.Fragment>
		)
}

export default MainPage;