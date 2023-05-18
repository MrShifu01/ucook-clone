// Import required dependencies
import '../index.css'

// The About component provides information about how the service works.
export default function About() {
    // Each step in the process is defined as a sub-component for better readability and potential reusability
    const Step = ({ image, alt, title, text }) => (
        <div className="about-step">
            <img className="about-image" src={image} alt={alt} />
            <h2 className="about-subtitle mt-7 mb-3">{title}</h2>
            <p className="about-paragraph">{text}</p>
        </div>
    );

    return (
        <div className="about-container flex flex-col text-center">
            <h1 className="about-title my-8">How does it work?</h1>
            <div className="about-content-container grid grid-cols-3">
                {/* Step 1: You choose */}
                <Step 
                    image="/assets/you-choose.svg" 
                    alt="bowl of food" 
                    title="1. You choose" 
                    text="Sign up, pick from 24 new recipes every week with orders closing at 9am on Wednesday, and pause your account at any time" 
                />
                {/* Step 2: We deliver */}
                <Step 
                    image="/assets/we-deliver.svg" 
                    alt="Delivery Truck" 
                    title="2. We deliver" 
                    text="Get free delivery, on your choice of Sunday or Monday, of perfectly portioned fresh produce, shipped in an insulated cold box" 
                />
                {/* Step 3: You cook */}
                <Step 
                    image="/assets/you-cook.svg" 
                    alt="Frying Pan" 
                    title="3. You cook" 
                    text="Get simple-to-follow recipes and create restaurant-quality dishes in your own home with no more meal planning or food waste" 
                />
            </div>
            <div className="about-footer mt-7 mb-14">
                Got more Questions? - check out our <span className="text-blue-500"><a href="/faq">FAQ's</a></span>
            </div>
        </div>
    )
}
