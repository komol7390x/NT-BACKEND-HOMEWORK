fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => takeResult(res))
function takeResult(element) {
    const len = element.length;
    let i=1
    while (i <= len) {
        
    }
}