function solution(n, arr1, arr2) {
    /*
    var a = Array.from(Array(n), v => Array());
    var b = Array.from(Array(n), v => Array());
    var x = n;

    arr1.map((v,i)=>{
      while(x != 0){
        a[i].push(v%2);
        v = Math.floor(v/2);
        x--;
      }
      a[i].reverse();
      x = n;
    });

    arr2.map((v,i)=>{
      while(x != 0){
        b[i].push(v%2);
        v = Math.floor(v/2);
        x--;
      }
      b[i].reverse();
      x = n;
    });

    a = a.map((v,i) => {
      return v.map((val,idx) => {
        if(val == b[i][idx]) return val == 0 ? ' ' : '#';
        if(val !== b[i][idx]) return '#';
      });
    });

    return a.map(v => v.join(''));
    */

    return arr1.map((v,i) => addZero(n,(v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}
var addZero = (num,s) => {
  return '0'.repeat(num - s.length) + s;
}
console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28])); // ["#####", "# # #", "### #", "#  ##", "#####"] 출력
