import React, { useState, useEffect } from "react";
import './TypeContract.css';

function TypeContract({ formData, handleChange, TYPE_CONTRACT_CHOICES, getProfessionalChoices, updateFormDataWithContracts }) {
    const [contracts, setContracts] = useState([{ typeContract: '', professional: '', quantity: '' }]);

    useEffect(() => {
        handleChange({ target: { name: 'contracts', value: contracts } });
    }, [contracts, handleChange]);

    useEffect(() => {
        updateFormDataWithContracts(contracts);
    }, [contracts]);

    const handleAddContract = () => {
        setContracts([...contracts, { typeContract: '', professional: '', quantity: '' }]);
    };

    const handleContractChange = (index, event) => {
        const { name, value } = event.target;
        const newContracts = contracts.map((contract, i) => {
            if (i === index) {
                return { ...contract, [name]: value };
            }
            return contract;
        });
        setContracts(newContracts);
    };

    const handleRemoveContract = (index) => {
        if (contracts.length > 1) {
            const newContracts = contracts.filter((_, i) => i !== index);
            setContracts(newContracts);
        }
    };

    return (
        <div className="text-center type-contract">
            <button type="button" className="add-button" onClick={handleAddContract}>+</button>
            {contracts.map((contract, index) => (
                <div key={index} className="text-left ml-1">
                    <div className="font-size">Tipo de contrato:</div>
                    <div className="contract-header">
                        <select className="form-select" name="typeContract" value={contract.typeContract} onChange={(e) => handleContractChange(index, e)}>
                            <option value=""></option>
                            {TYPE_CONTRACT_CHOICES.map(([value, label]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                        {contracts.length > 1 && (
                            <button type="button" className="remove-button" onClick={() => handleRemoveContract(index)}>X</button>
                        )}
                    </div>

                    {contract.typeContract && (
                        <div className="text-center type--contract">
                            <div className="font-size">Profissão:</div>
                            <select className="form-select" name="professional" value={contract.professional} onChange={(e) => handleContractChange(index, e)} required>
                                <option value=""></option>
                                {getProfessionalChoices(contract.typeContract).map(([value, label]) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {contract.professional && (
                        <div className="text-center quantity-input">
                            <div className="font-size">Quantidade:</div>
                            <input
                                type="number"
                                className="form-input"
                                name="quantity"
                                value={contract.quantity}
                                onChange={(e) => handleContractChange(index, e)}
                                required
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TypeContract;
