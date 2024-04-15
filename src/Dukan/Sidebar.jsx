

export const Sidebar=({})=>{
    return(
        <div>
            <div className="flex justify-start w-full  bg-blue-900">{/*main div */}
            <div className="flex mt-4 "> {/*name and logo */}
            <div className="m-2"><img className="rounded-lg" src="../dukaanimg.jpg" height={"40"} width={"40"}></img></div>
            <div className="flex">
                <div className="m-2 text-white">
                    <div className="font-semibold text-ls">
                    Samar
                    </div>
                    <div className="underline text-gray-400 cursor-pointer ">
                        Visit Store
                    </div>
                </div>
                <div className="m-1 py-1 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
            </div>
            </div>
            </div>
            <div className="w-full h-100% bg-blue-900" >{/*11 buttons */}
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/*first button home button */}
            {/*Increae the width of the button-used a div changed its width and the center alignment tags were preventing the button to change its width so custom width can't be used with text-center inline-flex items-center I acutally don't know out of which is preventing so I just naamed all three of them  */}
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-110 w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
            </button>
            </div>

            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Orders button */}
            
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" >
            <path d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M15 12H12M15 16H12M9 12H9.01M9 16H9.01" stroke="#d2d5d8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Orders
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Products button */}
            
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
            Products
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Delivery button */}
            
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            Delivery
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Marketing button */}
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
            </svg>
            Marketing
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Analytics button */}
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg class="w-5 h-5 mr-2" fill="#d2d5d8" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
            <path d="M228,196h-4V40a12,12,0,0,0-12-12H156a12,12,0,0,0-12,12V76H100A12,12,0,0,0,88,88v36H44a12,12,0,0,0-12,12v60H28a12,12,0,0,0,0,24H228a12,12,0,0,0,0-24ZM112,100h32v96H112ZM56,148H88v48H56Zm112,48V52h32V196Z"></path> </g></svg>
            Analytics
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Payouts button */}
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg class="mr-2" fill="#d2d5d8" width="25px" height="25px" viewBox="-5.6 -5.6 67.20 67.20" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path d="M 7.6883 23.1104 C 7.6883 17.1164 10.8653 13.9818 16.9016 13.9818 L 45.4100 13.9818 L 45.4100 13.4523 C 45.4100 9.0892 43.1861 6.8865 38.7803 6.8865 L 6.6505 6.8865 C 2.2239 6.8865 0 9.0892 0 13.4523 L 0 35.7548 C 0 40.1179 2.2239 42.2994 6.6505 42.2994 L 7.6883 42.2994 Z M 17.2405 52.5082 L 49.3495 52.5082 C 53.7548 52.5082 56 50.3055 56 45.9424 L 56 23.4281 C 56 19.0861 53.7548 16.8834 49.3495 16.8834 L 17.2405 16.8834 C 12.7927 16.8834 10.5900 19.0650 10.5900 23.4281 L 10.5900 45.9424 C 10.5900 50.3055 12.7927 52.5082 17.2405 52.5082 Z"></path></g></svg>
             Payouts
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Discounts button */}
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
            <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
            </svg>
             Discounts
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Audience button */}
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg fill="#d2d5d8" class="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z">
            </path><path d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z"></path></g></svg>
            Audience
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Appearance button */}
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg viewBox="0 0 24 24" class="w-5 h-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 12.5001C14 13.3285 13.3284 14.0001 12.5 14.0001C11.6716 14.0001 11 13.3285 11 12.5001C11 11.6717 11.6716 11.0001 12.5 11.0001C13.3284 11.0001 14 11.6717 14 12.5001Z" fill="#d2d5d8"></path> <path d="M16.5 10.0001C17.3284 10.0001 18 9.32854 18 8.50011C18 7.67169 17.3284 7.00011 16.5 7.00011C15.6716 7.00011 15 7.67169 15 8.50011C15 9.32854 15.6716 10.0001 16.5 10.0001Z" fill="#d2d5d8"></path> <path d="M13 6.50011C13 7.32854 12.3284 8.00011 11.5 8.00011C10.6716 8.00011 10 7.32854 10 6.50011C10 5.67169 10.6716 5.00011 11.5 5.00011C12.3284 5.00011 13 5.67169 13 6.50011Z" fill="#d2d5d8"></path> <path d="M7.50001 12.0001C8.32844 12.0001 9.00001 11.3285 9.00001 10.5001C9.00001 9.67169 8.32844 9.00011 7.50001 9.00011C6.67158 9.00011 6.00001 9.67169 6.00001 10.5001C6.00001 11.3285 6.67158 12.0001 7.50001 12.0001Z" fill="#d2d5d8"></path> <path d="M14 17.5001C14 18.3285 13.3284 19.0001 12.5 19.0001C11.6716 19.0001 11 18.3285 11 17.5001C11 16.6717 11.6716 16.0001 12.5 16.0001C13.3284 16.0001 14 16.6717 14 17.5001Z" fill="#d2d5d8"></path> <path d="M7.50001 17.0001C8.32844 17.0001 9.00001 16.3285 9.00001 15.5001C9.00001 14.6717 8.32844 14.0001 7.50001 14.0001C6.67158 14.0001 6.00001 14.6717 6.00001 15.5001C6.00001 16.3285 6.67158 17.0001 7.50001 17.0001Z" fill="#d2d5d8"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5017 1.02215C15.4049 0.791746 19.5636 2.32444 21.8087 5.41131C22.5084 6.37324 22.8228 7.63628 22.6489 8.83154C22.471 10.054 21.7734 11.2315 20.4472 11.8945C19.6389 12.2987 18.7731 12.9466 18.2401 13.668C17.7158 14.3778 17.6139 14.9917 17.8944 15.5529C18.4231 16.6102 18.8894 17.9257 18.8106 19.1875C18.7699 19.8375 18.5828 20.4946 18.1664 21.0799C17.7488 21.6667 17.1448 22.1192 16.3714 22.4286C14.6095 23.1333 12.6279 23.1643 10.8081 22.8207C8.98579 22.4765 7.24486 21.7421 5.92656 20.8194C4.00568 19.4748 2.47455 17.6889 1.71371 15.4464C0.9504 13.1965 0.995912 10.5851 2.06024 7.65803C3.64355 3.30372 7.56248 1.25469 11.5017 1.02215ZM11.6196 3.01868C8.26589 3.21665 5.18483 4.9176 3.93984 8.34149C3.00414 10.9148 3.01388 13.0536 3.60768 14.8038C4.20395 16.5613 5.42282 18.0255 7.07347 19.1809C8.14405 19.9303 9.6169 20.5604 11.1792 20.8554C12.7442 21.151 14.3181 21.0959 15.6286 20.5716C16.308 20.2999 16.7678 19.8099 16.8145 19.0627C16.8606 18.3245 16.5769 17.3901 16.1056 16.4473C15.3639 14.9639 15.8542 13.5318 16.6315 12.4796C17.4002 11.4391 18.5455 10.6093 19.5528 10.1057C20.2266 9.76878 20.5747 9.19623 20.6697 8.54355C20.7686 7.86365 20.5831 7.12638 20.1913 6.58769C18.4364 4.17486 15.0093 2.81858 11.6196 3.01868Z" fill="#d2d5d8"></path> </g></svg>
            Appearance
            </button>
            </div>
            <div className="ml-1 mr-1.5 mb-1 w-50 h-10 hover:bg-gray-150 rounded-lg">{/* Plugins button */}
            <button type="button" class="mb-4 text-gray-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            <svg viewBox="0 0 24 24" class="w-5 h-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d2d5d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.9996 3L5.06859 12.6934C4.72703 13.1109 4.55625 13.3196 4.55471 13.4956C4.55336 13.6486 4.62218 13.7939 4.74148 13.8897C4.87867 14 5.14837 14 5.68776 14H11.9996L10.9996 21L18.9305 11.3066C19.2721 10.8891 19.4429 10.6804 19.4444 10.5044C19.4458 10.3514 19.377 10.2061 19.2577 10.1103C19.1205 10 18.8508 10 18.3114 10H11.9996L12.9996 3Z" stroke="#d2d5d8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Plugins
            </button>
            </div>
            <div className="h-60" >
            <div className="my-16 py-16">
            <div className="h-100% flex m-2 bg-violet-123 rounded-lg cursor-pointer">
            <div className="bg-gray-111 rounded h-8 w-8 text-center items-center m-2 ">
            <svg fill="#d2d5d8" className="w-6 h-6 mx-1 my-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Wallet"> <g> 
            <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z"></path> <circle cx="14.519" cy="11.996" r="1"></circle> </g> </g> </g></svg>
            </div>
            <div className="text-gray-110 text-sm my-1 hover:text-gray-100">
            <div>Available Credit</div>
            <div>222.10</div>
            </div>
            </div>
            
            </div>  {/**idea */}
            </div>


            </div>
        </div>
    )
}