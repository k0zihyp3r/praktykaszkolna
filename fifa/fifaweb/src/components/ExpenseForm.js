import './ExpenseForm.css';
import React from 'react';




import './Herb.css';
import {MdCloudUpload, MdDelete} from 'react-icons/md'
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import axios from 'axios';


const ExpenseForm = (props) =>{

    const [teamName, setteamName] = useState('');
    const [player, setPlayer] = useState('');
    



    const titleChangeHandler = (e) =>{
       setteamName(e.target.value);
    };


    const amountChangeHandler = (e) =>{
        setPlayer(e.target.value);


    };
    const posting = ()=>{
    const url = "http://praktykaczynimistrza.pl/phpmyadmin.php";
    let fData = new FormData();
    fData.append('player',player);
    fData.append('teamName',teamName);
    fData.append('id',v4());
    axios.post(url,fData)
  }
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
  
    const imagesListRef = ref(storage, "images/");
    
    
    
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    };





  
    useEffect(() => {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
    }, []);




    

    return (
        <div className='new-expense__controls'>
<div className='new-expense__control'>
                <label>Nazwa drużyny</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Nazwa gracza</label>
                <input type='text'onChange={amountChangeHandler}/>
            </div>
          <form action='' onClick={()=> document.querySelector(".input-field").click()} className='form1'>

          
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }} className= "input-field"hidden
          /><MdCloudUpload></MdCloudUpload></form>
          <button type="submit"onClick={()=>{uploadFile();    props.newTeam(player,teamName); posting();
}} className='new-expense__actions'> Dodaj drużynę</button>
          
        </div>
      );


};
export default ExpenseForm;