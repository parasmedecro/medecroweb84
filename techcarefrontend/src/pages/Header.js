// This is the header page contain in all page 

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(){

    return(
        <div>
            {/* this is outer box of  the header part  */}
            <div className="w-full h-[60px] bg-[#003F7D] flex flex-row justify-between">

                {/* this is for the name */}
                <div>
                    <h1 className="text-3xl m-4 uppercase font-serif">Techcare</h1>
                </div>

                <div className=" flex flex-row gap-9 text-[#dedbdb] m-4 mx-16  justify-between font-light">
                    <div className="text-1xl"><Link to={'/'}>Home</Link></div>
                    <div className="text-1xl"><Link to={'/AboutUs'}>About Us</Link></div>
                    <div className="text-1xl"><Link to={'/ContactUs'}>Contact Us</Link></div>
                    <h1 className="text-1xl"><Link to={'/SignInPatient'}>SignIn</Link></h1>
                    <div className="text-1xl"><Link to={'/inventoryhomepage'}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link></div>
                </div>

            

            </div>
        </div>
    )
}