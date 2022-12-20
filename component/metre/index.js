import React from "react";
import styles from "./Index.module.css"


function QuizMetre({total, questionAnswered}){
	
	return(
		<div id="meter" className={styles.meter}>
			
			<div className={styles.analog}>
				<span className="var">Total </span> 
				<span className="value">{total}</span>
			</div>

			<div className={styles.reader}>
				<span className={styles.answered} style={{width: `${(questionAnswered / total) * 100}%`}}></span>
			</div>

		</div>

		)
}

export default QuizMetre;