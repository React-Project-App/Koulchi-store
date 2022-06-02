import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../FirebaseConfig/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function App({ Total }) {
  const navigate = useNavigate();
  return (
    <div>
      <PayPalButton
        options={{
          clientId:
            "AchNg7n2z2SK8i_WcueuogQ6oNhCTu9KcbzMW5PmIGj8FFOE5D08N7s4xRuMvElDpcFs_Q-P3OXnHO7g",
          currency: "USD",
        }}
        amount={Total}
        onSuccess={async (details, data) => {
          console.log(details);
          const docRef = await addDoc(collection(db, "Orders"), {
            orderId: data.orderID,
            email: details.payer.email_address,
            name: details.payer.name.given_name,
            adresse:details.payer.address.address_line_1,
            CodePostal:details.payer.address.postal_code,
            total: Total,
            createdAt: new Date(),
            status: "success",
            cart: JSON.stringify(localStorage.getItem("Cart")),
          });
          toast.success(
            "Transaction completed by " + details.payer.name.given_name
          );
          navigate("/store");
        }}
      />
    </div>
  );
}
export default App;
