import "./App.css";
import html2pdf from "html2pdf.js";
import Header from "./components/Header";
import Form from "./components/Form";
import DisplayCV from "./components/DisplayCV";
import { useState, useRef, useEffect } from "react";

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
    id: `Sk${skills.length}`,
    key: skills.length,
    skill: "",
  };
  const pro = {
    id: `Pr${projects.length}`,
    numberProject: projects.length,
    key: projects.length,
    nameProject: "",
    stackProject: "",
    feat1Project: "",
    feat2Project: "",
    feat3Project: "",
  };
  const exp = {
    id: `Ex${experiences.length}`,
    key: experiences.length,
    roleExperience: "",
    companyExperience: "",
    cityExperience: "",
    fromExperience: "",
    toExperience: "",
  };
  const edu = {
    id: `Ed${educations.length}`,
    key: educations.length,
    universityEducation: "",
    cityEducation: "",
    degreeEducation: "",
    subjectEducation: "",
    fromEducation: "",
    toEducation: "",
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
    website: "",
    linkedIn: "",
    gitHub: "",
    hobbies: "",
  });

  useEffect(() => {
    const itemsToStore = [
      "informations",
      "skills",
      "projects",
      "experiences",
      "educations",
    ];
    itemsToStore.forEach((item) => {
      const property = JSON.parse(localStorage.getItem(`${item}`));
      if (property) {
        switch (item) {
          case "informations":
            setInformations({ ...property, photo: "" });
            break;
          case "skills":
            setSkills(property);
            break;
          case "projects":
            setProjects(property);
            break;
          case "experiences":
            setExperiences(property);
            break;
          case "educations":
            setEducations(property);
            break;
        }
      }
    });
  }, []);

  const pdfRef = useRef(null);
  const handleDownloadPDF = () => {
    const opt = {
      filename: `CV ${informations.firstName} ${
        informations.lastName
      } ${new Date().getFullYear()}`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { avoid: ".noPageBreak" },
    };
    const element = pdfRef.current;
    html2pdf()
      .from(element)
      .set(opt)
      .toPdf()
      .get("pdf")
      .then(function (pdf) {
        var totalPages = pdf.internal.getNumberOfPages();
        pdf.deletePage(totalPages);
      })
      .save();
  };

  function handleCustomPartChange(e, sectionName, currentPartChanging) {
    const { name, value } = e.target;
    const inputConcernee = name;
    switch (sectionName) {
      case "skill":
        {
          const skillCopy = [...skills];
          skillCopy[currentPartChanging][inputConcernee] = value;
          setSkills(skillCopy);
          localStorage.setItem("skills", JSON.stringify(skillCopy));
        }
        break;
      case "project":
        {
          const projectCopy = [...projects];
          projectCopy[currentPartChanging][inputConcernee] = value;
          setProjects(projectCopy);
          localStorage.setItem("projects", JSON.stringify(projectCopy));
        }
        break;
      case "experience":
        {
          const experienceCopy = [...experiences];
          experienceCopy[currentPartChanging][inputConcernee] = value;
          setExperiences(experienceCopy);
          localStorage.setItem("experiences", JSON.stringify(experienceCopy));
        }
        break;

      case "education":
        {
          const educationCopy = [...educations];
          educationCopy[currentPartChanging][inputConcernee] = value;
          setEducations(educationCopy);
          localStorage.setItem("educations", JSON.stringify(educations));
        }
        break;
    }
  }
  function addSection(e, sectionName) {
    e.preventDefault();
    switch (sectionName) {
      case "skill":
        setSkills([...skills, ski]);
        localStorage.setItem("skills", JSON.stringify(skills));
        break;
      case "project":
        setProjects([...projects, pro]);
        localStorage.setItem("projects", JSON.stringify(projects));
        break;
      case "experience":
        setExperiences([...experiences, exp]);
        localStorage.setItem("experiences", JSON.stringify(experiences));
        break;
      case "education":
        setEducations([...educations, edu]);
        localStorage.setItem("educations", JSON.stringify(educations));
        break;
    }
  }
  function deleteSection(e, sectionName) {
    e.preventDefault();
    switch (sectionName) {
      case "skill":
        setSkills((prevSki) => {
          const updatedSkills = prevSki.slice(0, -1);
          localStorage.setItem("skills", JSON.stringify(updatedSkills));
          return updatedSkills;
        });

        break;
      case "project":
        setProjects((prevPro) => {
          const updatedProjects = prevPro.slice(0, -1);
          localStorage.setItem("projects", JSON.stringify(updatedProjects));
          return updatedProjects;
        });
        break;
      case "experience":
        setExperiences((prevExp) => {
          const updatedExperiences = prevExp.slice(0, -1);
          localStorage.setItem(
            "experiences",
            JSON.stringify(updatedExperiences)
          );
          return updatedExperiences;
        });

        break;
      case "education":
        setEducations((prevEdu) => {
          const updatedEducations = prevEdu.slice(0, -1);
          localStorage.setItem("educations", JSON.stringify(updatedEducations));
          return updatedEducations;
        });

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

    setInformations((prevInformations) => {
      const updatedInformations = {
        ...prevInformations,
        [name]: type === "file" ? [fileUrl] : [value],
      };
      localStorage.setItem("informations", JSON.stringify(updatedInformations));
      return updatedInformations;
    });
  }
  console.log(informations.hobbies);
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
          firstName={informations.firstName}
          lastName={informations.lastName}
          title={informations.title}
          description={informations.description}
          address={informations.address}
          phoneNumber={informations.phoneNumber}
          email={informations.email}
          website={informations.website}
          linkedIn={informations.linkedIn}
          gitHub={informations.gitHub}
          hobbies={informations.hobbies}
          handleInformationChange={handleInformationChange}
          handleCustomPartChange={handleCustomPartChange}
          addSection={addSection}
          deleteSection={deleteSection}
          toPDF={handleDownloadPDF}
        />
        <div className="noPageBreak" ref={pdfRef}>
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
            website={informations.website}
            linkedIn={informations.linkedIn}
            gitHub={informations.gitHub}
            hobbies={informations.hobbies}
          />
        </div>
      </div>
    </>
  );
}
