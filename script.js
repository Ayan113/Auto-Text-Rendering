const containerEl=document.querySelector(".container");
const namechange=["Ayan Chatterjee","Eren Yeager","Tyler Durder","Tony Stark","Light Yagami","Saul Goodman","Welcome to Sigma-Verse"];
let careerIndex=0;
let characterIndex=0;
updateText();

function updateText(){
    containerEl.innerHTML=`<h1>${namechange[careerIndex].slice(0,characterIndex)}</h1>`;
    characterIndex++;
    if (characterIndex > namechange[careerIndex].length) {
        characterIndex = 0;
        careerIndex = (careerIndex + 1) % namechange.length;
    }
    setTimeout(updateText,250);
}

