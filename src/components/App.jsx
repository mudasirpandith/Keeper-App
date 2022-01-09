import React,{useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";


function App(){
    const sun='<i class="far fa-sun"></i>'
    const [fname, setFname]= useState(' ')
    const [lname, setLname]= useState(' ')
    const [theme, setTheme]=useState('true')
    const [themeName, setThemeName] = useState('true')
     function updatefname(e){
         setFname(e.target.value)

     }
     function updatelname(e){
        setLname(e.target.value)

    }
    function getTheme(){
        setTheme((prev)=>{
            if(prev===true){
                setThemeName("false")
                return false
            }else{
                setThemeName('true')
                return true
            }
        })
    }
    return (
        
        <div style={{backgroundColor:theme?'wheat':"#1D1B1B"}}>
     <button className="themeIcon" onClick={getTheme} ><p><i class="far fa-sun"></i></p> </button>
            <Header />

{notes.map(noteItem=>
    <Note 
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
    />)}
<div className="container">
    <h1> Hello {fname} {lname} </h1>
   <form className="form-group" >
       <input onChange={updatefname} className="form-control" type="text" name="fname" placeholder="First Name" />
       <input onChange={updatelname} className="form-control" type="text" name="lname" placeholder="Last Name" />
       <button className="btn btn-primary" type="submit">Submit </button>
   </form>
</div>
            <Footer />
        </div>
    )}
export default App;


