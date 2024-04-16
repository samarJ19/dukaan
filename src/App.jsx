import { Month } from "./Dukan/Month"
import { Name } from "./Dukan/Name"
import { Overview } from "./Dukan/Overview"
import { RevenueCard } from "./Dukan/RevenueCard"
import { RevenueCard2 } from "./Dukan/RevenueCard2"
import { RevenueCard3 } from "./Dukan/RevenueCard3"
import { Sidebar } from "./Dukan/Sidebar"
import { Table } from "./Dukan/Table"
import { Topbar } from "./Dukan/Topbar"


function App() {
 

  return (<div>
    
    
    
    <div className="grid grid-cols-[20%90%] md:grid-cols-[20%90%] lg:grid-cols-[14%86%]"> {/*h-screen sticky and aside tag worked for a sticky side bar */}
    <aside class="h-screen sticky top-0 overflow-y-screen">
      <Sidebar></Sidebar>
      </aside>  
    <main >
    <Topbar text1={"Payouts"} text2={"How it works"}></Topbar>
    <Overview text={"Overview"}></Overview>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
    <RevenueCard2 title2={"Next payout"} orderCount2={"23"}amount2={"2,312.23"}nextdate={""}time={ "04:00 PM"} ></RevenueCard2>
    <RevenueCard className="" title={"Amount Pending"} orderCount={"13"} amount={"92,312.20"}/>
    <RevenueCard3 title={"Amount Processed"} amount={"23,92,312.19"}/>
    </div>
    <Month payout={"22"} refunds={"6"}></Month>
    <Table></Table>
    <Name></Name>
    </main>
    </div>
  </div>

    )
}

export default App
