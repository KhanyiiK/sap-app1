import React from "react";

const FullBlog = ({ title, content, showContent, toggleContent }) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>
      {showContent && <p style={{ lineHeight: "1.6" }}>{content}</p>}
      <button onClick={toggleContent}>
        {showContent ? "Hide Content" : "View Content"}
      </button>
    </div>
  );
};

export default FullBlog;
