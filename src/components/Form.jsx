import "../styles/Form.css";
import FormExperience from "./FormExperience";
import FormEducation from "./FormEducation";

export default function Form(props) {
  return (
    <div className="form-container">
      <form>
        <h3>Personal Information</h3>
        <input
          placeholder="First Name"
          name="firstName"
          onChange={props.onChange}
        ></input>
        <input
          placeholder="Last Name"
          name="lastName"
          onChange={props.onChange}
        ></input>
        <input
          placeholder="Title"
          name="title"
          onChange={props.onChange}
        ></input>
        <input
          placeholder="Description"
          name="description"
          onChange={props.onChange}
        ></input>
        <p>Photo</p>
        <input
          placeholder="Address"
          name="address"
          onChange={props.onChange}
        ></input>
        <input
          placeholder="Phone number"
          name="phoneNumber"
          onChange={props.onChange}
        ></input>
        <input
          placeholder="Email"
          name="email"
          onChange={props.onChange}
        ></input>
        <h3>Experience</h3>
        {props.experiences.map((item) => (
          <FormExperience
            key={item.id}
            id={item.id}
            name={item.id + 1}
            onChange={props.onExperiencesChange}
          />
        ))}
        <button onClick={props.deleteExperience}>Delete</button>
        <button onClick={props.addExperience}>Add</button>
        <h3>Education</h3>
        {props.educations.map((item) => (
          <FormEducation
            key={item.id}
            id={item.id}
            name={item.id + 1}
            onChange={props.onEducationChange}
          />
        ))}
        <button onClick={props.deleteEducation}>Delete</button>
        <button onClick={props.addEducation}>Add</button>
      </form>
    </div>
  );
}
