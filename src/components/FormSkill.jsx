export default function FormSkill(props) {
  return (
    <>
      <h4>{`${props.name})`}</h4>
      <input
        id={`skill${props.id}`}
        placeholder={props.language === "french" ? "Compétence" : "Skill"}
        key={`skill${props.id}`}
        name="skill"
        onChange={props.onChange}
        value={props.skills[props.id].skill || ""}
      ></input>
    </>
  );
}
