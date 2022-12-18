import React, {useState, useEffect} from "react";
//import "./index.css";

import Share from "../sharer";

function Conclude({score, totalQuestions, failedQuestions}){

	let [comment, setComment] = useState("") //

	useEffect(()=>{
		if ((score / (totalQuestions * 5)) * 100 > 85){
			setComment("a very remarkable")			
		} else if ((score / (totalQuestions * 5)) * 100 > 75){
			setComment("an excellent")
		} else if ((score / (totalQuestions * 5)) * 100 > 55){
			setComment("a good")
		} else if ((score / (totalQuestions * 5)) * 100 > 35){
			setComment("a below average")
		}else{
			setComment("a very low")
		}
	}, [score, totalQuestions])

	return (
		<section className="wrapper">			
			
			<section className='panel'>
				<h3>Your Score</h3>
				<p>	You answered { Math.round((score / (totalQuestions * 5)) * 100) }% of {totalQuestions} questions correctly. That is {comment} score.</p>
				<br />
				<p>If you like the quiz, please help us by sharing your score with some friends of yours!!</p>
			</section>

			<div className="sets">
				<Share 
					preMessageText={`I took a colreg quiz and I got ${comment} score`}
				/>
			</div>

			<section className="panel">
				<h3>What You Got Wrong</h3>
				{failedQuestions.length === 0 && <p>absolutely nothing!!!</p>}
				{
					failedQuestions.map((q, index)=>{
						return(
							<p key={index}>
								{q.question} 								
								<br /><small style={{color: "red"}}>[you chose: {q.player_answer}]</small>
								<br /><small>[explanation: {q.explanation}] </small> 
							</p>
							)
					})
				}

			</section>

		</section>		
		)

}

export default Conclude;