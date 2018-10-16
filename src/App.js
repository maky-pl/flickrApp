import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: "update with your API key",
      pictures: [],
      textInput: "rock concert",
      itemsPerPage: 20
    };
  }

  componentDidMount() {
    this.reloadImages();
  }

  // reload images
  reloadImages = () => {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        this.state.apiKey +
        "&tags=" +
        this.state.textInput +
        "&per_page=" +
        this.state.itemsPerPage +
        "&page=1&format=json&nojsoncallback=1&flickr.photos.getSizes=1&tag_mode=all"
    )
      .then(function(response) {
        return response.json();
      })
      .then(
        function(j) {
          // alert(JSON.stringify(j));
          let picArray = j.photos.photo.map(pic => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";

            var picTitle = pic.title;
            var username = pic.owner;
            var keyId = pic.id;
            var photoUrl = "http://flickr.com/photo.gne?id=" + keyId;

            return (
              <div key={keyId}>
                <div className="pictureContiner">
                  <div className="pictureCont">
                    {picTitle} by {username}{" "}
                    <a
                      target="_blank"
                      href={photoUrl}
                      rel="noopener noreferrer"
                    >
                      See on Flickr
                    </a>
                  </div>
                  <img alt={picTitle} src={srcPath} />
                </div>
              </div>
            );
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
  };

  // this will handle search box input change
  HandleChange = e => {
    this.setState({ textInput: e.target.value });
  };

  //this will handle load more click on button and add 20 more photos
  HandlerLoadMore = () => {
    var currentPhotosPerPage = this.state.itemsPerPage;
    currentPhotosPerPage += 20;
    this.setState({ itemsPerPage: currentPhotosPerPage }, () => {
      console.log(this.state.itemsPerPage);
      this.reloadImages();
    });
  };

  // delay to wait 1s after user stops typing
  Delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  // rednder...
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} key={Math.random()} className="App-logo" alt="logo" />
          <img
            src="//icons.iconarchive.com/icons/custom-icon-design/pretty-social-media/256/flickr-2-icon.png"
            alt="logo"
            className="flickrLogo"
          />
        </header>
        <div id="search">
          <input
            className="textInput"
            onChange={this.HandleChange}
            onKeyUp={() =>
              this.Delay(
                function() {
                  this.reloadImages();
                }.bind(this),
                1000
              )
            }
            placeholder="What are you looking for ?"
          />
        </div>
        <div id="photos" className="App-intro">
          {this.state.pictures}
        </div>
        <button onClick={this.HandlerLoadMore}>Load more photos</button>
      </div>
    );
  }
}

export default App;
