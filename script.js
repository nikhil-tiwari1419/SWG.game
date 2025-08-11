function tooglebtn() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('open');
}

function SelectOption(userChoice) {
    document.getElementById('HumanGuess').value = userChoice;
    document.getElementById('dropdown').classList.remove('open')

    const option = ['Snake', 'Water', 'Gun'];
    const computerChoice = option[Math.floor(Math.random() * option.length)];
    document.getElementById('ComputerGuess').value = computerChoice;

    //
    let result = "";
    if (userChoice === computerChoice) {
        result = "It is Draw ‼️";
        // alert('The game is Draw !')
    } else if (userChoice === 'Snake' && computerChoice === 'Water') 
    {
        result = 'You win! 🎉';
       
    } else if (userChoice==='Snake' && computerChoice ==='Gun'){
        result = 'computer win ! 🤦🏻‍♂️';
      
    } else if(userChoice === 'Gun' && computerChoice ==='Water'){
       result = 'you win 🎉' ;
    } else if(userChoice ==='Gun' && computerChoice === 'Snake'){
        result = 'computer win 🤦🏻‍♂️';
    } else if(userChoice === 'Water' && computerChoice === 'Snake'){
       result = 'you win 🎉';
    } else if(userChoice === 'Water' && computerChoice === 'Gun'){
        result = 'computer win 🤦🏻‍♂️';
    }
    let feedback = document.getElementById('feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.id = 'feedback';
        document.getElementById('gameBox').appendChild(feedback);
    }
    feedback.textContent = `You: ${userChoice} | Computer: ${computerChoice} → ${result}`;

    // if (confirm('Play again ! if you want ')) {
    //     document.getElementById('HumanGuess').value = '';
    //     document.getElementById('ComputerGuess').value = '';
    //     feedback.textContent = '';
    // }

}

function refreshPage() {
    location.reload(true);
}

document.getElementById('HumanGuess').addEventListener('focus', tooglebtn);

window.onclick = function (event) {
    if (!event.target.matches('#HumanGuess')) {
        document.getElementById('dropdown').classList.remove('open');
    }
}



