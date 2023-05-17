import '../index.css'


export default function Navbar () {
    return (
        <div className="nav-container w-full h bg-white">
            <div className='nav-content flex items-center justify-between'>
                <div className="nav-container-left">
                    <div className='nav-logo-container'>
                        <a href="/"><img className="logo" src="/assets/logo.svg" alt="ucook logo" /></a>
                    </div>
                    <ul className="header-nav-list uppercase">
                        <li className="header-nav-item"><a className="header-nav-link" href="/">Meal Kits</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="/">Frozen</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="/">Wine</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="/">Market</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="/">About UCOOK</a></li>
                    </ul>

                </div>
                <div className="nav-container-right flex items-center">
                    <div className="nav-auth flex items-center gap-3">
                        <div>
                            <a className="nav-login" href="/login">Login</a>
                        </div>
                        <div>
                            <button className="nav-signup px-3 py-2 rounded">Sign up</button>
                        </div>
                    </div>
                    <div className="nav-right-seperator ml-3 w-1 bg-black"></div>
                    <div className="nav-cart flex items-center">
                        <a href="/cart"><img className="w-4 ml-3 mr-1.5" src="/assets/cart-icon.png" alt="cart icon"></img></a>
                        <div className="cart-items py-0.5 px-1 mr-7 rounded">
                            <a className="cart-items-link" href="/cart">0</a>
                        </div>
                    </div>
                </div>

            </div>
      </div>
    )
}