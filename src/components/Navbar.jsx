import { LoginOutlined, PersonOutline } from "@mui/icons-material";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  background-color: #e0f7fa;
  align-items: center;
  padding: 10px 100px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const HeaderIcon = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;
const Navbar = ({ handleOpen }) => {
  return (
    <Nav>
      <Left></Left>
      <Center>
        <Logo>ZEROBASE 5 STUDY</Logo>
      </Center>
      <Right>
        <HeaderIcon onClick={handleOpen}>스터디 등록</HeaderIcon>
      </Right>
    </Nav>
  );
};

export default Navbar;
