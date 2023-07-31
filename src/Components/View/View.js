import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import {collection, getDocs, query, where} from 'firebase/firestore'

import './View.css';
import { PostContext } from '../../store/PostContext';
function View() {

  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const userRef = (collection(db,'users'))

  const fetchDetails = async() =>{
    const {userId} = postDetails
    if (postDetails && userId){
      const queryData = query(userRef,where('id','==',userId))
      const res = await getDocs(queryData);
      res.forEach((doc)=>{
        setUserDetails(doc.data());
      })
    }
  }

  useEffect(()=> {
    fetchDetails();
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails&& <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
