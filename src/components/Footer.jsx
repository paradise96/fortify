// import { Link } from "react-router-dom"
import { footerInfo } from '../data/footerInfo';
import { footerAsign } from "../data/footerInfo";
// import footerOpenSourceLogo from '../imgs/Bitmap.png';

function Footer() {
    const { copyright, terms } = footerInfo;
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_left">
                        <div className="top">
                            <div className="footer_copyright">{copyright}</div>
                            <div className="footer_terms">{ terms}</div>
                        </div>
                        <div className="bottom">
                            <a href='google.com'>How it works</a>
                            <a href='google.com'>Github</a>
                            <a href='google.com'>Download</a>
                            <a href='google.com'>FAQ</a>
                        </div>
                    </div>
                    <div className="footer_right">
                        {footerAsign}
                        {footerAsign}
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer