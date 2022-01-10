import React,{useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

import CreateArea from "./createarea";
function App(){
    const [notes,setNotes]=useState([])
    function addNote(newnote){
setNotes(prenotes=>{
   return [...prenotes,newnote]

})
    }
    function delNote(id){
setNotes(prenotes=>{
 return   prenotes.filter((noteItem,index) =>{
        return index !==id;
    })
})
    }
    const [theme, setTheme]=useState('true')
    const [themeName, setThemeName] = useState("far fa-sun")
    
    function getTheme(){
        setTheme((prev)=>{
            if(prev===true){
                setThemeName("fas fa-moon")
                return false
            }else{
                setThemeName("far fa-sun")
                return true
            }
        })
    }
    return (
        
        <div >
           
     <p className="themeIcon" onClick={getTheme} ><p><i class={themeName}></i></p> </p>
     
            <Header />
            <div style={{backgroundColor:theme?'wheat':"#1D1B1B",}}>
<CreateArea onAdd={addNote} />
          {notes.map((noteItem, index)=>
    <Note 
    key={index}
    id={index}
    title={noteItem.title}
    content={noteItem.content}
    onDelete={delNote}
    />)}

            <Footer />
        </div></div>
    )}
export default App;


