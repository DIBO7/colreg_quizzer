import Quiz from "../../component/quizer";
import { useRouter } from "next/router";


function MainPage(data){

    const {query} = useRouter()  

	return (
		<>

			<h1>How well do you know the Maritime Collision Regulations? </h1>

			{
					<Quiz 
						chapterList = {query.chapters}
					/>
	
			}
			

		</>
		)
}

export default MainPage;
/*
export async function getServerSideProps(){

	return {props: {data}}
}
*/