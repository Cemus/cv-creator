export default function FormProject(props) {
  return (
    <>
      <h4>{`${props.name})`}</h4>
      <input
        id={`Project name${props.id}`}
        placeholder={
          props.language === "french" ? "Nom du projet" : "Project's name"
        }
        key={`Project name${props.id}`}
        name="name"
        onChange={props.onChange}
        value={props.projects[props.id].name || ""}
        autoComplete="off"
      ></input>
      <input
        id={`stack${props.id}`}
        placeholder={
          props.language === "french" ? "Stack technique" : "Technology stack"
        }
        key={`stack${props.id}`}
        name="stack"
        onChange={props.onChange}
        value={props.projects[props.id].stack || ""}
      ></input>

      <input
        id={`feat1${props.id}`}
        placeholder={
          props.language === "french" ? "Fonctionnalité 1" : "Feature 1"
        }
        key={`feat1${props.id}`}
        name="feat1"
        onChange={props.onChange}
        value={props.projects[props.id].feat1 || ""}
      ></input>
      <input
        id={`feat2${props.id}`}
        placeholder={
          props.language === "french" ? "Fonctionnalité 2" : "Feature 2"
        }
        key={`feat2${props.id}`}
        name="feat2"
        onChange={props.onChange}
        value={props.projects[props.id].feat2 || ""}
      ></input>
      <input
        id={`feat3${props.id}`}
        placeholder={
          props.language === "french" ? "Fonctionnalité 3" : "Feature 3"
        }
        key={`feat3${props.id}`}
        name="feat3"
        onChange={props.onChange}
        value={props.projects[props.id].feat3 || ""}
      ></input>
    </>
  );
}
