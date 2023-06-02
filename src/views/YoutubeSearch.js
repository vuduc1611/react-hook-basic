import "./Blog.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {}, []);

  const handleSearchYoutube = async () => {
    // let res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    //   part: "snippet",
    //   maxResults: 20,
    //   key: "AIzaSyBPZXVXVX6FEST5VsTSbuAzqRelwAVpcF0",
    //   type: "video",
    //   q: query,
    // });

    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: 20,
        key: "AIzaSyBPZXVXVX6FEST5VsTSbuAzqRelwAVpcF0",
        type: "video",
        q: query,
      },
    });
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        });
      }
      setVideos(result);
    }
  };
  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>
      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="iframe-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  //   title="【Ghibli Piano Medley】🌻 4時間 ジブリメドレーピアノ💛 史上最高のジブリピアノコレクション、あなたは最初の瞬間から中毒になるでしょう"
                  //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Created At:{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}{" "}
                </div>
                <div className="author">Author : {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "3dSA6R_NMP_xUt3vnmu4s-caxck",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 809,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "aqes2CF4_6IWODX6sCTJU0uFP_U",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "R5YzlLNrsBw"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "R7GBWMY8yj_qIKWnqh91aIC4u-U",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "oZ212seufZk"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "ATnwykX8MuK8WBzjJmURNrnqJk0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "CMigSUq1AIk"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "FndJzw_j_-s0YeHqBXeFX8S6hio",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "8JkHV2GZL0M"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "W5MZymxYlPFMDxumNVFKiiY5PK8",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "V1JONxue4fA"
//         }
//       }
//     ]
//   }
