import React from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import Notice from "./Notice";
import LandingImages from "./PopUp";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], show: false, defaultImages: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }

    });
    
    this.setState({ images: response.data.results, show: true });
  };

  async componentDidMount(){ 
      const response = await unsplash.get("/search/photos", {
          params: { query: "tattoos" }
      });
      console.log(response.data)
      this.setState({ defaultImages: response.data.results, show:false });
  }

  render() {
    return (
        
      <div className=" " style={{ marginTop: "15px" }}>
        <Notice />
        <NavBar />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="padding-container">
          {/* Found: {this.state.images.length} images */}
          <ImageList images={this.state.show ? this.state.images : this.state.defaultImages} />
          {/* <PopUp /> */}
          </div>
          <div className="ui container">
        </div>
      </div>
    );
  }
}

export default App;
