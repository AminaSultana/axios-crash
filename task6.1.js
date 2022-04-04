console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async ()=>{

    const promiseWifeBringsTickets = new Promise((resolve, reject)=>{
        setTimeout(() => {resolve('ticket') }, 1000);
    });

    const getPopcorn = new Promise((resolve, reject)=> resolve('popcorn'));
    const addButter = new Promise((resolve, reject)=> resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject)=> resolve('cold drink'));
    let ticket = await promiseWifeBringsTickets;

    console.log(`wife: i have ${ticket}`);

    let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);

    let butter = await addButter;
    console.log(`Husband: i got some ${butter}`);

    let colddrink = await getColdDrinks;
    console.log(`Husband: i got some ${colddrink}`);

    return ticket;
}

preMovie().then((t)=>{
    console.log(`person3: shows ${t}`);
})

console.log('person4: shows ticket');
console.log('person5: shows ticket');


