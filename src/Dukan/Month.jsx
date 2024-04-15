
export const Month=({
        payout,
        refunds
})=>{        
            return <div>
                <div className="">{/*transactions  */}
                    <p className="font-semibold text-lg m-2 pl-5 ">Transactions | This Month</p>
                    </div>    
            <div className="flex ml-4">
            <div className="bg-gray-300 rounded-full w-28 h-8 m-2 content-center pl-3 pb-1 ">
                {/* <button className="text-gray-500">Payouts({payout})</button> */}
                <p>Payouts ({payout})</p>
            </div>
            <div className="bg-blue-350 rounded-full w-28 h-8 m-2 content-center pl-3 pb-1 ">
            <p className="text-white">Refunds ({refunds})</p>
            </div>
            </div>
            
                </div>
}