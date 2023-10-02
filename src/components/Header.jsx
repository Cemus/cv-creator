import "../styles/Header.css";
export default function Headers() {
  return (
    <header>
      <h1 className="title--header">CV CREATOR</h1>
      <div className="flags">
        <button className="flagButton--header">
          <img
            className="flag--header"
            src="./Flag_of_France.svg"
            alt="français"
          />
        </button>
        <button className="flagButton--header">
          <img
            className="flag--header"
            src="./Flag_of_the_United_Kingdom.svg"
            alt="english"
          />
        </button>
      </div>
    </header>
  );
}
