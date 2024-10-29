import react from 'react';

function Section4(){
    return(
        <>
        
        <div className="w-full items-center flex justify-center">
            <div className="w-9/12 flex flex-col items-center justify-evenly p-4 gap-5">
                <div className='flex w-full flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-marine-blue text-3xl capitalize'>finishing up</h1>
                        <p className='text-gray-400 font-bold text-sm'>Double-check everything looks OK before confirming </p>
                    </div>
                    <div className='flex flex-col w-full gap-4'>
                       <div className='flex flex-col p-4 bg-alabaster rounded-lg'>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col gap1 pb-5 '>
                                    <h4 className='text-marine-blue font-bold capitalize text-base'>Arcade\(monthly)</h4>
                                    <p className='text-gray-400 text-sm underline'>change</p>
                                </div>
                                <span className='text-marine-blue'>$9/m</span>
                            </div>
                            <hr className='mt-3 mb-3' />
                            <div className='flex flex-col gap-5'>
                                <span className='flex justify-between items-center'>
                                    <p className='capitalize text-gray-400'>online service </p>
                                    <p className='capitalize text-marine-blue'>+$1/mo</p>
                                </span>
                                <span  className='flex justify-between items-center'>
                                    <p className='capitalize text-gray-400'>larger storage</p>
                                    <p className='capitalize text-marine-blue'>+2$/mo</p>
                                </span>
                            </div>
                       </div>
                       <div>
                            <span className='flex justify-between items-center'>
                                <p className='capitalize text-gray-400 '>total (per month)</p>
                                <h3 className='text-purplish-blue text-lg font-bold'>+$12/mo</h3>
                            </span>
                       </div>
                    </div>
                    
                </div>
            </div>
        </div>

        </>
    )
}


export default Section4