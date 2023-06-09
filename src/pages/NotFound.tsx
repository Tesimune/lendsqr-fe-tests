
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import AppLogo from "../components/AppLogo";

const NotFound: FunctionComponent = props => {

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            <AppLogo className="mb-5" />
            <h1 className="text-9xl font-black">404</h1>
            <h6 className="text-4xl tracking-widest">Page Not Found</h6>
            <div className="p-3">
                <Link to="/" className="px-3 py-2 rounded-lg border mt-5 hover:bg-dark hover:text-white hover:border-0">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound;