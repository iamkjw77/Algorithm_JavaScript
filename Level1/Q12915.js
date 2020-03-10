function solution(strings, n) {

    strings.sort(function(a,b){
      var an = a.substr(n,1);
      var bn = b.substr(n,1);
      if(an==bn){
        return a<b ? -1 : a>b ? 1 : 0;
      }else{
        return an<bn ? -1 : an>bn ? 1 : 0;
      }
    });
    return strings;


    //return strings.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}
console.log(solution(["abn", "aan", "car"],1));
