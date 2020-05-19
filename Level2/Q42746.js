function solution(numbers) {
    var answer = numbers.map(v => v+'').sort((a,b) => (b+a)*1-(a+b)*1).join('');
    return answer[0] === '0' ? '0' : answer;
}
console.log(solution([3, 30, 34, 5, 9])); //9534330 출력
