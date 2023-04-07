
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import AppLogo from "../components/AppLogo";

const App: FunctionComponent = props => {

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            <AppLogo className="mb-5" />
            <h1 className="text-xl md:text-9xl font-black">Welcome!</h1>
            <h6 className="text-lg md:text-4xl tracking-widest">Lendsqr</h6>
            <div className="pt-9">
                <Link to="/login" className="px-3 py-2 rounded-lg border mt-5 hover:bg-dark hover:text-white hover:border-0">
                    GET STARTED
                </Link>
            </div>
        </div>
    )
}

export default App;