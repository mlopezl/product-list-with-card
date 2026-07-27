import checkIcon from '../../../public/assets/images/icon-order-confirmed.svg'

function OrderHeader(){
    return(
        <header className='flex flex-col gap-2'>
            <img className='w-10' src={checkIcon} alt="Check icon" />
            <h2 className='text-Rose-900 font-bold text-4xl'>Order Confirmed</h2>
            <p className='text-sm text-Rose-300 font-medium'>We hope you enjoy your food!</p>
        </header>
    )
}

export default OrderHeader;