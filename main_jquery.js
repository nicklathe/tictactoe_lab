$(document).ready(function() {
	$("#grid").effect("bounce",{ times: 4 }, 500 );
	var turn = 0;
	var won = false; // prevents continued gameplay after winner has been established
	var winner = [["#t1","#t2","#t3"],["#t4","#t5","#t6"],["#t7","#t8","#t9"],["#t1","#t4","#t7"],["#t2","#t5","#t8"],["#t3","#t6","#t9"],["#t1","#t5","#t9"],["#t7","#t5","#t3"]];

	// first function. jquery doesn't fit in here.
	// function gameOver() {
	// 	if(turn === 9){ 
	// 		alert("Game over. Press 'Play Again' button for a rematch.");
	// 	}
	// }
	// second function. Used ".html" to update the header on player turn
	function turnXO(){
		if(turn % 2 === 0 && won === false){
			$("h2").html("X's turn").effect("bounce",{times:2}, 500);
		} else if(turn % 2 === 1 && won === false) {
			$("h2").html("O's turn").effect("bounce",{times:2}, 500);
		}
	}
	// function checks for winning combo
	function checkWin(){
		for(var j = 0; j < winner.length; j++){
			var win1 = $(winner[j][0]);
			var win2 = $(winner[j][1]);
			var win3 = $(winner[j][2]);
			if(win1.hasClass("X") && win2.hasClass("X") && win3.hasClass("X")){
				$("h2").html("X WINS!").css({fontSize: "80px"}).effect("pulsate", 500);
				won = true; 
			} else if(win1.hasClass("O") && win2.hasClass("O") && win3.hasClass("O")){
				$("h2").html("O WINS!").css({fontSize: "80px"}).effect("pulsate", 500);
				won = true; 
			}
		}
	}
	// main gameplay function. listens for a click on a tab, and then carries out a series of commands and functions
	$(".tab").click(function() {
		if(won === true) {
				alert("There is already a winner");
				return;
			}
		if($(this).html() === ""){
			if(turn % 2 === 0){
				$(this).html("X").css({backgroundColor: "#7A766D"}).addClass("X");
				turn += 1;
				checkWin();
				// gameOver();
				turnXO();
			} else {
				$(this).html("O").css({backgroundColor: "#6D717A"}).addClass("O");
				turn += 1;
				checkWin();
				// gameOver();
				turnXO();
			}
		}
	});
	// function to reload the page.
	$(".btn-default").click(function(){
		window.location.reload();
	});
});