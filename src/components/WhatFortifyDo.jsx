import { whatFortifyDoData } from "../data/what_does_fortify_data";

function WhatFortifyDo() {
    return (
        <section className="do_fortify">
            <div className="container">
                <h2 className="header">What does <span className="blue">Fortify</span> do ?</h2>
                <div className="do_fortify_wrapper" >
                {whatFortifyDoData.map((item, index) => {
                    return (
                        
                            <div className="do_fortify_item" key={index}>
                                <div className="img_wrap">
                                    <img src={item.url} alt={item.alt} />
                                </div>
                                <p className="text do_fortify_description">{item.info }</p>
                            </div>
                      
                    )
                })}
                      </div>
            </div>
        </section>
    )
}

export default WhatFortifyDo;