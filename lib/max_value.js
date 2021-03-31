function maxValue(node, visited=new Set()) {
    let queue = [ node ];
    let currentMax = node.val;

    while(queue.length > 0) {
        let currentNode = queue.shift(); //[b]
        let neighbors = currentNode.neighbors; //[a,c,e]

        if(!visited.has(currentNode)){
            visited.add(currentNode); //[a,b]
        

        neighbors.forEach(neighbor => {
            if(!visited.has(neighbor)) {
                queue.push(neighbor); //[b, c, d, ]
            }
        });
        }
        if(currentNode.val > currentMax) {
            currentMax = currentNode.val;
        }
    }
    return currentMax;
}



// function maxValue(node, visited=new Set()) {
//     if(visited.has(node)) return;
//     visited.add(node);
//     let neighbors = node.neighbors;
//     let array = [];
//     neighbors.forEach(neighbor => {
//         let res = neighbor.val
        
//         array.push(res)
//     })
//     return Math.max(...array);
// }

module.exports = {
    maxValue
};