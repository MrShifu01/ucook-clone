// Import the css
import '../index.css'

export default function Footer () {
    return (
        // Continaers for the footer section
        <div className='footer-container flex flex-col'>
            <div className='footer-contact py-4 flex gap-3 items-center justify-center my-4'>
                <h3 className='footer-contact-title uppercase m-2'>Keep in touch with our kitchen</h3>
                <input type="text" className='footer-contact-input border'/>
                <button className='footer-contact-button px-4 py-2 uppercase'>Sign me up</button>
            </div>
            <div className='footer-nav flex gap-20'>
                <div className='footer-nav-product'>
                    <h3 className='footer-title uppercase'>Product</h3>
                    <ul className='footer-nav-list'>
                        <li>Meal Kits</li>
                        <li>Frozen</li>
                        <li>Wine</li>
                        <li>Market</li>
                    </ul>
                </div>
                <div className='footer-nav-company'>
                    <h3 className='footer-title uppercase'>Company</h3>
                    <ul className='footer-nav-list'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Recycling</li>
                    </ul>
                </div>
                <div className='footer-nav-support'>
                    <h3 className='footer-title uppercase'>Support</h3>
                    <ul className='footer-nav-list'>
                        <li>FAQ'S</li>
                        <li>Contact</li>
                        <li className="flex items-center gap-1">
                            <img className="w-2 h-2" src="/assets/telephone.png" alt="telephone"/>
                            011 123 1234
                        </li>
                        <li className="flex items-center gap-1">
                            <img className="w-2 h-2" src="/assets/whatsapp.png" alt="whatsapp"/>
                            011 123 1234
                        </li>
                    </ul>
                </div>
                {/* Scial media and App store Buttons */}
                <div className='footer-nav-social'>
                    <div className='app-stores flex'>
                        <img className='app-store-img' src='/assets/app-store.png' alt="apple app store"/>
                        <img className='app-store-img' src='/assets/google.png' alt="google playstore"/>
                    </div>
                    <div className='social-media flex gap-2 pl-2 pt-2'>
                        <img className="w-3 h-3" src="/assets/facebook.png" alt="facebook"/>
                        <img className="w-3 h-3" src="/assets/instagram.png" alt="instagram"/>
                        <img className="w-3 h-3" src="/assets/twitter.png" alt="twitter"/>
                        <img className="w-3 h-3" src="/assets/youtube.png" alt="youtube"/>

                    </div>
                </div>
            </div>
            {/* Copyright section and Privacy, t&c type links */}
            <div className='footer-footer flex justify-between'>
                <div className='footer-footer-title my-5'>© UCOOK. All rights reserved by The Supper Society Proprietary Limited | Liquor License: WCP/042073 | GAU/10615</div>
                <div className='footer-t-c flex my-5 gap-3'>
                    <div className='footer-t pr-4'>Terms & Conditions</div>
                    <div className='footer-p pr-4'>Privacy Policy</div>
                    <div className='footer-r'>Referral Terms</div>
                </div>
            </div>
        </div>
    )
}