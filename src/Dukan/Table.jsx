import { data, newdata } from "./Tabledata"

export const Table=({})=>{
    function condition(y){
        if(y=="Successful"){return <div className="flex"> {/*space between dots and text is more than expected*/}
            <div className="flex">
            <span className="bg-green-400 w-2 h-2 rounded-full m-3"></span>
            <span className="m-1 text-xs pt-1">{y}</span>
            </div>
        </div>
        }
        else if(y=="Failed"){
            return <div className="flex">
                <div className="bg-red-400 w-2 h-2 rounded-full m-3 "></div>
                <div className="m-1 text-xs pr-4 pt-1">{y}</div>
            </div>
        }
        else if(y=="Processing"){
            return <div className="flex">
                <div className="bg-gray-400 w-2 h-2 rounded-full m-3"></div>
                <div className="m-1 text-xs pr-4 pt-1">{y}</div>
            </div>
        }
    }
    return <div className="shadow">
        <div className="flex justify-between ">{/*for searchbar and other two elements*/}
        <div class="m-2">
  {/*search bar*/}
        <form class="mx-auto">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
        <div class="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        </div>
        <input type="search" id="default-search" class="min-w-0 w-full h-10 p-4 ps-10 text-base text-gray-700 border border-gray-300 rounded-lg placeholder-gray-400 " placeholder="Order ID or transaction ID" required />
        </div>
        </form>
        </div>
        <div className="flex justify-end m-2">{/*for grid */}
        <div >{/*div is not working need something bigger than this--used a button to accomodate the whole thing text and logo */}
        <button type="button" class="m-1 border border-gray-400 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
        Sort
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
        </button>
        </div>
        <div>{/*another button smaller */}
        <button type="button" class="m-1 border border-gray-400 text-gray-400 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        </button>
        </div>
        </div>
        </div>{/*end of first div */}


        <div className="m-2 p-2 grid grid-cols-5 shadow">{/*main table 5 cols*/}
        <div >
            <p>ORDER ID</p>
        </div>
        <div>
            <p>STATUS</p>
        </div>
        <div>
            <p>TRANSACTION ID</p>
        </div>
        <div>
            <p>REFUND DATE</p>
        </div>
        <div className="justify-end flex mr-12 ">
        <p>ORDER AMOUNT</p>
        </div>
        </div> {/*end of top of table*/}
        <div>
          {newdata.map((y)=>(
          <div className="grid grid-cols-5 border-b-2 border-gray-200 px-1.5 py-1.5">
            <div className="ml-4 text-blue-700 text-bold text-lg">{y.ORDERID}</div>
            <div>{condition(y.STATUS)}</div> 
            <div className="text-sm">{y.TRANSACTIONID}</div>
            <div className="text-sm mr-1.5" >{y.REFUNDDATE}</div>
            <div className="justify-end flex mr-16 text-sm "> {y.ORDERAMOUNT}</div>
          </div>))}
            
        </div> {/*end of table */}
    </div>
}