// Import the css
import '../index.css'

// Coupon section that has an image as a background and a opaque white container
export default function Coupon () {
    return (
        <div className="coupon-container">
            <div className="coupon-image-container flex items-center justify-center">
                <div className="coupon-image-overlay">
                    <div className="coupon-content flex flex-col items-center">
                        <h4 className="coupon-title mt-10 mb-6 text-gray-500">Get you first box</h4>
                        <h3 className="coupon-subtitle mb-4">Get 30% off your first order.</h3>
                        <p className="coupon-paragraph mb-2">use the code '#welcome30'</p>
                        <button className="coupon-button rounded-md uppercase px-6 mt-2">yes please</button>
                    </div>
                </div>
            </div>
        </div>
    )
}