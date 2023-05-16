import '../index.css'

export default function MenuItems (name, image, alt) {
    return (
        <div className="menuitem-container flex flex-col items-center pd-3">
            <img className="menuitem-image" src={image} alt={alt}></img>
            <h3 className="menuitem-title py-2 tracking-widest">{name}</h3>
        </div>
    )
}