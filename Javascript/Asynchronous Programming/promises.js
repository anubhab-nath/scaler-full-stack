let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(Math.random() >= 0.5)
            resolve('We got Heads!! Promise fulfilled.')
        else {
            reject('We got Tails.. Promise failed')
        }
    }, 1000)
})

console.log(promise);