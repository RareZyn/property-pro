import "./MyAccountTransaction.css";
import { MyAccountHeader } from './MyAccountHeader';

export const MyAccountTransaction = () => {
  return (
    <div className="MyAccountTransaction">

      <MyAccountHeader
      
      name="Username" 
      bio="please guide me"

        currentPage="Property"
      />

      <div className="MyAccountTransactionCard">
        <div className="MyAccountTransactionItem">
            <img
                src={require("../../Res/image/house.jpeg")}
                alt="house"
            />
            <div>
        
                <h1>NEW YORK MANSION</h1>
                <div className="PriceContainer">
              <p>RM3XXX.XX</p>
            </div>
            <h2>Transaction in Progress</h2>

            </div>
        </div>
      </div>

      <div className="MyAccountTransactionDone">
        <div className="MyAccountTransactionItem-done">
            <img
                src={require("../../Res/image/car.jpeg")}
                alt="car"
            />
            <div>
        
                <h1>SPORT CAR</h1>
                <div className="PriceContainer-done">
              <p>RM8XXX.XX</p>
            </div>
            <h2>Transaction Done</h2>

            </div>
        </div>
      </div>

      </div>

  );
};
