import '../index.css'

export default function Testimonials () {
    return (
        <div className="testimonial-container">
            <div className="testimonial-card bg-white">
                <div className="testimonial-title flex justify-between">
                    <h6>Rachel Kolisi</h6>
                    <div className="testimonial-stars">
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                    </div>
                </div>
                <p className="testimonial-text">“Always grateful for UCOOK for weeks like these. It’s a quick and easy process, and their meals are always free range, wholesome and nutritious.”</p>
            </div>
            <div className="testimonial-card bg-white">
                <div className="testimonial-title flex justify-between">
                    <h6>Sarah Graham</h6>
                    <div className="testimonial-stars">
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                    </div>
                </div>
                <p className="testimonial-text">“We get UCOOK pretty much every other week because it’s delicious, sustainable and such a fun way to cook out-the-box weeknight meals.”</p>
            </div>
            <div className="testimonial-card bg-white">
                <div className="testimonial-title flex justify-between">
                    <h6>Amy Hopkins</h6>
                    <div className="testimonial-stars">
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                    </div>
                </div>
                <p className="testimonial-text">“Using a company like UCOOK has helped me save time in periods of high stress and they really do source such amazing ingredients.”</p>
            </div>

        </div>
    )
}