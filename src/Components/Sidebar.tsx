



function SideBar(){

    type Number = {
        numbers : number;
    }

    const Number: React.FC<{ numbers: number }> = ({ numbers }) => {
        return (
            <>
                <div className="item-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-lg text-center hover:bg-blue-900 ease-in-out duration-300">
                    {numbers}
                </div>
            </>
        );
    };
    const sideItems = [
        {
            numb: <Number numbers={1} />,
            name: "step1",
            title: "your info",
        },
        {
            numb: <Number numbers={2} />,

            name:  "step2",
            title: "select plan ",
        },

        {
            numb: <Number numbers={3} />,

            name: "step3",
            title: "addons",
        },
        {
            name: "step4",
            title: "summary",
            numb: <Number numbers={4} />,
           
        }
    ]

   


function SideItem({ numb, name, title}: { numb: JSX.Element | string; name:string; title:string; }){
    return (
        <li className="flex gap-3 text-white justify-center items-center">
            <i className="">{numb}</i>
            <span className="flex flex-col">
                <h6 className="text-xs font-thin capitalize hidden sm:block">{name}</h6>
                <h3 className="text-sm font-bold uppercase hidden sm:block">{title}</h3>
            </span>
        </li>
    );
}

    return(
        <>
        <div className={ "side-bar flex p-7  rounded-lg sm:w-1/3  "}>
            <div className="flex sm:justify-start justify-center w-full items-start">
                <ul className="flex sm:flex-col items-center sm:items-start gap-5 sm:justify-start justify-between w-full">
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