import "../styles/Form.css";
import FormExperience from "./FormExperience";
import FormEducation from "./FormEducation";

export default function Form(props) {
  return (
    <div className="form-container">
      <form>
        <h3>Photo</h3>
        <input
          type="file"
          placeholder="Photo"
          name="photo"
          accept="image/*"
          onChange={props.onChange}
          title="Choose a photo"
        ></input>
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
            onChange={(e) => props.onCareerChange(e, true)}
          />
        ))}
        <button onClick={(e) => props.deleteSection(e, true)}>Delete</button>
        <button onClick={(e) => props.addSection(e, true)}>Add</button>
        <h3>Education</h3>
        {props.educations.map((item) => (
          <FormEducation
            key={item.id}
            id={item.id}
            name={item.id + 1}
            onChange={(e) => props.onCareerChange(e, false)}
          />
        ))}
        <button onClick={(e) => props.deleteSection(e, false)}>Delete</button>
        <button onClick={(e) => props.addSection(e, false)}>Add</button>
      </form>
    </div>
  );
}
