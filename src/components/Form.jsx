import "../styles/Form.css";

import { useState } from "react";
import FormSkill from "./FormSkill";
import FormProject from "./FormProject";
import FormExperience from "./FormExperience";
import FormEducation from "./FormEducation";

export default function Form({
  language,
  handleInformationChange,
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
  handleCustomPartChange,
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
            onChange={handleInformationChange}
            title="Choose a photo"
            autoComplete="photo"
          ></input>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french"
              ? "Informations Personnelles"
              : "Personal Informations"}
          </h3>
          {personalInformationVisible && (
            <>
              <input
                placeholder={language === "french" ? "Prénom" : "First name"}
                name="firstName"
                onChange={handleInformationChange}
                value={firstName || ""}
                autoComplete="given-name"
              ></input>
              <input
                placeholder={
                  language === "french" ? "Nom de famille" : "Last name"
                }
                name="lastName"
                onChange={handleInformationChange}
                value={lastName || ""}
                autoComplete="family-name"
              ></input>
              <input
                placeholder={language === "french" ? "Métier" : "Title"}
                name="title"
                onChange={handleInformationChange}
                value={title || ""}
              ></input>
              <textarea
                placeholder={language === "french" ? "Profil" : "Description"}
                name="description"
                onChange={handleInformationChange}
                value={description || ""}
              ></textarea>
              <input
                placeholder={language === "french" ? "Adresse" : "Address"}
                name="address"
                onChange={handleInformationChange}
                value={address || ""}
                autoComplete="address-level2"
              ></input>
              <input
                placeholder={
                  language === "french" ? "Numéro de téléphone" : "Phone number"
                }
                name="phoneNumber"
                onChange={handleInformationChange}
                value={phoneNumber || ""}
                autoComplete="tel-local"
              ></input>
              <input
                placeholder={language === "french" ? "Courriel" : "Email"}
                name="email"
                onChange={handleInformationChange}
                value={email || ""}
                autoComplete="email"
              ></input>
              <input
                placeholder={
                  language === "french"
                    ? "Site web (sans https//)"
                    : "Website (without https//)"
                }
                name="website"
                onChange={handleInformationChange}
                value={website || ""}
              ></input>
              <input
                placeholder={
                  language === "french"
                    ? "GitHub (sans https//)"
                    : "GitHub (without https//)"
                }
                name="gitHub"
                onChange={handleInformationChange}
                value={gitHub || ""}
              ></input>
              <input
                placeholder={
                  language === "french"
                    ? "LinkedIn (sans https//)"
                    : "LinkedIn (without https//)"
                }
                name="linkedIn"
                onChange={handleInformationChange}
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
            projects.map((item, acc) => (
              <FormProject
                language={language}
                key={item.id}
                id={item.id}
                numberProject={acc + 1}
                onChange={(e) => handleCustomPartChange(e, "project", acc)}
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
            experiences.map((item, acc) => (
              <FormExperience
                language={language}
                key={item.id}
                id={item.id}
                numberExperience={acc + 1}
                onChange={(e) => handleCustomPartChange(e, "experience", acc)}
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
            educations.map((item, acc) => (
              <FormEducation
                language={language}
                key={item.id}
                id={item.id}
                numberEducation={acc + 1}
                onChange={(e) => handleCustomPartChange(e, "education", acc)}
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
            skills.map((item, acc) => (
              <FormSkill
                language={language}
                key={item.id}
                id={item.id}
                numberSkill={acc + 1}
                onChange={(e) => handleCustomPartChange(e, "skill", acc)}
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
            onChange={handleInformationChange}
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
