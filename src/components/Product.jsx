import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './productLoad.css';
import { useCart } from 'react-use-cart';

const Product = () => {
  const {items,isEmpty, totalUniqueItems, totalItems, cartTotal,addItem, updateItemQuantity, removeItem, emptyCart} = useCart();
    const [product, setProduct] = useState([]);
  const [disdata , setDisData] = useState([]);

  useEffect(()=>{
    NewProduct('https://honbeed.onrender.com/foods')
    // getname();
    setAllDis();
  },[]);



  function NewProduct(url) {
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
  }


  
  const storDis= ["fruits","vegetarianfood","colddrinks","chaitea"];
  function setAllDis(){
    storDis.unshift('all')
    console.log(storDis.splice)
    setDisData(storDis)
  }



//   function getname() {
//     axios.get('http://localhost:3001/list/categories')
//       .then((res) => {
//         setDisplay(res.data.unshift("all"))
//         console.log(res.data)
//         setDisplay(res.data);
//       })
//   }


function LoadProducts(event) {
    if (event.target.value === 'all') {
       NewProduct('https://honbeed.onrender.com/goods');
    }
    else {
      // NewProduct(`http://localhost:3001/list/category/${event.target.value}`);
      NewProduct(`https://honbeed.onrender.com/foods/${event.target.value}`);
    }
  }
  return (
    <div>
      <div className="col p-1"  id='cart_icons'>
      <h2>Server Data</h2>
        <div className="cart-iteam mt-2">
          <i className="bi bi-cart4" style={{
            fontSize:'24px'
          }}></i>
          <span className="bg-danger " style={
            {color:'white',borderRadius:'50%',fontSize:'24px',
              width:'50px',
              height:'50px',
              padding:'2px',
              position:'relative',
              top:'-12px'
            }
            }>{totalItems}</span>
        </div>
        </div>
      <div className="row">
        <div className="" id='select_box'>
        <select className="w-100" onChange={LoadProducts}  style={{ position:'sticky', width: "100%", top: "125px", zIndex: "1" }}>
        {disdata.map((items) => (
          <option value={items}>{items.toUpperCase()}</option>
        ))}
      </select>
        </div>
        <div className="" id='product_body'>
      {
        product.map((item,index)=>(
          <div className="col_box">
           <div className="main_box p-0">
            <div className="image_box">
              <img src={item.image} alt=""/>
              <div className="tex_box_group">
              <p className='title'>{item.title}</p>
              <p className='text_content'>{item.description}</p>
              {/* <div className="rating">
              <p>{item.rating.rate}</p>
              <p>{item.rating.count}</p>
              </div> */}
              <p className='price'>₹{item.price} </p>
              </div>
              <div className="button_group p-0 mb-2">
              <button className='btn btn-primary p-1 fw-bold'>Buy Now</button>
              <button className='btn btn-success p-1 fw-bold' onClick={() => addItem(item)} >Add to cart</button>
              </div>
            </div>
           </div>
           </div>
        ))
      }
      </div>
     
      <div className="" id='card_box'>
          <div
            className="table-box"
            style={{
              position: "sticky",
              top: "140px",
              height: "400px",
              overflow: "auto",
            }}
          >
            <table>
              <tr>
                <th>Price</th>
                <th>Prev</th>
                <th>QTY</th>
                <th>Action</th>
              </tr>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>₹ {item.price}</td>
                    <td>
                      <img
                        src={item.image}
                        className="mt-1"
                        style={{ height: "50px", width: "50px" }}
                        alt="not Loded Images"
                      />{" "}
                    </td>
                    <td>Qun : {item.quantity}</td>
                    <td id="button-content">
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        className="btn btn-danger text-white bi bi-trash-fill"
                        onClick={() => removeItem(item.id)}
                      ></button>
                    </td>
                  </tr>
                );
              })}
            </table>
            <hr />
            <div className="totle-amount">
              <span className="btn btn-success">
                Totle Amount : <i style={{ color: "pink" }}>{cartTotal}</i>
              </span>
            </div>
            <div className="button-group">
              <button className='btn btn-primary mt-1'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product





// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Product from './components/Product';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Registration from './components/Registration';



//               <li class="nav-item" id='select'>
//               {
//                 disdata.map((items) =>
//                   <option value={items} onClick={LoadProducts}>{items.toUpperCase()}</option>
//                 )
//               }
//               </li>
// {/*               
//               


//             {/* <select className='w-100' onChange={LoadProducts}>
//               {
//                 display.map((items) =>
//                   <option value={items}>{items.toUpperCase()}</option>
//                 )
//               }
//               </select>
//              */}
            
            


//<Routes>
//         <Route path='/register' element={<Registration/>} />
//       </Routes>
//         </div>
//         <div className='col-2' style={{ border: '1px solid' }}>

//         </div>
//       </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;  




// app.get('/list/:categories',async (req,res)=>{
//   //  const Categories = ["fruits","vegetarianfood","colddrinks","chaitea"];
//   console.log(req.params.categories)
//   const data = await product.find({
//       "$or":[
//          {"category":{$regex:req.params.categories}}
        
//       ] 
//   })




