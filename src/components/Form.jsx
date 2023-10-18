import "../styles/Form.css";

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
  onCustomPartChange,
  deleteSection,
  addSection,
  educations,
  toPDF,
}) {
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
          ></input>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french"
              ? "Information Personnelle"
              : "Personal Information"}
          </h3>
          <input
            placeholder={language === "french" ? "Prénom" : "First name"}
            name="firstName"
            onChange={onChange}
          ></input>
          <input
            placeholder={language === "french" ? "Nom de famille" : "Last name"}
            name="lastName"
            onChange={onChange}
          ></input>
          <input
            placeholder={language === "french" ? "Métier" : "Title"}
            name="title"
            onChange={onChange}
          ></input>
          <textarea
            placeholder={language === "french" ? "Profil" : "Description"}
            name="description"
            onChange={onChange}
          ></textarea>
          <input
            placeholder={language === "french" ? "Adresse" : "Address"}
            name="address"
            onChange={onChange}
          ></input>
          <input
            placeholder={
              language === "french" ? "Numéro de téléphone" : "Phone number"
            }
            name="phoneNumber"
            onChange={onChange}
          ></input>
          <input
            placeholder={language === "french" ? "Courriel" : "Email"}
            name="email"
            onChange={onChange}
          ></input>
          <input
            placeholder={language === "french" ? "Site web" : "Website"}
            name="website"
            onChange={onChange}
          ></input>
          <input placeholder="GitHub" name="gitHub" onChange={onChange}></input>
          <input
            placeholder="LinkedIn"
            name="linkedIn"
            onChange={onChange}
          ></input>
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Projet" : "Project"}
          </h3>
          {projects.map((item) => (
            <FormProject
              language={language}
              key={item.id}
              id={item.id}
              name={item.id + 1}
              onChange={(e) => onCustomPartChange(e, "project")}
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
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Expérience" : "Experience"}
          </h3>
          {experiences.map((item) => (
            <FormExperience
              language={language}
              key={item.id}
              id={item.id}
              name={item.id + 1}
              onChange={(e) => onCustomPartChange(e, "experience")}
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
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Formation" : "Education"}
          </h3>
          {educations.map((item) => (
            <FormEducation
              language={language}
              key={item.id}
              id={item.id}
              name={item.id + 1}
              onChange={(e) => onCustomPartChange(e, "education")}
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
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Compétences" : "Skills"}
          </h3>
          {skills.map((item) => (
            <FormSkill
              language={language}
              key={item.id}
              id={item.id}
              name={item.id + 1}
              onChange={(e) => onCustomPartChange(e, "skill")}
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
        </div>

        <div className="form--categories">
          <h3 className="form--title">
            {language === "french" ? "Loisirs" : "Hobbies"}
          </h3>
          <textarea
            placeholder={language === "french" ? "Intérêts" : "Interests"}
            name="hobbies"
            onChange={onChange}
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
