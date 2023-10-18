export default function FormExperience(props) {
  return (
    <>
      <h4>{`${props.name})`}</h4>
      <input
        id={props.id}
        placeholder={props.language === "french" ? "Fonction" : "Role"}
        key={`role${props.id}`}
        name="role"
        onChange={props.onChange}
        value={props.experiences[props.id].role || ""}
      ></input>
      <input
        id={props.id}
        placeholder={props.language === "french" ? "Entreprise" : "Company"}
        key={`company${props.id}`}
        name="company"
        onChange={props.onChange}
        value={props.experiences[props.id].company || ""}
      ></input>

      <input
        id={props.id}
        placeholder={props.language === "french" ? "Ville" : "City"}
        key={`city${props.id}`}
        name="city"
        onChange={props.onChange}
        value={props.experiences[props.id].city || ""}
      ></input>
      <input
        id={props.id}
        placeholder={props.language === "french" ? "De" : "From"}
        key={`from${props.id}`}
        name="from"
        onChange={props.onChange}
        value={props.experiences[props.id].from || ""}
      ></input>
      <input
        id={props.id}
        placeholder={props.language === "french" ? "À" : "To"}
        key={`to${props.id}`}
        name="to"
        onChange={props.onChange}
        value={props.experiences[props.id].to || ""}
      ></input>
    </>
  );
}
