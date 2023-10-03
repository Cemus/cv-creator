import "../styles/Header.css";
export default function Headers({ language, handleLanguageChange }) {
  return (
    <header>
      <h1 className="title--header">
        {language === "french" ? "- CREATEUR DE CV -" : "- CV CREATOR -"}
      </h1>
      <div className="flags">
        <button
          onClick={(e) => handleLanguageChange(e, "french")}
          className="flagButton--header"
        >
          <img
            className="flag--header"
            src="./Flag_of_France.svg"
            alt="français"
          />
        </button>
        <button
          onClick={(e) => handleLanguageChange(e, "english")}
          className="flagButton--header"
        >
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
