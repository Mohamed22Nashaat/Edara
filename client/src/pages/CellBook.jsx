import React,{useRef} from 'react'
import'../style/CellBook.css'
const CellBook = () => {
  const addProductForm = useRef([])
    
  const submit =(event)=>{
      event.preventDefault();
      console.log(addProductForm.current);
      
  }
  return (
    <div className="new-warehouse">
       <div className="new-wrapper">
        <div className='add-product'>
            <div className='add-form'>
            <h1 style={{marginBottom:"60px"}}>Add New Warehouse</h1>

            <form onSubmit={(e)=>submit(e)}>
                <div>
                <input className='input' type='file' id='image'  required ref={(ref)=>addProductForm.current["image"]=ref}  />
                </div>

                
                <div>
                <input className='input' type='text' id='title' placeholder='title' required ref={(ref)=>addProductForm.current["title"]=ref}/>
                </div>
                
                
                <div>
                
                <textarea  id='desc' placeholder='description' required ref={(ref)=>addProductForm.current["desc"]=ref}/>
                </div>
                
             

                <div>
                    <input className='input-quantity' placeholder='quantity' type='number' id='quantity' min={"0"} required ref={(ref)=>addProductForm.current["quanity"]=ref}/>
                </div>
                
                

                <button type='submit'>Add</button>
                <input className='reset' type="reset" value={"Reset"}/>
            </form>
            </div>
        </div>
        </div>
       </div>
  )
}

export default CellBook