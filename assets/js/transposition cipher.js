
function encryptTransp () {
    let newMessage = '';
    str = document.getElementById('message').value;
    key = parseInt(document.getElementById('iterations').value);

    if (key >= str.length/2 || key < 2){
        return 'wrong key';
    }
    let lists = new Array(key);
    for (let i = 0; i < key; i++){
        lists[i] = [];
    }
    let remainder;
    for (let i = 0; i < str.length; i++){
        remainder = i % key;
        lists[remainder].push(str[i]);
    }

    lists.forEach(row => {
        row.forEach(cell => {
            newMessage = newMessage + cell;
        })
    });
    document.getElementById('result').value = newMessage;
}


encryptTransp('Common sense is not so common.', 8);

function desencrypt (){
    let newMessage = '';
    let str = document.getElementById('message').value;
    let key = parseInt(document.getElementById('iterations').value);

    if (key >= str.length/2 || key < 2){
        return 'wrong key';
    }
    let numberOfColumns = Math.ceil(str.length / key);
    let shadeBoxes = (key * numberOfColumns) - str.length;

    let plaintext = new Array(numberOfColumns);
    for (let i = 0; i < numberOfColumns; i++){
        plaintext[i] = [''];
    }

    let column = 0;
    let row = 0;

    for (let i = 0; i < str.length; i++){
        plaintext[column] += str[i];
        column +=1;
        
        if (column == numberOfColumns || column == numberOfColumns -1 &&
            row >= key - shadeBoxes){
                column = 0;
                row += 1;
            }
        
    }
    plaintext.forEach(row => {
            newMessage = newMessage + row;
        });
    document.getElementById('result').value = newMessage;

}

desencrypt("Cenoonommstmme oo snnio. s s c", 8);

