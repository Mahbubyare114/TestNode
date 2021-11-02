//mydb
// let admin = [{
//         "email": "admin1@gmail.com",
//     },
//     {
//         "email": "admin2@gmail.com",
//         "password": "admin2"
//     }
//     "password": "admin1"

// ];
let users = [{
    "id": "1",
    "firstName": "Abdifatah",
    "middleName": "Mohamed",
    "lastName": "Abdifatah",
    "email": "ccaraye@gmail.com",
    "age": "25",
    "password": "12345"
}, {
    "id": "2",
    "firstName": "artan",
    "middleName": "Abdullahi",
    "lastName": "Mohamed",
    "email": "artan@gmail.com",
    "age": "20",
    "password": "6789"
}, {
    "id": "3",
    "firstName": "sabarin",
    "middleName": "Mohamed",
    "lastName": "shiikh",
    "email": "sabarin@gmail.com",
    "age": "21",
    "password": "101112"
}];

//-----------------------------------------
const getusers = () => {
    return users;
};

const getuser = (id) => {
    return users.filter(u => u.id == id);
};

const create = (user) => {
    users.push(user);
    return true;
};

const updateUser = (user) => {
    const objIndex = users.findIndex(obj => obj.id === user.id);
    users[objIndex].firstName = user.firstName;
    users[objIndex].middleName = user.middleName;
    users[objIndex].lastName = user.lastName;
    users[objIndex].lastName = user.lastName;
}

const deleteUser = (id) => {
    const objIndex = users.findIndex(obj => obj.id == id);
    users.splice(objIndex, 1);
};

const isEmailExist = (email) => {
    return users.filter(u => u.email === email).length > 0;
};

const isIdExist = (id) => {
    return users.filter(u => u.id == id);
};
const getUserByEmailAndPassword = (email, password) => {
    return users.filter(u => u.email === email && u.password === password);
};

const isAdmin = (email) => {
    return admin.filter(u => u.email === email).length > 0;
};

module.exports = {
    getusers,
    getuser,
    create,
    updateUser,
    deleteUser,
    isEmailExist,
    isIdExist,
    getUserByEmailAndPassword,
    isAdmin
};