import Product from "../componunts/Product";
import "./HomeScreen.css"

const  HomeScreen=()=> {
  return (    <div className="HomeScreen">
      <h2 className="h_title">Letest products</h2>
      <div className="Hm_products">
       <Product />
       <Product />
       <Product />
       <Product />
       <Product />
       <Product />
      </div>
    
    </div>)

}

export default HomeScreen;
