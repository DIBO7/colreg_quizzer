import Quiz from "../../component/quizer";
import { useRouter } from "next/router";


function MainPage(){

    const {route} = useRouter()
    console.log(route)

	return (
		<>

			<h1>How well do you know the Maritime Collision Regulations?</h1>

			{
					<Quiz 
						chapterList = {"1"}
					/>
	
			}
			

		</>
		)
}

export default MainPage;