import React from "react";
import './H1.css'

function H1 ({formData, handleChange, REPORT_STATUS_CHOICES}) {
    return (
        <h1 className="header">Relatório de Campo
            <div>
            <select className="form-select" name="status" value={formData.status} onChange={handleChange}>
                    <option value=""></option>
                    {REPORT_STATUS_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
        </h1>


    );
}

export default H1;