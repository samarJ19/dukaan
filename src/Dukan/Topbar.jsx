
export const Topbar=({
    text1,
    text2
})=>{
    return <div>
        <div className="shadow flex grid grid-cols-3 ">{/*final*/}  {/*how can i change the width of each div in grid cols--an answer to this may be-grid grid-cols-[20%_80%] not a good approach --next time use cols-span-quantityofdivspaceyouwant and it should be a div inside a div which has creted a grid layout so if the parent grid is giving 3 columns in that parent grid you can have only two div one with cols-span-2 and other with cols-span-1 so the first div got more width*/}
        <div className="flex m-4">
        <div className="font-semibold text-lg mr-4">{/* 1*/}
            {text1}
        </div>
        <div className="w-4 h-4 ">{/* 2*/}
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg></div>
        <div className=" text-xs ml-2">{/*3 */}
         {text2}   
        </div>
        </div>
        <div className="m-2">{/* 4*/}
        <form class="max-w-md mx-auto">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-base  text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-400 focus:border-gray-400 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-gray-400" placeholder="Search features,tutorials,etc." required />
        </div>
        </form>       
        </div>
        <div className="flex justify-end">
        <div className="bg-gray-300 rounded-full w-10 h-10 m-2 p-2" >{/*5 the margin is getting removed automatically int svg tag-it happening becuase svg does not support classname that's why they are removing its effect afterward you have to manipulate the div such that you get your desired effect in the svg !*/}
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
        </svg>
        </div>
        <div className="bg-gray-300 rounded-full w-10 h-10 m-2 p-2" >{/*6*/}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
        </div>
        </div>
        </div>{/*end of final div*/}
    </div>
}