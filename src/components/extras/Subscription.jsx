import SubscribeBtn from "../buttons/SubscribeBtn"

export default function Subscription({className}){
    return(
    <div className={className}>
        <p className="font-bold text-xl">
            Subscribe to Premium
        </p>
        <p>
            Subscribe to unlock new features and if eligible, receive a share of revenue.
        </p>
        <SubscribeBtn className="bg-[rgb(29,155,240)] w-[35%] text-center text-white py-1.5 rounded-3xl font-bold"/>
    </div>
    ) 
}