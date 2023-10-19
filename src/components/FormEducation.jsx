export default function FormEducation(props) {
  return (
    <>
      <h4>{`${props.numberEducation})`}</h4>
      <input
        id={`universityEducation${props.id}`}
        placeholder={
          props.language === "french" ? "Établissement" : "Establishment"
        }
        key={`University name${props.id}`}
        name="universityEducation"
        onChange={props.onChange}
        value={
          props.educations[props.numberEducation - 1].universityEducation || ""
        }
      ></input>

      <input
        id={`cityEducation${props.id}`}
        placeholder={props.language === "french" ? "Ville" : "City"}
        key={`cityEducation${props.id}`}
        name="cityEducation"
        onChange={props.onChange}
        value={props.educations[props.numberEducation - 1].cityEducation || ""}
        autoComplete="off"
      ></input>

      <input
        id={`degreeEducation${props.id}`}
        placeholder={props.language === "french" ? "Diplôme" : "Degree"}
        key={`degreeEducation${props.id}`}
        name="degreeEducation"
        onChange={props.onChange}
        value={
          props.educations[props.numberEducation - 1].degreeEducation || ""
        }
      ></input>
      <input
        id={`subjectEducation${props.id}`}
        placeholder={props.language === "french" ? "Discipline" : "Subject"}
        key={`subjectEducation${props.id}`}
        name="subjectEducation"
        onChange={props.onChange}
        value={
          props.educations[props.numberEducation - 1].subjectEducation || ""
        }
      ></input>
      <input
        id={`fromEducation${props.id}`}
        placeholder={props.language === "french" ? "De" : "From"}
        key={`fromEducation${props.id}`}
        name="fromEducation"
        onChange={props.onChange}
        value={props.educations[props.numberEducation - 1].fromEducation || ""}
      ></input>
      <input
        id={`toEducation${props.id}`}
        placeholder={props.language === "french" ? "À" : "To"}
        key={`toEducation${props.id}`}
        name="toEducation"
        onChange={props.onChange}
        value={props.educations[props.numberEducation - 1].toEducation || ""}
      ></input>
    </>
  );
}
