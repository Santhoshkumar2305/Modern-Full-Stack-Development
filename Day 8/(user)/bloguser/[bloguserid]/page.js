"use client";
import { useParams } from "next/navigation";
import dataset from "../../../../avengers.json";

const BlogUserDetails = () => {
  const { bloguserid } = useParams();
  const movie = dataset.find((item) => item.id === Number(bloguserid));
  if (!movie) return <p>Movie not found</p>;
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>{movie.title} ({movie.year})</h1>
      <img src={movie.img} alt={movie.title} style={{ width: "60%", maxWidth: "600px", borderRadius: "10px", margin: "20px 0" }}
      />
      <p style={{ fontSize: "18px" }}>{movie.desc}</p>
    </div>
  );
};

export default BlogUserDetails;
