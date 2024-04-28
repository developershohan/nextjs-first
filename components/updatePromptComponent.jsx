"use client"
import { useEffect, useState } from 'react';
import Form from "@components/Form";

const UpdatePromptComponent = ({ promptId }) => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      if (!promptId) return;
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    getPromptDetails();
  }, [promptId]);

  const updatePromptSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    if (!promptId) return alert('Prompt not found');
    try {
      const res = await fetch(`api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        // Handle success
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePromptSubmit}
    />
  );
};

export default UpdatePromptComponent;
