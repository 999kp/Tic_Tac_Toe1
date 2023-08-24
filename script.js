let gameStarted=false;
function start()
    {
      player1=prompt("Enter name of player 1");
      player2=prompt("enter name of player 2");
      if(!player1==""&&!player2=="")
      {
      gameStarted=true;
      start_game();
      }
      else
      {
        alert("please enter names");
      }
    }

let gameEnded = false;
let playerSymbol = "X";
function start_game()
{
  if(gameStarted)
    {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).addEventListener(
          "click", 
          function() {
            if (this.innerHTML === "" && !gameEnded)
             {
                this.innerHTML = playerSymbol;
                this.classList.add(playerSymbol.toLowerCase());
                checkwinner();
                if (playerSymbol === "X")
                      playerSymbol = "O";
                else
                      playerSymbol = "X";
              }
                  
          }
        );
      }
    }
      else
      {
        alert("First register");
      }
      
    }
function checkwinner()
          {
            /*for (let i = 1; i <= 9; i++) {
              document.getElementById(i),innerHTML;
              if(a==="")
              {
                alert("...");
              }
             
          }*/
          let win_position = [
            [1, 2, 3], [4, 5, 6], 
            [7, 8, 9], [1, 4, 7], 
            [2, 5, 8], [3, 6, 9], 
            [1, 5, 9], [3, 5, 7]
          ];
          for (let i = 0; i < win_position.length; i++) 
          {

          if (
            document.getElementById(win_position[i][0]).innerHTML === playerSymbol &&
            document.getElementById(win_position[i][1]).innerHTML === playerSymbol &&
            document.getElementById(win_position[i][2]).innerHTML === playerSymbol
          ) {
            if(playerSymbol=="X")
            {
              document.getElementById("p1").innerHTML=player1+"  won."
            }
            else
            {
              document.getElementById("p1").innerHTML=player2+"  won."
            }
            gameEnded=true;
          }
          
          
          }

        }