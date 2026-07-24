import DessertInfo from "./DessertInfo"

function DessertList(){
    return(
        <ul className="w-60">
            <DessertInfo name={"Classic Tiramisu"} quantity={1} price={5.50}/>
        </ul>
    )
}

export default DessertList;