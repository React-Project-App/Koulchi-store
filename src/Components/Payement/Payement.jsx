import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { collection, addDoc } from "firebase/firestore"; 
import { toast } from "react-toastify";
import {db} from "../../FirebaseConfig/FirebaseConfig"

function  App( {Total}) {
//   const [state,setState]=useState(0)
  return (
    <div>

        <PayPalButton
        options={{
          clientId: 
          "AeSMgBV-xZVsUdWPzzgIBjYF7hNhYE3eVCgR3FqVs4Z7kywhEy7t1S3mLmdKLT3Y1zyylr3vSwkeRBgw",
          currency: "USD",
        }}
            amount={Total}
            onSuccess= { async(details, data) => {

              
              toast.success("Transaction completed by " + details.payer.name.given_name);
              const docRef = await addDoc(collection(db, "Orders"), {
                orderId: data.orderID,
                email: details.payer.email_address,
                name: details.payer.name.given_name,
                total: Total,
                createdAt: new Date(),
                status: "success",
                cart: JSON.stringify(localStorage.getItem("Cart"))

              });


            }}
          />
       </div>
  );
}
export default App;
