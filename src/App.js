import { useState } from "react";

function App() {
   
    const [ data, setData ] = useState('0');
    

    function addKey(key) {

        if(data==0){
            setData(`${key}`)

        }
        else{
            setData(`${data}${key}`);
        }
      
            
        
    }
    
      

    


    function addOne() {
        addKey('1');
        
    }
    
    function addtwo() {
        addKey('2');
        
    }
    function addthree() {
        addKey('3');
        
    }
    function addfour() {
        addKey('4');
        
    }
    function addfive() {
        addKey('5');
        
    }
    function addsix() {
        addKey('6');
        
    }
    function addseven() {
        addKey('7');
        
    }
    function addeight() {
        addKey('8');
        
    }
    function addnine() {
        addKey('9');
        
    }
    function addzero() {
        addKey('0');
        
    }
    function add() {
        addKey('+');
        
    }
    function subtraction() {
        addKey('-');
        
    }
    function multiply() {
        addKey('*');
        
    }
    function divide() {
        addKey('/');
        
    }
    function dot() {
        addKey('.');
        
    }
    function equal() {
     const result= eval(data)
     setData(result)
        
    }
    function c(){
        setData('0')
    }
    function del() {
        if (data.length > 0) {
            const newData = data.slice(0, -1);
            if(newData==''){
                setData('0')
            }
            else{
                setData(newData);
            }
          
            
        }
    }
   

    return (
        <div  style={{paddingLeft:40,backgroundColor:'#fc7e44',width:250,borderRadius:5}}>
       <div style={{padding:10,fontSize:25}}>Calculator</div>
       <input value={data} disabled style={{height:40,width:200,fontSize:30,textAlign:"right",borderRadius:5,backgroundColor:'#cfe6db'}}></input>
       <div style={{paddingTop:10}} >
        <button style={{height:52,width:52,borderRadius:5}}>%</button>
      
        <button onClick={c}  style={{height:52,width:104,borderRadius:5}}>C</button>
        <button onClick={del} style={{height:52,width:52,borderRadius:5}}>DEL</button>
       </div>
       <div>
        <button  style={{height:52,width:52,borderRadius:5}}><sup>1</sup>/<sub>x</sub></button>
        <button  style={{height:52,width:52,borderRadius:5}}>x<sup>2</sup></button>
        <button  style={{height:52,width:52,borderRadius:5}}><sup>2</sup>&radic;<suv>x</suv></button>
        <button  onClick={divide} style={{height:52,width:52,borderRadius:5}}>÷</button>
       </div>
       <div>
       <button onClick={addseven} style={{height:52,width:52,borderRadius:5}}>7</button>
       <button onClick={addeight} style={{height:52,width:52,borderRadius:5}}>8</button>
       <button onClick={addnine} style={{height:52,width:52,borderRadius:5}}>9</button>
       <button onClick={multiply} style={{height:52,width:52,borderRadius:5}}>x</button>
       </div>
       <div>
       <button onClick={addfour} style={{height:52,width:52,borderRadius:5}}>4</button>
       <button onClick={addfive} style={{height:52,width:52,borderRadius:5}}>5</button>
       <button onClick={addsix} style={{height:52,width:52,borderRadius:5}}>6</button>
       <button onClick={subtraction} style={{height:52,width:52,borderRadius:5}}>-</button>
       </div>
       <div>
       <button onClick={addOne} style={{height:52,width:52,borderRadius:5}}>1</button>
       <button onClick={addtwo} style={{height:52,width:52,borderRadius:5}}>2</button>
       <button onClick={addthree} style={{height:52,width:52,borderRadius:5}}>3</button>
       <button onClick={add} style={{height:52,width:52,borderRadius:5}}>+</button>
       </div>
       <div style={{paddingBottom:20}}>
       
       <button onClick={addzero} style={{height:52,width:52,borderRadius:5}}>0</button>
       <button onClick={dot} style={{height:52,width:52,borderRadius:5}}>.</button>
       <button onClick={equal} style={{height:52,width:104,borderRadius:5}}>=</button>
       </div>
       </div>
    );
}
export default App;