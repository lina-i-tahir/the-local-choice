import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../store";

const EditForm = () => {
    const { id } = useParams();
    console.log("adsad", id)
    const storeDetails = store.find((item) => item._id === (id));
    console.log(storeDetails);

    return ( 
        <div>
            <p>
            {storeDetails ? <p>{storeDetails.storeName}</p> : <p>Loading...</p>}
            </p>
        </div>        
    );
}
 
export default EditForm;