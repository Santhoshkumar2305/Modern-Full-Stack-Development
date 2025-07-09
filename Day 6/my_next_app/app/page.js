import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/component/Card";
import List from "@/component/List";
import LeftComp from "@/component/LeftComp";
import RightComp from "@/component/RightComp";
import NavBar from "@/component/NavBar";
import SmallComp from "@/component/SmallComp";
import BigComp from "@/component/BigComp";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div className={styles.page}>

      <NavBar></NavBar>
      <div className="compContainer">
        <LeftComp></LeftComp>
        <RightComp></RightComp>
      </div>
      <SmallComp title="Explore" bgcolor="black"/>
      <BigComp title="Explore & Connect" image="/img1.jpg" bgcolor="white"/>
      <SmallComp title="Create" bgcolor="blue"/>
      <BigComp title="Create your passion" image="/img2.jpg" bgcolor="darkgray"/>
      <SmallComp title="Share" bgcolor="black"/>
      <BigComp title="Share what you read" image="/img3.jpg" bgcolor="white"/>
      <Footer/>
    </div>
  );
}
