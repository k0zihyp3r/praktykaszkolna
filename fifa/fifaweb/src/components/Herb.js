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

function Herb() {
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
      <form action='' onClick={()=> document.querySelector(".input-field").click()} className='form1'>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} className= "input-field"hidden
      /><MdCloudUpload></MdCloudUpload></form>
      <button onClick={uploadFile} className='new-expense__actions'> Dodaj herb</button>
      
    </div>
  );
}

export default Herb;