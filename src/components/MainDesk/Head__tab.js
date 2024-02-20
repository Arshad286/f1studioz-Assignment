import React, { useContext } from "react";
import "../../index.css";
import styled from "@emotion/styled";
import { Cart } from "../../context/context";

const HeadTab = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "transparent",
});
const CartTab = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#212931",
});
const Button = styled("button")({
  color: "#ffffff",
  backgroundColor: "transparent",
  fontWeight: "500",
  height: "60px",
  width: "120px",
  border: "none",
});

const HeadTabComponent = () => {
  // const [activeTab, setActiveTab] = useState("Carts");
  const { activeTab, setActiveTab } = useContext(Cart);
  const onSelectCartsTab = () => {
    setActiveTab("Carts");
  };
  const onSelectFavouritesTab = () => {
    setActiveTab("Favourites");
  };
  return (
    <CartTab style={{ position: "static", top: "62px" }}>
      <HeadTab>
        <Button
          className="button_style"
          onClick={() => onSelectCartsTab()}
          style={
            activeTab === "Carts" ? {} : { color: "#bfbfbf", fontWeight: "400" }
          }
        >
          CARTS
        </Button>
        <Button
          className="button_style"
          onClick={() => onSelectFavouritesTab()}
          style={
            activeTab === "Favourites"
              ? {}
              : { color: "#bfbfbf", fontWeight: "400" }
          }
        >
          FAVOURITES
        </Button>
      </HeadTab>
    </CartTab>
  );
};

export default HeadTabComponent;
