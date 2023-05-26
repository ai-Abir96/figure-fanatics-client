import {
  faFacebookMessenger,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer lg:px-20 py-10 bg-base-200  text-white">
        <div>
          <img
            src="/images/site-logo.png"
            alt=""
            className=" h-[100px] rounded-full"
          />
          <p className=" text-2xl ">
            Action Figures Fanatics
            <br />
          </p>
          <p className=" text-lg">
            Providing reliable toys for collectors since 2023
          </p>
          <p>
            Copyright © 2023 Action Figures Fanatics.
            <br />
            All rights reserved.
          </p>
        </div>
        <div className=" justify-self-end lg:justify-self-start">
          <span className="footer-title font-bold text-lg">
            Contact us
          </span>
          <p>Phone: +880-1302111100</p>
          <p>Email: affbd@services.com</p>
        </div>
        <div>
          <span className="footer-title font-bold text-lg">
            Address
          </span>
          <p className=" text-sm">
            Mirpur-14, Dhaka Cantonment,
            <br />
            Dhaka-1206
          </p>
        </div>
        <div className=" justify-self-end lg:justify-self-start">
          <span className="footer-title font-bold text-lg">
            Socials
          </span>
          <div className="text-3xl flex items-center justify-between">
            <FontAwesomeIcon
              className="mr-4"
              icon={faFacebookMessenger}
            />
            <FontAwesomeIcon className="mr-4" icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
