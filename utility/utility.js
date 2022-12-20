import c4Data from "../data/chapter_four.json";
import c3Data from "../data/chapter_three.json";
import c2Data from "../data/chapter_two.json";
import c1Data from "../data/chapter_one.json";

import { shuffleArray } from "./figure";

//totals  c1=7, c2=30, c3=25, c4=14
//randoms c1=4, c2=10, c3=8, c4=6

const generateRandoms = function(max_Number, len){
    //the maxNumber is the highest of the numbers to be generated..not more than that...
    //len is the length of the array you want
    let arr = []

    const fillArrayWithUniqueNumbers = () => {
        let randy = Math.ceil(Math.random() * max_Number)
        if(!arr.includes(randy))arr.push(randy);
        
        if(arr.length === len){
            return arr
        }else{
            fillArrayWithUniqueNumbers()
        }
    }

    fillArrayWithUniqueNumbers()

    return arr;
}


const getJsonDataRandomly = function(randomArray, dataObject){
    let arr = [];
    randomArray.forEach((obj)=>{
        arr.push(dataObject[obj - 1]);//cos indexing starts at zero
    })
    return arr;
}

const getChapterJson = function(elm){
    if(Number(elm)===1) return getJsonDataRandomly(generateRandoms(7, 4), c1Data);
    if(Number(elm)===2) return getJsonDataRandomly(generateRandoms(30, 10), c2Data);
    if(Number(elm)===3) return getJsonDataRandomly(generateRandoms(25, 8), c3Data);
    if(Number(elm)===4) return getJsonDataRandomly(generateRandoms(14, 6), c4Data);
}

const cleanupNumbers = function(numberArray){//removes doubles
    let numb = [];
    numberArray.forEach(n => {
        if(!numb.includes(n)) numb.push(n)
    });
    return numb;
}


export const getRespectiveChapters = (chapterArray, maxChapter=4) => {
    let arr = [];
    cleanupNumbers(chapterArray).forEach(element => {//beware that the element here is a string eg "3"
        if(Number(element) <= maxChapter && Number(element) > 0)arr = arr.concat(getChapterJson(element))       
    });

    //here is where I will toy with the options cos arr holds alll question objects

    let arrToUse = []

    arr.forEach((a, ind)=>{
        //pick any 3, add the answers and then sort it randomly
        let random4numbers = generateRandoms(a.options.length, 3);//returns a list of 3 random numbers between 1-4
        let opts = [a.answer, a.options[random4numbers[0] - 1], a.options[random4numbers[1]-1], a.options[random4numbers[2]-1]]
        //sort opts it randomly
        opts = shuffleArray(opts)
        arrToUse.push({question: a.question, options:opts, correct_answer: a.answer, explanation: a.explanation, sn: ind+1, section: a.chapter})
    })

    return arrToUse
}