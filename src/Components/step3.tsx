import   { useState } from "react"

function Section3(){

    const adds = [
        {
            title: "online service",
            desc: "Access to multiplayer games",
            amount : "+51/mo",
        },
        {
            title: "Larger storage ",
            desc: "Extar 1 tb of cloud storage ",
            amount : "+52/mo",
        },
        {
            title: "Customizable profile ",
            desc: "Custom theme in your profile",
            amount : "+52/mo",
        }
    ]


    function Addons({title , desc, amount}: {title:string, desc:string, amount:string}){
       
        const [isChecked, setIsChecked] = useState(false);

        function handleToggle(){
            setIsChecked(!isChecked);
            
            
        }

        return(

            <>
                <label
                 htmlFor="options" 
                 className={`${isChecked ? "border-2 rounded-lg border-marine-blue p-3 bg-alabaster shadow-lg shadow-alabaster": "border-2 rounded-lg p-3"}`}
                 onClick={handleToggle}>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 align-top justify-start">
                            <input 
                            type="checkbox" 
                            name="online" 
                            id=""
                            checked= {isChecked} onChange={handleToggle}
                            />
                            <div>
                                <h5 className="text-lg text-marine-blue capitalize font-bold">{title}</h5>
                                <p  className="text-gray-600 capitalize text-sm">{desc}</p>
                            </div>
                        </div>
                        <span className="text-sm text-marine-blue ">{amount}</span>
                    </div>
                </label>
            </>
        )
    }
    return(
        <>
         <div className="w-full items-center flex justify-center">
            <div className="w-11/12 flex flex-col items-center justify-evenly p-4 gap-5">
                <span className="flex flex-col gap-1">
                    <h1 className="text-3xl text-marine-blue capitalize font-bold">pick add-ons</h1>
                    <p className="text-gray-500">Addons help enhance your gaming experience</p>
                </span>
                <div className="flex flex-col gap-4 w-full">
                    {
                        adds.map((item, index) => (
                            <Addons
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                amount={item.amount}
                            />
                        ))
                    }
                </div>
             </div>
         </div>
         
        </>
    )


}

export default Section3