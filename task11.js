let submit = document.getElementById('my-form')
submit.addEventListener('submit', getDetails)

window.addEventListener('DOMContentLoaded', (event) => {
    getAllUser()
});

function getDetails(e){
    e.preventDefault()
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value
    if(userName.length>0 && userEmail.length>0){
        const myObject = {
            name1: userName,
            email: userEmail
        }
        axios.post("https://crudcrud.com/api/d69dbe976534411fb9ff9d2b18e8d9ea/appointmentData",
        myObject)
        .then(()=>{
            getAllUser();
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

function getAllUser(){
    axios.get("https://crudcrud.com/api/d69dbe976534411fb9ff9d2b18e8d9ea/appointmentData")
    .then(response=>{
        console.log('hiiiiiiiii');
        console.log(response);
        let parent = document.getElementById('list-of-user')
        parent.innerHTML = ""
        for(let i=0;i<response.data.length;i++){
            let child = `<li id = ${response.data[i].email}> ${response.data[i].email}                                
                                </li>`
            parent.innerHTML = parent.innerHTML + child
        }
    })
}

