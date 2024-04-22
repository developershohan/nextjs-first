import Image from "next/image"
const PromptCard = ({post, handleTagClick}) => {
  // console.log(post);
  return (
    <div className="prompt_card">
      <div className="flex">
        <div className="">
{/*        
          <Image
          src={post?.creator?.image}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default PromptCard