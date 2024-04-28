"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import copy from "../public/assets/icons/copy.svg";
import tick from "../public/assets/icons/tick.svg";

const PromptCard = ({ post, handleTagClick }) => {
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 1000);
  };
  return (
    <div className="prompt_card flex flex-col gap-2">
      <div className=" prompt_header flex h-full flex-col">
        <div className=" flex justify-between gap-1">
          <div className="info flex">
            <div className="prompt_img min-w-10 min-h-10  cursor-pointer" >
              <Image
                src={post.creator.image}
                alt="user_image"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
            </div>
            <div className="flex flex-col pl-2">
              <p>{post.creator.username}</p>
              <p className="text-wrap">{post.creator.email}</p>
            </div>
          </div>
          <div className=" cursor-pointer" onClick={handleCopy}>
            <Image src={copied == post.prompt ? tick : copy} />
          </div>
        </div>
      </div>
      <div className="prompt-area flex flex-col gap-1">
        <h3 className=" font-bold	"> {post.prompt}</h3>
        <p
          className=" font-inter text-sm blue_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}>
          {" "}
          #{post.tag}{" "}
        </p>
      </div>
    </div>
  );
};

export default PromptCard;
