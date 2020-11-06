function solution(n)
{
    return (n+'').split('').reduce((acc,curr) => acc + parseInt(curr), 0);
    // return n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}

console.log(solution(1234)); // 10출력
