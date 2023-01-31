import logo from "../../images/logo.png"

const HeaderTop = () => {
    return (  
        <div className="flex justify-between items-center h-20">
            <img className="w-32 logo" src={logo} alt="" />
        </div>
    );
}
 
export default HeaderTop;