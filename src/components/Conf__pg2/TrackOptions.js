import { Help } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Cart } from "../../context/context";
import styles from "./Task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const mount = ["Bracket", "None"];
const lift = ["Standard", "Premium"];
const radius = ['12"', '14"', '20"'];
const springs = ["Galvanized Torsion", "Torsion"];
const trackSizes = ['2" Flag & Jamb Brackets Loose', '4" Jamb Brackets Loose'];
const TrackOptions = () => {
  const {
    spring,
    setSpring,
    setTrackSize,
    trackSize,
    trackMount,
    setTrackMount,
    trackLift,
    setTrackLift,
    trackRadius,
    setTrackRadius,
    setProgressPercent,
    progressPercent,
  } = useContext(Cart);
  const [trackSaveDisabled, setTrackSaveDisabled] = useState(false);
  const handleTrackSave = () => {
    setProgressPercent(progressPercent + 25);
    setTrackSaveDisabled(true);
  };
  return (
    <div className={styles.layoutContainer}>
      <h1 className={styles.layoutHeading}>Track Options</h1>
      <div className={styles.layoutOptionsContainer}>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Spring</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setSpring(e.target.value)}
            defaultValue={spring}
          >
            {springs.map((eachSpring) => (
              <option value={eachSpring} key={eachSpring}>
                {eachSpring}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Track Size</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setTrackSize(e.target.value)}
            defaultValue={trackSize}
          >
            {trackSizes.map((eachSize) => (
              <option value={eachSize} key={eachSize}>
                {eachSize}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Track Mount</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setTrackMount(e.target.value)}
            defaultValue={trackMount}
          >
            {mount.map((eachMount) => (
              <option value={eachMount} key={eachMount}>
                {eachMount}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Track Lift</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setTrackLift(e.target.value)}
            defaultValue={trackLift}
          >
            {lift.map((eachLift) => (
              <option value={eachLift} key={eachLift}>
                {eachLift}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Track Radius</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setTrackRadius(e.target.value)}
            defaultValue={trackRadius}
          >
            {radius.map((eachRadius) => (
              <option value={eachRadius} key={eachRadius}>
                {eachRadius} Radius
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <IconButton onClick={handleTrackSave} disabled={trackSaveDisabled}>
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

export default TrackOptions;
