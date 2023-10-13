export default function FormProject(props) {
  return (
    <>
      <h4>{`${props.name})`}</h4>
      <input
        id={props.id}
        placeholder={
          props.language === "french" ? "Nom du projet" : "Project's name"
        }
        key={`Project name${props.id}`}
        name="name"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder={
          props.language === "french" ? "Stack technique" : "Technology stack"
        }
        key={`stack${props.id}`}
        name="stack"
        onChange={props.onChange}
      ></input>

      <input
        id={props.id}
        placeholder={
          props.language === "french" ? "Fonctionnalité 1" : "Feature 1"
        }
        key={`feat1${props.id}`}
        name="feat1"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder={
          props.language === "french" ? "Fonctionnalité 2" : "Feature 2"
        }
        key={`feat2${props.id}`}
        name="feat2"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder={
          props.language === "french" ? "Fonctionnalité 3" : "Feature 3"
        }
        key={`feat3${props.id}`}
        name="feat3"
        onChange={props.onChange}
      ></input>
    </>
  );
}
