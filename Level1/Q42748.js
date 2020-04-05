function solution(array, commands) {
    /*
    var answer = [];
    for(var i=0; i<commands.length; i++){
      var a = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b).slice(commands[i][2]-1, commands[i][2]);
      answer = answer.concat(a);
      a = array;
    }
    return answer;
    */

    return commands.map(v => {
      return array.slice(v[0]-1,v[1]).sort((a,b) => a-b).slice(v[2]-1, v[2])[0];
    });


}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); // [5, 6, 3] 출력
