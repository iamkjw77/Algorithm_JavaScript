function solution(N, stages) {
    var arr = new Array();
    for(var i=1; i<=N; i++){
        var total = stages.reduce((acc, curr) => acc+(i <= curr ? 1 : 0),0);
        var nonclear = stages.reduce((acc,curr) => acc+(i == curr ? 1 : 0),0);
        if(total == 0){
          arr.push({'stage' : i, 'fail' : 0});
          continue;
        }
        arr.push({'stage' : i, 'fail' : nonclear/total});
    }
    arr.sort((a,b) => {
      if(a.fail > b.fail) return -1;
      if(a.fail < b.fail) return 1;
      return a.stage - b.stage;
    });

    return arr.map(v => v.stage);
}
console.log(solution(5, [2,1,2,6,2,4,3,3])); //[3,4,2,1,5] 출력
