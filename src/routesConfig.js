import { lazy } from "react";
import { LaunchPage } from "./Pages/general/LaunchPage";
import { HomePage } from "./Pages/general/HomePage.js";
import { RegisterPage } from "./Pages/general/RegisterPage.js";
import { LoginPage } from "./Pages/general/LoginPage.js";
import { MakePaymentPage } from "./Pages/Transaction/MakePaymentPage.js";
import { ChatPopup } from "./Pages/Social/ChatPopup.js";
import { RegisterBroker } from "./Pages/Broker/RegisterBroker.js";
import { VerifyProperty } from "./Pages/Broker/VerifyProperty.js";
import { UpdateProgress } from "./Pages/Broker/UpdateProgress.js";
import { Chat } from "./Pages/Social/Chat.js";
import { MyAccountHeader } from "./Pages/general/MyAccountHeader.js";
import { MyAccountTransaction } from "./Pages/general/MyAccountTransaction.js";
import { MyAccountPost } from "./Pages/general/MyAccountPost.js";
import { MyAccountDetails } from "./Pages/general/MyAccountDetails.js";
import { MyAccountProperty } from "./Pages/general/MyAccountProperty.js";
import { ManageAccount } from "./Pages/general/ManageAccount.js";
import { PropertyDetails } from "./Pages/Property/PropertyDetails.js";
import { PropertyDetailsOwnerView } from "./Pages/Property/PropertyDetails-OwnerView.js";
import { PublishProperty } from "./Pages/Property/PublishProperty.js";
import { BrowserProperty } from "./Pages/Property/BrowserProperty.js";
import { SavedProperty } from "./Pages/Property/SavedProperty.js";
import { ManageProperty } from "./Pages/Property/ManageProperty.js";
import { ViewAccountHeader } from "./Pages/general/ViewAccountHeader.js";
import { ViewAccountProperty } from "./Pages/general/ViewAccountProperty.js";
import { ViewAccountPost } from "./Pages/general/ViewAccountPost.js";
import { ViewAccountAbout } from "./Pages/general/ViewAccountAbout.js";
import { ForumPage } from "./Pages/Social/ForumPage.js";
import { ForumHeader } from "./Pages/Social/ForumHeader.js";
import { ForumCreatePost } from "./Pages/Social/ForumCreatePost.js";
import { LoginBroker } from "./Pages/Broker/LoginBroker.js";
import { VerifyPropertyHome } from "./Pages/Broker/VerifyPropertyHome.js";
import { ChooseBank } from "./Pages/Transaction/ChooseBank.js";
import { MakePaymentDebitOnline } from "./Pages/Transaction/MakePaymentDebitOnline.js";
import { MakePaymentSuccess } from "./Pages/Transaction/MakePaymentSuccess.js";
import { PropertyDetailsOverview } from "./Pages/Property/PropertyDetailsOverview.js";
import { ImageSlideshow } from "./Pages/Property/ImageSlideshow.js";

// const LaunchPage = lazy(() => import('./Pages/general/LaunchPage'));
// const HomePage = lazy(() => import('./Pages/general/HomePage'));
// const RegisterPage = lazy(() => import('./Pages/general/RegisterPage'));
// const LoginPage = lazy(() => import('./Pages/general/LoginPage'));
// const MakePaymentPage = lazy(() => import('./Pages/Transaction/MakePaymentPage'));
// const ChatPopup = lazy(() => import('./Pages/Social/ChatPopup'));
// const RegisterBroker = lazy(() => import('./Pages/Broker/RegisterBroker'));
// const VerifyProperty = lazy(() => import('./Pages/Broker/VerifyProperty'));
// const UpdateProgress = lazy(() => import('./Pages/Broker/UpdateProgress'));
// const Chat = lazy(() => import('./Pages/Social/Chat'));
// const MyAccountHeader = lazy(() => import('./Pages/general/MyAccountHeader'));
// const MyAccountTransaction = lazy(() => import('./Pages/general/MyAccountTransaction'));
// const MyAccountPost = lazy(() => import('./Pages/general/MyAccountPost'));
// const MyAccountDetails = lazy(() => import('./Pages/general/MyAccountDetails'));
// const MyAccountProperty = lazy(() => import('./Pages/general/MyAccountProperty'));
// const ManageAccount = lazy(() => import('./Pages/general/ManageAccount'));
// const PropertyDetails = lazy(() => import('./Pages/Property/PropertyDetails'));
// const PropertyDetailsOwnerView = lazy(() => import('./Pages/Property/PropertyDetails-OwnerView'));
// const PublishProperty = lazy(() => import('./Pages/Property/PublishProperty'));
// const BrowserProperty = lazy(() => import('./Pages/Property/BrowserProperty'));
// const SavedProperty = lazy(() => import('./Pages/Property/SavedProperty'));
// const ManageProperty = lazy(() => import('./Pages/Property/ManageProperty'));
// const ViewAccountHeader = lazy(() => import('./Pages/general/ViewAccountHeader'));
// const ViewAccountProperty = lazy(() => import('./Pages/general/ViewAccountProperty'));
// const ViewAccountPost = lazy(() => import('./Pages/general/ViewAccountPost'));
// const ViewAccountAbout = lazy(() => import('./Pages/general/ViewAccountAbout'));
// const ForumPage = lazy(() => import('./Pages/Social/ForumPage'));
// const ForumHeader = lazy(() => import('./Pages/Social/ForumHeader'));
// const ForumCreatePost = lazy(() => import('./Pages/Social/ForumCreatePost'));
// const LoginBroker = lazy(() => import('./Pages/Broker/LoginBroker'));
// const VerifyPropertyHome = lazy(() => import('./Pages/Broker/VerifyPropertyHome'));
// const ChooseBank = lazy(() => import('./Pages/Transaction/ChooseBank'));
// const MakePaymentDebitOnline = lazy(() => import('./Pages/Transaction/MakePaymentDebitOnline'));
// const MakePaymentSuccess = lazy(() => import('./Pages/Transaction/MakePaymentSuccess'));
// const PropertyDetailsOverview = lazy(() => import('./Pages/Property/PropertyDetailsOverview'));
// const ImageSlideshow = lazy(() => import('./Pages/Property/ImageSlideshow'));

const routes = [
  { path: '/', element: <LaunchPage /> },
  { path: '/HomePage', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/make-payment', element: <MakePaymentPage /> },
  { path: '/chat-popup', element: <ChatPopup /> },
  { path: '/register-broker', element: <RegisterBroker /> },
  { path: '/verify-property', element: <VerifyProperty /> },
  { path: '/update-progress', element: <UpdateProgress /> },
  { path: '/chat', element: <Chat /> },
  { path: '/myaccount', element: <MyAccountHeader /> },
  { path: '/myaccount-transaction', element: <MyAccountTransaction /> },
  { path: '/myaccount-post', element: <MyAccountPost /> },
  { path: '/myaccount-details', element: <MyAccountDetails /> },
  { path: '/myaccount-property', element: <MyAccountProperty /> },
  { path: '/manage-account', element: <ManageAccount /> },
  { path: '/property-details', element: <PropertyDetails /> },
  { path: '/property-details-ownerview', element: <PropertyDetailsOwnerView /> },
  { path: '/publish-property', element: <PublishProperty /> },
  { path: '/browser-property', element: <BrowserProperty /> },
  { path: '/saved-property', element: <SavedProperty /> },
  { path: '/manage-property', element: <ManageProperty /> },
  { path: '/view-account-header', element: <ViewAccountHeader /> },
  { path: '/view-account-property', element: <ViewAccountProperty /> },
  { path: '/view-account-post', element: <ViewAccountPost /> },
  { path: '/view-account-about', element: <ViewAccountAbout /> },
  { path: '/forum-page', element: <ForumPage /> },
  { path: '/forum-header', element: <ForumHeader /> },
  { path: '/forum-create-post', element: <ForumCreatePost /> },
  { path: '/login-broker', element: <LoginBroker /> },
  { path: '/verify-property-homepage', element: <VerifyPropertyHome /> },
  { path: '/choose-bank', element: <ChooseBank /> },
  { path: '/make-payment-debit-online', element: <MakePaymentDebitOnline /> },
  { path: '/make-payment-success', element: <MakePaymentSuccess /> },
  { path: '/property-details-overview', element: <PropertyDetailsOverview /> },
  { path: '/image-slideshow', element: <ImageSlideshow /> },
  { path: '*', element: <h1>PAGE NOT FOUND</h1> },
];

export default routes