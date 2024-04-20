import "./MyAccountDetails.css";
import { MyAccountHeader } from './MyAccountHeader';

export const MyAccountDetails = () => {

  return (
    <div className="MyAccountDetails">

           <MyAccountHeader 
            name="Username" 
            bio="new user in this website"
        currentPage="Property"
      />

      <div className="MyAccountDetailsCard">
    <div className="MyAccountDetailsItem">
        <img
            src={require("../../Res/image/phoneicon.png")}
            alt="phone"
        />
        <p>Phone Number: 0139874690</p>
    </div>
    <div className="MyAccountDetailsItem">
        <img
            src={require("../../Res/image/houseicon.png")}
            alt="addres"
        />
        <p>Address: 825, Lingkungan Budi, 50603 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>
    </div>
    <div className="MyAccountDetailsItem">
        <img
            src={require("../../Res/image/emailicon.png")}
            alt="email"
        />
        <p>Email: universitymalaya@property.com</p>
    </div>
</div>

    </div>
  );
};
