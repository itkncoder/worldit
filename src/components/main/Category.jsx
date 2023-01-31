import Btn1 from "../UI/Btn1"
import {Link} from "react-router-dom"

const Category = (props) => {
    return (  
        <div>
            <Link to={props.left === "true" ? "/mobile" : "/web"}>
                <div className="category-block max-w-screen-lg bg-gray-100 hover:shadow transition-all mt-14 flex justify-evenly items-end gap-8 border rounded-xl shadow-xl py-8 px-6">
                    <img className={props.left === "true" ? "category-img transition-all duration-300 hover:scale-105 w-6/12 rounded-xl border-2" : "transition-all category-img duration-300 hover:scale-105 w-6/12 rounded-xl border-2 order-2"} src={props.img} alt="category" />
                    <div className="flex flex-col gap-6 mb-5">
                        <div className="category-texts flex flex-col gap-6">
                            <h1 className="category-title text-2xl font-semibold">{props.title}</h1>
                            <p className="text-sm text-slate-800">{props.desc}</p>
                        </div>
                        <div className="category-foot flex justify-start items-center gap-6">
                            <div class="group flex relative">
                                <span class="text-xl text-rose-800 px-2 py-1 flex flex-col font-semibold items-center">{props.price} USD<br/><span className="text-sm">boshlab</span></span>
                                <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-6 opacity-0 m-4 w-max mx-auto py-2 px-3">{props.uzs} uzs</span>
                            </div> 
                            <Btn1>
                                <p className="cursor-pointer py-3 px-12 text-slate-200">Buyurtma berish</p>
                            </Btn1>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
 
export default Category;