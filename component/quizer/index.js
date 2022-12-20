import React, {useEffect, useState} from "react";
import styles from "./Index.module.css"

import QuizMetre from "../metre";
import Confirm from "../confirmation";
import Conclude from "../conclusion";


function Quiz({chapterList}){

	let [questions, setQuestions] = useState([]) //holds the result from the api
	let [loading, setLoading] = useState(true) //indicates when its loading
	let [score, setScore] = useState(0); //holds he score of the user
	let [failedQuestions, setFailedQuestions] = useState([]) //holds the questions failed
	let [position, setPosition] = useState(0) //the position the question is from the array
	let [chosen, setChosen] = useState(""); 
	//a state that kepps tracks of the chose option or an empty string if nothing has been chosen
	let [inProgress, setInProgress] = useState(true) //used to denote when asnwering questions is still in progress

	const answerQuestion = function(){
		//this is called whenever a question is being answered either wrongly or correctly
		setLoading(true);		
		//first check if the chosen answer is correct		

		if ( questions[position].correct_answer === chosen ){
			//meaning if the chosen answer is the correct answer
			setScore(score + 5);			
		}else{ //if the answer is not correct
			setFailedQuestions([...failedQuestions, {
				question: questions[position].question,
				player_answer: chosen,
				actual_answer: questions[position].correct_answer,
				explanation: questions[position].explanation,
			}])
		}		
		setChosen("");
		if (position === questions.length - 1){
			//meaning when we have reached the final question
			setInProgress(false);
		}else{ //else just go to the next question
			setPosition(position + 1);	
		}		
		setLoading(false);
	}


	useEffect(()=>{		
		if(chapterList){

			fetch(`/api?chapters=${chapterList}`)
			.then( response => response.json() )
			.then( result => {
				setQuestions(result.data)
				setLoading(false) 
			} )
			.catch( error => {
				console.log(error)
				alert("we are sorry, but an unexpected error occurred!")
			} )
		}
	}, [chapterList])

	return(
		<section className="wrapper">			

		{
			inProgress && 
			<React.Fragment>
				<div className={styles["metre-holder"]}>
					<QuizMetre 
						total = {questions.length}
						questionAnswered = {position}
					/>
				</div>
				
				<section className='panel'>				
					<p>
						{ loading ? "...loading..." : questions[position].question}
					</p>				
				</section>
			</React.Fragment>
		}
			
		{
			!loading && inProgress &&
			<div className="sets">
				
				{
					questions[position].options.map((choice, index)=>{
						return(
							<button onClick={(e)=>setChosen(e.target.textContent)} key={index}> 
								<span className="left"></span>{choice}<span className="right"></span> 
							</button>									
							)
					})
				}
			
			</div>
		}

		{
			!loading && !inProgress && <Conclude 
				score = {score}
				totalQuestions = {questions.length}
				failedQuestions = {failedQuestions}
			/>				
		}

		{
			chosen !== "" && <Confirm 
				closer = {()=>setChosen("")}
				responder = {()=>answerQuestion()}
			/>
		}


	</section>


	)
}

export default Quiz;