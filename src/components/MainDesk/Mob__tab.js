import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart } from "../../context/context";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const FloatingButton = {
  margin: 0,
  top: "auto",
  right: "40px",
  left: "auto",
  bottom: "40px",
  position: "fixed",
};

const MobileTabView = () => {
  const { data } = useContext(Cart);
  return (
    <>
      <style jsx>{`
        .bg-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background-color: #f2f2f2;
          min-height: 100vh;
          padding: 10px;
        }

        .card {
          background-color: #ffffff;
          box-shadow: 0 3px 5px -3px grey;
          border-radius: 5px;
          padding: 10px;
          border: 1px solid #f2f2f2;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
        }

        .heading {
          font-size: 12px;
          font-weight: 600;
          color: "#651a1a";
          margin-bottom: 10px;
        }

        .newTag {
          display: block;
          color: #006622;
          border-radius: 10px;
          background-color: #b3ffcc;
          height: 18px;
          width: 45px;
          font-weight: 500;
          text-align: center;
          font-size: 12px;
        }
      `}</style>

      <div className="bg-container">
        <Container>
          {data.map((item) => (
            <div className="card mt-2" key={item.id}>
              <div className="d-flex flex-row justify-content-between">
                <p className="heading">#{item.cartName}</p>
                <p className="heading">#4252</p>
              </div>
              <h5 style={{ marginBottom: "10px" }}>{item.productInfo}</h5>
              {item.expiry === 90 ? (
                <div className="d-flex flex-row justify-content-between">
                  <p style={{ color: "#666666" }}>
                    Expires in {item.expiry} days |
                    <span> Created by {item.createdBy}</span>
                  </p>
                  <span className="newTag">NEW</span>
                </div>
              ) : (
                <p style={{ color: "#ff3300" }}>
                  Expires in {item.expiry} days{" "}
                  <span style={{ color: "#666666" }}>| Shared</span>
                </p>
              )}
            </div>
          ))}
          <Link to="/new-order">
            <Fab color="error" aria-label="add" style={FloatingButton}>
              <AddIcon />
            </Fab>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default MobileTabView;
