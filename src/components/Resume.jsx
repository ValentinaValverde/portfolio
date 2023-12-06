import React from "react";
import ResumePDF from "../assets/ResumePDF.pdf";

export function Resume() {
  return (
    <>
      <div className="resume_container">
        <p className="title">
          <i>resume </i>
        </p>
        <iframe src="ResumePDF" className="resume_pdf" />
        {/* <PDFViewer /> */}
      </div>
    </>
  );
}

export const PDFViewer = () => {
  return (
    <div>
      <iframe src="../assets/ResumePDF.pdf" />
    </div>
  );
};
export default PDFViewer;
