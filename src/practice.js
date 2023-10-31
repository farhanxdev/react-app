import React, { useEffect, useState } from 'react';
import Server from './server';

function Signup({ updatestate }) {


    const [value1, updateValue1] = useState('');
    const [value2, updateValue2] = useState('');
    const [value3, updateValue3] = useState('');
    const [value4, updateValue4] = useState('');

    function updatesignup() {
        var signup = Server.signup(value1, value2, value3, value4)
        if (signup == true) {
            updatestate(1);
        }
    }



    return (
        <div >
            <div>signup</div>
            <div>username</div>
            <input value={value1} onChange={e => updateValue1(e.target.value)}></input>
            <div>password</div>
            <input value={value2} onChange={e => updateValue2(e.target.value)}></input>
            <div>name</div>
            <input value={value3} onChange={e => updateValue3(e.target.value)}></input>
            <div>passport number</div>
            <input value={value4} onChange={e => updateValue4(e.target.value)}></input>
            <button onClick={updatesignup}>signup</button>
        </div>
    );
}

function Login({ updatestate }) {
    const [value5, updateValue5] = useState('');
    const [value6, updateValue6] = useState('');
    function updatelogin() {
        var login = Server.login(value5, value6)
        if (login != undefined) {
            updatestate(login)
        }
    }

    return (
        <div>
            <div>login</div>
            <div>username</div>
            <input value={value5} onChange={e => updateValue5(e.target.value)}></input>
            <div>password</div>
            <input value={value6} onChange={e => updateValue6(e.target.value)}></input>
            <button onClick={updatelogin}>login</button><br />
            <button >Don't have account? Create one.</button>
        </div>
    );
}





function Practice() {
    const [userState, setuserstate] = useState(2);
    const [value7, updateValue7] = useState('');
    const [edit7, setEdit7] = useState(false);
    const [value8, updateValue8] = useState('');
    const [edit8, setEdit8] = useState(false);
    const [value9, updateValue9] = useState('');
    const [edit9, setEdit9] = useState(false);
    const [value10, updateValue10] = useState('');
    const [edit10, setEdit10] = useState(false);
    const [value11, updateValue11] = useState('');
    const [edit11, setEdit11] = useState(false);
    const [value12, updateValue12] = useState('');
    const [edit12, setEdit12] = useState(false);
    const [value13, updateValue13] = useState('');
    const [edit13, setEdit13] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };
    function saveName7() {
        var keyName = userState.username + 'name'
        Server.saveData(keyName, value7)
        setEdit7(false);
    }
    function saveName8() {
        var keyName = userState.username + 'name'
        Server.saveData(keyName, value8)
        setEdit8(false);
    }
    function saveName9() {
        var keyName = userState.username + 'name'
        Server.saveData(keyName, value9)
        setEdit9(false);
    }
    function saveName10() {
        var keyName = userState.username + 'name'
        Server.saveData(keyName, value10)
        setEdit10(false);
    }
    function saveName11() {
        var keyName = userState.username + 'name'
        Server.saveData(keyName, value11)
        setEdit11(false);
    }
    function saveName12() {
        var keyName = userState.username + 'name'
        Server.saveData(keyName, value12)
        setEdit12(false);
    }
    function saveName13() {
        var keyName = userState.username + 'name'
        Server.saveData(keyName, value13)
        setEdit13(false);
    }

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
            <div>
                <div style={{ textAlign: 'center', borderBottom: 'solid 2px', fontSize: 30 }}>My Biography</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>NAME</div>


                    <div>
                        {edit7 ?
                            <div><input value={value7} onChange={e => updateValue7(e.target.value)}></input><button onClick={saveName7}>Save</button></div>
                            : <div>{value7}{' '}<button onClick={() => setEdit7(true)}>Edit</button></div>}
                    </div>

                    <div>AGE</div>
                    <div>
                        {edit8 ?
                            <div><input value={value8} onChange={e => updateValue8(e.target.value)}></input><button onClick={saveName8}>Save</button></div>
                            : <div>{value8}{' '}<button onClick={() => setEdit8(true)}>Edit</button></div>}
                    </div>
                    <div>BIRTHDAY</div>
                    <div>
                        {edit9 ?
                            <div><input value={value9} onChange={e => updateValue9(e.target.value)}></input><button onClick={saveName9}>Save</button></div>
                            : <div>{value9}{' '}<button onClick={() => setEdit9(true)}>Edit</button></div>}
                    </div>
                    <div>ADDRESS</div>
                    <div>
                        {edit10 ?
                            <div><input value={value10} onChange={e => updateValue10(e.target.value)}></input><button onClick={saveName10}>Save</button></div>
                            : <div>{value10}{' '}<button onClick={() => setEdit10(true)}>Edit</button></div>}
                    </div>
                    <div>EMAIL</div>
                    <div>
                        {edit11 ?
                            <div><input value={value11} onChange={e => updateValue11(e.target.value)}></input><button onClick={saveName11}>Save</button></div>
                            : <div>{value11}{' '}<button onClick={() => setEdit11(true)}>Edit</button></div>}
                    </div>
                    <div>PHONE</div>
                    <div>
                        {edit12 ?
                            <div><input value={value12} onChange={e => updateValue12(e.target.value)}></input><button onClick={saveName12}>Save</button></div>
                            : <div>{value12}{' '}<button onClick={() => setEdit12(true)}>Edit</button></div>}
                    </div>
                    <div>TWITTER</div>
                    <div>
                        {edit13 ?
                            <div><input value={value13} onChange={e => updateValue13(e.target.value)}></input><button onClick={saveName13}>Save</button></div>
                            : <div>{value13}{' '}<button onClick={() => setEdit13(true)}>Edit</button></div>}
                    </div>
                    <div>
                        <input type="file" onChange={handleFileChange} />
                        <p>Selected File: {selectedFile ? selectedFile.name : 'None'}</p>
                        {selectedFile && <img src={URL.createObjectURL(selectedFile)} style={{ height: 200 }}></img>}
                        
                    </div>
                    <button style={{width:50}}>save</button>
                </div>
            </div>

        );

    }
}


export default Practice;










// function Test() {
//     function submit() {
//         var data = document.getElementById('inputfield').value;
//         console.log(data);
//     }
//     return(
//         <div>
//             <input id='inputfield'></input>
//             <button onClick={submit}>Submit</button>
//         </div>
//     );
// }


// function Test() {
//     const [data, setData] = useState('');
//     function submit() {
//         console.log(data);
//     }
//     return(
//         <div>
//             <input value={data} onChange={e => setData(e.target.value)}></input>
//             <button onClick={submit}>Submit</button>
//         </div>
//     );
// }

