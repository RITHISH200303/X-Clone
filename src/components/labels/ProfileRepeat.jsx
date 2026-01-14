export default function ProfileRepeat({ className, simplePtofile }) {

  return (
    <div className={`flex relative w-auto ${className}`}>
      {simplePtofile.map((item, index) => (
        <div className={`w-6 aspect-square rounded-full overflow-hidden absolute`} key={index} style={{
          zindex: index,
          right: index*11,
        }}>
          <img
            src={item.profile_image}
            alt={item.user_name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
