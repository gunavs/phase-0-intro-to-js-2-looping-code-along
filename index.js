// Code your solutions in this file
const stringArray = ["Charlie", "Samip", "Ali"]
function writeCards(stringArray, eventName) {
    const returnArray = [];
    for (let i=0; i<stringArray.length; i++) {
        returnArray[i] = `Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`;
    }
    return returnArray;
}

function countDown(someint) {
    while (someint>=0) {
        console.log(someint--);
    }
}

