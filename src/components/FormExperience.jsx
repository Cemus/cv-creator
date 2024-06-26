export default function FormExperience(props) {
  return (
    <>
      <h4>{`${props.numberExperience})`}</h4>
      <input
        id={`roleExperience${props.id}`}
        placeholder={props.language === "french" ? "Fonction" : "Role"}
        key={`roleExperience${props.id}`}
        name="roleExperience"
        onChange={props.onChange}
        value={
          props.experiences[props.numberExperience - 1].roleExperience || ""
        }
      ></input>
      <input
        id={`companyExperience${props.id}`}
        placeholder={props.language === "french" ? "Entreprise" : "Company"}
        key={`companyExperience${props.id}`}
        name="companyExperience"
        onChange={props.onChange}
        value={
          props.experiences[props.numberExperience - 1].companyExperience || ""
        }
        autoComplete="off"
      ></input>

      <input
        id={`cityExperience${props.id}`}
        placeholder={props.language === "french" ? "Ville" : "City"}
        key={`cityExperience${props.id}`}
        name="cityExperience"
        onChange={props.onChange}
        value={
          props.experiences[props.numberExperience - 1].cityExperience || ""
        }
      ></input>
      <input
        id={`fromExperience${props.id}`}
        placeholder={props.language === "french" ? "De" : "From"}
        key={`fromExperience${props.id}`}
        name="fromExperience"
        onChange={props.onChange}
        value={
          props.experiences[props.numberExperience - 1].fromExperience || ""
        }
      ></input>
      <input
        id={`toExperience${props.id}`}
        placeholder={props.language === "french" ? "À" : "To"}
        key={`toExperience${props.id}`}
        name="toExperience"
        onChange={props.onChange}
        value={props.experiences[props.numberExperience - 1].toExperience || ""}
      ></input>
      {/*Descriptions*/}
      <input
        id={`descriptionExperience1${props.id}`}
        placeholder={
          props.language === "french" ? "Description" : "Description"
        }
        key={`descriptionExperience1${props.id}`}
        name="descriptionExperience1"
        onChange={props.onChange}
        value={
          props.experiences[props.numberExperience - 1]
            .descriptionExperience1 || ""
        }
      ></input>
      <input
        id={`descriptionExperience2${props.id}`}
        placeholder={
          props.language === "french" ? "Description" : "Description"
        }
        key={`descriptionExperience2${props.id}`}
        name="descriptionExperience2"
        onChange={props.onChange}
        value={
          props.experiences[props.numberExperience - 1]
            .descriptionExperience2 || ""
        }
      ></input>
      <input
        id={`descriptionExperience3${props.id}`}
        placeholder={
          props.language === "french" ? "Description" : "Description"
        }
        key={`descriptionExperience3${props.id}`}
        name="descriptionExperience3"
        onChange={props.onChange}
        value={
          props.experiences[props.numberExperience - 1]
            .descriptionExperience3 || ""
        }
      ></input>
    </>
  );
}
