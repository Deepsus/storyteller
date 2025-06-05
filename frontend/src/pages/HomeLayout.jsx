import { Outlet, useNavigate } from "react-router-dom";

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function HomeLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
