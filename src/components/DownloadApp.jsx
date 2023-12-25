import {downloadInfo} from '../data/downloadAppData'

function DownloadApp() {
    return (
        <section className="download">
            <div className="container">
                <h2 className="header">Download App</h2>
                <div className="download_wrapper">
                    {downloadInfo.map((item, index) => {
                        return (
                            <div className="download_item" key={index}>
                                <div>
                                    {item.svg}
                                </div>
                                <div>
                                    <h3>{item.header}</h3>
                                    <h4>{ item.description}</h4>
                               </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DownloadApp