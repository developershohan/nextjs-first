"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
const PromptCard = ({ post, handleTagClick }) => {
  
  
  return (
    <div className="prompt_card">
      <div className="flex">
        <div>
        <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
          <p>{post.creator.username}</p>
          <p>{post.prompt}</p>

          <p>{post.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
