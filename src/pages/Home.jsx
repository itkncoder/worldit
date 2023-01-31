import Main from "../components/Main";
import {Link} from "react-router-dom"
import { Helmet } from "react-helmet"

const Home = () => {
    window.scrollTo(0, 0);
    return (  
        <div>
            <Helmet>
                <meta name="description" content="Mobil ilovalar, veb-saytlar, bozorlar, UX/UI dizaynlar ishlab chiqamiz, texnik yordam ko'rsatamiz"/>
                <meta name="keywords" content="worldit, world it, mobil ilovalar, web saytlar, zakaz, zakazga, mobil dasturlar zakazga, web saytlar zakazga, ui ux design, ui ux dizayn, dizaynlar zakazga, dizayn zakazga, worldit zakaz"/>
                <title>World IT - Digital production studia</title>
            </Helmet>
            <nav className="">
            <ul className="flex">
                <li className="border-b-4 border-slate-300 w-fit">
                    <Link className="hover:text-blue-800 py-2 px-2 text-lg text-slate-900 font-semibold" to="/">Asosiy</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-800 py-2 px-2 text-lg text-slate-900 font-semibold" to="/service">Xizmatlar</Link>
                </li>
            </ul>
            </nav>
            <Main/>
        </div>
    );
}
 
export default Home;