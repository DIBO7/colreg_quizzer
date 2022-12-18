import c4Data from "../data/chapter_four.json";
import c3Data from "../data/chapter_three.json";
import c2Data from "../data/chapter_two.json";
import c1Data from "../data/chapter_one.json";

//totals  c1=7, c2=30, c3=25, c4=14
//randoms c1=4, c2=10, c3=8, c4=6

const generateRandoms = function(max_Number, len){
    let arr = []

    const fillArrayWithUniqueNumbers = () => {
        let randy = Math.ceil(Math.random() * max_Number)
        if(!arr.includes(randy))arr.push(randy);
        
        if(arr.length === len){
            console.log(arr)
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
    return arr
}