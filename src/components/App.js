import React from "react";

import SearchBar from "./SearchBar";
import youTube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.clickOnSearch("saaho");
    }

    clickOnSearch = async item => {
        const response = await youTube.get("/search", {
            params: {
                q: item
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.clickOnSearch} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
