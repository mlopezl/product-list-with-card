import treeImage from '../../../public/assets/images/icon-carbon-neutral.svg';

function CartMessage(){
    return(
        <div className="w-65 h-10 pl-2 rounded-lg bg-Rose-100 flex items-center gap-2">
            <img className="w-5" src={treeImage} alt="" />
            <p className="text-sm text-Rose-900">This is a <span className="font-semibold">carbon-neutral</span> delivery </p>
        </div>
    )
}

export default CartMessage;