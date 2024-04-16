import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import { PublishProperty } from "./Pages/Property/PublishProperty.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/navHeader" element={<NavHeader />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/launch" element={<LaunchPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/side" element={<SideBar />} />
          <Route path="/make-payment" element={<MakePaymentPage />} />
          <Route path="/chat-popup" element={<ChatPopup />} />
          <Route path="/register-broker" element={<RegisterBroker />} />
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
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
