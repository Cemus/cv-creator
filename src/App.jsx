import "./App.css";
import { usePDF } from "react-to-pdf";
import Header from "./components/Header";
import Form from "./components/Form";
import DisplayCV from "./components/DisplayCV";
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("english");
  function handleLanguageChange(e, newLanguage) {
    e.preventDefault();
    setLanguage(newLanguage);
  }

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  const ski = {
    id: skills.length,
    key: skills.length,
    skill: "",
  };
  const pro = {
    id: projects.length,
    key: projects.length,
    name: "",
    stack: "",
    feat1: "",
    feat2: "",
    feat3: "",
  };
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

  const [informations, setInformations] = useState({
    firstName: "Ryu",
    lastName: "Joyce",
    title: "Plongeur",
    description: "Le maître du karate!",
    photo: "",
    address: "San Fransisco",
    phoneNumber: "77 77 77 77 77",
    email: "77@lol.com",
    hobbies: "",
  });

  const { toPDF, targetRef } = usePDF({
    filename: `CV ${informations.firstName} ${
      informations.lastName
    } - ${new Date().getFullYear()}.pdf`,
  });

  function handleCustomPartChange(e, sectionName) {
    const { id, name, value } = e.target;
    const inputConcernee = name;
    switch (sectionName) {
      case "skill":
        {
          const skillCopy = [...skills];
          skillCopy[id][inputConcernee] = value;
          setSkills(skillCopy);
        }
        break;
      case "project":
        {
          const projectCopy = [...projects];
          projectCopy[id][inputConcernee] = value;
          setProjects(projectCopy);
        }
        break;
      case "experience":
        {
          const experienceCopy = [...experiences];
          experienceCopy[id][inputConcernee] = value;
          setExperiences(experienceCopy);
        }
        break;

      case "education":
        {
          const educationCopy = [...educations];
          educationCopy[id][inputConcernee] = value;
          setEducations(educationCopy);
        }
        break;
    }
  }
  function addSection(e, sectionName) {
    e.preventDefault();
    switch (sectionName) {
      case "skill":
        setSkills([...skills, ski]);
        break;
      case "project":
        setProjects([...projects, pro]);
        break;
      case "experience":
        setExperiences([...experiences, exp]);
        break;
      case "education":
        setEducations([...educations, edu]);
        break;
    }
  }
  function deleteSection(e, sectionName) {
    e.preventDefault();
    switch (sectionName) {
      case "skill":
        setSkills((prevSki) => prevSki.slice(0, -1));
        break;
      case "project":
        setProjects((prevPro) => prevPro.slice(0, -1));
        break;
      case "experience":
        setExperiences((prevExp) => prevExp.slice(0, -1));
        break;
      case "education":
        setEducations((prevEdu) => prevEdu.slice(0, -1));
        break;
    }
  }

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
      <Header language={language} handleLanguageChange={handleLanguageChange} />
      <div className="global-container">
        <Form
          language={language}
          skills={skills}
          projects={projects}
          experiences={experiences}
          educations={educations}
          onChange={handleInformationChange}
          onCustomPartChange={handleCustomPartChange}
          addSection={addSection}
          deleteSection={deleteSection}
          toPDF={toPDF}
        />
        <div ref={targetRef}>
          <DisplayCV
            language={language}
            skills={skills}
            projects={projects}
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
            hobbies={informations.hobbies}
          />
        </div>
      </div>
    </>
  );
}
