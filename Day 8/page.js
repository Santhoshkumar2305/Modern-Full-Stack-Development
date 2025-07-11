'use client'
import { useRouter } from "next/navigation";
import Login from "./component/Login";

const Main = () => {
  const router = useRouter();
  return (
    <div className="main-cls">
        <h1> Welcome To Our Blog Website</h1>
        <button onClick={() => {
          router.push("/bloguser")
        }}>Click here to view Blogs</button>
    </div>
  )
}

export default Main;