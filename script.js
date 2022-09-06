let userScore=0;
let compScore=0;
const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const scoreboard_div= document.querySelector(".scoreboard");
const result_p= document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissor_div= document.getElementById("s");

function compchoice(){
    const choices = ['r','p','s'];
    const random= Math.floor(Math.random() * 3);
    return choices[random];
}

function convert(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissor";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convert(user)} beats ${convert(computer)}. You win!`
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){ userChoice_div.classList.remove('green-glow')}, 300);

}

function lose(user, computer){
    compScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result_p.innerHTML = `${convert(user)} loses to ${convert(computer)}. You lost`  
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300);//same as earlier setTimeout
  
}

function draw(user, computer){
    result_p.innerHTML = `${convert(user)} equals ${convert(computer)}. It's a draw`    
}

function game(userChoice){
    const computerChoice= compchoice();
    switch (userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;            
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();