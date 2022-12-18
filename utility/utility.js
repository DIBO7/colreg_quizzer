import c4Data from "../data/chapter_four.json";
import c3Data from "../data/chapter_three.json";
import c2Data from "../data/chapter_two.json";
import c1Data from "../data/chapter_one.json";

const getChapterJson = function(elm){
    if(Number(elm)===1) return c1Data;
    if(Number(elm)===2) return c2Data;
    if(Number(elm)===3) return c3Data;
    if(Number(elm)===4) return c4Data;
}

const cleanupNumbers = function(numberArray){
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