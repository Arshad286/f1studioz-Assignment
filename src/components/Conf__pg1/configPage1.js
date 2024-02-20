import React, { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Cart } from "../../context/context";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import ConfigurationHeader from "../Header__Conf/configHeader";
import { Link } from "react-router-dom";
import "./configPage1.css";

const configurationVariants = {
  categories: [
    {
      id: 1,
      category: "Residential Door",
    },
    {
      id: 2,
      category: "Commercial Door",
    },
    {
      id: 3,
      category: "Entry Door",
    },
  ],
  series: [
    {
      id: 1,
      collection: "Canyon Ridge Collection",
    },
    {
      id: 2,
      collection: "Heritage Carriage House Collection",
    },
    {
      id: 3,
      collection: "Olympus Collection",
    },
  ],
  doorTypes: [
    {
      id: 1,
      type: "Flush",
    },
    {
      id: 2,
      type: "Glass",
    },
    {
      id: 3,
      type: "Panelled",
    },
  ],
};
const ConfigurationPage1 = () => {
  const {
    category,
    setCategory,
    setCollection,
    setDoorType,
    doorType,
    collection,
  } = useContext(Cart);
  const stepName = "Configure a new door";
  const stepNumber = "2 of 3";
  return (
    <div className="config-page-one-bg">
      <ConfigurationHeader stepName={stepName} stepNumber={stepNumber} />
      <div className="config-page-one-card">
        <div className="cards-container-config1">
          <Card className="card-config1">
            <Card.Body style={{ width: "80%", padding: 0 }}>
              <div className="card-body-config1">
                <div className="d-flex flex-row justify-content-start text-left mb-2">
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      "@media screen and (max-width:768px)": {
                        fontSize: 14,
                      },
                    }}
                  >
                    Select Category
                  </Typography>
                </div>
                <Form.Select
                  className="form-select"
                  onChange={(e) => setCategory(e.target.value)}
                  defaultValue={category}
                >
                  {configurationVariants.categories.map((eachCategory) => (
                    <option value={eachCategory.category} key={eachCategory.id}>
                      {eachCategory.category}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="card-body-config1">
                <div className="labelWithIcon">
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      "@media screen and (max-width:768px)": { fontSize: 14 },
                    }}
                  >
                    Select Series
                  </Typography>
                  <HelpIcon
                    sx={{
                      ml: 2,
                      fontSize: 18,
                      "@media screen and (max-width:768px)": {
                        fontSize: 14,
                        ml: 1,
                      },
                    }}
                  />
                </div>
                <Form.Select
                  onChange={(e) => setCollection(e.target.value)}
                  defaultValue={collection}
                  className="form-select"
                >
                  {configurationVariants.series.map((eachSeries) => (
                    <option value={eachSeries.collection} key={eachSeries.id}>
                      {eachSeries.collection}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div
                className="card-body-config1"
                style={{ marginBottom: "20px" }}
              >
                <div className="labelWithIcon">
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      "@media screen and  (max-width:768px)": { fontSize: 14 },
                    }}
                  >
                    {" "}
                    Door Type
                  </Typography>
                  <HelpIcon
                    sx={{
                      ml: 2,
                      fontSize: 18,
                      "@media screen and (max-width:768px)": {
                        fontSize: 14,
                        ml: 1,
                      },
                    }}
                  />
                </div>
                <Form.Select
                  onChange={(e) => setDoorType(e.target.value)}
                  defaultValue={doorType}
                  className="form-select"
                >
                  {configurationVariants.doorTypes.map((eachType) => (
                    <option value={eachType.type} key={eachType.id}>
                      {eachType.type}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Card.Body>
          </Card>
          <div className="configure-btn-container">
            <Link to="/configuration-2">
              <Button onClick={() => {}} className="configure-btn">
                CONFIGURE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage1;
