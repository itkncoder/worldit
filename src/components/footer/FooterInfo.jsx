import logo from "../../images/logo.png"
import t from "../../images/t.png"

const FooterInfo = () => {
    return (  
        <div className="footer-top-div h-60 flex flex-col justify-between pb-6">
            <footer className="flex justify-between items-center pt-12 px-20">
                <img src={logo} alt="" />
                <a target="telegram" href="https://t.me/nodejs5">
                    <img src={t} alt="telegram"/>
                </a>
            </footer>
            <p className="copyright text-center text-slate-200 text-lg">Copyright. Barcha huquqlar himoyalangan © 2023</p>
        </div>
    );
}
 
export default FooterInfo;