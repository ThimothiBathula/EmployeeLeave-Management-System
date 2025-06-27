import React, { useState } from "react";
import "./EmployeeLeaveForm.css";

const EmployeeLeaveForm = () => {
    const [formData, setFormData] = useState({
        employee_id: "",
        start_date: "",
        end_date: "",
        reason: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const today = new Date();
        today.setHours(0, 0, 0, 0); 
        
        const startDate = new Date(formData.start_date);
        const endDate = new Date(formData.end_date);
        if (!formData.employee_id || !formData.start_date || !formData.end_date || !formData.reason) {
            alert("All fields are required");
            return;
        }
        
        if (isNaN(formData.employee_id)) {
            alert("Invalid Employee ID");
            return;
        }

        if (startDate < today) {
            alert("Start date cannot be before today's date");
            return;
        }

        if (endDate < startDate) {
            alert("End date cannot be before start date");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/leave", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            alert("Leave request submitted successfully");
            setFormData({
                employee_id: "",
                start_date: "",
                end_date: "",
                reason: "",
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <div className="form-box">
                <h2>Employee Leave Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Employee ID</label>
                        <input type="text" id="employee_id" value={formData.employee_id} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Start Date</label>
                        <input type="date" id="start_date" value={formData.start_date} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>End Date</label>
                        <input type="date" id="end_date" value={formData.end_date} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Reason</label>
                        <textarea id="reason" value={formData.reason} onChange={handleChange} rows="3" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EmployeeLeaveForm;
