import React from "react";
import axios from "axios";
    
    
    function Add_stock() {
    
    
        function handleSubmit() {
            console.log(gender,dresstype,dressname,size,quantity,price)
            const stock = {
                gender:gender,
                dresstype:dresstype,
                dressname:dressname,
                size:size,
                quantity:quantity,
                price:price
            }
            axios.post("http://localhost:3000/addstock", { "gender":gender,"dresstype":dresstype,"dressname":dressname,"size":size,"quantity":quantity,"price":price })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
        }
        
    
    
    
        const [gender, setGender] = React.useState("")
        const [dresstype, setDressType] = React.useState("")
        const [dressname, setDressName] = React.useState("")
        const [size, setSize] = React.useState("")
        const [quantity, setQuantity] = React.useState("")
        const [price, setPrice] = React.useState("")


      return (
    <div>
      <label>Gender  :</label>
      {/* {console.log(size)} */}
      <select onChange={(e) => setGender(e.target.value)}>
        <option value="___Select___">___Select___</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br/><br/>
      <label>Dress Type  :</label>
      <select onChange={(e) => setDressType(e.target.value)}>
        <option value="___Select___">___Select___</option>
        <option value="shirt">shirt</option>
        <option value="tops">tops</option>
        <option value="phant">phant</option>
        <option value="saree">saree</option>
      </select>
      <br/><br/>
      <label>Dress Name  :</label>
      <input type ="text" onChange={(e) => setDressName(e.target.value)}/><br/><br/>
      <label>Size  :</label>
      <input type ="text" onChange={(e) => setSize(e.target.value)}/><br/><br/>
      <label>Quantity  :</label>
      <input type ="text" onChange={(e) => setQuantity(e.target.value)}/><br/><br/>
      <label>Price  :</label>
      <input type ="text" onChange={(e) => setPrice(e.target.value)}/><br/><br/>
    
      <button onClick={() => handleSubmit()}>SUBMIT</button>
    </div>
      );
    }

    export default Add_stock;