import { useState } from "react"
import { MdLocationOn } from "react-icons/md"
import { HiCalendar, HiSearch } from "react-icons/hi"

function Header() {
  const [destination, setDestination] = useState("")

  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="where to go?"
            name="destination"
            className="headerSearchInput"
          />
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown">2023/06/34</div>
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <div id="optionDropDown">
            {" "}
            &bull;1 adult&bull;2 children &bull;3 room
          </div>
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
