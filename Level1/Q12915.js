function solution(strings, n) {
  // strings.sort(function(a, b){
  //   const a_char = a.substr(n, 1);
  //   const b_char = b.substr(n, 1);
  //
  //   if(a_char === b_char){
  //     return a<b ? -1 : (a>b ? 1 : 0);
  //   }else{
  //     return a_char < b_char ? -1 : (a_char > b_char ? 1 : 0);
  //   }
  // });
  // return strings;
  return strings.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}
console.log(solution(["abn", "aan", "car"],1));
