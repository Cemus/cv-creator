import "../styles/Form.css";

import FormExperience from "./FormExperience";
import FormEducation from "./FormEducation";

export default function Form({
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
        <h3 className="form--title">Personal Information</h3>
        <input
          placeholder="First Name"
          name="firstName"
          onChange={onChange}
        ></input>
        <input
          placeholder="Last Name"
          name="lastName"
          onChange={onChange}
        ></input>
        <input placeholder="Title" name="title" onChange={onChange}></input>
        <input
          placeholder="Description"
          name="description"
          onChange={onChange}
        ></input>
        <input placeholder="Address" name="address" onChange={onChange}></input>
        <input
          placeholder="Phone number"
          name="phoneNumber"
          onChange={onChange}
        ></input>
        <input placeholder="Email" name="email" onChange={onChange}></input>
        <h3 className="form--title">Experience</h3>
        {experiences.map((item) => (
          <FormExperience
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
          Delete
        </button>
        <button className="form--button" onClick={(e) => addSection(e, true)}>
          Add
        </button>
        <h3 className="form--title">Education</h3>
        {educations.map((item) => (
          <FormEducation
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
          Delete
        </button>
        <button className="form--button" onClick={(e) => addSection(e, false)}>
          Add
        </button>
        <h3 className="form--title">Download as PDF</h3>
        <button
          className="form--button"
          onClick={(e) => handleDownloadClick(e)}
        >
          Download
        </button>
      </form>
    </div>
  );
}
