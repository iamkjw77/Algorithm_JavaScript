function solution(n) {
    const arr = new Set();
    const num = Math.sqrt(n);

    for(var i=1; i<=n; i+=2){
      arr.add(i);
    }
    arr.delete(1);
    arr.add(2);

    for(var j=3;j<num;j++){
      if(arr.has(j)){
        for(var k=j*2; k<=n; k+=j){
          arr.delete(k);
        }
      }
    }

    return arr.size;
}

console.log(solution(10)); //4출력
