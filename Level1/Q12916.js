function solution(s){
  // const arr = s.toLowerCase().split('');
  // let p_cnt = 0;
  // let y_cnt = 0;
  //
  // arr.map(v =>{
  //   if(v === 'p') return p_cnt += 1;
  //   else if(v === 'y') return y_cnt += 1;
  // });
  //
  // return (p_cnt === y_cnt) ? true : false;

  // return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
  return (s.match(/p/ig)||[]).length === (s.match(/y/ig)||[]).length;
}

console.log(solution('PyYa')); //false 출력
console.log(solution('abc')); //true 출력
