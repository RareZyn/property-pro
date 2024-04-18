import "./SearchBar.css"
import icon from "../Res/image/search-icon.png"

function SearchBar({hint}){
    return(
        <>
            <div id="search-bar">
                <img src={icon} alt="icon" srcset="" id="icon"/>
                <input type="text" id="search-input" className="txt24" placeholder={hint}/>
            </div>
        </>
    )
}

export default SearchBar;