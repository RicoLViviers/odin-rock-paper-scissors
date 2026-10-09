function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice()
{
    let num = getRandomInt(3);

    switch (num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissor";
            break;
    }
}

function getHumanChoice()
{
    let input = prompt("rock/paper/scissor: ");

    return input.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == "rock" && computerChoice == "rock")
    {
        return "Tie";
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {
        computerScore++;
        return "Computer won ";
    }
    else if (humanChoice == "rock" && computerChoice == "scissor")
    {
        humanScore++;
        return "Human won ";
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
        humanScore++;
        return "Human won ";
    }
    else if (humanChoice == "paper" && computerChoice == "paper")
    {
        return "Tie";
    }
    else if (humanChoice == "paper" && computerChoice == "scissor")
    {
        computerScore++;
        return "Computer won";
    }
    else if (humanChoice == "scissor" && computerChoice == "rock")
    {
        computerScore++;
        return "Computer won" ;
    }
    else if (humanChoice == "scissor" && computerChoice == "paper")
    {
        humanScore++;
        return "Human won ";
    }
    else if (humanChoice == "scissor" && computerChoice == "scissor")
    {
        return "Tie";
    }
    
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const text = document.getElementById("text");
const humScore = document.getElementById("humScore");
const compScore = document.getElementById("comScore");

function playGame(humanChoice)
{
    text.innerText = playRound(humanChoice, getComputerChoice());

    humScore.innerText = "Human score: " + humanScore;
    compScore.innerText = "Computer score: " + computerScore;

    if (humanScore === 5 || computerScore === 5)
    {
        if (humanScore === 5)
        {
            text.innerText = "Human won the game!";
        }
        else
        {
            text.innerText = "Computer won the game!";
        }

        humanScore = 0;
        computerScore = 0;

        humScore.innerText = "Human score: " + humanScore;
        compScore.innerText = "Computer score: " + computerScore;
    }
}

rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissor.addEventListener("click", () => {
    playGame("scissor");
});