import OrderItem from './OrderItem'
import CartTotal from '../Cart/CartTotal';

function OrderItems(){
    return(
        <ul className="flex flex-col gap-4 bg-Rose-100 p-4 rounded-lg">
            <OrderItem itemImage={"/assets/images/image-tiramisu-thumbnail.jpg"} itemName={"Classic Tiramisu"} itemQuantity={1} itemPrice={5.50}/>
            <OrderItem itemImage={"/assets/images/image-tiramisu-thumbnail.jpg"} itemName={"Classic Tiramisu"} itemQuantity={1} itemPrice={5.50}/>
            <OrderItem itemImage={"/assets/images/image-tiramisu-thumbnail.jpg"} itemName={"Classic Tiramisu"} itemQuantity={1} itemPrice={5.50}/>
            <CartTotal total={1 * 5.50}/>
        </ul>
    )
}

export default OrderItems;