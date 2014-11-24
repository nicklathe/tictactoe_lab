document.addEventListener("DOMContentLoaded", function(){
	// declared variables
	var turn = 0;
	var xArray = [];
	var oArray = [];
	var winner = [["#t1","#t2","#t3"],["#t4","#t5","#t6"],["#t7","#t8","#t9"],["#t1","#t4","#t7"],["#t2","#t5","#t8"],["#t3","#t6","#t9"],["#t1","#t5","#t9"],["#t7","#t5","#t3"]];
	// function to check for a win, that will be called later with every click
	function checkWin(){
		for(var j = 0; j < winner.length; j++){
		var win1 = document.querySelector(winner[j][0]);
		var win2 = document.querySelector(winner[j][1]);
		var win3 = document.querySelector(winner[j][2]);
			if((win1.classList.contains("X")) && (win2.classList.contains("X")) && (win3.classList.contains("X"))){ 
				alert("X wins!");
			} else if((win1.classList.contains("O")) && (win2.classList.contains("O")) && (win3.classList.contains("O"))){ 
				alert("O wins!");
			}

		}

	}
	var button = document.querySelectorAll(".tab");
	for(var i = 0; i < button.length; i++){
		button[i].addEventListener("click", function(){
			if(this.innerHTML === "") {
				if(turn % 2 === 0){
					this.innerHTML = "X";
					this.style.backgroundColor = "#7A766D";
					this.classList.add("X");
					turn += 1;
					if(turn === 9) { alert("Game over. Press 'Play Again' button for a rematch.") };				
					checkWin(); 
				} else {
					this.innerHTML = "O";
					this.style.backgroundColor = "#6D717A";
					this.classList.add("O");
					turn += 1;
					if(turn === 9) { alert("Game over. Press 'Play Again' button for a rematch.") };
					checkWin();
				}
			}
		})
	}
	document.querySelector(".btn-default").addEventListener("click", function() {
		window.location.reload();
	});
});




