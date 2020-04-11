function solution(n, lost, reserve) {
    var cnt = 0;
    var total = Array(n).fill(1);

    for(var i=0; i<lost.length; i++){
        total.splice(lost[i]-1,1,0);
    }

    for(var i=0; i<reserve.length; i++){
        total[reserve[i]-1] += 1;
    }

    for(var i=0; i<total.length; i++){
      if(total[i] == 0 && total[i-1] == 2){
        total[i] = 1;
        total[i-1] = 1;
      }else if(total[i] == 0 && total[i+1] == 2){
        total[i] = 1;
        total[i+1] = 1;
      }
    }
    total.map(v => {if(v !== 0) cnt++});

    return cnt;
}
console.log(solution(5,[2,4],[1,3,5])); //5 출력
