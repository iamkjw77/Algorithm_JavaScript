function solution(seoul) {
    // for(let i=0; i<seoul.length; i++){
    //   if(seoul[i] === 'Kim') return '김서방은 '+i+'에 있다';
    // }
    const kim = seoul.indexOf('Kim');
    return '김서방은 ' + kim + '에 있다';
}
console.log(solution(["ji","K","o","Kim"])); //김서방은 3에 있다
