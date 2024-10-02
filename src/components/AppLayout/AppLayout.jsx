// import { Outlet } from "react-router-dom";
// import Map from "../Map/Map";
// import { useHotels } from "../context/HotelsProvider";

// function AppLayout() {
//   const { hotels } = useHotels();

//   return (
//     <div className="appLayout">
//       <div className="sidebar">
//         <Outlet />
//       </div>
//       <Map markerLocations={hotels} />
//     </div>
//   );
// }
// export default AppLayout;

import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <div className="mapContainer">map</div>
    </div>
  )
}

export default AppLayout
