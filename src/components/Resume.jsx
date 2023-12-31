import React from "react";
import ResumePhoto from "../assets/ResumePhoto.png";

export function Resume() {
  return (
    <>
      <div className="resume_container">
        <div className="resume_border">
          <div className="title_container bumerang">
            <i>resume</i>
          </div>
          <div className="resume_photo_container">
            <a
              href="https://drive.google.com/file/d/1yQeU3WHlDtML6z0SHOnj7z7TKJrX8sfw/view"
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
