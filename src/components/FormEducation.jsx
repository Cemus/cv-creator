export default function FormEducation(props) {
  return (
    <>
      <h4>{`${props.name})`}</h4>
      <input
        id={props.id}
        placeholder={
          props.language === "french" ? "Établissement" : "Establishment"
        }
        key={`University name${props.id}`}
        name="university"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder={props.language === "french" ? "Ville" : "City"}
        key={`city${props.id}`}
        name="city"
        onChange={props.onChange}
      ></input>

      <input
        id={props.id}
        placeholder={props.language === "french" ? "Diplôme" : "Degree"}
        key={`degree${props.id}`}
        name="degree"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder={props.language === "french" ? "Discipline" : "Subject"}
        key={`subject${props.id}`}
        name="subject"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder={props.language === "french" ? "De" : "From"}
        key={`from${props.id}`}
        name="from"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder={props.language === "french" ? "À" : "To"}
        key={`to${props.id}`}
        name="to"
        onChange={props.onChange}
      ></input>
    </>
  );
}
