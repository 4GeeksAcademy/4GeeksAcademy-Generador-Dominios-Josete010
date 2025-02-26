let pronoum = ['me', 'the', 'your', 'our'];
let adj = ['new', 'fantastic', 'beautiful', 'amazing'];
let noum = ['house', 'car', 'dog', 'game'];

for(let i = 0; i < pronoum.length; i++) {
    for(let j = 0; j < adj.length; j++) {
        for(let k = 0; k < noum.length; k++) {
            console.log(pronoum[i] + adj[j] + noum[k] + '.com')
        }
    }
}

for(let i = 0; i < pronoum.length; i++) {
    for(let j = 0; j < adj.length; j++) {
        for(let k = 0; k < noum.length; k++) {
            console.log(pronoum[i] + adj[j] + noum[k] + '.es')
        }
    }
}
