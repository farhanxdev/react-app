import React, { useEffect, useState } from 'react';
import Server from './server';

function Signup({ updatestate }) {

    function userSignup() {
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
        var name = document.getElementById('name').value
        var passport = document.getElementById('passport').value
        var signup = Server.signup(username, password, name, passport)
        if (signup == true) {
            updatestate(1);
        }
    }




    return (
        <div >
            <div>signup</div>
            <div>username</div>
            <input id='username'></input>
            <div>password</div>
            <input id='password'></input>
            <div>name</div>
            <input id='name'></input>
            <div>passport number</div>
            <input id='passport'></input>
            <button onClick={userSignup}>signup</button>
        </div>

    );
}
function Login({ updatestate }) {
    function login() {
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
        var login = Server.login(username, password)

        if (login != undefined) {
            updatestate(login)

        }
    }

    function signupPage() {
        updatestate(0);
    }

    return (
        <div>
            <div>login</div>
            <div>username</div>
            <input id='username'></input>
            <div>password</div>
            <input id='password'></input>
            <button onClick={login} >login</button><br />
            <button onClick={signupPage} >Don't have account? Create one.</button>
        </div>
    );
}

function EditConatiner({ keyName }) {
    const [value, updateValue] = useState('');
    const [edit, setEdit] = useState(false);
    function saveName() {
        Server.saveData(keyName, value)
        setEdit(false);
    }

    useEffect(() => {
        console.log(keyName);
        var dataFromServer = Server.getData(keyName)
        if (dataFromServer != null) {
            updateValue(dataFromServer);
        }
    }, []);

    return (
        <div>
            {edit ? 
            <div><input value={value} onChange={e => updateValue(e.target.value)}></input><button onClick={saveName}>Save</button></div>
            : <div>{value}{' '}<button onClick={() => setEdit(true)}>Edit</button></div>}
        </div>
    );
    // if (edit)
    //     return (<div><input value={value} onChange={e => updateValue(e.target.value)}></input><button onClick={saveName}>Save</button></div>)
    // else return (<div>{value}{' '}<button onClick={() => setEdit(true)}>Edit</button></div>);
}

function App() {

    const [userState, setuserstate] = useState(1);


    if (userState == 0) {
        return (
            <Signup updatestate={setuserstate} />
        )

    }
    else if (userState == 1) {
        return (
            <Login updatestate={setuserstate} />
        )
    }
    else {
        return (
            <div style={{}}>

                <div style={{ display: 'flex', textAlign: 'center', backgroundColor: '#181616', color: 'white', padding: 10 }}>
                    <div style={{ flex: 1 }}> [ABOUT ME]</div>
                    <div style={{ flex: 1 }}>[SERVICES]</div>
                    <div style={{ flex: 1 }}>[CONTACT]</div>
                </div>
                <div >
                    <div style={{ textAlign: 'center', borderBottom: 'solid 2px', fontSize: 30 }}>My Biography</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>NAME</div>
                        <EditConatiner keyName={userState.username + 'name'} />
                        <div>AGE</div>
                        <EditConatiner keyName={userState.username + 'age'} />
                        <div>BIRTHDAY</div>
                        <EditConatiner keyName={userState.username + 'dob'} />
                        <div>ADDRESS</div>
                        <EditConatiner keyName={userState.username + 'address'} />
                        <div>EMAIL</div>
                        <EditConatiner keyName={userState.username + 'email'} />
                        <div>PHONE</div>
                        <EditConatiner keyName={userState.username + 'phone'} />
                        <div>TWITTER</div>
                        <EditConatiner keyName={userState.username + 'twitter'} />
                    </div>
                </div>







            </div>

        )
    }


}
export default App;

