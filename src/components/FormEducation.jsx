export default function FormEducation(props) {
  console.log(props.educations);
  return (
    <>
      <h4>{`${props.name})`}</h4>
      <input
        id={`University name${props.id}`}
        placeholder={
          props.language === "french" ? "Établissement" : "Establishment"
        }
        key={`University name${props.id}`}
        name="university"
        onChange={props.onChange}
        value={props.educations[props.id].university || ""}
      ></input>
      <input
        id={`city${props.id}`}
        placeholder={props.language === "french" ? "Ville" : "City"}
        key={`city${props.id}`}
        name="city"
        onChange={props.onChange}
        value={props.educations[props.id].city || ""}
      ></input>

      <input
        id={`degree${props.id}`}
        placeholder={props.language === "french" ? "Diplôme" : "Degree"}
        key={`degree${props.id}`}
        name="degree"
        onChange={props.onChange}
        value={props.educations[props.id].degree || ""}
      ></input>
      <input
        id={`subject${props.id}`}
        placeholder={props.language === "french" ? "Discipline" : "Subject"}
        key={`subject${props.id}`}
        name="subject"
        onChange={props.onChange}
        value={props.educations[props.id].subject || ""}
      ></input>
      <input
        id={`from${props.id}`}
        placeholder={props.language === "french" ? "De" : "From"}
        key={`from${props.id}`}
        name="from"
        onChange={props.onChange}
        value={props.educations[props.id].from || ""}
      ></input>
      <input
        id={`to${props.id}`}
        placeholder={props.language === "french" ? "À" : "To"}
        key={`to${props.id}`}
        name="to"
        onChange={props.onChange}
        value={props.educations[props.id].to || ""}
      ></input>
    </>
  );
}
