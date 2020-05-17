function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var total_truck_weight = 0;
    var weight_queue = [];
    var bridge_queue = [];

    do{
      for(var key in bridge_queue){
        bridge_queue[key]--;
      }
      if(bridge_queue[0] === 0){
        total_truck_weight -= weight_queue.shift();
        bridge_queue.shift();
      }
      if(total_truck_weight + truck_weights[0] <= weight){
        weight_queue.push(truck_weights[0]);
        bridge_queue.push(bridge_length);
        total_truck_weight += truck_weights.shift();
      }
      answer++;
    }while(bridge_queue.length > 0)
    return answer;
}
console.log(solution(2,10,[7,4,5,6])); //8출력
