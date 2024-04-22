import "./MyAccountProperty.css";
import { MyAccountHeader } from './MyAccountHeader';
import { Link } from "react-router-dom";


export const MyAccountProperty = () => {
  return (
    <div className="MyAccountProperty">
      
      <MyAccountHeader 
      name="Username" 
      bio="please guide me"
      currentPage="Property"
      />
      
      <div className="MyAccountPropertyCard">
        <div className="MyAccountPropertyItem">
            <img
                src={require("../../Res/image/house.jpeg")}
                alt="house"
            />
            <div>
                <h3>NEW YORK MANSION</h3>
                <p>house descrition available for sale including ....</p>
                <h2>RM3XXX.XX</h2>

                <Link to="/property-details">
                <button>
              <h3>SEE MORE</h3>
            </button>
            </Link>  


            </div>
        </div>
      </div>

      <div className="MyAccountPropertyCard">
        <div className="MyAccountPropertyItem">
            <img
                src={require("../../Res/image/car.jpeg")}
                alt="house"
            />
            <div>
                <h3>SPORT CAR</h3>
                <p> Used sport car for sale show in today highlight....</p>
                <h2>RM8XXX.XX</h2>

              <Link to="/property-details">
                <button>
              <h3>SEE MORE</h3>
            </button>
            </Link>  

            </div>
        </div>
      </div>

      <div className="MyAccountPropertyAdd">
      <Link to= "/publish-property">
      <button >
        
      <img
            src={require("../../Res/image/add icon.png")}
            alt="addicon"
            className="ButtonImage"
            
          />
          <span><h4>Add More Property</h4></span>
      </button>
      </Link>

      </div>

    </div>
  );
};
