function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let queue = [startingNode];

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
        if(currentNode.val === targetVal) return currentNode;
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};