import "./App.css";
import { usePDF } from "react-to-pdf";
import Header from "./components/Header";
import Form from "./components/Form";
import DisplayCV from "./components/DisplayCV";
import { useState } from "react";

export default function App() {
  const { toPDF, targetRef } = usePDF({ filename: "cv.pdf" });
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const exp = {
    id: experiences.length,
    key: experiences.length,
    role: "",
    company: "",
    city: "",
    from: "",
    to: "",
  };
  const edu = {
    id: educations.length,
    key: educations.length,
    university: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
  };
  function handleCareerChange(e, experience) {
    const { id, name, value } = e.target;
    const inputConcernee = name;
    if (experience) {
      const experienceCopy = [...experiences];
      experienceCopy[id][inputConcernee] = value;
      setExperiences(experienceCopy);
    } else {
      const educationCopy = [...educations];
      educationCopy[id][inputConcernee] = value;
      setEducations(educationCopy);
    }
  }
  function addSection(e, experience) {
    e.preventDefault();
    if (experience) {
      setExperiences([...experiences, exp]);
    } else {
      setEducations([...educations, edu]);
    }
  }
  function deleteSection(e, experience) {
    e.preventDefault();
    if (experience) {
      setExperiences((prevExp) => prevExp.slice(0, -1));
    } else {
      setEducations((prevEdu) => prevEdu.slice(0, -1));
    }
  }
  const [informations, setInformations] = useState({
    firstName: "Gerald",
    lastName: "Joyce",
    title: "Palefrenier",
    description: "Un bon monsieur, plein d'envie !",
    photo: "",
    address: "16 rue des alouettes",
    phoneNumber: "77 77 77 77 77",
    email: "77@lol.com",
  });
  function handleInformationChange(e) {
    let fileUrl;
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      fileUrl = URL.createObjectURL(file);
      console.log(fileUrl);
    }
    setInformations((prevInformations) => ({
      ...prevInformations,
      [name]: type === "file" ? [fileUrl] : [value],
    }));
  }
  return (
    <>
      <Header />
      <div className="global-container">
        <Form
          experiences={experiences}
          educations={educations}
          onChange={handleInformationChange}
          onCareerChange={handleCareerChange}
          addSection={addSection}
          deleteSection={deleteSection}
          toPDF={toPDF}
        />
        <div ref={targetRef}>
          <DisplayCV
            experiences={experiences}
            educations={educations}
            firstName={informations.firstName}
            lastName={informations.lastName}
            title={informations.title}
            description={informations.description}
            photo={informations.photo}
            address={informations.address}
            phoneNumber={informations.phoneNumber}
            email={informations.email}
          />
        </div>
      </div>
    </>
  );
}
