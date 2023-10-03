import "../styles/Form.css";

import FormExperience from "./FormExperience";
import FormEducation from "./FormEducation";

export default function Form({
  language,
  onChange,
  experiences,
  onCareerChange,
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
        <h3 className="form--title">Photo</h3>
        <input
          type="file"
          placeholder="Photo"
          name="photo"
          accept="image/*"
          onChange={onChange}
          title="Choose a photo"
        ></input>
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
        <input
          placeholder={language === "french" ? "Profil" : "Description"}
          name="description"
          onChange={onChange}
        ></input>
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
        <h3 className="form--title">
          {language === "french" ? "Expérience" : "Experience"}
        </h3>
        {experiences.map((item) => (
          <FormExperience
            language={language}
            key={item.id}
            id={item.id}
            name={item.id + 1}
            onChange={(e) => onCareerChange(e, true)}
          />
        ))}
        <button
          className="form--button"
          onClick={(e) => deleteSection(e, true)}
        >
          {language === "french" ? "Supprimer" : "Delete"}
        </button>
        <button className="form--button" onClick={(e) => addSection(e, true)}>
          {language === "french" ? "Ajouter" : "Add"}
        </button>
        <h3 className="form--title">
          {language === "french" ? "Formation" : "Education"}
        </h3>
        {educations.map((item) => (
          <FormEducation
            language={language}
            key={item.id}
            id={item.id}
            name={item.id + 1}
            onChange={(e) => onCareerChange(e, false)}
          />
        ))}
        <button
          className="form--button"
          onClick={(e) => deleteSection(e, false)}
        >
          {language === "french" ? "Supprimer" : "Delete"}
        </button>
        <button className="form--button" onClick={(e) => addSection(e, false)}>
          {language === "french" ? "Ajouter" : "Add"}
        </button>
        <h3 className="form--title">
          {language === "french" ? "Téléchargement en PDF" : "Download as PDF"}
        </h3>
        <button
          className="form--button"
          onClick={(e) => handleDownloadClick(e)}
        >
          {language === "french" ? "Télécharger" : "Download"}
        </button>
      </form>
    </div>
  );
}
