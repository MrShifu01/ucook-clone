import '../index.css'

export default function About () {
    return (
        <div className="about-container flex flex-col text-center">
            <h1 className="about-title my-8">How does it work?</h1>
            <div className="about-content-container grid grid-cols-3">
                <div className="about-step-one">
                    <img className="about-image" src="/assets/you-choose.svg" alt="bowl of food"/>
                    <h2 className="about-subtitle mt-7 mb-3">1. You choose</h2>
                    <p className="about-paragraph">Sign up, pick from 24 new recipes every week with orders closing at 9am on Wednesday, and pause your account at any time</p>
                </div>
                <div className="about-step-two">
                    <img className="about-image" src="/assets/we-deliver.svg" alt="Delivery Truck"/>
                    <h2 className="about-subtitle mt-7 mb-3">2. We deliver</h2>
                    <p className="about-paragraph">Get free delivery, on your choice of Sunday or Monday, of perfectly portioned fresh produce, shipped in an insulated cold box</p>
                </div>
                <div className="about-step-three">
                    <img className="about-image" src="/assets/you-cook.svg" alt="Frying Pan"/>
                    <h2 className="about-subtitle mt-7 mb-3">3. You cook</h2>
                    <p className="about-paragraph">Get simple-to-follow recipes and create restaurant-quality dishes in your own home with no more meal planning or food waste</p>
                </div>
            </div>
            <div className="about-footer mt-7 mb-14">
                Got more Questions? - check out our <span className="text-blue-500"><a href="/faq">FAQ's</a></span>
            </div>
        </div>
    )
}