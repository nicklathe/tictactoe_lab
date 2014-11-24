document.addEventListener("DOMContentLoaded", function(){

	var turn = 0;
	var won = false; // prevents continued gameplay after winner has been established
	var winner = [["#t1","#t2","#t3"],["#t4","#t5","#t6"],["#t7","#t8","#t9"],["#t1","#t4","#t7"],["#t2","#t5","#t8"],["#t3","#t6","#t9"],["#t1","#t5","#t9"],["#t7","#t5","#t3"]];
	// function to check for all tiles checked and alert message
	function gameOver() {
		if(turn === 9){ 
			alert("Game over. Press 'Play Again' button for a rematch.");
		}
	}
	// function to updated header with turn indicator 
	function turnXO(){
		if(turn % 2 === 0){
			document.querySelector("h2").innerHTML = "X's turn";
		} else {
			document.querySelector("h2").innerHTML = "O's turn";
		}
	}
	// function to check for a win, that will be called later with every click
	function checkWin(){
		for(var j = 0; j < winner.length; j++){
		var win1 = document.querySelector(winner[j][0]);
		var win2 = document.querySelector(winner[j][1]);
		var win3 = document.querySelector(winner[j][2]);
			if((win1.classList.contains("X")) && (win2.classList.contains("X")) && (win3.classList.contains("X"))){ 
				alert("X wins!");
				won = true; 
			} else if((win1.classList.contains("O")) && (win2.classList.contains("O")) && (win3.classList.contains("O"))){ 
				alert("O wins!");
				won = true; 
			}
		}
	}
	// loops for each click event, and carries out function to update X and O, as well as call checkWin function
	var button = document.querySelectorAll(".tab");
	for(var i = 0; i < button.length; i++){
		button[i].addEventListener("click", function(){
			if(won === true) {
				alert("There is already a winner");
				return;
			}
			if(this.innerHTML === "") {
				if(turn % 2 === 0){
					this.innerHTML = "X";
					this.style.backgroundColor = "#7A766D";
					this.classList.add("X");
					turn += 1;
					gameOver();				
					checkWin();
					turnXO(); 
				} else {
					this.innerHTML = "O";
					this.style.backgroundColor = "#6D717A";
					this.classList.add("O");
					turn += 1;
					gameOver();
					checkWin();
					turnXO();
				}
			}
		})
	}
	// button reloades page, so user can play again
	document.querySelector(".btn-default").addEventListener("click", function() {
		window.location.reload();
	});
});




