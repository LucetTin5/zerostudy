import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Label = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  flex: 3;
  outline: none;
  border: 1px solid gray;
  margin-left: 10px;
  padding: 7px 10px;
`;

const StudyModal = ({ open, handleClose, newStudy }) => {
  const [data, setData] = useState({
    title: "",
    author: "",
    content: "",
    contact: "",
  });
  const handleChange =
    (prop) =>
    ({ target: { value } }) => {
      setData({ ...data, [prop]: value });
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.title.length > 2 &&
      data.author.length > 2 &&
      data.content.length > 10 &&
      data.contact.length > 2
    ) {
      newStudy(data);
      setData({
        title: "",
        author: "",
        content: "",
        contact: "",
      });
      handleClose();
    } else {
      alert("내용을 채워주세요.");
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          New Study
        </Typography>
        <Typography id="modal-modal-description" color="text.secondary">
          Add New Study
        </Typography>
        <br></br>
        <Box>
          <Form onSubmit={handleSubmit}>
            <Wrapper>
              <Label htmlFor="title">스터디 타이틀</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={data.title}
                onChange={handleChange("title")}
                minLength={2}
                required={true}
              />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="author">작성자</Label>
              <Input
                type="text"
                name=""
                id="author"
                value={data.author}
                onChange={handleChange("author")}
                minLength={2}
                required={true}
              />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="content">스터디 내용</Label>
              <textarea
                type="text"
                name="content"
                id="content"
                value={data.content}
                onChange={handleChange("content")}
                minLength={6}
                style={{
                  flex: 2.8,
                  minHeight: "80px",
                  border: "1px solid gray",
                  padding: "7px 10px",
                }}
              />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="contact">오픈카톡/연락처</Label>
              <Input
                type="text"
                name="contact"
                id="contact"
                value={data.contact}
                minLength={2}
                required={true}
                onChange={handleChange("contact")}
              />
            </Wrapper>
            <Wrapper>
              <Button variant="contained" onClick={handleSubmit}>
                등록하기
              </Button>
            </Wrapper>
          </Form>
        </Box>
      </Box>
    </Modal>
  );
};

export default StudyModal;
