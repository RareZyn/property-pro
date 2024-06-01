import React from 'react';
import SuccesToastify from "../../Cards/ToastifyCards/SuccesToatify";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function toastifytest){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <SuccesToastify></SuccesToastify>
    </div>
  );
}