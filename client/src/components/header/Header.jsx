import './header.css'

export default function Header(){
    return(
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>Surprise</span>
                <span className='headerTitleLg'>Blog</span>
            </div>

            <img 
            className='headerImg' src="https://images.pexels.com/photos/228095/pexels-photo-228095.jpeg?cs=srgb&dl=pexels-riciardus-228095.jpg&fm=jpg&_gl=1*3l7f36*_ga*MTU3MzgzNDU1OS4xNzIxNDIyMDcy*_ga_8JE65Q40S6*MTcyMjYxMjMwOS43LjEuMTcyMjYxMzExMC4wLjAuMA.." alt="" />


        </div>
    )
}