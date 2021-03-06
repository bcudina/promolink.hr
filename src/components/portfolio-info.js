import React, { Component } from "react";
import { InfoConsumer } from "./context";

class PortfolioInfo extends Component {
  render() {
    const {
      id,
      headerTitle,
      headerSubTitle,
      headerText,
      img,
      maps
    } = this.props.item;

    return (
      <InfoConsumer>
        {value => (
          <div className="col-10 col-lg-4 mx-auto mb-5">
            <div className="card mx-auto" style={{ width: "10rem" }}>
              <img src={img} alt={headerTitle} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-uppercase">{headerTitle}</h6>
                <h4 className="card-title">{headerSubTitle}</h4>
                <p className="card-text">{headerText}</p>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default PortfolioInfo;
