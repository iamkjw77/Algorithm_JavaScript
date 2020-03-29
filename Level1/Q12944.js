function solution(arr) {
    return arr.reduce((acc,curr) => acc+curr,0)/arr.length;
}
console.log(solution([50,40,60])); //50 출력
