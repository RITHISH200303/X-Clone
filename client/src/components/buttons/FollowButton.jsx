export default function FollowButton({ className, insideText }) {
  return (
    <>
      <div className={`${className} flex align-middle border-1 border-solid border-gray-300 px-5.5 py-1.5 m-auto rounded-3xl`}>
        {insideText}
      </div>
    </>
  );
}
