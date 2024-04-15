
export const Overview=({
    text,
})=>{

    return <div className="ml-4 m-5 flex justify-between">
    <div className="font-semibold text-lg">
        {text}
    </div> 
    <div className="rounded border-solid border-2 border-gray-400 w-32 flex space between content-center">
    <div className="p-1 ml-2 content-center">
    This Month
    </div>
    <div className="content-center">
    <svg className="ml-1 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>   
    </div>
    </div>       
</div>
}
