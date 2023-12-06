import React from "react";
import ResumePhoto from "../assets/ResumePhoto.png";

export function Resume() {
  return (
    <>
      <div className="resume_container">
        <div className="resume_border">
          <div className="title_container">
            <i>resume</i>
          </div>
          <div className="resume_photo_container">
            <a
              href="https://drive.google.com/file/d/1IeJgIJpiMpyqwrI1fhB9puZuOrisDLXk/view?usp=sharing"
              target="_blank"
            >
              {" "}
              <img src={ResumePhoto} alt="Resume" className="resume_photo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
