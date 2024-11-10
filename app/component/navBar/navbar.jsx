'use client'
import React from "react"
import './style.css'
import logo from '../assets/logo.png'
import Image from 'next/image'
import '../../globals.css'
import cart_icon from '../assets/cart_icon.png'
import { useState } from "react"
import Link from "next/link"
import { useRouter} from "next/navigation"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {ShopContext, ShopContextProvider} from '../Context/ShopContext'
import { useContext,useEffect} from "react"



const NavBar = ({cartsum}) =>{

    const { cartItemsNumber, removeFromCart,getCartProductsNumber} = useContext(ShopContext);
    const [menu,setMenu] = useState("");
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
   
    const [cartNumber,setCartNumber] = useState(0);




   

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem("token");
            window.location.replace('/')
        }
    }
    
    useEffect(() => {
        const fetchData = async () => {
            setIsClient(true);
            //const cartProductsNumber = await getCartProductsNumber();
            //setCartNumber(cartProductsNumber);
        };
    
        fetchData();
    }, []);


    return(
    <ShopContextProvider>
        <div className="navbar">
            <div className="container">
                <div className="logo">
                <Image
                src={logo}
                alt = 'logo'
                className="logo-image"
                priority={true}
                />
                <h1>SHOPPER</h1>
                </div>
                <div className="links">
                <ul>
                    <li>
                        <Link href='/' as='/'>Shop</Link>
                    </li>
                    <li>
                        <Link href='/men' as='/men'>Men</Link>       
                    </li>
                    <li >
                        <Link href='/women' as='/women'>Women</Link>
                    </li>
                    <li>
                        <Link href='/kids' as='/kids'>Kids</Link>
                    </li>
                </ul>
                
                </div>
                <div className="login">
                {isClient && (
                        <>
                            {window.localStorage.getItem('token') ? (
                                <button type="button" onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link href='/login'><button type="button">Login</button></Link>
                            )}
                        </>
                    )}
                    <Link href='/cart'>
                    <div className='cart-count' content={cartItemsNumber}>
                    <Image
                    src={cart_icon}
                    alt = 'cart_icon'
                    height={30}
                    width={30}
                    className="cart"
                    />
                    </div>
                    </Link>
                    <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={()=>{
                        let menu = document.querySelector('.links');
                        
                        if(menu.style.display==='block'){
                            menu.style.display = 'none';
                        }
                        else{
                            menu.style.display = 'block';
                    
                        }
                        
                        }}></FontAwesomeIcon>
                </div>
            </div>
        </div>
        
        </ShopContextProvider>
    )
}

export default NavBar;