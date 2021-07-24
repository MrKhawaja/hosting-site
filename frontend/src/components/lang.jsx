import React from "react";

const Lang = ({ style, lang, onLangChange, className }) => {
  return (
    <div onClick={onLangChange} style={style} className={className}>
      Currency:{" "}
      <span
        style={{
          padding: ".4em .9em",
          backgroundColor: "#00000047",
          borderRadius: "1rem",
        }}
      >
        {lang == "en" ? "$Dollar" : "BDT"}
      </span>
    </div>
  );
};

export default Lang;
