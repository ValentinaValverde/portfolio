import ResumePDF from "../assets/ResumePDF.pdf";
import React from "react";

export function Resume() {
  return (
    <>
      <p>Resume</p>
      <iframe src="ResumePDF" />
    </>
  );
}
