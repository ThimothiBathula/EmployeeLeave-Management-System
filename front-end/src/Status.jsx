import { useState } from "react"

const Status=()=>{
        const [id,setId]=useState()
        const [status,setStatus]=useState()


        const submit=async()=>{
                if(status==='approved' || status==="rejected"){
                    try{
                        const response = await fetch(`http://localhost:3000/leave/${id}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                                },
                            body: JSON.stringify({status:status})
                        });
                        const data = await response.json();
                        alert(data.message)
                    }
                    catch(e){
                        alert(e)
                    }
                }
                else{
                    alert("error")
                }
        }

    return(
        <>
        <div className="status-container">
           
        <div className="form-box-status">
        <h1>Change Status</h1>
        <div className="form-group">
                        <label>Leave ID</label>
                        <input type="number" id="leave_id" onChange={(e)=>{setId(e.target.value)}}   required />
                    </div>
        <div className="form-group">
                        <label>Status</label>
                        <input type="text" id="employee_id" onChange={(e)=>{setStatus(e.target.value)}}  required />
                    </div>
                    <button type="submit" className="submit-btn" onClick={()=>{submit()}}>Submit</button>
        </div>
</div>
        </>
    )
}

export default Status