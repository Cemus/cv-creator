import "../styles/DisplayCV.css";
import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
  mdiMapMarker,
  mdiPhone,
  mdiWeb,
} from "@mdi/js";

export default function DisplayCV(props) {
  const skillsRenderer = props.skills.map((ski) => {
    return (
      <li key={ski.id} className="cv--skill">
        {ski.skill}
      </li>
    );
  });
  const projectsRenderer = props.projects.map((pro) => {
    return (
      <div key={pro.id} className="cv--project">
        <p className="cv--project-name">{`${pro.name}`}</p>
        <p className="cv--project-tech">{`${pro.stack}`}</p>
        <ul className="cv--project-features">
          <li>{`${pro.feat1}`}</li>
          {pro.feat2 && <li>{`${pro.feat2}`}</li>}
          {pro.feat3 && <li>{`${pro.feat3}`}</li>}
        </ul>
      </div>
    );
  });
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
    <main className="cv--container">
      <div className="cv--header">
        <h1 className="cv--firstname">
          {props.firstName}
          <span className="cv--lastname">{props.lastName}</span>
        </h1>
        <h2 className="cv--job-title">{props.title}</h2>
        <div className="cv--personal-details-container">
          {props.address[0] && (
            <div className="cv--personal-details">
              <Icon path={mdiMapMarker} size={1} color="#005180" />

              <p>{props.address}</p>
            </div>
          )}
          <div className="cv--personal-details">
            <Icon path={mdiPhone} size={1} color="#005180" />
            <p>{props.phoneNumber}</p>
          </div>
          <div className="cv--personal-details">
            <Icon path={mdiEmail} size={1} color="#005180" />
            <p>{props.email}</p>
          </div>
          {props.website[0] && (
            <div className="cv--personal-details">
              <Icon path={mdiWeb} size={1} color="#005180" />
              <a href={props.website} target="_blank" rel="noreferrer">
                {props.website}
              </a>
            </div>
          )}
          {props.linkedIn[0] && (
            <div className="cv--personal-details">
              <Icon path={mdiLinkedin} size={1} color="#005180" />
              <a href={props.linkedIn} target="_blank" rel="noreferrer">
                {props.linkedIn}
              </a>
            </div>
          )}
          {props.gitHub[0] && (
            <div className="cv--personal-details">
              <Icon path={mdiGithub} size={1} color="#005180" />
              <a href={props.gitHub} target="_blank" rel="noreferrer">
                {props.gitHub}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="cv--aside">
        <aside>
          <div className="cv--photo-container">
            {props.photo && <img className="cv--image" src={props.photo} />}
          </div>

          {props.skills.length > 0 && (
            <h3 className="cv--title">
              {props.language === "french" ? "Compétences" : "Skills"}
            </h3>
          )}
          <ul className="cv--skill-container">{skillsRenderer}</ul>
        </aside>
      </div>
      <div className="cv--main-section">
        <section>
          <div>
            <h3 className="cv--title">
              {props.language === "french" ? "Profil" : "Profile"}
            </h3>
            <p className="cv--description">{props.description}</p>
          </div>
          <div>
            <h3 className="cv--title">
              {props.language === "french" ? "Projets" : "Projects"}
            </h3>
            <div className="cv--project-container">{projectsRenderer}</div>
          </div>

          <div>
            <h3 className="cv--title">
              {props.language === "french"
                ? "Expérience professionnelle"
                : "Work experience"}
            </h3>
            <div className="cv--career-container">{experiencesRenderer}</div>
          </div>

          <div>
            <h3 className="cv--title">
              {props.language === "french" ? "Formation" : "Education"}
            </h3>
            <div className="cv--career-container">{educationRenderer}</div>
          </div>

          {props.hobbies != "" && (
            <div>
              <h3 className="cv--title">
                {props.language === "french"
                  ? "Centres d'intérêt"
                  : "Interests"}
              </h3>
              <p>{props.hobbies}</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
