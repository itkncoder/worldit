import img from "../images/web.png"
import {Link} from "react-router-dom"
import { Helmet } from "react-helmet"

import Cases from "../components/main/Cases"
import FormContact from "../components/FormContact"

const Webi = (props) => {
    return <div className="pl-40 gap-2 flex w-full justify-start items-center etapes py-10 relative">
        <h1 className="text-7xl font-semibold text-gray-500">{props.count}chi</h1>
        <h1 className="etapes-title text-5xl text-gray-700 font-bold tracking-wider text-gray-700 absolute left-1/3">{props.title}</h1>
    </div> 
}

const Web = () => {
    window.scrollTo(0, 0);
    return (  
        <div>
            <Helmet>
                <meta name="description" content="Mobil ilovalar, veb-saytlar, bozorlar, UX/UI dizaynlar ishlab chiqamiz, texnik yordam ko'rsatamiz"/>
                <meta name="keywords" content="worldit, world it, mobil ilovalar, web saytlar, zakaz, zakazga, mobil dasturlar zakazga, web saytlar zakazga, ui ux design, ui ux dizayn, dizaynlar zakazga, dizayn zakazga, worldit zakaz"/>
                <title>World IT - Web saytlar yaratish</title>
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
            <div className="columner flex justify-around items-start mt-14 gap-2">
                <div className="flex flex-col gap-6 mt-20">
                    <div className="flex flex-col gap-3">
                        <h1 className="page-title text-5xl text-slate-800 title">Onlayn savdo uchun zamonaviy ilovalar va veb-saytlarni ishlab chiqish</h1>
                        <p className="page-desc text-slate-800 max-w-lg text-2xl">Bozorlar, onlayn-do'konlar, taksilar, oziq-ovqat yetkazib berish, almashish va boshqa mahsulotlar tayyorlash</p>
                        <p className="page-desc2 text-slate-800 max-w-xl">Biz chiroyli dizayn, qulay mahsulot kartalari bilan onlayn sotuvlar uchun zamonaviy ilovalar va veb-saytlarni yaratamiz, to'lov va yetkazib berish tizimlarini ulaymiz, ekvayringni o'rnatamiz, CRM va ombor ma'lumotlar bazalari bilan integratsiya qilamiz.</p>
                    </div>
                </div>
                <img className="columner-img rounded-full w-5/12" src={img} alt="" />
            </div>

            <div className="webi-top flex flex-col items-center">
                <h1 className="columner-title text-4xl text-slate-700 font-semibold py-20">Bizning web dasturlashga yondashuvimiz</h1>
                
                <Webi count="1" title="Muhokama" />
                <Webi count="2" title="Texnik qo'llanma" />
                <Webi count="3" title="Prototip" />
                <Webi count="4" title="Dizayn" />
                <Webi count="5" title="Yaratish" />
                <Webi count="6" title="Test qilish" />
                <Webi count="7" title="Ommaga taqdimot" />
                <Webi count="8" title="Qo'llab-quvvatlash" />
            </div>

            <div className="py-20 noner">
                <div className="flex flex-col items-center my-14">
                    <h1 className="text-4xl text-slate-900 font-semibold">Bizning ishlarimiz</h1>
                    <p className="text-lg text-slate-700">Bu yerda bizning eng yorqin ishlarimiz ko'rsatilgan</p>
                </div>
                <Cases/>
            </div>

            <div className="noner-2 flex justify-around items-start my-10 gap-2">
                <div className="noner flex flex-col gap-6 mt-32">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl max-w-xl title">So'rov qoldiring, biz siz bilan bog'lanamiz</h1>
                    </div>
                </div>
                <div className="form-top-div-input bg-gray-100 border shadow-2xl rounded-xl px-16 py-8">
                    <FormContact/>
                </div>
            </div>

        </div>
    );
}
 
export default Web;