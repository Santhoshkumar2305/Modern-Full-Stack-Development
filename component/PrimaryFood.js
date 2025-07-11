'use client'
import { useRef } from 'react';
import dataset from './food.json';
import { useRouter } from 'next/navigation';

const PrimaryFood = () => {

    const router=useRouter();

  const scrollRef = useRef(null);
  const scroll = (dir) => {
    const container = scrollRef.current;
    const cardWidth = 240;
    container.scrollBy({ left: dir === 'left'? -cardWidth:cardWidth,behavior:'smooth'});
  };
  return (
    <div className="primefood">
      <div className="prime-head">
        <p>Top restaurant chains in Noida</p>
        <div>
          <button className="prime-btn" onClick={() => scroll('left')}>&lt;</button>
          <button className="prime-btn" onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>
      <div className="scroll-wrapper" ref={scrollRef}>
        <div className="food-card-container">
          {dataset.map(item => (
            <div className="food-card" key={item.id} onClick={() => {
                router.push(`/${item.foodname}?img=${item.img}&desc=${item.desc}&price=${item.price}`)
            }}>
              <img src={item.img} alt={item.foodname} className="prime-img" />
              <p>{item.foodname}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PrimaryFood;
