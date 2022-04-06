let submit = document.getElementById('my-form')
submit.addEventListener('submit', getDetails)
let update = document.getElementById("update")

window.addEventListener('DOMContentLoaded', (event) => {
    getAllUser()
});

function getDetails(e) {
    console.log("submit first");
    e.preventDefault()
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value
    if (userName.length > 0 && userEmail.length > 0) {
        const myObject = {
            name1: userName,
            email: userEmail
        }
        axios.post("https://crudcrud.com/api/4adf582a93d04c6c8b23d2f33e0b3c19/appointmentData",
            myObject)
            .then(() => {
                getAllUser();
            })
            .catch(err => {
                console.log(err);
            })
    }
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""

}

function getAllUser() {
    axios.get("https://crudcrud.com/api/4adf582a93d04c6c8b23d2f33e0b3c19/appointmentData")
        .then(response => {
            let parent = document.getElementById('list-of-user')
            parent.innerHTML = ""
            for (let i = 0; i < response.data.length; i++) {
                let child = `<li id = ${response.data[i].email}>  ${response.data[i].name1} ${response.data[i].email}                                
            <button onclick="deleteUser('${response.data[i]._id}','${response.data[i].name1}')">Delete</button>           
            <button onclick="editUser('${response.data[i]._id}','${response.data[i].email}','${response.data[i].name1}')">Edit</button>       
            </li>`
                parent.innerHTML = parent.innerHTML + child
            }
        })
}

function editUser(userId, email, name) {
    document.getElementById("email").value = email
    document.getElementById("name").value = name
    update.addEventListener("click", updateData(userId))
}

function updateData(userId) {
    e.preventDefault();
    let newEmail = document.getElementById("email").value
    let newName = document.getElementById("name").value
    axios
        .put(`https://crudcrud.com/api/4adf582a93d04c6c8b23d2f33e0b3c19/appointmentData/${userId}`,
            {
                email: newEmail,
                name1: newName
            })
        .then(() => {
            getAllUser()
        })
}

function deleteUser(userId) {
    axios
        .delete(`https://crudcrud.com/api/4adf582a93d04c6c8b23d2f33e0b3c19/appointmentData/${userId}`)
        .then(() => {
            // alert(`${name} deleted successfully`)
            getAllUser()
        })
        .catch(err => {
            console.log(err);
        })
} 
