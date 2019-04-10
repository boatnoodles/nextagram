// LIBRARIES
import React from "react";
import axios from "axios";
import Image from "react-graceful-image";
// IMAGES FROM THE WRITER
import NoImages from "../images/nopostsyet.png";
import LikeableImage from "../components/LikeableImage";
// USER-DEFINED COMPONENTS
import WithCall from "../components/withCall";

const UserImg = ({ images }) => {
  return images.map(image => {
    return <img src={image} />;
  });
};
//   render() {
//     if (this.state.images.length !== 0) {
//       return (
//         <div>
//           {this.state.images.map((image, index) => {
//             return (
//               <div
//                 className="user-img-container d-inline-block position-relative"
//                 key={index}
//               >
//                 <Image
//                   className="user-img"
//                   src={image}
//                   width="100%"
//                   height="100%"
//                   alt="My awesome image"
//                   style={{ objectFit: "cover" }}
//                 />
//                 <LikeableImage />
//               </div>
//             );
//           })}
//         </div>
//       );
//     } else {
//       return (
//         <div className="d-inline-block">
//           <div>
//             <img src={NoImages} className="no-img" alt="No posts yet" />
//           </div>
//         </div>
//       );
//     }
//   }
// }

export default UserImg;
