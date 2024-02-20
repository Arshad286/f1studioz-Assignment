import styled from "@emotion/styled";
import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Cart } from "../../context/context";

const TableTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  border-bottom: 1px solid #d9d9d9;
`;
const TableTabs = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "10px",
  marginRight: "10px",
});
const TableTabButton = styled("button")({
  color: "#000000",
  backgroundColor: "transparent",
  fontWeight: "500",
  height: "60px",
  width: "180px",
  border: "none",
  "@media screen and (max-width: 768px)": {
    fontSize: "15px",
    width: "100px",
    justifyContent: "center",
  },
});
const SearchAndFilter = styled("div")({
  display: "flex",
  alignItems: "space-between",
});
const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginRight: "10px",
});
const SearchInput = styled("input")({
  color: "#d9d9d9",
  border: "1px solid #d9d9d9",
  borderRight: 0,
  height: "40px",
  width: "80px",
  paddingLeft: "10px",
});
const IconButtonCustom = styled("button")({
  border: "1px solid #d9d9d9",
  height: "40px",
  alignItems: "center",
  color: "#651a1a",
  backgroundColor: "transparent",
  "@media screen and (max-width: 768px)": {
    border: "none",
  },
});
const Filter = styled("h1")({
  color: "#651a1a",
  fontSize: "16px",
  border: "1px solid #d9d9d9",
  borderLeft: 0,
  height: "40px",
  marginTop: "8px",
  alignSelf: "center",
  padding: "8px 10px 0 10px",
  textAlign: "center",
});

const TableTabComponent = () => {
  const {
    activeTableTab,
    setActiveTableTab,
    searchInput,
    setSearchInput,
    data,
    setData,
    tableData,
    windowWidth,
  } = useContext(Cart);

  const onClickActiveCart = () => {
    setActiveTableTab("Active Cart");
  };
  const onClickArchivedCart = () => {
    setActiveTableTab("Archived Cart");
  };

  const excludeColumns = ["id"];
  const filterData = (value) => {
    const lowerCasedValue = value.toLowerCase();
    if (lowerCasedValue === "") {
      setData(tableData);
    } else {
      const dataFiltered = data.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowerCasedValue)
        );
      });
      setData(dataFiltered);
      console.log(data);
    }
  };

  const handleSearchInput = (value) => {
    setSearchInput(value);
    filterData(value);
  };
  return (
    <TableTabContainer>
      <TableTabs>
        <TableTabButton
          className="table-tab-btn table-hover"
          onClick={() => onClickActiveCart()}
          style={
            activeTableTab === "Active Cart"
              ? { borderBottom: "5px solid #000000" }
              : { color: "grey" }
          }
        >
          ACTIVE CART
        </TableTabButton>
        <TableTabButton
          className="table-tab-btn table-hover"
          onClick={() => onClickArchivedCart()}
          style={
            activeTableTab === "Archived Cart"
              ? { borderBottom: "5px solid #000000" }
              : { color: "grey" }
          }
        >
          ARCHIVED CART
        </TableTabButton>
      </TableTabs>
      {windowWidth > 768 ? (
        <SearchAndFilter>
          <SearchContainer>
            <SearchInput
              type="text"
              value={searchInput}
              onChange={(e) => handleSearchInput(e.target.value)}
              placeholder="Search..."
              style={{ outline: "none" }}
            />
            <IconButtonCustom style={{ borderLeft: 0, paddingRight: "10px" }}>
              <SearchIcon />
            </IconButtonCustom>
          </SearchContainer>
          <SearchContainer>
            <IconButtonCustom style={{ borderRight: 0, paddingLeft: "10px" }}>
              <FilterListIcon />
            </IconButtonCustom>
            <Filter>Filter</Filter>
          </SearchContainer>
        </SearchAndFilter>
      ) : (
        <SearchAndFilter>
          <IconButtonCustom
            style={{
              paddingRight: "5px",
              marginRight: "5px",
              marginTop: "10px",
              fontSize: "6px",
            }}
          >
            <SearchIcon />
          </IconButtonCustom>
          <IconButtonCustom
            style={{
              paddingLeft: "5px",
              marginRight: "5px",
              marginTop: "10px",
              fontSize: "6px",
            }}
          >
            <FilterListIcon />
          </IconButtonCustom>
        </SearchAndFilter>
      )}
    </TableTabContainer>
  );
};

export default TableTabComponent;
