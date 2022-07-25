import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
export default function BlogListings() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get('http://localhost:3006/blogs')
      .then((response) => setData(response.data));
  };
  useEffect(() => {
        fetchData();
  }, []);
  return (
    <div>
          {data.map((el) => (
            <List {...el} />
          ))}
        </div>
  )
}
