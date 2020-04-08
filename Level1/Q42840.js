function solution(answers) {
    var answer = [];

    var p1 = [1, 2, 3, 4, 5];
    var p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var cnt1 = answers.filter((v,i) => v === p1[i%p1.length]).length;
    var cnt2 = answers.filter((v,i) => v === p2[i%p2.length]).length;
    var cnt3 = answers.filter((v,i) => v === p3[i%p3.length]).length;

    var max = Math.max(cnt1, cnt2, cnt3);
    if(max === cnt1) answer.push(1);
    if(max === cnt2) answer.push(2);
    if(max === cnt3) answer.push(3);

    return answer;
}
console.log(solution([1,2,3,4,5,1,2,3,4,5])); // [1] 출력
