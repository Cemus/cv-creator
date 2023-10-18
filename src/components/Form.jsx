import "../styles/Form.css";

import { useState } from "react";
import FormSkill from "./FormSkill";
import FormProject from "./FormProject";
import FormExperience from "./FormExperience";
import FormEducation from "./FormEducation";

export default function Form({
  language,
  onChange,
  skills,
  projects,
  experiences,
  educations,
  firstName,
  lastName,
  title,
  description,
  address,
  phoneNumber,
  email,
  website,
  linkedIn,
  gitHub,
  hobbies,
  onCustomPartChange,
  deleteSection,
  addSection,
  toPDF,
}) {
  const [personalInformationVisible, setPersonalInformationVisible] =
    useState(true);
  const [projectsVisible, setProjectsVisible] = useState(true);
  const [experiencesVisible, setExperiencesVisible] = useState(true);
  const [educationsVisible, setEducationsVisible] = useState(true);
  const [skillsVisible, setSkillsVisible] = useState(true);
  function handleDownloadClick(e) {
    e.preventDefault();
    toPDF();
  }

  return (
    <div className="form--container">
      <form>
        <div className="form--categories">
          <h3 className="form--title">Photo</h3>
          <input
            type="file"
            placeholder="Photo"
            name="photo"
            accept="image/*"
            onChange={onChange}
            title="Choose a photo"
            autoComplete="photo"
          ></input>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french"
              ? "Information Personnelle"
              : "Personal Information"}
          </h3>
          {personalInformationVisible && (
            <>
              <input
                placeholder={language === "french" ? "Prénom" : "First name"}
                name="firstName"
                onChange={onChange}
                value={firstName || ""}
                autoComplete="given-name"
              ></input>
              <input
                placeholder={
                  language === "french" ? "Nom de famille" : "Last name"
                }
                name="lastName"
                onChange={onChange}
                value={lastName || ""}
                autoComplete="family-name"
              ></input>
              <input
                placeholder={language === "french" ? "Métier" : "Title"}
                name="title"
                onChange={onChange}
                value={title || ""}
              ></input>
              <textarea
                placeholder={language === "french" ? "Profil" : "Description"}
                name="description"
                onChange={onChange}
                value={description || ""}
              ></textarea>
              <input
                placeholder={language === "french" ? "Adresse" : "Address"}
                name="address"
                onChange={onChange}
                value={address || ""}
                autoComplete="address-level2"
              ></input>
              <input
                placeholder={
                  language === "french" ? "Numéro de téléphone" : "Phone number"
                }
                name="phoneNumber"
                onChange={onChange}
                value={phoneNumber || ""}
                autoComplete="tel-local"
              ></input>
              <input
                placeholder={language === "french" ? "Courriel" : "Email"}
                name="email"
                onChange={onChange}
                value={email || ""}
                autoComplete="email"
              ></input>
              <input
                placeholder={language === "french" ? "Site web" : "Website"}
                name="website"
                onChange={onChange}
                value={website || ""}
              ></input>
              <input
                placeholder="GitHub"
                name="gitHub"
                onChange={onChange}
                value={gitHub || ""}
              ></input>
              <input
                placeholder="LinkedIn"
                name="linkedIn"
                onChange={onChange}
                value={linkedIn || ""}
              ></input>
            </>
          )}
          <button
            className="form--button"
            onClick={(e) => {
              e.preventDefault();
              setPersonalInformationVisible((prevState) => !prevState);
            }}
          >
            {personalInformationVisible
              ? language === "french"
                ? "Cacher"
                : "Hide"
              : language === "french"
              ? "Afficher"
              : "Unhide"}
          </button>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Projet" : "Project"}
          </h3>
          {projectsVisible &&
            projects.map((item) => (
              <FormProject
                language={language}
                key={item.id}
                id={item.id}
                name={item.id + 1}
                onChange={(e) => onCustomPartChange(e, "project")}
                projects={projects}
              />
            ))}
          <button
            className="form--button"
            onClick={(e) => deleteSection(e, "project")}
          >
            {language === "french" ? "Supprimer" : "Delete"}
          </button>
          <button
            className="form--button"
            onClick={(e) => addSection(e, "project")}
          >
            {language === "french" ? "Ajouter" : "Add"}
          </button>
          <button
            className="form--button"
            onClick={(e) => {
              e.preventDefault();
              setProjectsVisible((prevState) => !prevState);
            }}
          >
            {projectsVisible
              ? language === "french"
                ? "Cacher"
                : "Hide"
              : language === "french"
              ? "Afficher"
              : "Unhide"}
          </button>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Expérience" : "Experience"}
          </h3>
          {experiencesVisible &&
            experiences.map((item) => (
              <FormExperience
                language={language}
                key={item.id}
                id={item.id}
                name={item.id + 1}
                onChange={(e) => onCustomPartChange(e, "experience")}
                experiences={experiences}
              />
            ))}
          <button
            className="form--button"
            onClick={(e) => deleteSection(e, "experience")}
          >
            {language === "french" ? "Supprimer" : "Delete"}
          </button>
          <button
            className="form--button"
            onClick={(e) => addSection(e, "experience")}
          >
            {language === "french" ? "Ajouter" : "Add"}
          </button>
          <button
            className="form--button"
            onClick={(e) => {
              e.preventDefault();
              setExperiencesVisible((prevState) => !prevState);
            }}
          >
            {experiencesVisible
              ? language === "french"
                ? "Cacher"
                : "Hide"
              : language === "french"
              ? "Afficher"
              : "Unhide"}
          </button>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Formation" : "Education"}
          </h3>
          {educationsVisible &&
            educations.map((item) => (
              <FormEducation
                language={language}
                key={item.id}
                id={item.id}
                name={item.id + 1}
                onChange={(e) => onCustomPartChange(e, "education")}
                educations={educations}
              />
            ))}
          <button
            className="form--button"
            onClick={(e) => deleteSection(e, "education")}
          >
            {language === "french" ? "Supprimer" : "Delete"}
          </button>
          <button
            className="form--button"
            onClick={(e) => addSection(e, "education")}
          >
            {language === "french" ? "Ajouter" : "Add"}
          </button>
          <button
            className="form--button"
            onClick={(e) => {
              e.preventDefault();
              setEducationsVisible((prevState) => !prevState);
            }}
          >
            {educationsVisible
              ? language === "french"
                ? "Cacher"
                : "Hide"
              : language === "french"
              ? "Afficher"
              : "Unhide"}
          </button>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Compétences" : "Skills"}
          </h3>
          {skillsVisible &&
            skills.map((item) => (
              <FormSkill
                language={language}
                key={item.id}
                id={item.id}
                name={item.id + 1}
                onChange={(e) => onCustomPartChange(e, "skill")}
                skills={skills}
              />
            ))}
          <button
            className="form--button"
            onClick={(e) => deleteSection(e, "skill")}
          >
            {language === "french" ? "Supprimer" : "Delete"}
          </button>
          <button
            className="form--button"
            onClick={(e) => addSection(e, "skill")}
          >
            {language === "french" ? "Ajouter" : "Add"}
          </button>
          <button
            className="form--button"
            onClick={(e) => {
              e.preventDefault();
              setSkillsVisible((prevState) => !prevState);
            }}
          >
            {skillsVisible
              ? language === "french"
                ? "Cacher"
                : "Hide"
              : language === "french"
              ? "Afficher"
              : "Unhide"}
          </button>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Loisirs" : "Hobbies"}
          </h3>
          <textarea
            placeholder={language === "french" ? "Intérêts" : "Interests"}
            name="hobbies"
            onChange={onChange}
            value={hobbies ? hobbies : ""}
          ></textarea>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french"
              ? "Téléchargement en PDF"
              : "Download as PDF"}
          </h3>
          <button
            className="form--button"
            onClick={(e) => handleDownloadClick(e)}
          >
            {language === "french" ? "Télécharger" : "Download"}
          </button>
        </div>
      </form>
    </div>
  );
}
