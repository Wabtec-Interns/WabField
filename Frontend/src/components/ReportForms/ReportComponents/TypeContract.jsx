import React from "react";
import './TypeContract.css';

function TypeContract ({formData, handleChange, TYPE_CONTRACT_CHOICES, getProfessionalChoices}) {
    return (
    
    <div className="text-center type-contract">
        <div className="text-left ml-1">
          <div>Tipo de contrato:</div>
            <select className="form-select" name="typeContract" value={formData.typeContract} onChange={handleChange}>
              <label className="form-label"></label>
                <option value=""></option>
                {TYPE_CONTRACT_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
                ))}
            </select>

        {formData.typeContract && (
        <div className="text-center type--contract" >
          <div>Profissão:</div>
          <select className="form-select" name="professional" value={formData.professional} onChange={handleChange} required>
            <option value=""></option>
            {getProfessionalChoices().map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      )}

      </div>
    </div>
    );
}

export default TypeContract;