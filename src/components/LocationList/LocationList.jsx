import useFetch from "../../Hooks/useFetch"

function LocationList() {
  const { isLoading, data } = useFetch("http://localhost:5000/hotels", "")

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <div className="nearbyLocation">
        <h2>Nearby Locations</h2>
        <div className="locationList">
          {data.map((item) => {
            return (
              <div key={item.id} className="locationItem">
                <img src={item.thumbnail_url} alt={item.name} />
                <div className="locationItemDesc">
                  <p className="location">{item.smart_Location}</p>
                  <p className="name">{item.name}</p>
                  <p className="price">
                    €&nbsp;{item.price}&nbsp;
                    <span>night</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LocationList
