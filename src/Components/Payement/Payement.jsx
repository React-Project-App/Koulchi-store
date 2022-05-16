import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
function  App( {Total}) {
//   const [state,setState]=useState(0)
  return (
    <div>

        {/* <input 
        type="number" 
        value={Total}
        // onChange={e=>{
        // //   setState(e.target.value)
        // }} 
        /> */}

        <PayPalButton
        options={{
          clientId: 
          "AeSMgBV-xZVsUdWPzzgIBjYF7hNhYE3eVCgR3FqVs4Z7kywhEy7t1S3mLmdKLT3Y1zyylr3vSwkeRBgw",
          currency: "USD",
        }}
            amount={Total}
            onSuccess={(details, data) => {
              alert("Transaction completed by " + details.payer.name.given_name);
              // console.log({details,data});
            }}
          />
       </div>
  );
}
export default App;
