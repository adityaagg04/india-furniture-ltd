import React, { useState } from "react";
import data from "../data";

//components
import Navbar from "./Navbar";
import ItemList from "./ItemList";
import ItemCard from "./ItemCard";

const Home = () => {
  const allCategories = [
    "all",
    ...new Set(data.map((item) => item.category)),
  ].sort();
  const allCompanies = [
    "all",
    ...new Set(data.map((item) => item.company)),
  ].sort();
  const [listItems, setListItems] = useState(data);

  const increase = (id) => {
    const cartItem = listItems.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setListItems(cartItem);
  };
  const decrease = (id) => {
    const cartItem = listItems.map((item) => {
      if (item.id === id && item.amount > 0) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setListItems(cartItem);
  };

  const filterItemCategory = (category) => {
    if (category === "all") {
      setListItems(data);
      return;
    }
    const newItemList = listItems.filter((item) => item.category === category);
    setListItems(newItemList);
  };
  const filterItemCompany = (company) => {
    if (company === "all") {
      setListItems(data);
      return;
    }
    const newItemList = listItems.filter((item) => item.company === company);
    setListItems(newItemList);
  };

  return (
    <>
      <Navbar />
      <section className="home-container">
        <article className="filter-pane">
          <ItemList
            categories={allCategories}
            companies={allCompanies}
            filterItemCategory={filterItemCategory}
            filterItemCompany={filterItemCompany}
          />
        </article>
        <article className="items-pane">
          <div className="card-pane">
            {listItems.map((item, index) => {
              return (
                <ItemCard
                  item={item}
                  key={index}
                  id={index}
                  increase={increase}
                  decrease={decrease}
                />
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
