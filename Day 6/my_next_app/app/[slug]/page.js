const a = ({ params }) => {
  console.log(params.slug);

  return (
    <div className="channel">
      <div className="side left-side">
        <img src="/t-series.jpg" alt="T -series" className="image"></img>
        <h1 className="name">T-Series</h1>
        <div className="detail">
          <div className="vid">
            <p className="para">100</p>
            <p className="para">Videos</p>
          </div>
          <div className="sub">
            <p className="para">298 M</p>
            <p className="para">Subscribers</p>
          </div>
          <div className="foll">
            <p className="para">100 M</p>
            <p className="para">Followers</p>
          </div>
        </div>
        <div className="desc">
          <p>
            Description: T-Series is India's largest music label and movie
            studio, offering a vast collection of Bollywood songs, devotional
            music, and regional hits. Subscribe for the latest chartbusters,
            music videos, and cinematic content.
          </p>
        </div>
        <div>
          <p className="joined">
            <span className="join">Joined on: </span>01 Aug 2017
          </p>
        </div>
      </div>
      <div className="side right-side">
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>Most Popular Videos</h2>
        <div className="video-grid">
          <div className="video-card">
            <img src="/vid1.png" alt="Video 1" className="video-thumb" />
            <p className="video-title">Top Bollywood Hits</p>
          </div>
          <div className="video-card">
            <img src="/vid2.png" alt="Video 2" className="video-thumb" />
            <p className="video-title">Romantic Melodies</p>
          </div>
          <div className="video-card">
            <img src="/vid3.png" alt="Video 3" className="video-thumb" />
            <p className="video-title">Bollywood Dance Blast</p>
          </div>
          <div className="video-card">
            <img src="/vid4.png" alt="Video 4" className="video-thumb" />
            <p className="video-title">Jukebox</p>
          </div>
          <div className="video-card">
            <img src="/vid5.png" alt="Video 5" className="video-thumb" />
            <p className="video-title">Devotional Bhajans</p>
          </div>
          <div className="video-card">
            <img src="/vid6.png" alt="Video 6" className="video-thumb" />
            <p className="video-title">New Movie Trailers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default a;
