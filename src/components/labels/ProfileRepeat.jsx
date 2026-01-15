export default function ProfileRepeat({ className, simplePtofile }) {

  return (
    <div className={`flex relative w-auto ${className}`}>
      {simplePtofile.map((item, index) => (
        <div className={`w-6 aspect-square rounded-full overflow-hidden absolute p-[1px] bg-white`} key={index} style={{
          zIndex: (simplePtofile.length + 1) - index,
          left: index*11,
        }}>
          <img
            src={item.profile_image}
            alt={item.user_name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ))}
    </div>
  );
}
