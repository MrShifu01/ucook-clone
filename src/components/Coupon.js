import '../index.css'
export default function Coupon () {
    return (
        <div className="coupon-container">
            <div className="coupon-image-container flex items-center justify-center">
                <div className="coupon-image-overlay opacity-80">
                    <div className="coupon-content flex flex-col items-center">
                        <h4 className="coupon-title mt-14 mb-8 text-gray-500">Get you first box</h4>
                        <h3 className="coupon-subtitle mb-8">Get 30% off your first order.</h3>
                        <p className="coupon-paragraph mb-4">use the code '#welcome30'</p>
                        <button className="coupon-button rounded-md uppercase px-6 py-3 mt-6">yes please</button>
                    </div>
                </div>
            </div>
        </div>
    )
}