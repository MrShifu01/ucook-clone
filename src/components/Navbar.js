// Import the main CSS
import '../index.css'

// Define Navbar as a functional component
export default function Navbar () {
    // Render the Navbar component
    return (
        // The main Navbar container
        <div className="nav-container w-full h bg-white">
            {/* Container for Navbar contents */}
            <div className='nav-content flex items-center justify-between'>
                {/* Container for the left-side content (logo and main navigation) */}
                <div className="nav-container-left">
                    {/* Container for the logo */}
                    <div className='nav-logo-container'>
                        {/* Link to the home page */}
                        <a href="/"><img className="logo" src="/assets/logo.svg" alt="ucook logo" /></a>
                    </div>
                    {/* Main navigation list */}
                    <ul className="header-nav-list uppercase">
                        {/* Individual navigation items */}
                        <li className="header-nav-item"><a className="header-nav-link" href="/">Meal Kits</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="/">Frozen</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="/">Wine</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="/">Market</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="/">About UCOOK</a></li>
                    </ul>
                </div>
                {/* Container for the right-side content (auth links and shopping cart) */}
                <div className="nav-container-right flex items-center">
                     {/* Container for the authentication links */}
                    <div className="nav-auth flex items-center gap-3">
                        <div>
                            {/* Link to the login page */}
                            <a className="nav-login" href="/login">Login</a>
                        </div>
                        <div>
                            {/* Button to access the signup form */}
                            <button className="nav-signup px-3 py-2 rounded">Sign up</button>
                        </div>
                    </div>
                    {/* Separator between the authentication links and the shopping cart */}
                    <div className="nav-right-seperator ml-3 w-1 bg-black"></div>
                    {/* Container for the shopping cart */}
                    <div className="nav-cart flex items-center">
                        {/* Link to the cart */}
                        <a href="/cart"><img className="w-4 ml-3 mr-1.5" src="/assets/cart-icon.png" alt="cart icon"></img></a>
                        {/* Indicator for the number of items in the cart */}
                        <div className="cart-items py-0.5 px-1 mr-7 rounded">
                            <a className="cart-items-link" href="/cart">0</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
