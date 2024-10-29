



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
                <h3 className="text-sm font-bold uppercase hidden sm:block">{title}</h3>
            </span>
        </li>
    );
}

    return(
        <>
        <div className={ "side-bar flex p-7  rounded-lg sm:w-1/3  "}>
            <div className="flex sm:justify-start justify-center w-full">
                <ul className="flex sm:flex-col items-center gap-5 sm:justify-start justify-between w-full">
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