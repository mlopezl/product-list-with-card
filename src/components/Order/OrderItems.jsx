import OrderItem from './OrderItem'

function OrderItems({cart}){
    return(
        <ul className="flex flex-col gap-4 bg-Rose-100 p-4 rounded-lg">
            {
               cart.map(item => {
                return(
                    <OrderItem key={item.dessert.name} itemImage={item.dessert.image.thumbnail} itemName={item.dessert.name} itemQuantity={item.quantity} itemPrice={item.dessert.price}/>
                )
               })
            }
        </ul>
    )
}

export default OrderItems;