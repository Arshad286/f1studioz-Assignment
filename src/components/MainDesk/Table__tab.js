import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Cart } from "../../context/context";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const FloatingButton = {
  margin: 0,
  top: "auto",
  right: "40px",
  left: "auto",
  bottom: "40px",
  position: "fixed",
};
const TableComponent = () => {
  const { data, activeTableTab, activeTab } = useContext(Cart);
  const columns = [
    {
      Header: "PRODUCT INFORMATION",
      accessor: "product",
    },
    {
      Header: "CART NAME",
      accessor: "cart_name",
    },
    {
      Header: "SHIPPING POINT",
      accessor: "shipping_point",
    },
    {
      Header: "CREATED BY",
      accessor: "created_by",
    },
    {
      Header: "EXPIRY",
      accessor: "expiry",
    },
    {
      Header: "",
      accessor: "",
    },
  ];

  return (
    <div>
      {activeTableTab === "Active Cart" && activeTab === "Carts" ? (
        <Container maxWidth="100%">
          <Table
            responsive
            striped
            style={{ border: "1px solid #d9d9d9", marginTop: "20px" }}
          >
            <thead>
              <tr style={{ color: "#8c8c8c", fontSize: "12px" }}>
                {columns.map((each) => (
                  <th key={each.accessor}>
                    {each.Header}{" "}
                    <span>
                      <ArrowDownwardIcon sx={{ fontSize: 14 }} />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((eachRow) => (
                <tr
                  key={eachRow.id}
                  style={{ verticalAlign: "middle", height: "60px" }}
                >
                  <td>{eachRow.productInfo}</td>
                  <td>{eachRow.cartName}</td>
                  <td>{eachRow.shippingPoint}</td>
                  <td>{eachRow.createdBy}</td>
                  {eachRow.expiry === 90 ? (
                    <td style={{ color: "#666666" }}>
                      Expires in {eachRow.expiry} days
                    </td>
                  ) : (
                    <td style={{ color: "#ff3300" }}>
                      Expires in {eachRow.expiry} days
                    </td>
                  )}
                  {eachRow.expiry === 90 ? (
                    <td>
                      <span
                        style={{
                          display: "block",
                          color: "#006622",
                          borderRadius: "10px",
                          backgroundColor: "#b3ffcc",
                          height: "24px",
                          width: "65px",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        NEW
                      </span>
                    </td>
                  ) : (
                    <td></td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to="/new-order">
            <Fab color="error" aria-label="add" style={FloatingButton}>
              <AddIcon />
            </Fab>
          </Link>
        </Container>
      ) : (
        activeTab === "Carts" && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "200px",
              fontSize: "40px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            No archived orders yet!
          </div>
        )
      )}
    </div>
  );
};

export default TableComponent;
