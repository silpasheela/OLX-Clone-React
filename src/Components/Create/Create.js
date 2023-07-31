import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext } from '../../store/Context';
import { storage,db } from '../../firebase/config';
import { ref,put, uploadBytes,getDownloadURL} from 'firebase/storage';
import {addDoc,collection} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'

const Create = () => {

  const {user} = useContext(AuthContext)
  
   const [name,setName] = useState('')
   const [category,setCategory] = useState('')
   const [price,setPrice] = useState('')
   const [image,setImage] = useState(null)
   const productRef = (collection(db,'products'))
   const date = new Date()
   const navigate = useNavigate()
  
   const handleSubmit = async ()=>{
    const storageRef = ref(storage,`/image/${image.name}`)
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    console.log(url)
    addDoc(productRef,{
      name,
      category,
      price,
      url,
      userId:user.uid,
      createdAt:date.toDateString()
    })
    navigate('/')
   }

  return (
    <Fragment>
      <Header />
      <card>

        <div className="centerDiv">
        <h4>INCLUDE SOME DETAILS</h4><br></br>

            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}

            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}

            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):""}></img>

            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">Post now</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
