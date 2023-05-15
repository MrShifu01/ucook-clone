import '../index.css'

export default function Hero () {
    return (
        <div className="hero-container flex">
            <div className="hero-content-container flex items-center justify-center">
                <div className="hero-content">
                    <h1 className="hero-content-title">Dinner, made easy</h1>
                    <h3 className="hero-content-subtitle pb-2">Fresh ingredients from the farm</h3>
                    <p className="hero-content-paragraph">We deliver easy to follow and delicious recipes, and perfectly pre-portioned fresh ingredients to your door every week.</p>
                    <button className="hero-content-button rounded uppercase px-3 py-2 mt-5">Select Meals</button>
                </div>
            </div>
            <div className="hero-image-container flex items-center justify-start mb-4">
                <img className="hero-image" src="/assets/hero-image.webp" alt="Frut and Veg Display"></img>
            </div>
        </div>
    )
}