const Btn1 = (props) => {
    return (  
        <div className="w-fit hover:-translate-y-0.5 transition-all hover:to-cyan-500 hover:from-blue-500 shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
            {props.children}
        </div>
    );
}
 
export default Btn1;