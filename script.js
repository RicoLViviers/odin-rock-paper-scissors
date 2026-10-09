function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice()
{
    let num = getRandomInt(3);

    switch (num) {
        case 0:
            return "rock " + num;
            break;
        case 1:
            return "paper"+ num;
            break;
        default:
            return "scissor"+ num;
            break;
    }
}

console.log(getComputerChoice());