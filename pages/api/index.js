import { getRespectiveChapters } from "../../utility/utility";

//get the json for each chapter
//depending on some keywords, I would then prepare an array of chapters to work with
//for each object in that array, shuffle the options randomly with one correct answer
//the object in the array to be returned should look something like the below;
/*
{
  id: ""
  question: "",
  answer: "",
  options: ["", "", "", ""]
  explanation: 
}
*/

export default function handler(req, res) {

  const {method, query} = req
  /*
  Things I am expecting from the query are;
  1. chapters; a string of chapters, with the numbers spaced (chapters=1%202%203; thats chapters="1 2 3")
  */

  if(method === "GET"){
    let queried_chapter_array = []
    const queried_chapter = query.chapters || "" //just incase is itsn't assigned, assume nothing for now
    
    for (let index = 0; index < queried_chapter.length; index++) {
      queried_chapter_array.push(queried_chapter[index]);      
    }

    let dataOBJ = getRespectiveChapters(queried_chapter_array)

    res.status(200).json({ data: dataOBJ.length })
  }else{
    res.status(405).json({'detail': "method not allowed"})
  }

}
