"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProvider } from "next-auth/react";

const Nav = () => {
    const isUserLoggedIn = true;

    //   define providers
    const [providers, setProviders] = useState(null)
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProvider()
            setProviders(response)
        }
        setProviders()

    }, [])



    return (
        //nav wrapper
        <nav className=" w-full mb-16 pt-3 flex-between">
            {/* logo */}
            <Link href="/" className=" flex gap-3">
                <Image
                    src="/assets/images/logo.svg"
                    alt=" site logo"
                    width={30}
                    height={30}
                />
                {/* logo text */}
                <p className=" logo_text">shohan</p>
            </Link>

            {/* desktop navigation */}
            <div className=" sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className=" black_btn">
                            Create Post
                        </Link>
                        <button type="button" onClick={signOut} className=" outline_btn">
                            Sign out
                        </button>

                        {/* avatar */}
                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.svg"
                                alt=" Profile"
                                width={37}
                                height={37}

                                className=" rounded-full"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && 
                        
                        Object.values(providers).map((providers)=>(
                            <button type="button" key={provider.name}
                            
                            onClick={()=>signIn(provider.id)} className=" black_btn">
                            Sign In
                        </button>
                        ))
                        }
                        </>
                )}
            </div>
            {/* mobile navigation */}
        </nav>
    );
};

export default Nav;
