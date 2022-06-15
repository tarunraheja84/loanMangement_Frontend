import React from "react";
import Userinfo from "./Userinfo";
export default function Useritem(props) {
  return (
    <div>
      <div className="container" style={{ padding: "3px" }}>
        <div class="row justify-content-around">
          <div class="col-4">
            <div class="card">
              <div class="card-body">{props.id}</div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body">{props.id1}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
