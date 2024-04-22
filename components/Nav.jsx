"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const {data: session}= useSession()
  console.log(session?.user);

  //   define providers
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

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
        {session?.user ? (
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
                src={session?.user.image}
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
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className=" black_btn">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* mobile navigation */}
      <div className="flex relative sm:hidden">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              alt=" Profile"
              width={37}
              height={37}
              className=" rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className=" dropdown_link "
                  onClick={() => setToggleDropdown(false)}>
                  profile
                </Link>
                <Link href={"create-prompt "}
                 className=" dropdown_link "
                  onClick={() => setToggleDropdown(false)}>
                  Create Prompt 
                </Link>
                <button className=" black_btn w-full mt-5">
                    Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className=" black_btn">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
