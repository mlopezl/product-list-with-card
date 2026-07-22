function CardInfo({category, name, price}){
    return(
        <section className="w-full p-1">
            <p className="text-sm text-Rose-500">{category}</p>
            <h2 className="text-Rose-900 text-[15px] font-semibold">{name}</h2>
            <p className="text-Red text-[15px] font-medium">${price.toFixed(2)}</p>
        </section>
    )
}

export default CardInfo;