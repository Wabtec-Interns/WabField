import React from "react";
import './HeaderForms.css';

function HeaderForms({ formData, handleChange, COMPANY_CHOICES }) {
    return (
        <form>
            <header className="header-forms">
                <div className="mb-3 text-left ml-1" style={{ flex: 1, padding: '20px', textAlign: 'center', flexGrow: 1 }}>
                    <div style={{ textAlign: "left" }}>Obra:</div>
                    <input type="text" name="nameWork" className="form-control" value={formData.nameWork} onChange={handleChange}></input>
                </div>
                <div className="mb-3 text-left ml-1" style={{ flex: 1, padding: '20px', textAlign: 'center', flexGrow: 1 }}>
                    <div style={{textAlign: "left"}}>Contratante:</div>
                    <select className="form-select" name="company" value={formData.company} onChange={handleChange}>
                        <option value=""></option>
                        {COMPANY_CHOICES.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3 text-left ml-1" style={{ flex: 1, padding: '20px', textAlign: 'center', flexGrow: 1 }}>
                    <div style={{textAlign: "left"}}>Responsável:</div>
                    <input type="text" name="responsable" className="form-control" value={formData.nameWork} onChange={handleChange}></input>
                </div>
            </header>
        </form>
    );
}

export default HeaderForms;