function solution(arr1, arr2) {
    /*
    var n = arr1.length;
    var m = arr1[0].length;
    var answer = Array.from(Array(n),() => Array());

    for(var i=0;i<n;i++){
      for(var j=0;j<m;j++){
        answer[i][j] = arr1[i][j] + arr2[i][j];
      }
    }
    return answer;
    */
    var answer;
    answer = arr1.map((a, i) => {
      return a.map((val, idx) => {
          val += arr2[i][idx];
          return val;
      });
    });
    return answer;
}


console.log(solution([[1,2],[2,3]],[[3,4],[5,6]])); //[[4,6],[7,9]] 출력
