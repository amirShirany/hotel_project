// import { Link } from "react-router-dom";
// import Loader from "../Loader/Loader";
// import { useHotels } from "../context/HotelsProvider";

// function Hotels() {
//   const { isLoading, hotels, currentHotel } = useHotels();
//   if (isLoading) return <Loader />;

//   return (
//     <div className="searchList">
//       <h2>Search Results ({hotels.length})</h2>
//       {hotels.map((item) => {
//         return (
//           <Link
//             key={item.id}
//             to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
//           >
//             <div
//               className={`searchItem ${
//                 item.id === currentHotel?.id ? "current-hotel" : ""
//               }`}
//             >
//               <img src={item.picture_url.url} alt={item.name} />
//               <div className="searchItemDesc">
//                 <p className="location">{item.smart_location}</p>
//                 <p className="name">{item.name}</p>
//                 €&nbsp;{item.price}&nbsp;
//                 <span>night</span>
//               </div>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }
// export default Hotels;

import { useSearchParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Loader from "../Loader/Loader"

function Hotels() {
  const { searchParams, setSearchParams } = useSearchParams()
  const destination = searchParams.get("destination")
  const room = JSON.parse(searchParams.get("options"))?.room

  const { isLoading, data } = useFetch(
    "http/localhost:5000/hotels",
    `q = ${destination || ""} &accommodates_gte = ${room || ""}`
  )

  if (isLoading) <Loader />

  return <div>{data.length}</div>
}

export default Hotels
