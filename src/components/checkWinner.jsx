// rules for the game : 
// scissors win over  paper and lizard , and lose from : spock and rock
// paper    win over  rock and spock   , and lose from : scissor and lizard
// rock     win over  lizard and scissor, and lose from: paper and spock 
// lizard   win over  spock and paper   , and lose from: scissor and rock
// spock    win over  scissor and rock  , and lose from: paper and lizard 

const chooseArray = ["Scissors" , "Paper" , "Rock" , "Lizard" , "Spock"]

// 0 > 1 , 3 and 0 < 4 , 2 
// 1 > 2 , 4 and  1 < 0 , 3 
// 2 > 3 , 0  and 2 < 1 , 4 
// 3 > 4 , 1  and 3 < 2 , 0
// 4 > 0 , 2 and 4  < 1 , 3 

export const getWinner = ( yourChoose , computerChoose ) =>{
    const you = chooseArray.indexOf(yourChoose)
    const computer = chooseArray.indexOf(computerChoose)

    
    switch (you) {
        case 0 : 
                if (computer == 1 | computer == 3){
                    return "winner"
                }else if(computer == 4 | computer == 2){
                    return "loser"
                }else{
                    return "draw"
                }
        case 1 :
                if (computer == 2 | computer == 4){
                    return "winner"
                }else if(computer == 0 | computer == 3 ){
                    return "loser"
                }else{
                    return "draw"
                }
        case 2 :
                if (computer == 0 | computer == 3){
                    return "winner"
                }else if(computer == 4 | computer == 1){
                    return "loser"
                }else{
                    return "draw"
                }
        case 3 :
                if (computer == 1 | computer == 4){
                    return "winner"
                }else if(computer == 0 | computer == 2){
                    return "loser"
                }else{
                    return "draw"
                }
                break ;
        case 4 :
                if (computer == 0 | computer == 2){
                    return "winner"
                }else if(computer == 1 | computer == 3){
                    return "loser"
                }else{
                    return "draw"
                }
    }  
}