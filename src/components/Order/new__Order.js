import React from "react";
import IconButton from "@mui/material/IconButton";
import { Card } from "react-bootstrap";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import ConfigurationHeader from "../Header__Conf/configHeader";

const newOrderVariants = [
  {
    id: 1,
    Header: "Configure door from scratch",
    description: "Residential, Commercial, Entry doors",
  },
  {
    id: 2,
    Header: "Parts/ Openers",
    description: "Order Parts and Openers",
  },
  {
    id: 3,
    Header: "Direct Item Entry",
    description: "Order Parts/Openers using a Product ID",
  },
  {
    id: 4,
    Header: "Choose from favourites",
    description: "Re-order door from your favourites",
  },
];

const NewOrder = () => {
  const stepName = "Create a new door";
  const stepNumber = "1 of 3";
  return (
    <>
      <style jsx>{`
        .new-order-bg-container {
          height: 100%;
          min-height: 100vh;
          margin-bottom: 0;
        }

        .new-order-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f2f2f2;
          min-height: 100vh;
        }

        .new-order-card {
          width: 50%;
          margin-top: 20px;
          cursor: pointer;
          border: none;
          box-sizing: 0 3px 5px -3px grey;
        }

        @media screen and (max-width: 768px) {
          .new-order-card {
            width: 90%;
          }

          .new-order-card-subtitle {
            font-size: 12px;
          }

          .new-order-card-title {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="new-order-bg-container">
        <ConfigurationHeader stepName={stepName} stepNumber={stepNumber} />
        <div className="new-order-container">
          {newOrderVariants.map((eachVariant) => (
            <>
              {eachVariant.id === 1 ? (
                <Card className="new-order-card" key={eachVariant.id}>
                  <Link
                    to="/configuration-1"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card.Body className="d-flex flex-row justify-content-between">
                      <div>
                        <Card.Title className="new-order-card-title">
                          {eachVariant.Header}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted new-order-card-subtitle">
                          {eachVariant.description}
                        </Card.Subtitle>
                      </div>

                      <div className="d-flex flex-column justify-content-center">
                        <IconButton>
                          <NavigateNextIcon className="new-order-navigate-icon" />
                        </IconButton>
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              ) : (
                <Card className="new-order-card" key={eachVariant.id}>
                  <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                      <Card.Title className="new-order-card-title">
                        {eachVariant.Header}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted new-order-card-subtitle">
                        {eachVariant.description}
                      </Card.Subtitle>
                    </div>

                    <div className="d-flex,flex-column,justify-content-center">
                      <IconButton>
                        <NavigateNextIcon className="new-order-navigate-icon" />
                      </IconButton>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewOrder;
