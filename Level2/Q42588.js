function solution(heights) {
    /*
    var answer = [];

    for(var i=0; i<heights.length; i++){
      for(var j=i-1; j>=0; j--){
        if(heights[i] < heights[j]){
          answer.push(j+1);
          break;
        }else if(j==0) answer.push(0);
      }
    }

    answer.unshift(0);
    return answer;
    */

    return heights.map((v,i) => {
      while(i){
        i--;
        if(heights[i] > v){
          return i+1;
        }
      }
      return 0;
    });
}
console.log(solution([6,9,5,7,4])); //[0,0,2,2,4] 출력
