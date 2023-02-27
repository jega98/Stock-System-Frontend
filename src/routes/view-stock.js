import React from "react";
import axios from "axios";


function View_stock() {


    function handleSubmit() {
        console.log(gender,dresstype)

const url="http://localhost:3000/stock/"+gender+"/"+dresstype
        axios.get(url)
        .then(res => {
          console.log(res);
          console.log(res.data);
          setStocks(res.data)
        })
    }



    const [gender, setGender] = React.useState("")
    const [dresstype, setDressType] = React.useState("")
    const [stocks, setStocks] = React.useState([])


  return (
<div>
  <label>Gender:</label>
  <select onChange={(e) => setGender(e.target.value)}>
    <option value="___Select___">___Select___</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <br/><br/>
  <label>Dress Type:</label>
  <select onChange={(e) => setDressType(e.target.value)}>
    <option value="___Select___">___Select___</option>
    <option value="shirt">shirt</option>
    <option value="tops">tops</option>
    <option value="phant">phant</option>
    <option value="saree">saree</option>
  </select>
  <br/><br/>

  <button onClick={() => handleSubmit()}>SUBMIT</button>


  <table bgcolor="black" width="700">
    <tr bgcolor="grey">
        <th width="100">Size</th>
        <th width="100">Quantity</th>
        <th width="100">Price</th>
        <th width="100">Total</th>
    </tr>
    {
        stocks.map((stock, i) => 
            <tr bgcolor="lightgrey">
                <td>{stock.size}</td>
                <td>{stock.quantity}</td>
                <td>{stock.price}</td>
                <td>{stock.price*stock.quantity}</td>
            </tr>
    )}   
  </table>
</div>
  );
}

export default View_stock;