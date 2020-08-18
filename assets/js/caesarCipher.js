//caesar cipher

let positions = [];
const upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const revUpperAlpha = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
const lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const revLowerAlpha = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];


function myWhitespaces (text) {
    for (let i = 0; i < text.length; i++){
        if (text[i] === ' '){
            positions.push(i);
        }
    }
    //console.log(positions)
}



function caesarCipher () {
    positions = [];
    let myEncrypt = '';
    let letter;
    let text = document.getElementById('message').value;
    let iterations = parseInt(document.getElementById('iterations').value);
    myWhitespaces(text);

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < upperAlpha.length; j++) {
            if (text[i] === upperAlpha[j] && iterations + j <= 25) {
                letter = upperAlpha[j+iterations];
                myEncrypt = myEncrypt + letter;
            } else if (text[i] === lowerAlpha[j] && iterations + j <= 25) {
                letter = lowerAlpha[j+iterations];
                myEncrypt = myEncrypt + letter;
            } else if (iterations + j > 25 && text[i] === upperAlpha[j]){
                newIteration = (iterations + j) % 26;
                letter = upperAlpha[newIteration];
                myEncrypt = myEncrypt + letter;
            } else if (iterations + j > 25 && text[i] === lowerAlpha[j]){
                newIteration = (iterations + j) % 26;
                letter = lowerAlpha[newIteration];
                myEncrypt = myEncrypt + letter;
            }
        }
       for (let a = 0; a < positions.length; a++) {
           if (positions[a] == myEncrypt.length) {
            myEncrypt = myEncrypt + ' ';
           }
       }

       
    }
    document.getElementById('result').value = myEncrypt;
}

function DecipherCaesar () {
    positions = [];
    let text = document.getElementById('message').value;
    let iterations = parseInt(document.getElementById('iterations').value);
    myWhitespaces(text);
    let myDecrypt = '';
    let char;

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < upperAlpha.length; j++) {
            if (text[i] === upperAlpha[j] && iterations <= j) {
                char = upperAlpha[j - iterations];
                myDecrypt = myDecrypt + char;
            } else if (text[i] === lowerAlpha[j] && iterations <= j) {
                char = lowerAlpha[j - iterations];
                myDecrypt = myDecrypt + char;
            } else if (iterations + j > 25 && text[i] === revUpperAlpha[j] ){
                newIteration = (iterations + j) % 26;
                console.log(newIteration + 1)
                char = revUpperAlpha[newIteration];
                myDecrypt = myDecrypt + char;
            } else if (iterations + j > 25 && text[i] === revLowerAlpha[j]){
                newIteration = (iterations + j) % 26;
                char = revLowerAlpha[newIteration];
                myDecrypt = myDecrypt + char;
            }
        }
        for (let a = 0; a < positions.length; a++) {
            if (positions[a] == myDecrypt.length) {
             myDecrypt = myDecrypt + ' ';
            }
        }
    }
    document.getElementById('result').value = myDecrypt;
}

//Hx hvshur txh lvwr ixqflrqh