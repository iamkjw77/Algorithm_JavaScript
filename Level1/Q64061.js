function solution(board, moves) {
    var answer = 0;
    var arr = Array.from(board, v => Array());
    var arr2 = [];

    for(var i=0; i<board.length; i++){
      for(var j=0; j<board.length; j++){
        arr[i][j] = board[j][i];
      }
      arr[i] = arr[i].reverse();
    }


    for(var i=0; i<moves.length; i++){
      if(arr[moves[i]-1].pop() == 0){
        arr[moves[i]-1].pop();
      }else{
        arr[moves[i]-1].pop();
      }

    }
    return arr;
    /*board = board.map((v,i) => {
      return v.map((val,idx) => {
        return val = board[idx][i];
      });
      v.reverse();
    });
    */

}
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));
