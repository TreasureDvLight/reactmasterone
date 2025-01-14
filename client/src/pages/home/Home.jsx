import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import axios from "axios"

import './home.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

export default function Home() {

  const[posts,setPosts] = useState([]);
  const {search} = useLocation();
  

  useEffect(()=>{

    const fetchPosts = async ()=>{

     const res = await axios.get("/posts"+search);
     setPosts(res.data);

    }
    fetchPosts();
    
  },[search]);

  return (
    <>
    <Header/>
    <div className='home'>
        
        <Posts posts={posts}/>
        <SideBar/>
        
    </div>
    </>
  )
}
