import { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function SideBar() {

  const [cats,setCats]=useState([]);

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[]);

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img className='sidebarImg'src="https://images.pexels.com/photos/4670324/pexels-photo-4670324.jpeg?cs=srgb&dl=pexels-leeloothefirst-4670324.jpg&fm=jpg&_gl=1*xvi04f*_ga*MTU3MzgzNDU1OS4xNzIxNDIyMDcy*_ga_8JE65Q40S6*MTcyMjYyMjE5My44LjEuMTcyMjYyMjE5My4wLjAuMA.." alt="" />
            <p className='sidebarTag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius maxime veritatis soluta? </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
            <ul className="sidebarList">
              {
                cats.map((c)=>(
                  <Link to={`/?cat=${c.name}`} className="link">
                      <li className="sidebarListItem">{c.name}</li>
                  </Link>
                
                ))
              }
                
               
            </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW</span>
        <div className="sidebarSocial">
                        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
