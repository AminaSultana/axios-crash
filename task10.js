let submit = document.getElementById('my-form')
submit.addEventListener('submit', getDetails)

/* window.addEventListener('DOMContentLoaded', (event) => {
    for(let i=0;i<localStorage.length;i++){
        let userVal = JSON.parse(localStorage.getItem(localStorage.key(i)))
        showData(userVal)
    }
});
 */
function getDetails(e){
    e.preventDefault()
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value
    if(userName.length>0 && userEmail.length>0){
        const myObject = {
            name1: userName,
            email: userEmail
        }
        axios.post("https://crudcrud.com/api/b582c3af81fe4f078ea44fa772c218b5/appointmentData",
        myObject)
        .then(()=>{
           showData(response.data)
        })
        .catch(err=>{
            console.log(err);
        })
    //localStorage.setItem(myObject.email, JSON.stringify(myObject))
    //showData(myObject)
    }
}

function showData(user){
   /*  if(localStorage.getItem(user.email)!==null){
        removeUserFromScreen(user.email)
    } */

    let parent = document.getElementById('list-of-user')
    let child = `<li id = ${user.email}> ${user.email} --- ${user.name1}
                        <button onclick=deleteUser('${user.email}')> Delete User </button>
                        <button onclick="editUser('${user.name1}','${user.email}')">Edit User </button>
                        </li>`
    parent.innerHTML = parent.innerHTML + child
}

/* function removeUserFromScreen(email){
    let parent = document.getElementById('list-of-user')
    let child = document.getElementById(email)
    if(child){
        parent.removeChild(child)
    }
} */

/* function deleteUser(email){
    localStorage.removeItem(email)
    removeUserFromScreen(email)
}

function editUser(userName, userEmail){
    console.log(userEmail )
    console.log(userName)
    document.getElementById('name').value = userName
    document.getElementById('email').value = userEmail
    deleteUser(userEmail)   
} */
