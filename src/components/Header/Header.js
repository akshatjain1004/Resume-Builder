import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
function Header(props) {
  return (
    <>
      {props.signin && (
        <div
          style={{ display: "flex", justifyContent: "flex-end", padding: "1%" }}
        >
          <Typography style={{ padding: "1%" }}>
            {props.profile.name}
          </Typography>
          <Avatar alt={props.profile.name} src={props.profile.imageUrl} />
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            Build a <span>Resume</span> to get selected!
          </p>
          <p className={styles.heading}>
            <span>Adding</span> Information<span>Made Easy</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
    </>
  );
}

export default Header;
