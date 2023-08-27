import React, {useState} from 'react'
 
export default function Textform(props) {
  
  // const[mystyle, setmystyle] = useState({
  //   color:"#1e1e1f",
  //   backgroundColor:"white",
  //   transition:".4s"
  // })
  
  // const [btntext, setbtntext] = useState("Enable light mode")
  
  // const togglestyle=()=>{
  //   if (mystyle.color==="#1e1e1f"){
  //     setmystyle ({
  //       color:"white",
  //   backgroundColor:"#1e1e1f",
  //       transition:".4s"
  //     })
  //     setbtntext("Enable light mode")
  //   }
  //   else{
  //     setmystyle ({
  //       color:"#1e1e1f",
  //       backgroundColor:"white",
  //           transition:".4s"
  //     })
  //     setbtntext("Enable dark mode")
  //   }
  // }
    const textUpper = ()=>{
        setText(text.toUpperCase());
        // props.showAlert("Text has been successfully converted to Upperercase","success")

   }
   const textLower = ()=>{
    setText(text.toLowerCase());
    // props.showAlert("Text has been successfully converted to Lowercase","success")

}
   const onChang = (event)=>{
    setText(event.target.value)
    
   }
    var [text, setText] = useState(" ");
    const words = text.split(" ").filter( (element) => {return element.length!==0} ).length;
    // if (""  in text){
    //   words = 0;
    // }

    const clear =()=>{
      setText("");
      // props.showAlert("Text has been successfully cleared!","success")

    }
    // const convert =() =>{
    //   text =text+"string";
    //   return text;
    // }
    // const abuse = () =>{ 
    //   var a = 1;
    //   setInterval(() => {
    //     a= a+1;
    //     setTimeout(() => {
    //       alert(" Your device has virus !! " +a)
          
    //     }, 100);
        
    //   }, 2000);
      

    // }
    const copy=() =>{

      // var copied = document.getElementById("textarea");
      // copied.select();
      // copied.setSelectionRange(0,9999);
      // navigator.clipboard.writeText(copied.value);
      // document.getSelection().removeAllRanges(); 
      navigator.clipboard.writeText(text);
      // copied.focus();
      // props.showAlert("Text has been successfully copied to clipboard!","success")
    }
   
      return(
    <>
    <div className="container ">
  <h4>
    {props.title}
  </h4>
    <textarea className="form-control" name='clear' id="textarea" cols="10" rows="4" value={text} onChange={onChang} autoFocus ></textarea> 
    <br/> <br/>
    <div className="buttons">
    <button className="btn btn-primary mx-2" onClick={textUpper} disabled={text.length===0}>To Upper</button>
    <button className="btn btn-primary mx-2" onClick={textLower} disabled={text.length===0}>To Lower</button>
    <button className="btn btn-primary mx-2" onClick={copy} disabled={text.length===0}>Copy</button>
    <button className="btn btn-primary my-2" onClick={clear} disabled={text.length===0}>Clear</button> 
    </div>
    <br /><br />
    <span  >There are <strong>{words} words</strong> and <strong>{text.length}</strong> characters.</span> 
    <br/> 
    <span>Time to read: ~ <strong>
      {((words*0.005)).toFixed(2)} minutes!
      
      </strong>
      </span>
      <br />
      <br />
      
    <h2>Preview</h2>
    <p name='clear'> Your text was: <strong>{text}</strong></p>
    </div>
  </>
      )
}
Textform.defaultProps = {
    title:"Here u have used props!",
  }
  