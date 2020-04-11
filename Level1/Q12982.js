function solution(d, budget) {
    var sum = 0;
    d.sort((a,b) => a-b);
    for(var i=0; i<d.length; i++){
      sum += d[i];
      if(sum == budget){
        return i+1;
      }else if(sum > budget){
        return i;
      }
    }
    if(sum < budget) return d.length;

}
console.log(solution([1,1,1,1],8))
