function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';

    for(let i=0; i<s.length; i++){
      let text = s[i];
      if(text === ' '){
        answer += ' ';
        continue;
      }
      const textArr = lower.includes(text) ? lower : upper;
      let index = textArr.indexOf(text)+n;
      if(index >= textArr.length) index -= textArr.length;
      answer += textArr[index];
    }
    return answer;
}

console.log(solution('a B z',4)); //e F d 출력
