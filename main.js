// document.addEventListener("DOMContentLoaded", function(){
// 	var turn = 0;
// 	var xArray = [];
// 	var oArray = [];
// 	var button = document.querySelectorAll(".tab");
// 	for(var i = 0; i < button.length; i++){
// 		button[i].addEventListener("click", function(){
// 			if(this.innerHTML === "") {
// 				if(turn % 2 === 0){
// 					this.innerHTML = "X";
// 					this.style.backgroundColor = "#7A766D";
// 					turn += 1;
// 					button[i].push(xArray); //this doesn't work
// 				} else {
// 					this.innerHTML = "O";
// 					this.style.backgroundColor = "#6D717A";
// 					turn += 1;
// 					button[i].push(oArray); //this either
// 				}
// 			}
// 		})
// 	}
// 	document.querySelector(".btn-default").addEventListener("click", function() {
// 		window.location.reload();
// 	});
// });

// test below:

document.addEventListener("DOMContentLoaded", function(){
	// declared variables
	var turn = 0;
	var xArray = [];
	var oArray = [];
	var winner = [["#1","#2","#3"],["#4","#5","#6"],["#7","#8","#9"],["#1","#4","#7"],["#2","5#","#8"],["#3","#6","9#"],["#1","#5","#9"],["#7","#5","#3"]];
	// function to check for a win, that will be called later with every click
	function checkWin(){
		for(var j = 0; j < winner.length; j++){
		var win1 = winner[j][0];
		var win2 = winner[j][1];
		var win3 = winner[j][2];
			if((win1 === "X") && (win2.innerHTML === "X") && (win3.innerHTML === "X")){ //started to change this
				alert("X wins!");
			} else if((win1.innerHTML === "O") && (win2.innerHTML === "O") && (win3.innerHTML === "O")){
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
					turn += 1;
					if(turn === 9) { alert("Game over. Press 'Play Again' button for a rematch.") };
					xArray.push(this.getElementById);
					checkWin(); //function doesn't work
				} else {
					this.innerHTML = "O";
					this.style.backgroundColor = "#6D717A";
					turn += 1;
					if(turn === 9) { alert("Game over. Press 'Play Again' button for a rematch.") };
					oArray.push(this.getElementById);
					checkWin();
				}
			}
		})
	}
	document.querySelector(".btn-default").addEventListener("click", function() {
		window.location.reload();
	});
});




