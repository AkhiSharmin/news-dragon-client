import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and condition</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam
        vitae, eum nesciunt doloribus nihil voluptatem pariatur explicabo
        tenetur! Vitae nam maiores quasi consequatur quibusdam. Quibusdam totam
        exercitationem doloremque hic!
      </p>
      <P>
        Go back to <Link to="/register">Register</Link>
      </P>
    </div>
  );
};

export default Terms;
