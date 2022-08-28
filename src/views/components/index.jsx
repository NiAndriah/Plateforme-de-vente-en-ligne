import React, { Fragment, useEffect, useState } from "react";
import { NavBar } from "../../component";
import { list } from "../../component/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Cart } from "./cart";

const App = props => {
  const { items, saveToLocalStorage } = props;
  const [category, setCategory] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filtered, setFitered] = useState([]);
  const loadCategory= (index)=> {
    setCategory(index);
  }
  const filterResults = (input)=> {
    const fullList = list.flat();
    const data = fullList.filter(item => { 
      const val = input.toLowerCase();
      const name = item.name.toLowerCase();
      return name.indexOf(val)!==-1
    });
    setFitered(data);
  }
  useEffect(() => {
    saveToLocalStorage(items);
  }, [saveToLocalStorage, items])
  return (
    <Fragment>
        <BrowserRouter>
          <NavBar 
            setIsFiltered={setIsFiltered} 
            filterResults={filterResults}
          />
          <Routes>
            <Route exact path="/" element={<Home 
                loadCategory={loadCategory} 
                category={category}
                isFiltered={isFiltered}
                filtered={filtered}
                data={isFiltered?filtered:list[category]}
              />} 
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
