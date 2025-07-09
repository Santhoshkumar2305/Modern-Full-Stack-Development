const b = ({ params }) => {
  return (
    <div className="community-container">
      <h1 className="community-heading">Community: {params.slug}</h1>
      
      <div className="post-card">
        <img src="/vid1.png" alt="Post 1" className="post-image" />
        <p className="post-text">Thank you for 298M subscribers! Stay tuned for the latest hits. #TSeries</p>
      </div>

      <div className="post-card">
        <img src="/vid2.png" alt="Post 2" className="post-image" />
        <p className="post-text">The latest music video is out now! Watch it and share your thoughts.</p>
      </div>

      <div className="post-card">
        <img src="/vid6.png" alt="Post 3" className="post-image" />
        <p className="post-text">Check out the official trailer for our upcoming release.</p>
      </div>
    </div>
  );
};

export default b;
