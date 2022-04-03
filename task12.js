let submit = document.getElementById('my-form')
submit.addEventListener('submit', getDetails)

window.addEventListener('DOMContentLoaded', (event) => {
    getAllUser()
});

function getDetails(e) {
    e.preventDefault()
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value
    if (userName.length > 0 && userEmail.length > 0) {
        const myObject = {
            name1: userName,
            email: userEmail
        }
        axios.post("https://crudcrud.com/api/0ec1dc1837774b7c86f7c80d02eeba89/appointmentData",
            myObject)
            .then(() => {
                getAllUser();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

function getAllUser() {
    axios.get("https://crudcrud.com/api/0ec1dc1837774b7c86f7c80d02eeba89/appointmentData")
        .then(response => {
            let parent = document.getElementById('list-of-user')
            parent.innerHTML = ""
            for (let i = 0; i < response.data.length; i++) {
                let child = `<li id = ${response.data[i].email}>  ${response.data[i].name1} ${response.data[i].email}                                
            <button onclick="deleteUser('${response.data[i]._id}','${response.data[i].name1}')">Delete</button>                    
            </li>`
                parent.innerHTML = parent.innerHTML + child
            }
        })
}

function deleteUser(userId, name) {
    axios
        .delete(`https://crudcrud.com/api/0ec1dc1837774b7c86f7c80d02eeba89/appointmentData/${userId}`)
        .then(() => {
            alert(`${name} deleted successfully`)
            getAllUser()
        })
        .catch(err=>{
            console.log(err);
        })
}
