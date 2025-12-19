// import React, { useEffect, useState } from "react";
// import { api } from "../utils/api";

// export default function CartSidebar({ token, onClose }) {
//   const [loading, setLoading] = useState(true);
//   const [cart, setCart] = useState({ items: [], subtotal: 0 });
//   const [busyId, setBusyId] = useState(null);

//   const loadSummary = async () => {
//     try {
//       const { data } = await api.get("/cart/summary", { params: { channel: "web" } });
//       setCart({
//         items: data?.cart?.items || [],
//         subtotal: data?.cart?.subtotal || 0,
//       });
//     } catch (e) {
//       // non-fatal
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!token) return;
//     loadSummary();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [token]);

//   const removeItem = async (cartItemId) => {
//     try {
//       setBusyId(cartItemId);
//       const { data } = await api.delete(`/cart/item/${cartItemId}`, {
//         params: { channel: "web" },
//       });
//       setCart({
//         items: data?.cart?.items || [],
//         subtotal: data?.cart?.subtotal || 0,
//       });
//     } catch (e) {
//       // non-fatal
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <div className="mt-4">
//       <div className="flex items-center justify-between mb-2">
//         <h2 className="text-sm font-semibold text-black ">My Cart</h2>
//         {onClose ? (
//           <button
//             onClick={onClose}
//             className="text-xs text-black hover:text-gray-700 text-black"
//           >
//             Close
//           </button>
//         ) : null}
//       </div>

//       <div className="border rounded-lg bg-white">
//         {loading ? (
//           <div className="p-4 text-sm text-black">Loading cart…</div>
//         ) : cart.items.length === 0 ? (
//           <div className="p-4 text-sm text-black">Your cart is empty.</div>
//         ) : (
//           <div className="max-h-[55vh] overflow-y-auto">
//             {cart.items.map((it) => (
//               <div
//                 key={it.cart_item_id}
//                 className="flex items-center gap-3 p-3 border-b last:border-b-0"
//               >
//                 <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xs">
//                   {/* If you later store image in meta, use it here */}
//                   🛍️
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="text-sm font-medium truncate text-black">{it.product_id}</div>
//                   <div className="text-xs text-black">
//                     Qty: {it.qty} • ₹{it.price}
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeItem(it.cart_item_id)}
//                   disabled={busyId === it.cart_item_id}
//                   className={`text-xs px-2 py-1 border rounded text-black ${
//                     busyId === it.cart_item_id
//                       ? "opacity-60 cursor-not-allowed"
//                       : "hover:bg-gray-50"
//                   }`}
//                 >
//                   {busyId === it.cart_item_id ? "…" : "Remove"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Footer */}
//         <div className="p-3 border-t">
//           <div className="flex items-center justify-between text-sm mb-2">
//             <span className="text-black">Subtotal</span>
//             <span className="font-semibold text-black">₹{cart.subtotal}</span>
//           </div>
//           <button
//             className="w-full text-sm font-semibold px-3 py-2 rounded-lg bg-[var(--brand-primary)] text-white disabled:opacity-60"
//             disabled={cart.items.length === 0}
//             onClick={() => alert("Checkout flow coming next ✨")}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
// import { api } from '../utils/api'; // You might not need this if all data comes from props

export default function CartSidebar({ token, onClose, cart }) {
  // If 'cart' is passed from parent, use it. 
  // Otherwise, default to empty array to avoid crash.
  const items = cart?.items || [];
  const subtotal = cart?.subtotal || 0;

  return (
    <div className="absolute top-[60px] left-0 w-full bg-white border-b border-[var(--border-light)] shadow-sm z-10 p-4 max-h-[calc(100vh-200px)] overflow-y-auto">
      <h3 className="font-bold text-lg mb-3 text-black">Your Cart</h3>
      
      {items.length === 0 ? (
        <p className="text-gray-500 text-sm">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-3 border-b pb-3 last:border-0">
               <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden shrink-0">
                 {/* Placeholder or real image if available in cart item meta */}
                 <img src="https://via.placeholder.com/64" alt="Product" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1">
                 <p className="font-medium text-sm text-black truncate">{item.product_id}</p> {/* Or item name if available */}
                 <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                 <p className="font-semibold text-sm text-black">₹{item.price_at_add}</p>
               </div>
            </div>
          ))}
          
          <div className="pt-2 border-t mt-2 flex justify-between items-center">
            <span className="font-bold text-black">Subtotal:</span>
            <span className="font-bold text-lg text-black">₹{subtotal}</span>
          </div>
          
          <button className="w-full bg-black text-white py-2 rounded-lg mt-3 text-sm font-medium">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}