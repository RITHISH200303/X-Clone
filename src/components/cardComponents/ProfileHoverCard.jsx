import { forwardRef } from "react"

export default forwardRef(function ProfileHoverCard({onMouseEnter, onMouseLeave},ref){
        return(
            <dialog ref={ref} className="absolute top-9 left-0 bg-red-500 p-4 rounded text-white" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <p>Good morning!!</p>
            </dialog>
        )
    })
    

// import { forwardRef } from "react";

// const ProfileHoverCard = forwardRef(function ProfileHoverCard(props, ref) {
//   return (
//     <dialog
//       ref={ref}
//       className="absolute top-12 left-0 bg-red-500 p-4 rounded text-white"
//       onClick={props.onMouseEnter}
//       onMouseLeave={props.onMouseLeave}
//     >
//       <p>Good morning!!</p>
//     </dialog>
//   );
// });

// export default ProfileHoverCard;
