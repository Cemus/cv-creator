export default function FormProject(props) {
  return (
    <>
      <h4>{`${props.numberProject})`}</h4>
      <input
        id={`nameProject${props.id}`}
        placeholder={
          props.language === "french" ? "Nom du projet" : "Project's name"
        }
        key={`nameProject${props.id}`}
        name="nameProject"
        onChange={props.onChange}
        value={props.projects[props.numberProject - 1].nameProject || ""}
        autoComplete="off"
      ></input>
      <input
        id={`stackProject${props.id}`}
        placeholder={
          props.language === "french" ? "Stack technique" : "Technology stack"
        }
        key={`stackProject${props.id}`}
        name="stackProject"
        onChange={props.onChange}
        value={props.projects[props.numberProject - 1].stackProject || ""}
      ></input>

      <input
        id={`feat1Project${props.id}`}
        placeholder={
          props.language === "french" ? "Fonctionnalité 1" : "Feature 1"
        }
        key={`feat1Project${props.id}`}
        name="feat1Project"
        onChange={props.onChange}
        value={props.projects[props.numberProject - 1].feat1Project || ""}
      ></input>
      <input
        id={`feat2Project${props.id}`}
        placeholder={
          props.language === "french" ? "Fonctionnalité 2" : "Feature 2"
        }
        key={`feat2Project${props.id}`}
        name="feat2Project"
        onChange={props.onChange}
        value={props.projects[props.numberProject - 1].feat2Project || ""}
      ></input>
      <input
        id={`feat3Project${props.id}`}
        placeholder={
          props.language === "french" ? "Fonctionnalité 3" : "Feature 3"
        }
        key={`feat3Project${props.id}`}
        name="feat3Project"
        onChange={props.onChange}
        value={props.projects[props.numberProject - 1].feat3Project || ""}
      ></input>
    </>
  );
}
