import React from "react";
import './HeaderForms.css';
import {useState} from "react";

function HeaderForms({ formData, handleChange, COMPANY_CHOICES, RESPONSABLE_CHOICES }) {
    return (
        <form className="page-main">
            <header className="header-forms">
                <div className="nameWork">
                    <div>Obra:</div>
                    <input type="text" name="nameWork" className="form-control" value={formData.nameWork} onChange={handleChange}></input>
                </div>
                <div className="company">
                    <div>Contratante:</div>
                    <select className="form-select" name="company" value={formData.company} onChange={handleChange}>
                        <option value=""></option>
                        {COMPANY_CHOICES.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
                <div className="responsable">
                    <label>Responsável:</label>
                    <select className="form-select" name="responsable" value={formData.responsable} onChange={handleChange}>
                        <option value=""></option>
                        {RESPONSABLE_CHOICES.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
            </header>
        </form>
    );
}


export default HeaderForms;