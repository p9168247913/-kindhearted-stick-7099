import Navbar from "./AdminDashboard/Components/Navbar/Navbar"
import SideBar from "./AdminDashboard/Components/SideBar/SideBar"

const AdminApp = ({children}) => {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <SideBar />

                {children}
            </div>
        </div>
    )
}

export default AdminApp