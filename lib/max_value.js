// function maxValue(node, visited=new Set()) {
//     let queue = [ node ];
//     let currentMax = node.val;

//     while(queue.length > 0) {
//         let currentNode = queue.shift(); //[b]
//         let neighbors = currentNode.neighbors; //[a,c,e]

//         if(!visited.has(currentNode)){
//             visited.add(currentNode); //[a,b]


//         neighbors.forEach(neighbor => {
//             if(!visited.has(neighbor)) {
//                 queue.push(neighbor); //[b, c, d, ]
//             }
//         });
//         }
//         if(currentNode.val > currentMax) {
//             currentMax = currentNode.val;
//         }
//     }
//     return currentMax;
// }



function maxValue(startingVertex, visited=new Set(), vertices = []) {

    // Code goes here ...

    if(visited.has(startingVertex)) return;

    if(!visited.has(startingVertex)) {
        vertices.push(startingVertex.val)
        visited.add(startingVertex)
    }

    let neighbors = startingVertex.neighbors //[b, c, d]

    neighbors.forEach(neighbor => {
        maxValue(neighbor, visited, vertices);
    })

    return Math.max(...vertices);




}
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
