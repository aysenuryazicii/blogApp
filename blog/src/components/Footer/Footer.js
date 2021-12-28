import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*  <div className="col-md-3 col-sm-6">
            <h4>Konu</h4>
            <ul>
              <li>bir</li>
              <li>iki</li>
            </ul>
          </div>
        */}
        </div>
        <div className="footer-bottom ">
          <p className="text-xs-center ">
            &copy;{new Date().getFullYear()} My Blog App
          </p>
          <div className="socialMediaLinks">
            <a
              href="https://www.linkedin.com/in/aysenuryaz%C4%B1c%C4%B1/"
              style={{ color: "white", textDecoration: "none" }}
              class="fab fa-linkedin-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <a
              href="https://www.instagram.com/aysenuryaazici/"
              style={{ color: "white", textDecoration: "none" }}
              class="fab fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <a
              href="https://github.com/aysenuryazicii"
              style={{ color: "white", textDecoration: "none" }}
              class="fab fa-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
