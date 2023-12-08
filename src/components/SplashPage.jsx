import sparkle from "../assets/star.png";

export default function SplashPage() {
  return (
    <>
      <div className="splash_page_container">
        <div className="main_container">
          <a
            href="https://www.linkedin.com/in/valentina-valverde-1a179227a/"
            target="_blank"
            className="left link"
          >
            <i>LinkedIn</i>
          </a>
          <p className="large bumerang">
            valentina's <br />
            portfolio
          </p>
          <a
            href="https://github.com/ValentinaValverde"
            target="_blank"
            className="right link"
          >
            <i>Github</i>
          </a>
        </div>
        <div className="little_container">
          <p className="p">web developer</p>
        </div>
        {/* <img src={sparkle} className="sparkle" /> */}
      </div>
    </>
  );
}
