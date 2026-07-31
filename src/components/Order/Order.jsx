import OrderHeader from "./OrderHeader";
import OrderItems from "./OrderItems";
import OrderButton from "./OrderButton";

function Order(){
    return(
        <section className="max-w-80 h-150 flex flex-col gap-4 p-6 rounded-2xl bg-Rose-50">
            <OrderHeader/>
            <OrderItems/>
            <OrderButton/>
        </section>
    )
}

export default Order;