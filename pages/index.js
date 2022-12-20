import React, {useState} from 'react';
//import "./index.css";

import Prompt from "../component/prompter";
//import Quiz from "../component/quizer";


function MainPage(){
	
	let [chapters, setChapters] = useState("") 
	//the chapters to test as selected by the user ["A", "B", "C", "D"...]

	return (
		<React.Fragment>

			<h1>How well do you know the Maritime Collision Regulations?</h1>

			{				
					<Prompt 
						chapters = {chapters}
						setChapters = {setChapters}
					/>	
			}
			

		</React.Fragment>
		)
}

export default MainPage;