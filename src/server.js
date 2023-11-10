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


function getproductlist() {
    const PRODUCTS=[

        {id:1,name:'condom',image:'/penthar.png',price:10},
        {id:2,name:'massage oil',image:'/massage oil.jpeg',price:20},
        {id:2,name:'handcuffs',image:'/handcuffs.webp',price:20},


    ]
    return PRODUCTS;
}

const Server = {
    signup,
    login,
    saveData,
    getData,
    getproductlist,
};

export default Server;