import React, { Component } from 'react';
import './App.css';
import {PreviewList} from "./components/list_of_previews";
import {SearchBar} from "./components/search_bar";
import Search from 'youtube-search';
import {ActiveVideo} from "./components/active_video";

class App extends Component {
  constructor(){
    super();
    this.state = {
      previews: [],
      searchOpts: {
        maxResults: 10,
        key: 'AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI',
        videoEmbeddable: true,
        
        type:"video"
      },
      searchText:'bug',
      activeVideo : {}
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.getPreviews = this.getPreviews.bind(this);
    this.activatePreview = this.activatePreview.bind(this);
  }

  getPreviews = () => {
    Search(this.state.searchText, this.state.searchOpts, (err, results) => {
      if(err){
          return console.log(err);
      }
      this.setState({
          previews :  results
      });
      if(results.length > 0){
          this.activatePreview(results[0]);
      }
    });
  }

  updateSearch(event){
    this.setState({searchText: event.target.value});
    this.getPreviews();
  }

  activatePreview(obj){
    obj.loaded = true;
    this.setState({activeVideo: obj});
  }

  componentDidMount(){
    this.getPreviews();
  }

  render() {
    return (
      <main className="container">
          <SearchBar updateSearch={this.updateSearch} />
          <div className="row">
              <ActiveVideo activeVideo={this.state.activeVideo} />
              <PreviewList previews={this.state.previews} activatePreview={this.activatePreview}/>
          </div>
      </main>
    )
  }
}

export default App;
