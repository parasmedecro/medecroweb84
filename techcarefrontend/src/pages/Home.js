// this is the home page of the website

import React from "react";
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Front from "./Front";
import Footer from "./Fotter";

export default function Home() {

    return (
        <div>
            <ToastContainer />
            <Header></Header>
            <Front></Front>

        </div>
    )


}