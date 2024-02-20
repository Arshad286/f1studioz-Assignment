import { Help } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Cart } from "../../context/context";
import styles from "./Task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton } from "@mui/material";

const sections = [2, 4, 6];

const WindowOptions = () => {
  const {
    glassType,
    setGlassType,
    section,
    setSection,
    framing,
    setFraming,
    setProgressPercent,
    progressPercent,
  } = useContext(Cart);
  const [windowSaveDisabled, setWindowSaveDisabled] = useState(false);
  const handleWindowSave = () => {
    setProgressPercent(progressPercent + 25);
    setWindowSaveDisabled(true);
  };
  return (
    <div className={styles.layoutContainer}>
      <h1 className={styles.layoutHeading}>Window Options</h1>
      <div className={styles.layoutOptionsContainer}>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Glass Type</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setGlassType(e.target.value)}
            defaultValue={glassType}
          >
            <option value="solid">Solid (No Windows)</option>
            <option value="transparent">Transparent</option>
          </Form.Select>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Section(S) Glazed</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setSection(e.target.value)}
            defaultValue={section}
          >
            {sections.map((each) => (
              <option value={each} key={each}>
                {each}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Framing</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setFraming(e.target.value)}
            defaultValue={framing}
          >
            <option value="archDesign">Arch Design</option>
            <option value="rectangular">Rectangular</option>
            <option value="dome">Dome</option>
          </Form.Select>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <IconButton onClick={handleWindowSave} disabled={windowSaveDisabled}>
          <CheckCircleOutlineIcon
            sx={{
              fontSize: "28px",
              color: "#651a1a",
              mb: "20px",
              mr: "20px",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default WindowOptions;
