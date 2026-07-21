import CardButton from "./CardButton";

function Image({image, imageName}){
    return(
        <div className="w-70 relative">
            <img className="w-full rounded-lg" src={image} alt={imageName} />
            <CardButton/>
        </div>
    )
}

export default Image;