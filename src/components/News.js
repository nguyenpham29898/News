import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Data from "./data.json";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header className="masthead tintuc">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto text-center">
                  <h1 className="mb-5">Tin tuc</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container ">
          <div className="row mt-3">
            {Data.map((value, key) => {
              return (
                <NewsItem
                  key={key}
                  tinId={value.id}
                  anh={value.anh}
                  tieuDe={value.tieuDe}
                  trichDan={value.trichDan}
                ></NewsItem>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
