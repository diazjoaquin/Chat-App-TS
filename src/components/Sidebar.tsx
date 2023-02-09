import Chats from "./Chats"
import Navbar from "./Navbar"
import Search from "./Search"

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar