import React from "react";

export default function Results({ data }) {
  return (
    <div>
      {data.map((ele) => {
        return <div key={ele.id}>
            
            <h1>{ele.original_title}</h1>
        </div>;
      })}
    </div>
  );
}
