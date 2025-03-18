import React from "react";
import './ControlTurns.css';

function ControlTurns({ formData, handleChange, TYPE_REPORT_CHOICES, WEATHER_CONDITION_CHOICES, WORK_CONDITION_CHOICES }) {
    return (
        <div className="control-turns">
            <div>
                <div className="text-left mb-6" style={{ textAlign: 'center' }}>Turno manhã:</div>
                <div style={{ textAlign: "left" }}>Tipo de registro:</div>
                <select className="form-select" name="morningType" value={formData.morningType} onChange={handleChange}>
                    <option value=""></option>
                    {TYPE_REPORT_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <div style={{ textAlign: 'left' }}>Condições climáticas:</div>
                <select className="form-select" name="morningWeather" value={formData.morningWeather} onChange={handleChange}>
                    <option value=""></option>
                    {WEATHER_CONDITION_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <div style={{ textAlign: 'left' }}>Condições de trabalho:</div>
                <select className="form-select" name="morningWork" value={formData.morningWork} onChange={handleChange}>
                    <option value=""></option>
                    {WORK_CONDITION_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            <div>
                <div className="text-left mb-6" style={{ textAlign: 'center' }}>Turno tarde:</div>
                <div style={{ textAlign: "left" }}>Tipo de registro:</div>
                <select className="form-select" name="afternoonType" value={formData.afternoonType} onChange={handleChange}>
                    <option value=""></option>
                    {TYPE_REPORT_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <div style={{ textAlign: 'left' }}>Condições climáticas:</div>
                <select className="form-select" name="afternoonWeather" value={formData.afternoonWeather} onChange={handleChange}>
                    <option value=""></option>
                    {WEATHER_CONDITION_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <div style={{ textAlign: 'left' }}>Condições de trabalho:</div>
                <select className="form-select" name="afternoonWork" value={formData.afternoonWork} onChange={handleChange}>
                    <option value=""></option>
                    {WORK_CONDITION_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            <div>
                <div className="text-left mb-6" style={{ textAlign: 'center' }}>Turno noite:</div>
                <div style={{ textAlign: "left" }}>Tipo de registro:</div>
                <select className="form-select" name="nightType" value={formData.nightType} onChange={handleChange}>
                    <option value=""></option>
                    {TYPE_REPORT_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <div style={{ textAlign: 'left' }}>Condições climáticas:</div>
                <select className="form-select" name="nightWeather" value={formData.nightWeather} onChange={handleChange}>
                    <option value=""></option>
                    {WEATHER_CONDITION_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <div style={{ textAlign: 'left' }}>Condições de trabalho:</div>
                <select className="form-select" name="nightWork" value={formData.nightWork} onChange={handleChange}>
                    <option value=""></option>
                    {WORK_CONDITION_CHOICES.map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default ControlTurns;