function solution(s) {
    // const remain = s.length%2;
    // const half = Math.floor(s.length/2);
    //
    // if(remain === 0){
    //   return s.substr(half-1,2);
    // }else{
    //   return s.substr(half,1);
    // }
    return s.substr(Math.ceil(s.length/2)-1, s.length%2 === 0 ? 2 : 1);
}
console.log(solution('avxldhd'));
