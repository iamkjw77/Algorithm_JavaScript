function solution(board, moves) {
    var cnt = 0;
    var arr = [];

    for(var i=0; i<moves.length; i++){
      for(var j=0; j<board.length; j++){
        if(board[j][moves[i]-1] !== 0){
          arr.push(board[j][moves[i]-1]);
          board[j][moves[i]-1] = 0;
          break;
        }
      }
      if(arr.length >= 2){
        if(arr[arr.length-1] === arr[arr.length-2]){
          arr.splice(arr.length-2,2);
          cnt += 2;
        }
      }
    }
    return cnt;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])); // 4출력
