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
        axios.post("https://crudcrud.com/api/7d8018cc5cd845a68f3eaf015b415ea2/appointmentData",
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
    axios.get("https://crudcrud.com/api/7d8018cc5cd845a68f3eaf015b415ea2/appointmentData")
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
    axios
        .put(`https://crudcrud.com/api/7d8018cc5cd845a68f3eaf015b415ea2/appointmentData/${userId}`,
            {
                email: newEmail,
                name1: newName
            })
        .then(() => {
            deleteUser(userId)
        })
}

function deleteUser(userId, name) {
    axios
        .delete(`https://crudcrud.com/api/7d8018cc5cd845a68f3eaf015b415ea2/appointmentData/${userId}`)
        .then(() => {
            // alert(`${name} deleted successfully`)
            getAllUser()
        })
        .catch(err => {
            console.log(err);
        })
}
