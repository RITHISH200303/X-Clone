import ContentChoose from "../buttons/ContentChoose";
import '../../../public/mainBody.css'
import HomePost from "../contentPost/HomePost";
export default function MainBody({ className }) {
  return (
    <div className={`${className} relative h-screen`}>
      <div className="content-trans border-solid border-b-[1px] border-gray-300/40">
        <ContentChoose/>
      </div>
      <div className="overflow-auto py-3">
        <HomePost></HomePost>
      </div>
    </div>
  );
}
