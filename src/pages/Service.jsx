import Category from "../components/main/Category"
import img from "../images/img.jpg" 
import img2 from "../images/img2.jpg" 
import FormContact from "../components/FormContact"
import ServiceCard from "../components/UI/ServiceCard"
import {Link} from "react-router-dom"
import { Helmet } from "react-helmet"

const Service = () => {
    window.scrollTo(0, 0);

    return (  
        <div>
            <Helmet>
                <meta name="description" content="Mobil ilovalar, veb-saytlar, bozorlar, UX/UI dizaynlar ishlab chiqamiz, texnik yordam ko'rsatamiz"/>
                <meta name="keywords" content="worldit, world it, mobil ilovalar, web saytlar, zakaz, zakazga, mobil dasturlar zakazga, web saytlar zakazga, ui ux design, ui ux dizayn, dizaynlar zakazga, dizayn zakazga, worldit zakaz"/>
                <title>World IT - Bizning xizmatlar</title>
            </Helmet>
            <nav className="">
            <ul className="flex">
                <li>
                    <Link className="hover:text-blue-800 py-2 px-2 text-lg text-slate-900 font-semibold" to="/">Asosiy</Link>
                </li>
                <li className="border-b-4 border-slate-300 w-fit">
                    <Link className="hover:text-blue-800 py-2 px-2 text-lg text-slate-900 font-semibold" to="/service">Xizmatlar</Link>
                </li>
            </ul>
            </nav>
            <div className="flex flex-col max-w-screen-lg m-auto pt-20 gap-3">
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-semibold">Bizning xizmatlar</h1>
                    <p className="text-xl font-semibold">World IT-bu digital production studia</p>
                </div>
                <p className="max-w-screen-md text-slate-700">Pastda bizning mijozlarimiz uchun 2ta yo'nalish ko'rsatilgan. Agar sizga biror boshqa narsa kerak bo'lsa, biz bilan bog'laning, muhokama qilamiz, balki biz sizga yordam bera olarmiz!</p>
            </div>
            <div className="flex flex-col items-center">
                <Category uzs="56 550 000" img={img} left="true" title="Mobil ilovalarni ishlab chiqish" desc="Loyiha turiga va uning vazifalariga qarab, mahalliy, shuningdek, kross-platforma (Flutter, ReactNative) mobil ilovalarini yaratish." price="5 000" />

                <Category uzs="6 800" img={img2} left="false" title="Bozorlar, onlayn-do'konlar, taksilar, oziq-ovqat yetkazib berish va boshqalarni yaratamiz" desc="Biz chiroyli dizayn, qulay mahsulot kartalari bilan onlayn sotuvlar uchun zamonaviy ilovalar va veb-saytlarni yaratamiz, to'lov va yetkazib berish tizimlarini ulaymiz, ekvayringni o'rnatamiz, CRM va ombor ma'lumotlar bazalari bilan integratsiya qilamiz." price="600" />
            </div>

            <div>
                <div className="service-block flex justify-evenly items-center mt-20">
                    <ServiceCard uzs="3 340 000" title="Promo saytlar yaratish" desc="Biz mijoz, tadbir, mahsulot, reklama va boshqalar e'tiborini jalb qilish uchun zamonaviy veb-saytni ishlab chiqamiz." price="300" bg="bg-slate-700" />
                    <ServiceCard uzs="4 550 000" title="Loyihalarni takomillashtirish va ishlab chiqish" desc="Loyihangizni doimiy ravishda kundalik qo'llab-quvvatlash, funksionallikni yaxshilash, funksionallikni rivojlantirish ustida ishlash" price="400" bg="bg-rose-900" />
                    <ServiceCard uzs="2 300 000" title="Bir sahifali saytlar yaratish" desc="Biz xizmatlar yoki tovarlar uchun zamonaviy bir sahifali veb-saytni ishlab chiqamiz" price="200" bg="bg-blue-900" />
                </div>
                <div className="service-block flex justify-evenly items-center mt-10">
                    <ServiceCard error="true" uzs="100 000" title="Texniy yordam" desc="Loyiha infratuzilmasining kechayu kunduz monitoringini ta'minlash" price="80 000" bg="bg-teal-900" />
                    <ServiceCard error="true" uzs="100 000" title="Loyihalarni takomillashtirish va ishlab chiqish" desc="Loyihangizni doimiy ravishda kundalik qo'llab-quvvatlash, funksionallikni yaxshilash, funksionallikni rivojlantirish ustida ishlash" price="80 000" bg="bg-sky-900" />
                    <ServiceCard error="true" uzs="100 000" title="Informatsion xavfsizlik" desc="Sizning xizmat ma'lumotlaringiz ishonchli himoya ostida bo'ladi" price="80 000" bg="bg-slate-600" />
                </div>
                <div className="service-block flex justify-evenly items-center mt-10">
                    <ServiceCard uzs="1 130 000" title="Saytni tezligini oshirish" desc="Вiz saytlarni Google va Yandex ning yashil zonasiga olib kelamiz, saytni yuklashni tezlashtiramiz" price="100" bg="bg-green-900" />
                    <ServiceCard uzs="2 250 000 " title="Mobil dasturlar va saytlarni dizayni" desc="Biz qulaylik qoidalarida va xizmat doirasida foydalanuvchining mantiqiy yo'lida yuqori sifatli, qulay, jozibali dizaynni yaratamiz." price="200" bg="bg-violet-900" />
                    <ServiceCard error="true" uzs="100 000" title="Mobil dasturlarni rivojlantirish" desc="Biz har qanday loyiha uchun individual marketing strategiyasini ishlab chiqamiz va amalga oshiramiz. Yuklab olish va sharhlarni ko'paytirish" price="50 000" bg="bg-indigo-900" />
                </div>
            </div>

            <div>
                <div className="flex justify-around items-start my-20 gap-2">
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
        </div>
    );
}
 
export default Service;