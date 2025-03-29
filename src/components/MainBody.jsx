import ContentChoose from "./buttons/ContentChoose"
export default function MainBody({className}){
    return(
<div className={`${className} flex flex-col h-screen`}>
    <ContentChoose />
  <div className="flex-1 overflow-y-auto mt-14"> 
    <h1>hhh</h1>
  </div>
</div>

    )
};