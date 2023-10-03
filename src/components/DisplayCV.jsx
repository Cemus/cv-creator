import "../styles/DisplayCV.css";

export default function DisplayCV(props) {
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
          <p>
            {props.language === "french"
              ? `Diplôme : ${edu.degree}`
              : `Degree : ${edu.degree}`}
          </p>
          <p>
            {props.language === "french"
              ? `Discipline : ${edu.subject}`
              : `Subject : ${edu.subject}`}
          </p>
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
            <h3 className="cv--title">
              {props.language === "french" ? "Profil" : "Description"}
            </h3>
            <p className="cv--description">{props.description}</p>
          </div>
          <div>
            <h3 className="cv--title">
              {props.language === "french" ? "Expérience" : "Experience"}
            </h3>
            <div className="cv--career-container">{experiencesRenderer}</div>
          </div>
          <div>
            <h3 className="cv--title">
              {props.language === "french" ? "Formation" : "Education"}
            </h3>
            <div className="cv--career-container">{educationRenderer}</div>
          </div>
        </main>
      </div>
      <div className="cv--aside">
        <aside>
          {props.photo && <img className="cv--image" src={props.photo} />}
          <h3 className="cv--title">
            {" "}
            {props.language === "french"
              ? "Détails Personnels"
              : "Personal Details"}
          </h3>
          <div className="cv--personal-details-container">
            <div className="cv--personal-details">
              <h4> {props.language === "french" ? "Adresse" : "Address"}</h4>
              <p>{props.address}</p>
            </div>
            <div className="cv--personal-details">
              <h4>
                {props.language === "french"
                  ? "Numéro de téléphone"
                  : "Phone number"}
              </h4>
              <p>{props.phoneNumber}</p>
            </div>
            <div className="cv--personal-details">
              <h4>{props.language === "french" ? "Courriel" : "Email"}</h4>
              <p>{props.email}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
