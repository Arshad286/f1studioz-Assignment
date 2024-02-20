import { Help } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Cart } from "../../context/context";
import styles from "./Task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton } from "@mui/material";
import "./configPage2.css";

const inches = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const feet = [8, 10, 12, 14];
const LayoutOptions = () => {
  const {
    assembly,
    setAssembly,
    height,
    setHeight,
    width,
    setWidth,
    windCode,
    setWindCode,
    design,
    setDesign,
    color,
    setColor,
    setProgressPercent,
    progressPercent,
  } = useContext(Cart);
  const [layoutDisabled, setLayoutDisabled] = useState(false);
  const handleLayoutSave = () => {
    setProgressPercent(progressPercent + 25);
    setLayoutDisabled(true);
  };
  return (
    <div className={styles.layoutContainer}>
      <h1 className={styles.layoutHeading}>Layout Options</h1>
      <div className={styles.layoutOptionsContainer}>
        <div className={styles.layoutOptions}>
          <h1 className={styles.optionsTitle}>Assembly Type</h1>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setAssembly(e.target.value)}
            defaultValue={assembly}
          >
            <option value="complete door">Complete Door</option>
            <option value="door frame">Door Frame</option>
          </Form.Select>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Measure Size</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <div className={styles.optionsSubContainer}>
            <div className={styles.subOptions}>
              <h1 className={styles.optionsTitle}>Width</h1>
              <Form.Select
                className={styles.formSelectSub}
                onChange={(e) => {
                  setWidth(e.target.value);
                }}
                defaultValue={width}
              >
                {feet.map((each) => (
                  <option value={each} key={each}>
                    {each} ft.
                  </option>
                ))}
              </Form.Select>
              <Form.Select className={styles.formSelectSub}>
                {inches.map((each) => (
                  <option value={each} key={each}>
                    {each} in.
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className={styles.subOptions}>
              <h1 className={styles.optionsTitle}>Height</h1>
              <Form.Select
                className={styles.formSelectSub}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                defaultValue={height}
              >
                {feet.map((each) => (
                  <option value={each} key={each}>
                    {each} ft.
                  </option>
                ))}
              </Form.Select>
              <Form.Select className={styles.formSelectSub}>
                {inches.map((each) => (
                  <option value={each} key={each}>
                    {each} in.
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Windcode</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => {
              setWindCode(e.target.value);
            }}
            defaultValue={windCode}
          >
            <option value="windcodew1">Windcode W1</option>
            <option value="windcodew2">Windcode W2</option>
            <option value="windcodew3">Windcode W3</option>
          </Form.Select>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Design</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => {
              setDesign(e.target.value);
            }}
            defaultValue={design}
          >
            <option value="cc">CC</option>
            <option value="fcc">FCC</option>
          </Form.Select>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Color</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            defaultValue={color}
          >
            <option value="darkFinish">Dark Finish</option>
            <option value="glossyFinish">Glossy Finish</option>
            <option value="matteFinish">Matte Finish</option>
          </Form.Select>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <IconButton onClick={handleLayoutSave} disabled={layoutDisabled}>
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

export default LayoutOptions;
