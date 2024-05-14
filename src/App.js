import "./App.css";
import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { LaunchPage } from "./Pages/general/LaunchPage.js";
import { HomePage } from "./Pages/general/HomePage.js";
import { Navbar } from "./Pages/Navigation/Navbar.js";
import { RegisterPage } from "./Pages/general/RegisterPage.js";
import { SideBar } from "./Pages/Navigation/SideBar.js";
import { NavHeader } from "./Pages/Navigation/NavHeader.js";
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
import { Footer } from "./Pages/general/Footer.jsx";


export const AppContext = createContext();

function NavHeaderWrapper() {
  const { pathname } = useLocation();
  const shouldShowNavHeader = !["/", "/register", "/login"].includes(pathname);
  return shouldShowNavHeader ? <NavHeader /> : null;
}

function App() {
  const userDetails = {
    username: "Wan Razim",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    age: "21",
    location: "Bangsar, KL",
    email: "email@gmail.com",
    phoneNum: "012-3456789",
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ userDetails }}>
        <Router>
          <NavHeaderWrapper />
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/" element={<LaunchPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/choose-bank" element={<ChooseBank />} />
            <Route
              path="/make-payment-debit-online"
              element={<MakePaymentDebitOnline />}
            />
            <Route
              path="/make-payment-success"
              element={<MakePaymentSuccess />}
            />
            <Route path="/side" element={<SideBar />} />
            <Route path="/make-payment" element={<MakePaymentPage />} />
            <Route path="/chat-popup" element={<ChatPopup />} />
            <Route path="/register-broker" element={<RegisterBroker />} />
            <Route path="/login-broker" element={<LoginBroker />} />
            <Route
              path="/verify-property-homepage"
              element={<VerifyPropertyHome />}
            />
            <Route path="/verify-property" element={<VerifyProperty />} />
            <Route path="/update-progress" element={<UpdateProgress />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/myaccount" element={<MyAccountHeader />} />
            <Route
              path="/myaccount-transaction"
              element={<MyAccountTransaction />}
            />
            <Route path="/myaccount-post" element={<MyAccountPost />} />
            <Route path="/myaccount-details" element={<MyAccountDetails />} />
            <Route path="/myaccount-property" element={<MyAccountProperty />} />
            <Route path="/manage-account" element={<ManageAccount />} />
            <Route path="/property-details" element={<PropertyDetails />} />
            <Route path="/publish-property" element={<PublishProperty />} />

            <Route path="/browser-property" element={<BrowserProperty />} />
            <Route path="/saved-property" element={<SavedProperty />} />
            <Route path="/manage-property" element={<ManageProperty />} />
            <Route
              path="/property-details-ownerview"
              element={<PropertyDetailsOwnerView />}
            />
            <Route
              path="/property-details-overview"
              element={<PropertyDetailsOverview />}
            />
            <Route
              path="/view-account-header"
              element={<ViewAccountHeader />}
            />
            <Route
              path="/view-account-property"
              element={<ViewAccountProperty />}
            />
            <Route path="/view-account-post" element={<ViewAccountPost />} />
            <Route path="/view-account-about" element={<ViewAccountAbout />} />
            <Route path="/forum-page" element={<ForumPage />} />
            <Route path="/forum-header" element={<ForumHeader />} />
            <Route path="/forum-create-post" element={<ForumCreatePost />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
