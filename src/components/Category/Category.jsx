import React from "react";
import "./Category.scss";

const Category = ({ allCategory, filterCategory }) => {

  const onFiletr = (caty) => {
    filterCategory(caty);
  };

  return (
    <div className="category">
      {allCategory.length >= 1 ? (
        allCategory.map((cty) => <button onClick={onFiletr}>{cty}</button>)
      ) : (
        <h1>No data Found!</h1>
      )}
    </div>
  );
};

export default Category;
