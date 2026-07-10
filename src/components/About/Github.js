import React, { useState } from "react";
import { Row } from "react-bootstrap";

function Github() {
  const [imgError, setImgError] = useState(false);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        {!imgError ? (
          <img
            src="https://raw.githubusercontent.com/ahmadsaif12/Portfolio/output/github-contribution-grid-snake-dark.svg"
            alt="github contribution snake"
            style={{ maxWidth: "100%" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <p style={{ color: "#a588c0", fontStyle: "italic" }}>
            GitHub contribution graph will appear once the workflow runs.
            Push to main branch to generate it.
          </p>
        )}
      </div>
    </Row>
  );
}

export default Github;
