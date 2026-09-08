let fId = document.getElementById('fId');
let fName = document.getElementById('fName');
let fAge = document.getElementById('fAge');
let fEmail = document.getElementById('fEmail');

let userlist = document.getElementById('userlist');
let users = JSON.parse(localStorage.getItem("users"))||[];
let editId = null;
let logOutBtn = document.getElementById('logOutBtn');



let createList = document.getElementById('createList');

logOutBtn.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "index.html";
})

createList.addEventListener("submit", function (e) {
    e.preventDefault();

    if (editId == null) {

        let exists = users.find(function (user) {
            return user.id == fId.value;
        })
        if (exists) {
            alert("This is is already exists");
            return;
        }
        let newUser = {
            id: fId.value,
            name: fName.value,
            age: fAge.value,
            email: fEmail.value
        }
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users))

    }
    else {
        let user = users.find(function (user) {
            return user.id == editId;
        })
        user.id = fId.value;
        user.name = fName.value;
        user.age = fAge.value;
        user.email = fEmail.value;

        editId = null;
    }
     
    displayUsers();
})
 
const deleteUser = (id) => {
    users = users.filter(function (user) {
        return user.id != id;
    })

    localStorage.setItem("users", JSON.stringify('users'));
    displayUsers();
}

const editUser = (id) => {
    let user = users.find(function (user) {
        return user.id==id
    })

    fId.value = user.id;
    fName.value = user.name;
    fAge.value = user.age;
    fEmail.value = user.email;

    editId = id;
    localStorage.setItem("users", JSON.stringify('users'));
}

const displayUsers = () => {
    userlist.innerHTML = "";
    users.forEach(function (user) {
        userlist.innerHTML += `
        
        <tr>
             <td>${user.id}</td>
             <td>${user.name}</td>
             <td>${user.age}</td>
             <td>${user.email}</td>
             <td>
                <input type="button" value="Delete" name="Delete" onClick="deleteUser(${user.id})" />
                <input type="button" value="Edit" name="Edit"  onClick="editUser(${user.id})"/>
             </td>
        </tr>
        `
    })
}