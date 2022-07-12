import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StudyCard from "../components/StudyCard";
import StudyModal from "../components/StudyModal";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

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
    (async () => {
      const querySnapshot = await getDocs(collection(db, "studies"));
      let tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
      });
      setStudies([...studies, ...tempArr]);
    })();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const newStudy = async (data) => {
    try {
      data.id = Date.now();
      const docRef = await addDoc(collection(db, "studies"), data);
      console.log("Document written with ID: ", docRef.id);
      setStudies([...studies, data]);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
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
