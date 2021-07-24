import React from "react";
import { Link } from "react-router-dom";
import CartCount from "../components/cartCount";
import Lang from "../components/lang";
import Nav from "../components/nav";
import "./cart.css";

const Cart = ({ lang, cart }) => {
  const calculateTotal = () => {
    var total = 0;
    for (var i in cart) {
      total += parseFloat(cart[i].price);
    }
    return total;
  };

  return <h1>Under Construction</h1>;

  // return (
  //   <>
  //     <div className="cart-container">
  //       <h1 className="cart-heading">Cart</h1>
  //       <div className="row center">
  //         <div className="cart">
  //           {cart.length === 0 ? (
  //             <>
  //               <h1 style={{ textAlign: "center" }}>0 items in the Cart</h1>
  //               <Link to="/packages" className="btn btn-wide btn-black">
  //                 Go to Packages
  //               </Link>
  //             </>
  //           ) : (
  //             <table>
  //               <tr className="title">
  //                 <td
  //                   style={{
  //                     borderTopLeftRadius: "15px",
  //                   }}
  //                   className="title"
  //                 >
  //                   #
  //                 </td>
  //                 <td className="title">Cart Item</td>
  //                 <td
  //                   style={{ borderTopRightRadius: "15px" }}
  //                   className="title"
  //                 >
  //                   Price
  //                 </td>
  //               </tr>
  //               {cart.map((a, i) => (
  //                 <tr>
  //                   <td>{i + 1}</td>
  //                   <td>{a.title}</td>
  //                   <td>{a.price}</td>
  //                 </tr>
  //               ))}
  //             </table>
  //           )}
  //         </div>
  //         <div className="confirm-buy">
  //           <h1>Order Summery</h1>
  //           <h2 style={{ display: "flex" }}>
  //             <span style={{ flex: 1 }}>Subtotal:</span>
  //             {lang == "bd" ? "" : "$"}
  //             {calculateTotal()} {lang == "bd" ? "BDT" : "USD"}
  //           </h2>
  //           <div className="row btn-box">
  //             <Link to="/register" className="btn btn-black">
  //               Register
  //             </Link>
  //             <Link to="/login" className="btn btn-secondary">
  //               Login
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Cart;
