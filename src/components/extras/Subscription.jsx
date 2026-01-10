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
        <SubscribeBtn/>
    </div>
    ) 
}