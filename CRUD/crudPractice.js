

let userList = document.getElementsByClassName('userList')[0];
 let users = [];
let editId = null;

let fId = document.getElementById('fId');
let fName = document.getElementById('fName');
let fAge = document.getElementById('fAge');
let fEmail = document.getElementById('fEmail');
let sBtn = document.getElementById('sBtn');


sBtn.addEventListener("click", function () {
    if (editId == null) {

        let exists = users.find(function (user) {
            return user.id == fId.value;
        })
        if (exists) {
            alert('this id is already exists!');
            return;
  }

        let newUser = {
            id: fId.value,
            name: fName.value,
            age: fAge.value,
            email: fEmail.value,
        }

        users.push(newUser);
    }
    else {

        let user = users.find(function (user) {
            return user.id == editId;
        });

        user.name = fName.value;
        user.age = fAge.value;
        user.email = fEmail.value;

        editId = null;

        
    }
    displayUser();

})

function deleteUser(id) {
    users = users.filter(function (user) {
        return user.id != id;
    })
    displayUser();
}

function editUser(id) {


    let user = users.find(function (user) {
        return user.id==id
    })
    fId.value = user.id;
    fName.value = user.name;
    fAge.value = user.age;
    fEmail.value = user.email;

    editId = id;



    displayUser();
    
}

const displayUser = () => {
    userList.innerHTML = "";
    users.forEach(function (user) {
        
        userList.innerHTML += `
         <tr>
         <td>${user.id}</td>
         <td>${user.name}</td>
         <td>${user.age}</td>
         <td>${user.email}</td>
         <th>
         <input type="button" value="Edit" onClick="editUser(${user.id})"/>
         <input type="button" value="Delete" onClick="deleteUser(${user.id})"/>
         </th>
         </tr>
        `
    })
    
}