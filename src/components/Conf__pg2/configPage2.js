import React, { useContext } from "react";
import { useNavigate } from "react-router";
import ConfigurationHeader from "../Header__Conf/configHeader";
import { Cart } from "../../context/context";
import { ProgressBar } from "react-bootstrap";
import LayoutOptions from "./LayoutOptions";
import WindowOptions from "./WindowOptions";
import TrackOptions from "./TrackOptions";
import OtherOptions from "./OtherOptions";
import styles from "./Task.module.css";
import "./configPage2.css";

const ConfigurationPage2 = () => {
  const stepName = "Configure a new door";
  const stepNumber = "3 of 3";

  const {
    progressPercent,
    setData,
    data,
    width,
    height,
    doorType,
    design,
    windCode,
    assembly,
    color,
    category,
  } = useContext(Cart);
  const navigate = useNavigate();
  const onAddData = () => {
    const productInformation = `${width}'0"x${height}'0" ${doorType} ${design} ${windCode}
                  ${assembly} ${color}
                  ${category}`;
    const newData = {
      id: data.length + 1,
      productInfo: productInformation,
      cartName: "Johnson_Classic123456",
      shippingPoint: "ABC Plant",
      createdBy: "ManojBajpayee",
      expiry: 90,
    };
    setData([...data, newData]);
    navigate("/place-order");
  };
  return (
    <div>
      <ConfigurationHeader stepName={stepName} stepNumber={stepNumber} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ProgressBar
          now={progressPercent}
          max={100}
          variant="success"
          style={{
            width: "20%",
            height: "6px",
            marginTop: "25px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className={styles.mainContainer}>
          <p style={{ marginTop: "15px", textAlign: "center" }}>
            <strong>{progressPercent}%</strong> Completed
          </p>
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              marginBottom: "50px",
            }}
          >
            <LayoutOptions />
            <WindowOptions />
            <TrackOptions />
            <OtherOptions />
          </div>
        </div>
        <div className=" fixed-bottom mt-3 fixed-footer">
          <div className="d-flex flex-row justify-content-end ">
            <div className="d-flex flex-row">
              <button
                type="button"
                onClick={() => navigate("/configuration-1")}
                className={styles.previewBtn}
              >
                <span style={{ color: "#651a1a", fontWeight: "600" }}>
                  PREVIEW
                </span>
              </button>
              <button
                type="button"
                onClick={onAddData}
                className={styles.addToCartBtn}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage2;
