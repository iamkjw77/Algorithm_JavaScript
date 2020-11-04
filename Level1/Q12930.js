function solution(s) {
    // return s.split(' ').map((v) =>{
    //   return v.split('').map((curr, idx) => {
    //     return (idx % 2 === 0) ? curr.toUpperCase() : curr.toLowerCase();
    //   }).join('');
    // }).join(' ');
    return s.toUpperCase().replace(/(\w)(\w)/g, function(v){
      return v[0].toUpperCase() + v[1].toLowerCase();
    });

}
console.log(solution("hello world")); // HeLlO WoRlD 출력
