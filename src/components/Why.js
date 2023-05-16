import '../index.css'

export default function Why () {
    return (
        <div className="why-container flex flex-col justify-center items-center">
            <h1 className="why-title my-10">Why UCOOK?</h1>
            <div className="why-content-container grid grid-cols-3 px-10 text-center">
                <div className="why-one">
                    <img className="why-image" src="/assets/chef-hat.svg" alt="Chef Hat"/>
                    <h2 className="why-subtitle mt-7 mb-3 text-center">Cook like a chef</h2>
                    <p className="why-paragraph">Whip up restaurant-quality meals at home using fresh ingredients and simple-to-follow recipes. With 24 new dishes every week, you’ll hone your kitchen skills and build your culinary repertoire.</p>
                </div>
                <div className="why-two">
                    <img className="why-image" src="/assets/save-money.svg" alt="Dollar Sign"/>
                    <h2 className="why-subtitle mt-7 mb-3 text-center">Saves you money</h2>
                    <p className="why-paragraph">With tasty meals from as low as R60 per person, we take care of all the portioning and measuring so you only get exactly what you need. No wastage, no queueing, and your delivery is free!</p>
                </div>
                <div className="why-three">
                    <img className="why-image" src="/assets/fresh-veg.svg" alt="Carrot and Onion"/>
                    <h2 className="why-subtitle mt-7 mb-3 text-center">Fresh Produce</h2>
                    <p className="why-paragraph">We source only the best and freshest ingredients that we can find from local farms and businesses. We choose reliable suppliers and aim for organic and free range wherever it’s possible.</p>
                </div>
            </div>
            <div className="why-content-container grid grid-cols-3 px-10 text-center">
                <div className="why-four">
                    <img className="why-image" src="/assets/brain.svg" alt="Brain"/>
                    <h2 className="why-subtitle mt-7 mb-3 text-center">Conscious decisions</h2>
                    <p className="why-paragraph">We're all about making better eating choices, supporting local businesses, and reducing our carbon footprint. We consider what we do and the impact that our choices will have on the planet.</p>
                </div>
                <div className="why-five">
                    <img className="why-image" src="/assets/calendar.svg" alt="Calendar"/>
                    <h2 className="why-subtitle mt-7 mb-3 text-center">No commitment</h2>
                    <p className="why-paragraph">You can pause at any time for flexibility that meets your needs. When you go away or have events planned for your evenings, you can pause without penalty or even change your delivery address.</p>
                </div>
                <div className="why-six">
                    <img className="why-image" src="/assets/box.svg" alt="Empty Box"/>
                    <h2 className="why-subtitle mt-7 mb-3 text-center">Convenience</h2>
                    <p className="why-paragraph">Wave goodbye to meal-planning panic because we've taken the hassle out of deciding what’s for dinner. From Meal Kits to Market, our wide range of options ensures every meal is deliciously simple</p>
                </div>
            </div>
            <button className="why-button rounded-md uppercase px-6 py-3 mt-6 mb-12">Get Started Now</button>
        </div>
    )
}