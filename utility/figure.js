export const shuffleArray = function(arr){
    //Note, I copied this from stack overflow, I don't fully understand it but it works
    //DON'T EVEN THINK OF TOUCHING THIS EXCEPT YOU ARE A PROPHET OF GOD!
    let currentIndex = arr.length, randomIndex;
    
    //while there remain elements to shuffle 
    while(currentIndex != 0){
        
        //pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //and swap it with the current element
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }

    return arr
}