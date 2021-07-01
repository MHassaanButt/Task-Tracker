import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <h3>Developed by</h3>
      <AiFillGithub size={30} />
      <a href="https://github.com/MHassaanButt"> MHassaanButt</a>
      <br />
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
