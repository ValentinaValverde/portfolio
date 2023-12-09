import profile_img from "../assets/profile_img.png";

export default function About() {
  return (
    <>
      <div className="about_container">
        <div className="one">
          <h1 className="bumerang">About</h1>
          <p className="green">
            Hi there! My name is Valentina and I am a recent graduate of
            Carolina Code School. Though I prefer working with the frontend, I
            am experienced in fullstack applications. I have a strong
            appreciation for UI/UX design and enjoy making appealing, functional
            websites that are responsive and user friendly. My goal is to become
            a frontend developer or web designer and help others like me reach
            their dreams. Please feel free to reach out with project or job
            opportunities!
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
      <p className="est">located in Greenville, SC</p>
    </>
  );
}
