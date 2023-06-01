import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import DisplayCV from "./components/DisplayCV";
import { useState } from "react";

export default function App() {
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
  function handleExperienceChange(e) {
    const { id, name, value } = e.target;
    const inputConcernee = name;
    const experienceCopy = [...experiences];
    experienceCopy[id][inputConcernee] = value;
    setExperiences(experienceCopy);
  }
  function handleEducationChange(e) {
    const { id, name, value } = e.target;
    const inputConcernee = name;
    const educationCopy = [...educations];
    educationCopy[id][inputConcernee] = value;
    setEducations(educationCopy);
  }

  function addExperience(e) {
    e.preventDefault();
    setExperiences([...experiences, exp]);
  }
  function deleteExperience(e) {
    e.preventDefault();
    setExperiences((prevExp) => prevExp.slice(0, -1));
  }

  function addEducation(e) {
    e.preventDefault();
    setEducations([...educations, edu]);
  }
  function deleteEducation(e) {
    e.preventDefault();
    setEducations((prevEdu) => prevEdu.slice(0, -1));
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
    console.log(e.target);
    const { name, value } = e.target;
    setInformations((prevInformations) => {
      return {
        ...prevInformations,
        [name]: [value],
      };
    });
  }
  return (
    <>
      <Header />
      <div className="global-container">
        <Form
          onChange={handleInformationChange}
          experiences={experiences}
          educations={educations}
          onExperiencesChange={handleExperienceChange}
          onEducationChange={handleEducationChange}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
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
    </>
  );
}
