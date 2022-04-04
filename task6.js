console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringsTickets = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 1000);
});

const getPopcorn = promiseWifeBringsTickets.then((t)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${t} popcorn`);
        },1000)
    })

})

const getButter = getPopcorn.then((p)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(`${p} butter`)
        },1000);
    })
})

const getColdDrinks = getButter.then((b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(`${b} cold drink`)
        },1000);
    })
})

getColdDrinks.then((b)=>{
    console.log(b);
})
console.log('person4: shows ticket');
console.log('person5: shows ticket');

