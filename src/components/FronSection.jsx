import { firstScreenData } from '../data/firstScreenData'

function FrontSection() {
    const { header, subheader, button } = firstScreenData;
    return (
        <section className="front">
            <div className="container">
                <h1 className="front_header">{header}</h1>
                <p className='front_text'>{subheader}</p>
                <button type='button' className='front_button'>{ button}</button>
            </div>
        </section>
    )
}

export default FrontSection;