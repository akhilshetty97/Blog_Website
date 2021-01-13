import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Body from "./Body";
import BlogApi from "./APIs/BlogApi";

function Header() {
  const [storeData, setstoreData] = useState();
  const [loader, setLoader] = useState(false);
  const [originalData, setoriginalData] = useState();

  const blogApi = new BlogApi();
  useEffect(() => {
    blogApi
      .fetchBlogApi()
      .then((res) => res.json())
      .then((data) => {
        setstoreData(data.list);
        setoriginalData(data.list);
        setLoader(true);
      });
  }, []);

  const enteredInput = (e) => {
    let inputTitle = e.target.value;

    const filteredData = [];

    originalData.map((item) => {
      if (item.title.toLowerCase().includes(inputTitle.toLowerCase())) {
        filteredData.push(item);
      }
    });
    // console.log("filter:", filteredData);
    setstoreData(filteredData);
  };
  return (
    <div>
      <div className="header">
        <div className="header_left">
          <img
            className="wlogo"
            src="https://pngimg.com/uploads/letter_b/letter_b_PNG27.png"
            alt=""
          />
          <h2 className="cName">Blog</h2>
        </div>
        <div className="header_center">
          <input
            className="input"
            name="blogname"
            type="text"
            onChange={(e) => enteredInput(e)}
          />
          <SearchIcon className="input_search" />
        </div>
      </div>
      {loader && <Body data={storeData} />}
    </div>
  );
}

export default Header;
