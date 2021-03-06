/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://nightline.ssmu.ca/"
                  target="_blank"
                >
                  McGill Chatline
                </a>
              </li>
              <li>
                <a
                  href="https://nightline.ssmu.ca/"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://nightline.ssmu.ca/"
                  target="_blank"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://nightline.ssmu.ca/"
              target="_blank"
            >
              McGill Chatline
            </a>
            . Coded by{" "}
            <a
              href="https://nightline.ssmu.ca/"
              target="_blank"
            >
              Shiqiao
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
