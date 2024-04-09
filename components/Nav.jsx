"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { signIn, signOut,useSession,getProvider } from "next-auth/react"


const Nav = () => {
  return (
    <nav className=" w-full mb-16 pt-3 flex-between">
        <Link href= "/" >
        <Image src= "/assets/images/logo.svg"
        alt=" site logo"
        width={30} height={30} />
        <p className=" logo_text">shohan</p>
        </Link>
    </nav>
  )
}

export default Nav