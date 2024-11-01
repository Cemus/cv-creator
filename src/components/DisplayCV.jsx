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
        <p className="cv--project-name">{`${pro.nameProject}`}</p>
        <p className="cv--project-tech">{`${pro.stackProject}`}</p>
        <ul className="cv--project-features">
          <li>{`${pro.feat1Project}`}</li>
          {pro.feat2Project && <li>{`${pro.feat2Project}`}</li>}
          {pro.feat3Project && <li>{`${pro.feat3Project}`}</li>}
        </ul>
      </div>
    );
  });
  const experiencesRenderer = props.experiences.map((exp) => {
    return (
      <div key={exp.id} className="cv--career">
        <div className="cv--career-bis">
          <p className="cv--dates">{`${exp.fromExperience} → ${exp.toExperience}`}</p>
          <div className="cv--career-location">
            <p>{exp.roleExperience}</p>
            <p>{`${exp.companyExperience}, ${exp.cityExperience}`}</p>
          </div>
        </div>
        {exp.descriptionExperience1 && (
          <ul>
            <li className="cv--list">{exp.descriptionExperience1}</li>
            {exp.descriptionExperience2 && (
              <li className="cv--list">{exp.descriptionExperience2}</li>
            )}
            {exp.descriptionExperience3 && (
              <li className="cv--list">{exp.descriptionExperience3}</li>
            )}
          </ul>
        )}
      </div>
    );
  });

  const educationRenderer = props.educations.map((edu) => {
    return (
      <div key={edu.id} className="cv--education">
        <div className="cv--dates">
          {" "}
          <p>{edu.fromEducation}</p>
          <p>↓</p>
          <p>{edu.toEducation}</p>
        </div>
        <div className="cv--education-location">
          <p>{`${edu.universityEducation}, ${edu.cityEducation}`}</p>
          {edu.degreeEducation != "" && (
            <p>
              {props.language === "french"
                ? `Diplôme : ${edu.degreeEducation}`
                : `Degree : ${edu.degreeEducation}`}
            </p>
          )}
          <p>
            {props.language === "french"
              ? `Discipline : ${edu.subjectEducation}`
              : `Subject : ${edu.subjectEducation}`}
          </p>
        </div>
      </div>
    );
  });

  return (
    <main className="cv--container">
      <div className="cv--header-container">
        {props.photo && (
          <div className="cv--photo-container">
            <img className="cv--image" src={props.photo} />
          </div>
        )}
        <div className="cv--header">
          <div>
            <h1 className="cv--firstname">
              {props.firstName}
              <span className="cv--lastname">{props.lastName}</span>
            </h1>
            <h2 className="cv--job-title">{props.title}</h2>
          </div>
        </div>
      </div>

      <div className="cv--aside">
        <aside>
          <div>
            <h3 className="cv--title">
              {props.language === "french" ? "Informations" : "Informations"}
            </h3>
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
                  <a
                    href={`https://${props.website[0]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.website[0]}
                  </a>
                </div>
              )}
              {props.linkedIn[0] && (
                <div className="cv--personal-details">
                  <Icon path={mdiLinkedin} size={1} color="#005180" />
                  <a
                    href={`https://${props.linkedIn[0]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.linkedIn[0]}
                  </a>
                </div>
              )}
              {props.gitHub[0] && (
                <div className="cv--personal-details">
                  <Icon path={mdiGithub} size={1} color="#005180" />
                  <a
                    href={`https://${props.gitHub[0]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.gitHub[0]}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div>
            {props.skills[0]?.skill !== "" && (
              <>
                <h3 className="cv--title">
                  {props.language === "french" ? "Compétences" : "Skills"}
                </h3>
                <ul className="cv--skill-container">{skillsRenderer}</ul>
              </>
            )}
          </div>
          <div>
            <h3 className="cv--title">
              {props.language === "french" ? "Formation" : "Education"}
            </h3>
            <div className="cv--career-container">{educationRenderer}</div>
          </div>
          <div className="cv--hobbies-container">
            {props.hobbies != "" && (
              <div>
                <h3 className="cv--title">
                  {props.language === "french"
                    ? "Centres d'intérêt"
                    : "Interests"}
                </h3>
                {props.hobbies
                  .toString()
                  ?.split("\n")
                  .map((line, index) => (
                    <ul key={index}>
                      <li className="cv--list" key={index}>
                        {line}
                      </li>
                    </ul>
                  ))}
              </div>
            )}
          </div>
        </aside>
      </div>

      <div className="cv--main-section">
        <section>
          {props.description[0] !== "" && (
            <div>
              <h3 className="cv--title">
                {props.language === "french" ? "Profil" : "Profile"}
              </h3>
              <p className="cv--description">
                {props.description
                  .toString()
                  ?.split("\n")
                  .map((line, index) => (
                    <div key={index}>
                      <p className="cv--description-line" key={index}>
                        {line}
                      </p>
                    </div>
                  ))}
              </p>
            </div>
          )}
          {props.projects.length > 0 && (
            <div>
              <h3 className="cv--title">
                {props.language === "french" ? "Projets" : "Projects"}
              </h3>
              <div className="cv--project-container">{projectsRenderer}</div>
            </div>
          )}

          <div>
            <h3 className="cv--title">
              {props.language === "french"
                ? "Expériences professionnelles"
                : "Work experiences"}
            </h3>
            <div className="cv--career-container">{experiencesRenderer}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
