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
        return "Computer won " + computerScore;
    }
    else if (humanChoice == "rock" && computerChoice == "scissor")
    {
        humanScore++;
        return "Human won " + humanScore;
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
        humanScore++;
        return "Human won " + humanScore;
    }
    else if (humanChoice == "paper" && computerChoice == "paper")
    {
        return "Tie";
    }
    else if (humanChoice == "paper" && computerChoice == "scissor")
    {
        computerScore++;
        return "Computer won" + computerScore;
    }
    else if (humanChoice == "scissor" && computerChoice == "rock")
    {
        computerScore++;
        return "Computer won" + computerScore;
    }
    else if (humanChoice == "scissor" && computerChoice == "paper")
    {
        humanScore++;
        return "Human won " + humanScore;
    }
    else if (humanChoice == "scissor" && computerChoice == "scissor")
    {
        return "Tie";
    }
    
}


let round = 0;

while (round <= 4)
{
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(playRound(humanChoice, computerChoice));
    round ++;

    if (round == 5)
    {
        if (humanScore > computerScore)
        {
            console.log("The human won the 5 rounds");
        }
        else if (humanScore < computerScore)
        {
            console.log("The computer won the 5 rounds");
        }
        else 
        {
            console.log("The game was a tie");
        }
    }
}