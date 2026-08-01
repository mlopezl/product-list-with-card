import DessertInfo from "./DessertInfo"

function DessertList({cart}){
    return(
        <ul className="w-60">
            {
               cart.map(item => {
                return(
                    <DessertInfo key={item.dessert.name} name={item.dessert.name} quantity={item.quantity} price={item.dessert.price}/>
                )
               })
            }
        </ul>
    )
}

export default DessertList;