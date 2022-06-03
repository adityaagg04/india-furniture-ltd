import React from "react";

const ItemList = ({
  categories,
  companies,
  filterItemCategory,
  filterItemCompany,
}) => {
  return (
    <>
      <div>
        <h1 className="item-pane-head">Categories</h1>
        <main className="btn-container">
          {categories.map((category, index) => {
            return (
              <button
                className="item-btn"
                onClick={() => filterItemCategory(category)}
                key={index}
              >
                {category}
              </button>
            );
          })}
        </main>
      </div>
      <div>
        <h1 className="item-pane-head">Company</h1>
        <main className="btn-container">
          {companies.map((company, index) => {
            return (
              <button
                className="item-btn"
                onClick={() => filterItemCompany(company)}
                key={index}
              >
                {company}
              </button>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default ItemList;
