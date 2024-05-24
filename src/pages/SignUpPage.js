import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <section className="sign-up-page-child" />
      <div className="sign-up-page-inner">
        <img className="frame-child" alt="" src="/ellipse-1@2x.png" />
      </div>
      <div className="site-name-wrapper">
        <a className="site-name">Site Name</a>
      </div>
      <div className="home-parent">
        <a className="home">Home</a>
        <a className="home">Blogs</a>
        <a className="home">About Us</a>
        <a className="home">Contact Us</a>
        <a className="home">FAQs</a>
      </div>
      <div className="log-in-wrapper">
        <a className="home">Log in</a>
      </div>
      <div className="get-started-wrapper">
        <div className="get-started">{`Get started `}</div>
      </div>
      <div className="frame-parent">
        <div className="full-name-wrapper">
          <div className="full-name"><input
            type="text"
            placeholder="Enter your full name"
            className="full-name-input"
          /></div>
          
        </div>
        <div className="email-wrapper">
          <div className="full-name"><input
            type="text"
            placeholder="Enter your email"
            className="full-name-input"
          /></div>
        </div>
        <div className="sex-parent">
          <div className="full-name">Sex</div>
          <img
            className="material-symbols-lightarrow-d-icon"
            alt=""
            src="/materialsymbolslightarrowdropdowncirclerounded.svg"
          />
        </div>
        <div className="hobbies-parent">
          <div className="full-name">Hobbies</div>
          <img
            className="material-symbols-lightarrow-d-icon"
            alt=""
            src="/materialsymbolslightarrowdropdowncirclerounded.svg"
          />
        </div>
        <div className="mental-health-issues-parent">
          <div className="full-name">Mental health issues</div>
          <img
            className="material-symbols-lightarrow-d-icon"
            alt=""
            src="/materialsymbolslightarrowdropdowncirclerounded.svg"
          />
        </div>
        <div className="password-wrapper">
          <div className="full-name"><input
            type="password"
            placeholder="Enter your password"
            className="full-name-input"
          /></div>
        </div>
        <div className="re-enter-password-wrapper">
          <div className="full-name"><input
            type="password"
            placeholder="Re-enter your password"
            className="full-name-input"
          /></div>
        </div>
      </div>
      <div className="age-parent">
        <div className="full-name">Age</div>
        <img
          className="material-symbols-lightarrow-d-icon"
          alt=""
          src="/materialsymbolslightarrowdropdowncirclerounded.svg"
        />
      </div>
      <div className="frame-div">
        <div className="frame-group">
          <div className="sign-up-with-wrapper">
            <div className="full-name">Sign up with</div>
          </div>
          <div className="flat-color-iconsgoogle-parent">
            <img
              className="material-symbols-lightarrow-d-icon"
              alt=""
              src="/flatcoloriconsgoogle.svg"
            />
            <a
              className="home"
              href="https://google.com"
              target="_blank"
            >{`Sign up with Google `}</a>
          </div>
        </div>
      </div>
      <div className="sign-in-wrapper">
        <a className="sign-in">Sign in</a>
      </div>
    </div>
  );
};

export default SignUpPage;
