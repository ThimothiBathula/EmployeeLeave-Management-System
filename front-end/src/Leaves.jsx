const { useState, useEffect } = require("react");

const Leaves = () => {
    const [data, setData] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [filteredData, setFilteredData] = useState([]);


    const Reject=async(id)=>{
        try{
            const response = await fetch(`http://localhost:3000/leave/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({status:"rejected"})
            });
            const data = await response.json();
            alert(data.message);

        }
        catch(e){
            console.log(e)
        }
    }

    const Approved=async(id)=>{
        try{
            const response = await fetch(`http://localhost:3000/leave/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({status:"approved"})
            });
            const data = await response.json();
            alert(data.message);

        }
        catch(e){
            console.log(e)
        }
    }
    const getData = async () => {
        try {
            let response = await fetch("http://localhost:3000/leave");
            let result = await response.json();
            setData(result);
            setFilteredData(result);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = (e) => {
        setSearchId(e.target.value);
        if (e.target.value === "") {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => item.id.toString().includes(e.target.value)));
        }
    };

    return (
        <>
            <div className="leaves-container">
                <h1>All Leaves</h1>
                <input 
                    type="text" 
                    placeholder="Search by ID" 
                    value={searchId} 
                    onChange={handleSearch} 
                    className="search-input"
                />
                <div className="leave-boxes">
                    {filteredData.length > 0 ? filteredData.map((item) => {
                        return (
                            <div className="Leave-box" key={item.id}>
                                <h3>Leave ID: <span>{item.id}</span></h3>
                                <h3>Employee ID: <span>{item.employee_id}</span></h3>
                                <h3>Start Date: <span>{item.start_date.slice(0, 10)}</span></h3>
                                <h3>End Date: <span>{item.end_date.slice(0, 10)}</span></h3>
                                <h3>Reason: <span>{item.reason}</span></h3>
                                <h3>Status: <span>{item.status}</span></h3>
                                <div className="status-btns">
                                    <button className="status-btn" onClick={()=>{Approved(item.id)}}>Approve</button>
                                    <button className="status-btn" onClick={()=>{Reject(item.id)}}>Reject</button>
                                </div>
                            </div>
                        );
                    }) : <p>No results found</p>}
                </div>
            </div>
        </>
    );
};

export default Leaves;
