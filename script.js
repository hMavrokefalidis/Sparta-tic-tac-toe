var turn = "x";
var board = [];

//on click effect to add a class, if turn = 1 it is X else it is O
$("td").click(function(){
  if (!($(this).html() == "X" || $(this).html() == "O")) {
    if (turn == "x") {
      $(this).addClass("X").html("X")
      turn = "o"
      $("h2").html("It is O's turn");
      $("td").each(boardFiller);
      }
    else{
      $(this).addClass("O").html("O")
      turn = "x"
      $("h2").html("It is X's turn");
      $("td").each(boardFiller);
    }
  }
})

function boardFiller(index, block){
  board[index] = $(this).html();

  checkWinCondition()
}

function checkWinCondition(){
  if (board[0] == "X" && board[1] == "X" && board[2] == "X" || board[0] == "O" && board[1] == "O" && board[2] == "O"){
    $(location).attr('href', 'picture.html')
  }else if (board[3] == "X" && board[4] == "X" && board[5] == "X" || board[3] == "O" && board[4] == "O" && board[5] == "O" ){
    $(location).attr('href', 'picture.html')
  }else if (board[6] == "X" && board[7] == "X" && board[8] == "X" || board[6] == "O" && board[7] == "O" && board[8] == "O" ){
    $(location).attr('href', 'picture.html')
  }else if (board[2] == "X" && board[5] == "X" && board[8] == "X" || board[2] == "O" && board[5] == "O" && board[8] == "O" ){
    $(location).attr('href', 'picture.html')
  }else if (board[1] == "X" && board[4] == "X" && board[7] == "X" || board[1] == "O" && board[4] == "O" && board[7] == "O" ){
    $(location).attr('href', 'picture.html')
  }else if (board[0] == "X" && board[3] == "X" && board[6] == "X" || board[0] == "O" && board[3] == "O" && board[6] == "O" ){
    $(location).attr('href', 'picture.html')
  }else if (board[0] == "X" && board[4] == "X" && board[8] == "X" || board[0] == "O" && board[4] == "O" && board[8] == "O" ){
    $(location).attr('href', 'picture.html')
  }else if (board[2] == "X" && board[4] == "X" && board[6] == "X" || board[2] == "O" && board[4] == "O" && board[6] == "O" ){
    $(location).attr('href', 'picture.html')
  }
}

function reset() {
  $("#reset").click(function () {
    $("td").removeClass("X").html("");
    $("td").removeClass("O").html("");
    $("h2").html("It is X's turn");
  });
}
//reset button to clean up the board anytime, reset turn to 1

//top left, should say which turn is up
