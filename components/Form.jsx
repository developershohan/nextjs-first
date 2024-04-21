import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className=" w-full max-w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <form onSubmit={handleSubmit} className="mt-10 flex w-full max-w-2xl flex-col gap-7 glassmorphism">
        <label>
          <span className=" font-satoshi font-semibold text-base text-gray-700">
            Your prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            className=" form_textarea"
          />
        </label>

        <label>
          <span className=" font-satoshi font-semibold text-base text-gray-700">
            Tag <span className=" font-normal">(#product, #idea) </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Write your tag here..."
            className=" form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className=" text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
         
            disabled={submitting}
            className=" bg-primary-orange rounded-full text-white px-5 py-1.5 text-sm">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
