import '../index.css'

// The Testimonials component displays a set of user testimonials
export default function Testimonials () {
    return (
        <div className="testimonial-container">
            {/* Each testimonial is contained in a "testimonial-card" */}
            <div className="testimonial-card bg-white">
                {/* The testimonial title contains the name of the reviewer and a set of star ratings */}
                <div className="testimonial-title flex justify-between">
                    <h6>Rachel Kolisi</h6>
                    <div className="testimonial-stars">
                        {/* Each star is represented as an image */}
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                        <img className="testimonial-star" src="/assets/star.png" alt="yellow star"/>
                    </div>
                </div>
                {/* The actual testimonial text is contained in a paragraph element */}
                <p className="testimonial-text">“Always grateful for UCOOK for weeks like these. It’s a quick and easy process, and their meals are always free range, wholesome and nutritious.”</p>
            </div>
            {/* Additional testimonials follow the same structure */}
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
