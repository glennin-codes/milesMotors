import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialFlow.css";
import {
  faFacebook,
  faTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";


export default function SocialFlow() {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://facebook.com/MillesMotorsLtd" target="_blank"    rel="noopener noreferrer">
            <i>
              <FontAwesomeIcon  icon= {faFacebook} className="icon"/ >

            </i>
                <span>Facebook</span>
          </a>
        </li>
        <li>
          
          <a href="https://twitter.com/@miles_motors" target="_blank" rel="noopener noreferrer">
            <i>
            <FontAwesomeIcon icon={faTwitter} className="icon"/>
            </i>
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://wa.me//+254733381707" target="_blank" rel="noopener noreferrer">
            <i>
            <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
        
            </i>
            <span>whatsapp</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
