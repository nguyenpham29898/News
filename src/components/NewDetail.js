import React, { Component } from "react";
import Data from "./data.json";
import NewsRelated from "./NewsRelated.js";

export default class NewDetail extends Component {
  render() {
    console.log(this.props.match.params.id);
    var dem = 1;
    return (
      <div>
        <header className="masthead tintuc">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto text-center">
                  <h1 className="mb-5">Trang chi tiet tin tuc</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {Data.map((value, key) => {
          if (value.id === parseInt(this.props.match.params.id)) {
            return (
              <div className="jumbotron jumbotron-fluid" key={key}>
                <div className="container">
                  <img
                    src={value.anh}
                    className="img-fluid"
                    width="100%"
                    alt=""
                  />
                  <h3 className="lead text-center">{value.tieuDe}</h3>
                  <hr className="my-2" />
                  {value.noiDung}
                </div>
              </div>
            );
          }
          // return true;
        })}
        <div className="container">
          <h4 className="card-title text-center">Tin lien quan</h4>
          <div className="row">
            <div className="col-12">
              <div className="card-deck mb-3">
                {Data.map((value, key) => {
                  if (value.id !== parseInt(this.props.match.params.id)) {
                    if (dem <= 4) {
                      dem++;
                      return (
                        <NewsRelated
                          key={key}
                          tinId={value.id}
                          anh={value.anh}
                          tieuDe={value.tieuDe}
                          trichDan={value.trichDan}
                        ></NewsRelated>
                      );
                    }
                  }
                  // return true;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
