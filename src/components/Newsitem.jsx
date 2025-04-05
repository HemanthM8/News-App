import React from "react";

const Newsitem = (props) => {
  const { src, title, description, newsUrl } = props;
  if (!src || !title || !description || !newsUrl) {
    return null;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description ? description.slice(0, 100) + "..." : ""}
        </p>
        <a href={newsUrl} className="btn btn-info" target="_blank">
          Open
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
