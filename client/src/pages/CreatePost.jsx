import React, { useState } from "react";
import styled from "styled-components";
import GenerateForm from "../components/GenerateForm";
import GenerateImage from "../components/GenerateImage";

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
  const [imageLoading, setImageLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [post, setPost] = useState({
    author: "",
    prompt: "",
    photo: "",
  });
  return (
    <Container>
      <Wrapper>
        <GenerateForm
          post={post}
          setPost={setPost}
          PostLoading={postLoading}
          ImageLoading={imageLoading}
          SetImageLoading={setImageLoading}
          setPostLoading={setPostLoading}
        />
        <GenerateImage src={post?.photo} loading={imageLoading} />
      </Wrapper>
    </Container>
  );
};

export default CreatePost;
