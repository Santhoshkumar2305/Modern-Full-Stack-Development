import Image from "next/image";
import styles from "./page.module.css";
import PrimaryFood from "./component/PrimaryFood";
import FoodCorner from "./component/FoodCorner";

export default function Home() {
  return (
    <div className={styles.page}>
          <PrimaryFood></PrimaryFood>
          <FoodCorner></FoodCorner>
    </div>
  );
}
