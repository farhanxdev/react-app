import { useEffect, useState } from "react";
import { useSyncExternalStore } from "react";

function App() {

    const [value, setvalue] = useState('')
    const [value2, setvalue2] = useState('')
    const [value3, setvalue3] = useState('')
    const [value4, setvalue4] = useState('')
    const [value5, setvalue5] = useState('')
    const [value6, setvalue6] = useState('')
    const [value7, setvalue7] = useState('')
    const [value8, setvalue8] = useState('')
    const [value9, setvalue9] = useState('')
    const [user, setuser] = useState('X')
    const [havewinner, sethavewinner] = useState('')

    function showwinner(winnervalue) {
        sethavewinner(winnervalue)
    }

    function cheakwinner() {
        if (value != '' && value == value4 && value4 == value7) {
            showwinner(value)
        }
        if (value2 != '' && value2 == value5 && value5 == value8) {
            showwinner(value2)
        }
        if (value3 != '' && value3 == value6 && value3 == value9) {
            showwinner(value3)
        }
        if (value != '' && value == value2 && value2 == value3) {
            showwinner(value)
        }
        if (value4 != '' && value4 == value5 && value5 == value6) {
            showwinner(value4)
        }
        if (value7 != '' && value7 == value8 && value8 == value9) {
            showwinner(value7)
        }
        if (value != '' && value == value5 && value5 == value9) {
            showwinner(value)
        }
        if (value3 != '' && value3 == value5 && value5 == value7) {
            showwinner(value3)
        }
    }

    function reset() {
        setvalue('')
        setvalue2('')
        setvalue3('')
        setvalue4('')
        setvalue5('')
        setvalue6('')
        setvalue7('')
        setvalue8('')
        setvalue9('')
        sethavewinner('')
    }
    useEffect(() => {
        cheakwinner();
    }, [user]);

    function chengeuser() {
        if (user == "X") {
            setuser('O')
        }
        else setuser('X') 
        // cheakwinner()
    }

    function one() {
        if (havewinner) return;
        if (value) {
            setvalue('')
        }
        else {
            setvalue(user)
        }
        chengeuser()
    }

    function two() {
        if (havewinner) return;
        if (value2) {
            setvalue2('')
        }
        else {
            setvalue2(user)
        }
        chengeuser()
    }
    function three() {
        if (havewinner) return;
        if (value3) {
            setvalue3('')
        }
        else {
            setvalue3(user)
        }
        chengeuser()
    }
    function four() {
        if (havewinner) return;
        if (value4) {
            setvalue4('')
        }
        else {
            setvalue4(user)
        }
        chengeuser()
    }
    function five() {
        if (havewinner) return;
        if (value5) {
            setvalue5('')
        }
        else {
            setvalue5(user)
        }
        chengeuser()
    }
    function six() {
        if (havewinner) return;
        if (value6) {
            setvalue6('')
        }
        else {
            setvalue6(user)
        }
        chengeuser()
    }
    function seven() {
        if (havewinner) return;
        if (value7) {
            setvalue7('')
        }
        else {
            setvalue7(user)
        }
        chengeuser()
    }
    function eight() {
        if (havewinner) return;
        if (value8) {
            setvalue8('')
        }
        else {
            setvalue8(user)
        }
        chengeuser()
    }
    function nine() {
        if (havewinner) return;
        if (value9) {
            setvalue9('')
        }
        else {
            setvalue9(user)
        }
        chengeuser()
    }

    return (
        <>
            <div className="board-row">
                <button className="square" onClick={one}>{value}</button>
                <button className="square" onClick={two}>{value2}</button>
                <button className="square" onClick={three}>{value3}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={four}>{value4}</button>
                <button className="square" onClick={five}>{value5}</button>
                <button className="square" onClick={six}>{value6}</button>
            </div><div className="board-row">
                <button className="square" onClick={seven}>{value7}</button>
                <button className="square" onClick={eight}>{value8}</button>
                <button className="square" onClick={nine}>{value9}</button>
            </div>
            {havewinner && <>
            <div style={{fontSize:30,padding:20,color:'red'}}>
                <span >Winner: {havewinner}</span>
                <button onClick={reset} style={{fontSize:25,marginLeft:20,backgroundColor:'green',color:"white",borderRadius:'5px'}} >Reset</button>
                </div>
            </>}
           
        </>
    );
}
export default App;