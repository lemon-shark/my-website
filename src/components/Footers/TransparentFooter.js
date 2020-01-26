/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://nightline.ssmu.ca/"
                target="_blank"
              >
                MCGILL CHATLINE
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
                JOIN US
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
  );
}

export default TransparentFooter;
