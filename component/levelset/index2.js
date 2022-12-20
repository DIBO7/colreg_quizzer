import React, {useEffect, useRef} from 'react';
import styles from "../../styles/Levelset.module.css";


function SelectLevel({closer, selected, setSelected, enter}){

	//let [selected, setSelected] = useState([])
	//an empty array to hold all the parts selected
	let content = useRef()

	function SELECT(something){ //this is what would be used to select
		if(selected.includes(something)){
			setSelected(selected.filter(thing=>thing !== something));
		}else{
			setSelected([...selected, something])
		}
	}

	function closeWindow(){ //this fucntion allows the minimizing animation on popup window closure
		content.current.classList.remove("opened");
		setTimeout(()=>{
			closer()
		}, 280) //200 works smoothly fine the least -> anything less would not be smooth
	}

	function startGame(){ //this function begins the game
		closeWindow(); //but because of the animation to run smoothly we have to close the window first!
		setTimeout(()=>{
			enter() //this calls the function that actually begins the game...
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

				<h2>Pick the chapter(s) you want?</h2>

				<div className={styles.selectors}>
					<button > 
						<span className={styles.left}> </span> General <span className={styles.right}> </span> 
					</button>
					
					<button > 
						<span className={styles.left}> </span> Steering and Sailing Rules <span className={styles.right}> </span> 
					</button>
					
					<button > 
						<span className={styles.left}> </span> Lights and Shapes <span className={styles.right}> </span> 
					</button>
					
					<button > 
						<span className={styles.left}> </span> Sound and Lights <span className={styles.right}> </span> 
					</button>
					
					{/*
						
						<button > 
							<span className={styles.left}> </span> Exemptions <span className={styles.right}> </span> 
						</button>

						<button > 
							<span className={styles.left}> </span> Verification Of Compliance <span className={styles.right}> </span> 
						</button>

					*/}
					

				</div>

				<div id="action" className={styles.action}>
					{ selected.length > 0 ? 
						<button className={styles.enlarge} onClick={()=>startGame()} >Begin Test</button>
						:
						<button  onClick={()=>closeWindow()} className={styles.shrink}>cancel</button>
					}
				</div>

			</div>

		</section>
		)
}

export default SelectLevel;