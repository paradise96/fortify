import picture from '../imgs/image1.png'

function Slider() {
    return (
        <section className="slider">
            <div className="container">
                <img src={picture} alt="slider first section" />
            </div>
        </section>
    )
}

export default Slider;