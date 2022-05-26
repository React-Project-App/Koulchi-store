import React from "react";
import { GET_TEAM } from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";



export const GetTeam=()=>async (dispatch)=>{
    onSnapshot(collection(db,"Team"),(member)=>{
        dispatch({type:GET_TEAM,payload:member});
    })
}