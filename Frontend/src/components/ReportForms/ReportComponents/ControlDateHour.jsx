import React from "react";
import './ControlDateHour.css';

function ControlDateHour({ formData, handleChange }) {
    return (
        <div className="date-hour">
            <div className="mb-3 text-left ml-1" style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
                <div style={{ textAlign: "left" }}>Data chegada:</div>
                <input type="date" name="dateBegin" className="form-control" value={formData.dateBegin} onChange={handleChange}></input>
                <div style={{ textAlign: "left" }}>Hora chegada:</div>
                <input type="time" name="hourBegin" className="form-control" value={formData.hourBegin} onChange={handleChange}></input>
            </div>
            <div className="mb-3 text-left ml-1" style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
                <div style={{ textAlign: "left" }}>Data saída:</div>
                <input type="date" name="dateEnd" className="form-control" value={formData.dateEnd} onChange={handleChange}></input>
                <div style={{ textAlign: "left" }}>Hora saída:</div>
                <input type="time" name="hourEnd" className="form-control" value={formData.hourEnd} onChange={handleChange}></input>
            </div>
            <div className="mb-3 text-left ml-1" style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
                <div style={{ textAlign: "left" }}>Início horário de descanso:</div>
                <input type="time" name="hourRestBegin" className="form-control" value={formData.hourRestBegin} onChange={handleChange}></input>
                <div style={{ textAlign: "left" }}>Fim horário de descanso:</div>
                <input type="time" name="hourRestEnd" className="form-control" value={formData.hourRestEnd} onChange={handleChange}></input>
            </div>
        </div>
    );
}

export default ControlDateHour;