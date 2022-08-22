const switcher = document.querySelector('.btn');
const separator = " ";

switcher.addEventListener('click', function() {
    // document.body.classList.toggle('light-theme');
    // document.body.classList.toggle('dark-theme');

    //retrieves the aliases for all text boxes
    const inputText = document.getElementById('inputText');
    const emoteText = document.getElementById('emoteText');
    const outputText = document.getElementById('outputText');
    var arrChoice = document.getElementsByName('arrangeChoice');

    //initial variables for the input text string and output text
    var inputString = inputText.value;
    var emoteString = emoteText.value;

    //replaces all instances of " " with the emoteString

    //if statement if "Collective is chosen"
    if(arrChoice[1].checked) {
        //replaces all spaces in between emojis with empty string
        emoteString = emoteString.replaceAll(" ", "");
        outputText.value = inputString.replaceAll(separator,emoteString);
        outputText.value += emoteString;
    } else { //if statement when "Sequential" is chosen
        //gets array of separate emojis -- in order   
        const emoArr = emoteString.split(separator);
        //initiates initial index to 0
        var emoCount = 0;

        //loop while inputString has a separator
        while(inputString.indexOf(separator) != -1) {
            //replaces first-found separator with the emoji in-order
            inputString = inputString.replace(separator, emoArr[emoCount]);

            //goes to next emoji in array
            emoCount = emoCount + 1;

            //resets the count if it reaches the max number
            if(emoCount == emoArr.length) {
                emoCount = 0;
            }
        }

        //updates the outputText
        outputText.value = inputString + emoArr[emoCount];


    }
    

});