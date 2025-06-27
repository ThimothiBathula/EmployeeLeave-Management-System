import { useState } from "react";

const EmployeeLeaves = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [leaves, setLeaves] = useState([]);

    const fetchLeaves = async () => {
        if (!employeeId) return;
        try {
            const response = await fetch(`http://localhost:3000/leave/employee/${employeeId}`);
            const data = await response.json();
            setLeaves(data);
        } catch (error) {
            console.log("Error fetching leaves:", error);
        }
    };

    return (
        <>
            <div className="EmployeeLeaves-Search">
                <input 
                    type="text" 
                    placeholder="Search by Employee Id" 
                    value={employeeId} 
                    onChange={(e) => setEmployeeId(e.target.value)}
                />
                <button onClick={fetchLeaves}>Search</button>
            </div>
            <div className="leave-boxes">
                {leaves.length > 0 ? leaves.map((item) => (
                    <div className="Leave-box" key={item.id}>
                        <h3>Leave ID: <span>{item.id}</span></h3>
                        <h3>Employee ID: <span>{item.employee_id}</span></h3>
                        <h3>Start Date: <span>{item.start_date.slice(0,10)}</span></h3>
                        <h3>End Date: <span>{item.end_date.slice(0,10)}</span></h3>
                        <h3>Reason: <span>{item.reason}</span></h3>
                        <h3>Status: <span>{item.status}</span></h3>
                    </div>
                )) : <p className="no-results">No leaves found</p>}
            </div>
        </>
    );
};

export default EmployeeLeaves;
