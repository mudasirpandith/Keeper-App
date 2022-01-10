import React, { useState } from "react";


import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
function CreateArea(props) {
    const [isexpanded, setExpended] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setNote(prevnote => {
            return {
                ...prevnote,
                [name]: value
            }
        })
    }
    function submitNote(e) {
        props.onAdd(note)
        setExpended(false)
        e.preventDefault();
        setNote({
            title: '',
            content: ''
        })
    }
    function Getnote(){
        setExpended(true)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <form className="create-note" >
            {isexpanded && <div>  <input  type="text" onChange={handleChange} value={note.title} name="title" placeholder="Title" /></div>}
                <br />  
                 <textarea type="text" onClick={Getnote} onChange={handleChange} value={note.content} name="content" placeholder="Take a note" rows={isexpanded?3:1} />
              
                  <Fab onClick={submitNote} color="primary" aria-label="add"> <AddIcon /> </Fab>
            </form>
        </div>
    )
}
export default CreateArea;