import { Help } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Radio,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Cart } from "../../context/context";
import styles from "./Task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";

const additionalOptions = [
  { id: 1, name: "Extra Strut(s)", checked: true },
  { id: 2, name: "Spade Strap Hinge(s)", checked: true },
  { id: 3, name: "14 GA Quiet Hinge", checked: false },
  { id: 4, name: "Less Bottom Astragal", checked: false },
  { id: 5, name: "Gold Bar Guarantee", checked: false },
  { id: 6, name: "Medallion Hardware Upgrade", checked: true },
  { id: 7, name: 'Slide Lock Mounted at 54"', checked: false },
  { id: 8, name: "2 Spear Lift Handles", checked: false },
];

const OtherOptions = () => {
  const {
    lock,
    setLock,
    setPackaging,
    packaging,
    setProgressPercent,
    progressPercent,
  } = useContext(Cart);
  const [optionsSaveDisabled, setOptionsSaveDisabled] = useState(false);
  const handleOptionsSave = () => {
    setProgressPercent(progressPercent + 25);
    setOptionsSaveDisabled(true);
  };

  return (
    <div className={styles.layoutContainer}>
      <h1 className={styles.layoutHeading}>Other Options</h1>
      <div className={styles.layoutOptionsContainer}>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Lock</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <Form.Select
            className={styles.formSelect}
            onChange={(e) => setLock(e.target.value)}
            defaultValue={lock}
          >
            <option value="lock2">Inside Lock (#2)</option>
            <option value="lock2">Outside Lock(#2)</option>
          </Form.Select>
        </div>
        <div
          className={styles.layoutOptions}
          style={{ justifyContent: "flex-start" }}
        >
          <h1 className={styles.optionsTitle} style={{ marginRight: "90px" }}>
            MISC Lock Options
          </h1>
          <div className={styles.lockEl}>
            <Radio
              checked={true}
              value="no lock"
              name="radio-buttons"
              inputProps={{ "aria-label": "No Lock Hole" }}
              color="error"
            />
            <FormLabel id="noLock" sx={{ color: "#000000" }}>
              No Lock Hole
            </FormLabel>
          </div>
        </div>
        <div className={styles.layoutOptions}>
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Packaging</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <div className={styles.packagingEl}>
            <Form.Select
              className={styles.formSelect}
              onChange={(e) => setPackaging(e.target.value)}
              defaultValue={packaging}
            >
              <option value="distributor">[x] Distributor</option>
            </Form.Select>
            <div>
              <ErrorIcon sx={{ color: "red", fontSize: 20 }} />
              <span style={{ color: "red", fontSize: "14px" }}>
                {" "}
                Clopay CWD models exclude packaging options
              </span>
            </div>
          </div>
        </div>
        <div
          className={styles.layoutOptions}
          style={{ alignItems: "flex-start" }}
        >
          <div className={styles.lhsElement}>
            <h1 className={styles.optionsTitle}>Additional Options</h1>
            <Help sx={{ ml: 1, fontSize: 18, color: "#cccccc" }} />
          </div>
          <div className={styles.additionalEl}>
            <FormGroup>
              {additionalOptions.map((eachOption) => (
                <FormControlLabel
                  key={eachOption.id}
                  control={
                    <Checkbox
                      defaultChecked={eachOption.checked}
                      color="error"
                    />
                  }
                  label={
                    <Typography variant="body2">{eachOption.name}</Typography>
                  }
                />
              ))}
            </FormGroup>
            <Form.Select
              className={styles.strutsSelect}
              onChange={(e) => setPackaging(e.target.value)}
              defaultValue={packaging}
            >
              <option value="5struts">5 Extra Struts</option>
              <option value="10struts">10 Extra Struts</option>
            </Form.Select>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <IconButton onClick={handleOptionsSave} disabled={optionsSaveDisabled}>
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

export default OtherOptions;
