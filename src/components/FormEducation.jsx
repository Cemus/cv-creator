export default function FormEducation(props) {
  return (
    <>
      <h4>{`${props.name})`}</h4>
      <input
        id={props.id}
        placeholder="University name"
        key={`University name${props.id}`}
        name="university"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder="City"
        key={`city${props.id}`}
        name="city"
        onChange={props.onChange}
      ></input>

      <input
        id={props.id}
        placeholder="Degree"
        key={`degree${props.id}`}
        name="degree"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder="Subject"
        key={`subject${props.id}`}
        name="subject"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder="From"
        key={`from${props.id}`}
        name="from"
        onChange={props.onChange}
      ></input>
      <input
        id={props.id}
        placeholder="To"
        key={`to${props.id}`}
        name="to"
        onChange={props.onChange}
      ></input>
    </>
  );
}
