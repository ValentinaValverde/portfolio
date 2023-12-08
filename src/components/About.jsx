import profile_img from "../assets/profile_img.png";

export default function About() {
  return (
    <>
      <div className="about_container">
        <div className="one">
          <h1 className="bumerang">About</h1>
          <p>
            Hello! I am an 18-year-old web developer who specializes in ____.
            While I prefer the frontend, I have experience working on full-stack
            applications. I graduated from Carolina Code School in 2023 and am
            currently looking for my next job. Located in Greenville, SC. Meow
          </p>
        </div>
        <div className="one">
          <img
            className="profile_img"
            src={profile_img}
            alt="Profile picture"
          />
        </div>
      </div>
      <p className="est">est. 2023</p>
    </>
  );
}
