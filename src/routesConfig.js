import { LaunchPage } from "./Pages/general/LaunchPage";
import { HomePage } from "./Pages/general/HomePage.js";
import { RegisterPage } from "./Pages/general/RegisterPage.js";
import { LoginPage } from "./Pages/general/LoginPage.js";
import { MakePaymentPage } from "./Pages/Transaction/MakePaymentPage.js";
import { ChatPopup } from "./Pages/Social/ChatPopup.js";
import { RegisterBroker } from "./Pages/Broker/RegisterBroker.js";
import { VerifyPropertyVehicle } from "./Pages/Broker/VerifyPropertyVehicle.js";
import { VerifyPropertyLand } from "./Pages/Broker/VerifyPropertyLand.js";
import { VerifyPropertyHouse } from "./Pages/Broker/VerifyPropertyHouse.js";
import { UpdateProgress } from "./Pages/Broker/UpdateProgress.js";
import { Chat } from "./Pages/Social/Chat.js";
import { AccountHeader } from "./Pages/general/AccountHeader.js";
import { MyAccountTransaction } from "./Pages/general/AccountTransaction.js";
import { MyAccountPost } from "./Pages/general/AccountPost.js";
import { MyAccountDetails } from "./Pages/general/AccountDetails.js";
import { AccountProperty } from "./Pages/general/AccountProperty.js";
import { ManageAccount } from "./Pages/general/AccountManager.js";
import { PropertyHouseDetails } from "./Pages/Property/PropertyHouseDetails.js";
import { PropertyLandDetails } from "./Pages/Property/PropertyLandDetails.js";
import { PropertyVehicleDetails } from "./Pages/Property/PropertyVehicleDetails.js";
import { PropertyDetailsOwnerView } from "./Pages/Property/PropertyDetails-OwnerView.js";
import { PublishProperty } from "./Pages/Property/PublishProperty.js";
import { BrowserProperty } from "./Pages/Property/BrowserProperty.js";
import { SavedProperty } from "./Pages/Property/SavedProperty.js";
import { ManageProperty } from "./Pages/Property/ManageProperty.js";
import { ForumPage } from "./Pages/Social/ForumPage.js";
import { ForumHeader } from "./Pages/Social/ForumHeader.js";
import { CreatePost } from "./Pages/Social/CreatePost.js";
import { LoginBroker } from "./Pages/Broker/LoginBroker.js";
import { VerifyPropertyHome } from "./Pages/Broker/VerifyPropertyHome.js";
import { ChooseBank } from "./Pages/Transaction/ChooseBank.js";
import { MakePaymentDebitOnline } from "./Pages/Transaction/MakePaymentDebitOnline.js";
import { MakePaymentSuccess } from "./Pages/Transaction/MakePaymentSuccess.js";
import { PropertyDetailsOverview } from "./Pages/Property/PropertyDetailsOverview.js";
import { PropertyHouseDetailsOverview } from "./Pages/Property/PropertyHouseDetails-Overview.js";
import { PropertyLandDetailsOverview } from "./Pages/Property/PropertyLandDetails-Overview.js";
import { PropertyVehicleDetailsOverview } from "./Pages/Property/PropertyVehicleDetails-Overview.js";
import { ImageSlideshow } from "./Pages/Property/ImageSlideshow.js";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, isAuthenticated}) => (
  isAuthenticated ? (Component) : (<Navigate to="/login" />)
);

export const routes = [
  { path: '/', element: <LaunchPage /> },
  { path: '/HomePage', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/make-payment', element: <MakePaymentPage /> },
  { path: '/chat-popup', element: <ChatPopup /> },
  { path: '/register-broker', element: <RegisterBroker /> },
  { path: '/verify-property-vehicle', element: <VerifyPropertyVehicle /> },
  { path: '/verify-property-land', element: <VerifyPropertyLand /> },
  { path: '/verify-property-house', element: <VerifyPropertyHouse /> },
  { path: '/update-progress', element: <UpdateProgress /> },
  { path: '/chat', element: <Chat /> },
  { path: '/view-account/:id', element: <AccountHeader />, 
  children: [
    { path: 'property', element: <AccountProperty /> },
    { path: 'post', element: <MyAccountPost /> },
    { path: 'transaction', element: <MyAccountTransaction /> },
    { path: 'about', element: <MyAccountDetails /> },
    { path: 'manage', element: <ManageAccount /> },
    { path: '', element: <AccountProperty /> }
  ] },
  // { path: '/manage-account', element: <ManageAccount /> },
  // { path: '/property-details', element: <PropertyDetails /> },
  { path: '/property-vehicle-details', element: <PropertyVehicleDetails /> },
  { path: '/property-land-details', element: <PropertyLandDetails /> },
  { path: '/property-house-details/:id', element: <PropertyHouseDetails /> },
  { path: '/property-details-ownerview', element: <PropertyDetailsOwnerView /> },
  { path: '/publish-property', element: <PublishProperty /> },
  { path: '/browser-property', element: <BrowserProperty /> },
  { path: '/saved-property', element: <SavedProperty /> },
  { path: '/manage-property', element: <ManageProperty /> },
  { path: '/forum-page', element: <ForumPage /> },
  { path: '/forum-header', element: <ForumHeader /> },
  { path: '/create-post', element: <CreatePost /> },
  { path: '/login-broker', element: <LoginBroker /> },
  { path: '/verify-property-homepage', element: <VerifyPropertyHome /> },
  { path: '/choose-bank', element: <ChooseBank /> },
  { path: '/make-payment-debit-online', element: <MakePaymentDebitOnline /> },
  { path: '/make-payment-success', element: <MakePaymentSuccess /> },
  { path: '/property-details-overview', element: <PropertyDetailsOverview /> },
  { path: '/property-housedetails-overview', element: <PropertyHouseDetailsOverview /> },
  { path: '/property-landdetails-overview', element: <PropertyLandDetailsOverview /> },
  { path: '/property-vehicledetails-overview', element: <PropertyVehicleDetailsOverview /> },
  { path: '/image-slideshow', element: <ImageSlideshow /> },
  { path: '*', element: <h1>PAGE NOT FOUND</h1> },
]

