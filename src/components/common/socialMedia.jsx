import {
  FacebookRounded,
  Instagram,
  Reddit,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import "../../styles/socialMedia.css";

export const SocialMedia = () => {
  return (
    <div className="social-overlap process-scetion ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="social-bar">
              <div className="social-icons mb-3 iconpad text-center">
                <Link to="#" className="slider-nav-item">
                  <FacebookRounded />
                </Link>
                <Link to="#" className="slider-nav-item">
                  <Instagram />
                </Link>
                <Link to="#" className="slider-nav-item">
                  <Twitter />
                </Link>
                <Link to="#" className="slider-nav-item">
                  <YouTube />
                </Link>
                <Link to="#" className="slider-nav-item">
                  <Reddit />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
