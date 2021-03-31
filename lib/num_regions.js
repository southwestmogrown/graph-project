function numRegions(graph) {

    let allTheNodes = Object.keys(graph);

    let visited = new Set();

    let counter = 0;

    while(allTheNodes.length > 0) {
        let firstNode = allTheNodes.shift()
        let stack = [firstNode];

            while (stack.length > 0) {
                let node = stack.pop();

                let neighbors = graph[node];

                if (!visited.has(node)) {
                    visited.add(node);

                }

                neighbors.forEach(neighbor => {
                    if(!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                })

                allTheNodes = allTheNodes.filter(node => !visited.has(node));

            }
        counter++
    }
    return counter
}


let graph1 = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['e', 'c'],
    'e': ['d'],
};



module.exports = {
    numRegions
};
