const switcher = document.querySelector('.btn');
const checkBoxes = document.querySelector('.specChar');
const copyBtn = document.querySelector('.copyBtn');
const separator = " ";
const emptyString = "";

//copies the output value to input value once copy button is clicked
copyBtn.addEventListener('click', function() {
    document.getElementById('inputText').value = document.getElementById('outputText').value;
})
//Adds a listener for when the checkbox is checked -- affects textbox of characters to replace
checkBoxes.addEventListener('change', function() {

    if(this.checked){
        document.getElementById('charText').disabled = false;
    } else {
        document.getElementById('charText').disabled = true;
    }
})

//Listener for when the "Shitpost it!" button is pressed
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
    //check box value is checked
    var checkBoxChecked = document.getElementById('specChar').checked;
    //string that will be replaced by the emojis
    var toReplace = separator;

    //if statement to replace separator if specific word/character is to be replaced
    if(document.getElementById('specChar').checked){
        toReplace = document.getElementById('charText').value;
    }

    //replaces all instances of " " with the emoteString
    //if statement if "Collective is chosen"
    if(arrChoice[1].checked) {
        //replaces all spaces in between emojis with empty string
        emoteString = emoteString.replaceAll(separator, emptyString);
        outputText.value = inputString.replaceAll(toReplace,emoteString);

        //Only adds the emote at the end if checkbox is not selected
        if(!document.getElementById('specChar').checked){
            outputText.value += emoteString;
        }
    } else { //if statement when "Sequential" is chosen
        //gets array of separate emojis -- in order   
        const emoArr = emoteString.split(separator);
        //initiates initial index to 0
        var emoCount = 0;

        //loop while inputString has a separator
        while(inputString.indexOf(toReplace) != -1) {
            //replaces first-found separator with the emoji in-order
            inputString = inputString.replace(toReplace, emoArr[emoCount]);

            //goes to next emoji in array
            emoCount = emoCount + 1;

            //resets the count if it reaches the max number
            if(emoCount == emoArr.length) {
                emoCount = 0;
            }


        }
        //replaces the value of output to the replaced text
        outputText.value = inputString;

        //Only adds the emote at the end if checkbox is not selected
        if(!document.getElementById('specChar').checked){
            outputText.value += emoArr[emoCount]
        }

    }

    

    

});