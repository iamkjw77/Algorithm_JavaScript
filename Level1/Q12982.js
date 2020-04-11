function solution(d, budget) {
    /*
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
    */

    /*
    d.sort((a,b) => a-b);
    while(d.reduce((acc,curr) => acc += curr, 0) > budget) d.pop();
    return d.length;
    */

    var answer = 0;
    var money = 0;
    d.sort((a,b) => a-b).forEach(v => {
      money += v;
      if(money <= budget) answer++;
    });
    return answer;
}
console.log(solution([1,1,1,1],8)) //4출력
