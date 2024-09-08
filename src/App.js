import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Navbar from "./Navbar";
import { UserRegister } from "./components/Registration";
import { UserLogin } from "./components/Login";
import { UserInvalid } from "./components/Invalid";

function App() {
  return (
   <BrowserRouter>
   <div className="routes">
    <div className="navbar_section"  style={{ position:'sticky', width: "100%", top: "0", zIndex: "1" }}>
        <Navbar/>
    </div>
    <div className="body_section">
      <div className="row">
        <div className="col-12">
          <Routes>
            <Route path='/product' element={<Product/>} />
            <Route path='/register' element={<UserRegister/>} />
            <Route path='/login' element={<UserLogin/>} />
            <Route path='/inv' element={<UserInvalid/>} />
          </Routes>
        </div>
        
      </div>
    </div>
   </div>
   </BrowserRouter>
  );
}

export default App;

// app.get('/list/:categories',async (req,res)=>{
//   //  const Categories = ["fruits","vegetarianfood","colddrinks","chaitea"];
//   console.log(req.params.categories)
//   const data = await product.find({
//       "$or":[
//          {"category":{$regex:req.params.categories}}

//       ]
//   })
