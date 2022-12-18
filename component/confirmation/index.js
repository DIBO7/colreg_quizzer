import React, {useEffect, useRef} from 'react';
import styles from "./Index.module.css"


function SelectLevel({closer, responder}){

	let content = useRef();

	function closeWindow(){ //this fucntion allows the minimizing animation on popup window closure
		content.current.classList.remove("opened");
		setTimeout(()=>{
			closer()
		}, 280) //200 works smoothly fine the least -> anything less would not be smooth
	}

	function onYes(){ //this function runs when you click "yes i'm sure" of the selcted answer
		closeWindow(); //but because of the animation to run smoothly we have to close the window first!
		setTimeout(()=>{
			responder() //this answers the question
		}, 400)		//setting timout to about 400 mili secods is necessary to let the page animation run smoothly
	}

	useEffect(()=>{
		setTimeout(()=>{
			content.current.classList.add("opened");
		}, 50)
	}, [])

	return(
		<section id="popup" ref={content} className={styles.popup}>
			<div id="overlay"></div>

			<div id="display" className={styles.display}>

				<p>Are you sure that's your final answer?</p>


				<div id="decide" className={styles.decide}>
					<button onClick={()=>onYes()}>Yes, sure</button>
					<button onClick={()=>closeWindow()} >No, please</button>
				</div>

			</div>

		</section>
		)
}

export default SelectLevel;