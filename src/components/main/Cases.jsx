import img from "../../images/img.jpg"
import garelka from "../../images/garelka.png"
import Btn2 from "../UI/Btn2";
import {Link} from "react-router-dom"

const Cases = () => {
    return (  
        <div className="max-w-screen-lg case-div m-auto flex justify-between items-start gap-4">
            <div className="case-start">
                <div className="container first-case">
                    <img src={garelka} alt="product" className="shadow-2xl image first-case-img"/>
                    <div className="overlay overlay-case">
                        <div className="text font-semibold tracking-widest">PROMGARELKA</div>
                        <a target="_blank" className="flex text-slate-800 justify-end items-center tracking-widest gap-3" href="https://promgarelkalocal.netlify.app"><i class="text-slate-800 text-2xl fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div className="case-div flex flex-col gap-4">

                <div className="flex case-div-2 justify-between items-center gap-4">
                    <div className="container">
                        <img src={img} alt="product" className="shadow-2xl image"/>
                        <div className="overlay">
                            <div className="text font-semibold tracking-widest">PROMGARELKA</div>
                            <a className="flex text-slate-800 justify-end items-center tracking-widest	 gap-3" href="./"><i class="text-slate-800 text-2xl fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="container">
                        <img src={img} alt="product" className="shadow-2xl image"/>
                        <div className="overlay">
                            <div className="text font-semibold tracking-widest">PROMGARELKA</div>
                            <a className="flex text-slate-800 justify-end items-center tracking-widest	 gap-3" href="./"><i class="text-slate-800 text-2xl fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>


                <div className="flex case-div-2 justify-between items-center gap-4">
                    <div className="container">
                        <img src={img} alt="product" className="shadow-2xl image"/>
                        <div className="overlay">
                            <div className="text font-semibold tracking-widest">PROMGARELKA</div>
                            <a className="flex text-slate-800 justify-end items-center tracking-widest	 gap-3" href="./"><i class="text-slate-800 text-2xl fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="container">
                        <img src={img} alt="product" className="shadow-2xl image"/>
                        <div className="overlay">
                            <div className="text font-semibold tracking-widest">PROMGARELKA</div>
                            <a className="flex text-slate-800 justify-end items-center tracking-widest	 gap-3" href="./"><i class="text-slate-800 text-2xl fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div>
            </div>
            </div>
        </div>
    );
}
 
export default Cases;