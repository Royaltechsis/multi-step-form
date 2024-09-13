// import react from "react";



function SideBar(){
    const sideItems = [
        {
            numb: <i className="fas fa-arrow"></i>,
            name: "step1",
            title: "your info",
        },
        {
            numb: "",
            name: "step2",
            title: "select plan ",
        }, 
        {
            numb: "",
            name: "step3",
            title: "addons",
        },
        {
            numb: "",
            name: "step4",
            title: "summary",
        }
    ]


function SideItem({ numb, name, title}: { numb: JSX.Element | string; name:string; title:string; }){
    return (
        <li className="flex gap-3 text-white">
           {typeof numb === "string" ? <i className={`fas ${numb}`}></i> : numb}
            <span className="flex flex-col">
                <h6 className="text-xs font-thin capitalize">{name}</h6>
                <h3 className="text-sm font-bold uppercase">{title}</h3>
            </span>
        </li>
    );
}


    return(
        <>
        <div className="side-bar flex p-7  rounded-lg w-1/3 ">
            <div className="inner-side-bar flex flex-col items-center w-full justify-start ">
                <ul className="flex flex-col items-center w-full  gap-5 h-full">
                    {sideItems.map((item, index) => (
                        <SideItem 
                            key={index} 
                            numb={item.numb}
                            name={item.name}
                            title={item.title}
                        />
                    ))}
                </ul>

            </div>
        </div>
        </>
    )
}

export default SideBar;