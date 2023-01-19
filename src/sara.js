import React from 'react'
import  { useState ,useEffect} from 'react';



function Sara(props) {

    const [list, setCount] = useState(["apple","orange"]);

    const [newinput, setInput] = useState(" ");

    function addNewElement() {
       // list = list.push(newinput);
    //    alert("hi")
       var oldlist = list;
        oldlist.push(newinput);
        console.log(oldlist)
        setCount([...oldlist]);

    }

  return (
    
    <div >
      <h1>hi</h1>

      <input type="text" class="form-control" placeholder="Username"  onChange={(e) => setInput(e.target.value)}  aria-label="Username" aria-describedby="basic-addon1"/>
        
      <a class="btn btn-primary" onClick={addNewElement}>Add</a><br/>
      <button type="button" class="btn btn-primary">Edit</button><br/>
      <button type="button" class="btn btn-primary">Delete</button><br/>

      {list}

      the input entries: {newinput}
    </div>
  )
}


export default Sara

