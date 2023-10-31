function signup(username, password, name, passport_number) {
    if (!(username && password && name && passport_number)) return false;

    var data = localStorage.getItem("users");
    var users = JSON.parse(data ?? '[]');
    users = [ ...users, {username, password, name, passport_number}];
    localStorage.setItem("users", JSON.stringify(users));

    return true;
}

function login(username, password) {
    var data = localStorage.getItem("users");
    var users = JSON.parse(data ?? '[]');
   
    for (var user of users) {
        if (user.username == username && user.password == password) {
            return {name: user.name, passport_number: user.passport_number, username: user.username};
        }
    }
    return;
}

function saveData(key,value) {
    localStorage.setItem(key,value)
}
function getData(key) {
    
    return localStorage.getItem(key)
}

const Server = {
    signup,
    login,
    saveData,
    getData,
};

export default Server;