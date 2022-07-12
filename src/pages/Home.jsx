import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StudyCard from "../components/StudyCard";
import StudyModal from "../components/StudyModal";
import db from "../db.json";

const Header = styled.header`
  margin-bottom: 20px;
`;

const Main = styled.main`
  display: grid;
  padding: 0 100px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const Home = () => {
  const [studies, setStudies] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setStudies(db.studies);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const newStudy = (data) => {
    data.id = studies.length;
    setStudies([...studies, data]);
  };
  return (
    <div className="App">
      <Header>
        <Navbar handleOpen={handleOpen} />
      </Header>
      <Main>
        {studies.map((props) => {
          return <StudyCard key={props.id} info={props} />;
        })}
      </Main>
      <StudyModal open={open} handleClose={handleClose} newStudy={newStudy} />
    </div>
  );
};

export default Home;
