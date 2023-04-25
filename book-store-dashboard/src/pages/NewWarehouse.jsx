import React ,{useRef} from 'react';
import '../style/NewWarehouse.css';
const NewWarehouse = () => {
  const addProductForm = useRef([])
    
  const submit =(event)=>{
      event.preventDefault();
      console.log(addProductForm.current);
      
  }
  return (
    <div className="NewWarehouse">
       <div className="new-wrapper">
        <div className='add-product'>
            <div className='add-form'>
            <h1 style={{marginBottom:"60px"}}>Add  New Warehouse</h1>

            <form onSubmit={(e)=>submit(e)}>
                <div>
                <input className='input' type='file' id='image'  required ref={(ref)=>addProductForm.current["image"]=ref}  />
                </div>

                <div >
                <input  className='enter-email' type="email" placeholder="enter supervisor's mail" id='email' required ref={(ref)=>addProductForm.current["email"]=ref} />
                </div>
                
                <div>
                <input className='input' type='text' id='sup' placeholder="supervisor's name" required ref={(ref)=>addProductForm.current["sup"]=ref}/>
                </div>
                
                
                <div>
                
                <textarea  id='desc' placeholder="Supervisor's details" required ref={(ref)=>addProductForm.current["desc"]=ref}/>
                </div>
                
             

                <div>
                    <input className='input-quantity' placeholder="supervisor's warehouse" type='number' id='quantity' min={"0"} required ref={(ref)=>addProductForm.current["quanity"]=ref}/>
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

export default NewWarehouse;