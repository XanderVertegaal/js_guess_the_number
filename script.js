window.alert("Welkom!")

let myName = window.prompt('Vul hier je naam in:', 'Bert');
let myMin = window.prompt('Vul hier een mininumwaarde in:', '0');
let myMax = window.prompt('Vul hier een maximumwaarde in:', '10')

let correctAnswer = Math.floor((Math.random() * (parseInt(myMax) + 1)) + parseInt(myMin));

let myAnswer = window.prompt("Hoi " + myName + '! De computer heeft een getal tussen ' + myMin + ' en ' + myMax + ' in gedachten genomen. Welk getal denk je dat het is? Je krijgt 5 pogingen.' + correctAnswer);

attempts = 1
while (attempts < 5) {
    if (myAnswer == correctAnswer) {
        window.alert("Gefeliciteerd! Je hebt het juist geraden! Het juiste antwoord was namelijk " + correctAnswer + ". Je hebt hiervoor " + attempts + " poging(en) nodig gehad.");
        attempts += 5;
    }
    else {
        window.alert("Helaas, je zat ernaast. Je hebt nog " + (5 - attempts) + ' poging(en) over.');
        attempts++;
        myAnswer = window.prompt('Poging #' + attempts + ':');
    }
}

if (attempts === 5) {
    window.alert("Helaas, je hebt geen pogingen meer over. Het juiste antwoord was: " + correctAnswer + '.')
}

window.alert("Bedankt voor het spelen. Tot de volgende keer!");