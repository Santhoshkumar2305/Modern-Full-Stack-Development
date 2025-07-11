const dish = ({params,searchParams}) => {
    const {dish:item} = params;
    const {img,desc,price} = searchParams;
  return (
    <div className="dish-container">
        <div><img src={img} alt="Food" className="dish-img"/></div>
        <div><h1>Item: {item}</h1></div>
        <div><h3>Description: {desc}</h3></div>
        <div><h3>Price: {price}</h3></div>
    </div>
  )
}
export default dish