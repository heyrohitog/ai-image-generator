import React from "react";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { GenerateAIImage } from "../api";
import { useState } from "react";

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

const GenerateForm = ({
  post,
  setPost,
  PostLoading,
  ImageLoading,
  SetImageLoading,
  setPostLoading,
}) => {
  const [error, setError] = useState("");
  const generateImageFun = async () => {
    SetImageLoading(true);
    await GenerateAIImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpge;base64,${res?.data?.photo}`,
        });
        SetImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        SetImageLoading(false);
      });
  };
  const generatePostFun = () => {
    setPostLoading(true);
  };
  return (
    <Form>
      <Header>
        <Title>Generate Image With Prompt</Title>
        <Desc>
          Write your prompt according to the image you want to generate!
        </Desc>
      </Header>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name..."
          name="name"
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write your prompt about the image..."
          name="prompt"
          rows="8"
          textArea
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        ** You can post the AI Generated Image to the Community **
      </Body>
      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={ImageLoading}
          isDisabled={post.prompt === ""}
          onClick={() => generateImageFun()}
        />
        <Button
          text="Post Image"
          flex
          leftIcon={<CreateRounded />}
          type="secondary"
          isLoading={PostLoading}
          isDisabled={
            post.name === "" || post.prompt === "" || post.photo === ""
          }
          onClick={() => generatePostFun()}
        />
      </Actions>
    </Form>
  );
};

export default GenerateForm;
