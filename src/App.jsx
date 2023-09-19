import React, { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import { txtDB } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

import Header from "./components/Header.jsx";
import ImageGallery from "./components/ImageGallery.jsx";

function App({isAuth}){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchInput, setSearchInput] = useState('')

    const getData = async () =>{
        const valRef = collection(txtDB,'txtData')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(), id:val.id}))
        setData(allData)
        setIsLoading(false)
    }

    useEffect(()=>{
        setTimeout(() => {
          getData()
        }, 2000)
}, [])

    return(
      <>
        <Header searchInput={searchInput} setSearchInput={setSearchInput} isAuth={isAuth} />
        {isLoading ? <Loader /> : <ImageGallery data={data} setData={setData} searchInput={searchInput}/>}
      </>
    )
}
export default App

{/* <input onChange={(e)=>setTxt(e.target.value)} /><br/>
<input type="file" onChange={(e)=>handleUpload(e)} /><br/><br/>
<button onClick={handleClick}>Add</button> */}