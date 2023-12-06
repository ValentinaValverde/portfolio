import React from "react";
import ResumePhoto from "../assets/ResumePhoto.png";

export function Resume() {
  return (
    <>
      {/* <div className="resume_overlord">
        <div className="resume_container">
          <p className="title">
            <i>resume </i>
          </p>
          <div className="white">
            <a
              href="https://drive.google.com/file/d/1IeJgIJpiMpyqwrI1fhB9puZuOrisDLXk/view?usp=sharing"
              target="_blank"
            >
              <img src={ResumePhoto} alt="Resume" className="resume_photo" />
            </a>
          </div>
        </div>
      </div> */}

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

// .resume_overlord {
//   display: flex;
//   justify-content: center;
//   max-width: 100%;
// }

// .resume_container {
//   /* background-color: black; */
//   padding: 0px;
//   border: solid;
//   border-radius: 10px;
//   width: 600px;
//   max-width: 100%;

//   display: flex;
//   justify-content: flex-end;
//   align-items: center;

//   .title {
//     transform: rotate(-90deg);
//     font-size: 50px;
//   }

//   .resume_photo {
//     width: 500px;
//     border-radius: 10px;
//     margin: 0px;
//     max-width: 90%;
//   }

//   .white {
//     background-color: white;
//     border-radius: 0px 5px 5px 0px;
//   }
// }
