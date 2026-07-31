import DessertInfo from "./DessertInfo"

function DessertList({name, quantity, price}){
    return(
        <ul className="w-60">
            <DessertInfo name={name} quantity={quantity} price={price}/>
        </ul>
    )
}

export default DessertList;