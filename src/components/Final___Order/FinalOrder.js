import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cart } from "../../context/context";
import ConfigurationHeader from "../Header__Conf/configHeader";
import "./FinalOrder.css";
import DiscountIcon from "@mui/icons-material/Discount";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useState } from "react";

const PlaceOrder = () => {
  const stepName = "Classic_John45012";
  const stepNumber = "Cart #123456723";  
  const {
    windowWidth,
    width,
    height,
    doorType,
    design,
    windCode,
    assembly,
    color,
    category,
    data,
  } = useContext(Cart);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(-1);
  };
  const handleDelete = () => {
    data.pop();
    navigate("/");
  };

  const [quantity, setQuantity] = useState(1);
  const unitPrice = 4800.0;

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  const netPrice = quantity * unitPrice;

  return (
    <div>
      <ConfigurationHeader stepName={stepName} stepNumber={stepNumber} />
      <div className="bg-container">
        <Container className="container-el">
          <div className="d-flex flex-column justify-content-center card-container">
            <Row className="order-row">
              <Col xs={12} lg={8}>
                <Typography
                  variant={windowWidth > 768 ? "subtitle1" : "caption"}
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  {width}'0"x{height}'0" {doorType} {design} {windCode}{" "}
                  {assembly} Intellicore Obscure, 5th Generation {color}{" "}
                  {category}
                </Typography>
                <p style={{ color: "grey" }}>
                  Job Name: Front door with glass{" "}
                  <span
                    style={{
                      color: "brown",
                      fontWeight: "bold",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                  >
                    {" "}
                    Change
                  </span>
                </p>
                <p style={{ color: "grey" }}>Product #CWD | Garage Door</p>
                <p style={{ color: "grey" }}>
                  Availability:{" "}
                  <span style={{ color: "green", fontWeight: "500" }}>
                    IN STOCK
                  </span>{" "}
                  <span style={{ color: "#000000" }}>
                    {" "}
                    (Available for pickup)
                  </span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4} className="p-2 d-none d-md-block">
                <button
                  style={{
                    border: "1px solid #8894A0",
                    color: "#333",
                    backgroundColor: "#F6F8FA",
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "1.5",
                    cursor: "pointer",
                  }}
                  onClick={handleDecrement}
                  className="btn btn-secondary"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  style={{
                    width: "40px",
                    borderRadius: "5px",
                    verticalAlign: "middle",
                    height: "35px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    outline: "none",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                  className="m-2"
                />

                <button
                  onClick={handleIncrement}
                  className="btn btn-secondary"
                  style={{
                    border: "2px solid #8894A0",
                    color: "#333",
                    backgroundColor: "#F6F8FA",
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "1.5",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </Col>
              <Col
                xs={6}
                md={4}
                className="d-flex flex-column justify-column-md-center justify-column-start "
              >
                <p className="discounts">Standard Multiplier: 432</p>
                <p className="discounts">Secondary Multipliers applied</p>
                <div className="mt-2 discounts">
                  <DiscountIcon sx={{ color: "#651a1a", marginRight: 1 }} />
                  <span
                    style={{
                      color: "#651a1a",
                      fontWeight: "500",
                    }}
                    className="discounts"
                  >
                    Apply MPQ
                  </span>
                </div>
              </Col>
              <Col
                xs={6}
                md={4}
                className="d-flex flex-column justify-column-center text-end"
              >
                <p>
                  Net Price:{" "}
                  <span className="price-details">
                    <strong>${netPrice}</strong>
                  </span>
                </p>
                <p>Unit Price: $4800.00</p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#651a1a",
                    fontWeight: "500",
                    marginTop: "5px",
                  }}
                >
                  View Price Details
                </p>
              </Col>
              <Col xs={6} md={4} className="d-block d-md-none p-2 mt-2">
                <button
                  style={{
                    border: "1px solid #8894A0",
                    color: "#333",
                    backgroundColor: "#F6F8FA",
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "1.5",
                    cursor: "pointer",
                  }}
                  onClick={handleDecrement}
                  className="btn btn-secondary"
                >
                  -
                </button>
                <input
                  type="text"
                  value="1"
                  style={{
                    width: "40px",
                    borderRadius: "5px",
                    verticalAlign: "middle",
                    height: "35px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    outline: "none",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                  className="m-2"
                />
                <button
                  style={{
                    border: "1px solid #8894A0",
                    color: "#333",
                    backgroundColor: "#F6F8FA",
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "1.5",
                    cursor: "pointer",
                  }}
                  onClick={handleIncrement}
                  className="btn btn-secondary "
                >
                  +
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs={3} className="text-center mt-3 p-0">
                <button className="customize-btn">
                  <FavoriteIcon className="action-icons" />
                  <div className="d-none d-lg-block">
                    <span className="action-texts">FAVORITES</span>
                  </div>
                </button>
              </Col>
              <Col xs={3} className="text-center mt-3 p-0">
                <button
                  type="button"
                  className="customize-btn"
                  onClick={handleEdit}
                >
                  <EditIcon className="action-icons" />
                  <div className="d-none d-lg-block">
                    <span className="action-texts">EDIT</span>
                  </div>
                </button>
              </Col>
              <Col xs={3} className="text-center mt-3 p-0">
                <button className="customize-btn">
                  <ContentCopyIcon className="action-icons" />
                  <div className="d-none d-lg-block">
                    <span className="action-texts">COPY</span>
                  </div>{" "}
                </button>
              </Col>
              <Col xs={3} className="text-center mt-3 p-0">
                <button
                  type="button"
                  className="customize-btn"
                  onClick={handleDelete}
                >
                  <DeleteIcon className="action-icons" />
                  <div className="d-none d-lg-block">
                    <span className="action-texts">DELETE</span>
                  </div>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={12} lg={6} className="pe-0">
              <div className="d-flex flex-column text-start mt-2  card-container">
                <span style={{ fontSize: "13px", marginBottom: "10px" }}>
                  Change Delivery Date
                </span>
                <div className="d-flex flex-md-row flex-lg-column justify-content-md-between">
                  <input
                    type="date"
                    style={{
                      height: "40px",
                      borderRadius: "5px",
                      border: "1px solid #bfbfbf",
                      padding: "10px",
                      color: "grey",
                    }}
                  />
                  <div className="d-none d-md-block">
                    <span style={{ fontSize: "13px", marginTop: "10px" }}>
                      Standard Delivery: Tue June 28-2022
                    </span>
                  </div>
                </div>
                <div className="d-sm-block d-md-none">
                  <span style={{ fontSize: "13px", marginTop: "10px" }}>
                    Standard Delivery: Tue June 28-2022
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column text-start mt-2 card-container">
                <span style={{ fontSize: "13px", marginBottom: "10px" }}>
                  Purchase Order Number
                </span>
                <div className="d-flex flex-sm-column flex-md-row flex-lg-column justify-content-md-between">
                  <input
                    type="text"
                    placeholder="ENTER PO NUMBER"
                    style={{
                      height: "40px",
                      borderRadius: "5px",
                      border: "1px solid #bfbfbf",
                      padding: "10px",
                      color: "grey",
                    }}
                  />
                  <div className="d-none d-md-block">
                    <span
                      style={{
                        fontSize: "13px",
                        marginTop: "10px",
                      }}
                    >
                      This PO will be useful to track order items
                    </span>
                  </div>
                </div>
                <div className="d-sm-block d-md-none">
                  <span
                    style={{
                      fontSize: "13px",
                      marginTop: "10px",
                    }}
                  >
                    This PO will be useful to track order items
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div
                className="d-flex flex-column mt-2 card-container"
                style={{ padding: "15px" }}
              >
                <p style={{ fontWeight: "500" }}>Bill Summary</p>
                <div className="d-flex flex-row justify-content-between">
                  <p>Sub Total</p>
                  <p>${netPrice}</p>
                </div>
                <div className="d-flex flex-row mt-1 justify-content-between">
                  <p>Energy Surcharge</p>
                  <p>$70.18</p>
                </div>
                <div className="d-flex flex-row mt-1 justify-content-between">
                  <p>Sales Tax</p>
                  <p>$490.93</p>
                </div>
                <div className="d-flex flex-row mt-1 justify-content-between">
                  <span style={{ fontWeight: "600", color: "#651a1a" }}>
                    TOTAL
                  </span>
                  <span style={{ fontWeight: "600", color: "#651a1a" }}>
                    ${(netPrice + 70.18 + 490.93).toFixed(2)}
                  </span>
                </div>
                <hr style={{ marginBottom: "5px" }} />
                <FormControlLabel
                  control={<Checkbox defaultChecked color="error" />}
                  sx={{ mt: 0 }}
                  label={
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "700", color: "#651a1a" }}
                    >
                      Apply Tax
                    </Typography>
                  }
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "12px",
                    marginBottom: "0",
                  }}
                >
                  (The 1% iStore is calculated into the total price for all the
                  doors and door parts. Please refer to the quote or order
                  acknowledgment for details.)
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} lg={6} className="order-lg-1">
              <div className="d-flex flex-column card-container mt-2 ">
                <div className="d-flex flex-row justify-content-between ">
                  <div className="order-sm-first w-50">
                    <p>Shipping to</p>
                    <span style={{ fontWeight: "600", color: "651a1a" }}>
                      Bement Jared
                    </span>

                    <p style={{ color: "651a1a" }}>
                      144, Curt Shores, 50, Madison Avenue Hixson, - 42040
                      <br />
                      Contact No: (123) 4567890
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p
                      style={{
                        color: "#651a1a",
                        fontWeight: "700",
                      }}
                    >
                      CHANGE
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="pe-0 order-lg-0">
              <div className="d-flex flex-column card-container mt-2 ">
                <div className="d-flex flex-row justify-content-between ">
                  <div className=" w-50">
                    <p>Billing to</p>
                    <span style={{ fontWeight: "600", color: "651a1a" }}>
                      Bement Jared
                    </span>

                    <p style={{ color: "651a1a" }}>
                      144, Curt Shores, 50, Madison Avenue Hixson, - 42040
                      <br />
                      Contact No: (123) 4567890
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p
                      style={{
                        color: "#651a1a",
                        fontWeight: "700",
                      }}
                    >
                      CHANGE
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="card-container fixed-bottom mt-3 fixed-footer">
                <div className="d-flex flex-row justify-content-between ">
                  <div className="d-flex flex-column">
                    <p style={{ color: "#651a1a", fontWeight: "600" }}>
                      {quantity} ITEM
                    </p>
                    <h6
                      style={{
                        color: "#651a1a",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      ${(netPrice + 70.18 + 490.93).toFixed(2)}
                    </h6>
                  </div>
                  <div className="d-flex flex-row">
                    <button
                      type="button"
                      onClick={() => navigate("/new-order")}
                      className="add-more-btn"
                    >
                      <AddCircleOutlinedIcon className="add-icon" />
                      <span style={{ color: "#651a1a", fontWeight: "600" }}>
                        ADD MORE
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/");
                      }}
                      className="place-order-btn"
                    >
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PlaceOrder;
