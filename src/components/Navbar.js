import '../index.css'

export default function Navbar () {
    return (
        <div className="nav-container w-full h bg-white border-black">
            <div className='nav-content flex items-center justify-between'>
                <div className="nav-container-left flex">
                    <div className='nav-logo-container  m-2 p-3'>
                        <a href="/"><img className="logo" src="/assets/logo.svg" alt="ucook logo" /></a>
                    </div>
                    <ul className="nav-list ml-4 mr-3 flex gap-5 uppercase items-center">
                        <a href="/meal-kit"><li>Meal Kits</li></a>
                        <a href="/frozen"><li>Frozen</li></a>
                        <a href="/wine"><li>Wine</li></a>
                        <a href="/market"><li>Market</li></a>
                        <a href="/about"><li>About Ucook</li></a>

                    </ul>
                </div>
                <div className="nav-container-right flex items-center">
                    <div className="nav-auth flex items-center gap-3">
                        <div className="nav-login">
                            <a href="/login">Login</a>
                        </div>
                        <div>
                            <button className="nav-signup px-3 py-2 rounded">Sign up</button>
                        </div>
                    </div>
                    <div className="nav-right-seperator ml-3 w-1 bg-black"></div>
                    <div className="nav-cart flex items-center">
                        <a href="/cart"><img className="w-4 ml-3 mr-1.5" src="/assets/cart-icon.png" alt="cart icon"></img></a>
                        <div className="cart-items py-0.5 px-1 mr-7 rounded">
                            <a href="/cart">0</a>
                        </div>
                    </div>
                </div>

            </div>
      </div>
    )
}