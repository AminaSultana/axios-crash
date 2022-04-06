let addExpense = document.getElementById("add-expense");
addExpense.addEventListener("click", showDescription);

window.addEventListener('DOMContentLoaded', (event) => {
    getAllUser()
});

function showDescription(e) {
    console.log("submit first");
    e.preventDefault()
    let amount = document.getElementById("amount").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    if (amount.length > 0 && description.length > 0 && category.length>0) {
        const object = {
            amount1 : amount,
            description1 : description,
            category1: category
        }
        axios.post("https://crudcrud.com/api/4adf582a93d04c6c8b23d2f33e0b3c19/appointmentData",
            object)
            .then(() => {
                getAllUser();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

function getAllUser() {
    axios.get("https://crudcrud.com/api/4adf582a93d04c6c8b23d2f33e0b3c19/appointmentData")
        .then(response => {
            let parent = document.getElementById('list-items')
            parent.innerHTML = ""
            for (let i = 0; i < response.data.length; i++) {
                let child = `<li id = ${response.data[i].amount1}>  ${response.data[i].amount1} ${response.data[i].description1} ${response.data[i].category1}                                
            <button onclick=deleteUser('${response.data[i]._id}')>Delete</button>           
            <button onclick="editUser('${response.data[i]._id}','${response.data[i].amount1}','${response.data[i].description1}','${response.data[i].category1}')">Edit</button>       
            </li>`
                parent.innerHTML = parent.innerHTML + child
            }
        })
}

function deleteUser(userId) {
    axios
        .delete(`https://crudcrud.com/api/4adf582a93d04c6c8b23d2f33e0b3c19/appointmentData/${userId}`)
        .then(() => {
            getAllUser()
        })
        .catch(err => {
            console.log(err);
        })
} 
