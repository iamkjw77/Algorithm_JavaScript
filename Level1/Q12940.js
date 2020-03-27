function solution(n, m) {
    var arr = new Array();
    var j = (n>m) ? m : n;
    var nm = n*m;

    for(var i=1;i<=j;i++){
      if(n%i == 0 && m%i ==0){
        arr.push(i);
      }
    }
    var G = Math.max(...arr);
    var L = nm/G;
    return [G,L];
}

console.log(solution(20,15));
