"use client"

import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className=" w-full">
      <h1> {name} Profile</h1>

      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={()=> handleEdit && handleEdit(post)}
            handleDelete={()=>handleDelete&& handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
