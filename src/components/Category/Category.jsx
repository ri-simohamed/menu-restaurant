import React from "react";
import "./Category.scss";

const Category = ({ allCategory, filterCategory }) => {

  const onFiletr = (cty) => {
    filterCategory(cty);
  };

  return (
    <div className="category">
      {allCategory.length >= 1 ? (
        allCategory.map((cty) => <button onClick={()=>onFiletr(cty)}>{cty}</button>)
      ) : (
        <h1>No data Found!</h1>
      )}
    </div>
  );
};

export default Category;
