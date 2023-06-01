import "../styles/DisplayCV.css";

export default function DisplayCV(props) {
  console.log(props.photo);
  const experiencesRenderer = props.experiences.map((exp) => {
    return (
      <div key={exp.id} className="cv--career">
        <p className="cv--career-dates">{`${exp.from} - ${exp.to}`}</p>
        <div className="cv--career-location">
          <p>{exp.role}</p>
          <p>{`${exp.company}, ${exp.city}`}</p>
        </div>
      </div>
    );
  });

  const educationRenderer = props.educations.map((edu) => {
    return (
      <div key={edu.id} className="cv--career">
        <p className="cv--career-dates">{`${edu.from} - ${edu.to}`}</p>
        <div className="cv--career-location">
          <p>{`${edu.university}, ${edu.city}`}</p>
          <p>{`Degree : ${edu.degree}`}</p>
          <p>{`Subject : ${edu.subject}`}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="cv--container">
      <div className="cv--header">
        <h1>{`${props.firstName} ${props.lastName}`}</h1>
        <h3>{props.title}</h3>
      </div>
      <div className="cv--main-section">
        <main>
          <div>
            <h3 className="cv--title">Description</h3>
            <p className="cv--description">{props.description}</p>
          </div>
          <div>
            <h3 className="cv--title">Experience</h3>
            <div className="cv--career-container">{experiencesRenderer}</div>
          </div>
          <div>
            <h3 className="cv--title">Education</h3>
            <div className="cv--career-container">{educationRenderer}</div>
          </div>
        </main>
      </div>
      <div className="cv--aside">
        <aside>
          <img
            className="cv--image"
            src={
              props.photo !== ""
                ? props.photo
                : "../../src/assets/no-avatar.png"
            }
          />
          <h3 className="cv--title">Personal Details</h3>
          <div className="cv--personal-details-container">
            <div className="cv--personal-details">
              <h4>Address</h4>
              <p>{props.address}</p>
            </div>
            <div className="cv--personal-details">
              <h4>Phone Numer</h4>
              <p>{props.phoneNumber}</p>
            </div>
            <div className="cv--personal-details">
              <h4>Email</h4>
              <p>{props.email}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
