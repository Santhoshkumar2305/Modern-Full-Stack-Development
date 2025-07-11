'use client'
import { useRouter } from 'next/navigation';
import dataset from './food.json';
const FoodCorner = () => {
    const router = useRouter();
    return (
    <div className="food-corner">
      <div className="corner-head">
    <p>Restaurants with online food delivery in Noida</p>
      </div>
      <div className="grid-container">
        {dataset.map((item) => (
          <div className="grid" key={item.id} onClick={() =>{
            router.push(`/${item.foodname}?img=${item.img}&desc=${item.desc}&price=${item.price}`)
          }}>
            <img src={item.img} alt={item.foodname} className="grid-img" />
                <h1 className="grid-head">{item.foodname}</h1>
                <p className="grid-sub1">{item.desc}</p>
                <p className="grid-sub2">{item.price}</p>
                <p className="rate">Rating: {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FoodCorner;