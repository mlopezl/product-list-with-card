import OrderItem from './OrderItem'
import data from '../../../data.json';

function OrderItems({cart}){
    const findImage =(name) => {
        const Image = data.find(item => item.name === name);
        return Image.image.thumbnail;
    }
    return(
        <ul className="w-full flex flex-col gap-4 bg-Rose-100 p-4 overflow-y-scroll no-scrollbar rounded-lg">
            {
               cart.map(item => {
                return(
                    <OrderItem key={item.dessert.name} itemImage={findImage(item.dessert.name)} itemName={item.dessert.name} itemQuantity={item.quantity} itemPrice={item.dessert.price}/>
                )
               })
            }
        </ul>
    )
}

export default OrderItems;