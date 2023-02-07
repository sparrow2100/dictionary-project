import React from "react";

export default function Photos(props) {
  console.log(props.pictures);
  if (props.pictures) {
    return (
      <div className="photos">
        {props.pictures.map(function (photo, index) {
          return (
            <img src={photo.src.landscape} key={index} alt={props.keyword} />
          );
        })}
      </div>
    );
  } else {
    return "";
  }
}
