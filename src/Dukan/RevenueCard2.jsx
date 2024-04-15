
export const RevenueCard2=(
    {title2,
    amount2,
    orderCount2,
    nextdate,
    time}
)=>{
    return <div className="grid col-span-1 m-4 ">{/*new parent div start*/}
    <div className="bg-blue-500 rounded shadow-md hover:bg-blue-600 ">
        <div className="p-4  flex content-center ">
            <div className="text-white text-md  ">
                {title2} 
            </div>
            <div className="ml-2 text-white mt-1 width:10 height:10 ">
            <svg className=" h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            </div>
        </div>
        <div className="ml-2 mb-4 text-white justify-between flex content-center">
            <div className="font-semibold text-2xl">
        ₹{amount2}
        </div>
        {orderCount2?<div>
            <div className="text-white flex cursor-pointer content-center">
            <div className="underline ">
            {orderCount2} orders
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </div>
            </div>
        </div>:null}
        </div>
        <div className="bg-blue-800 text-white p-2 flex justify-between">
            <div>
            Next payout date:{nextdate}
            </div>
            <div>
            Today,{time}
            </div>
        </div>
    </div>
</div>

}