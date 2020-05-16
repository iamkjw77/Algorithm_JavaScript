function solution(heights) {
    var answer = [];
    var firstEle = 0;
    var a;

    for(var i=heights.length-1 ; i>0; i--){
      for(var j=i-1 ; j>0; j--){
        if(heights[j] > heights[i]){
          answer.push(j+1);
          break;
        }
      }
    }
    return answer;
}
console.log(solution([6,9,5,7,4]));
