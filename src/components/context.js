import React, { Component } from "react";

/* importujemo sve objekte iz data.js */
import {
  placeInfo,
  reviews,
  detailInfo,
  news,
  slobodne,
  portfolioData,
  cestapitanja
} from "../data";

const InfoContext = React.createContext();

/* priprema rad sa njima */
class InfoProvider extends Component {
  state = {
    info: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news,
    slobodne: slobodne,
    portfolioData: portfolioData,
    cestapitanja: cestapitanja
  };

  getItem = id => {
    const item = this.state.info.find(item => item.id === id);
    return item;
  };

  handleDetail = id => {
    const item = this.getItem(id);
    this.setState(() => {
      return {
        detailInfo: item
      };
    });
  };

  /* vračanje kao gotov proizvod */
  render() {
    return (
      <InfoContext.Provider
        value={{
          info: this.state.info,
          reviews: this.state.reviews,
          maps: this.state.maps,
          headerTitle: this.state.headerTitle,
          headerSubTitle: this.state.headerSubTitle,
          headerText: this.state.headerText,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
          name: this.state.name,
          avatar: this.state.avatar,
          comment: this.state.comment,
          handleDetail: this.handleDetail,
          slobodne: this.state.slobodne,
          portfolioData: this.state.portfolioData,
          cestapitanja: this.state.cestapitanja
        }}
      >
        {" "}
        {this.props.children}{" "}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
