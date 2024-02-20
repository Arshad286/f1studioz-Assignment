import { createContext, useState } from "react";
import tableData from "./data";

export const Cart = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState(tableData);
  const [activeTab, setActiveTab] = useState("Carts");
  const [activeTableTab, setActiveTableTab] = useState("Active Cart");
  const [searchInput, setSearchInput] = useState("");
  const [popover, setPopover] = useState(null);
  const [category, setCategory] = useState("Residential Door");
  const [collection, setCollection] = useState("");
  const [doorType, setDoorType] = useState("CAN212");
  const [progressPercent, setProgressPercent] = useState(0);
  const [assembly, setAssembly] = useState("Complete Door");
  const [width, setWidth] = useState("8");
  const [height, setHeight] = useState("10");
  const [windCode, setWindCode] = useState("WindCode W1");
  const [design, setDesign] = useState("CC");
  const [color, setColor] = useState("Dark Finish");
  const [glassType, setGlassType] = useState("Transparent");
  const [section, setSection] = useState("");
  const [framing, setFraming] = useState("");
  const [spring, setSpring] = useState("");
  const [trackMount, setTrackMount] = useState("");
  const [trackLift, setTrackLift] = useState("");
  const [trackRadius, setTrackRadius] = useState("");
  const [trackSize, setTrackSize] = useState("");
  const [lock, setLock] = useState("");
  const [windowWidth, setInnerWidth] = useState(window.innerWidth);

  return (
    <Cart.Provider
      value={{
        windowWidth,
        setInnerWidth,
        data,
        setData,
        activeTab,
        setActiveTab,
        lock,
        setLock,
        activeTableTab,
        setActiveTableTab,
        searchInput,
        setSearchInput,
        popover,
        setPopover,
        doorType,
        setDoorType,
        collection,
        setCollection,
        category,
        setCategory,
        progressPercent,
        setProgressPercent,
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
        glassType,
        setGlassType,
        section,
        setSection,
        framing,
        setFraming,
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
        tableData,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;
