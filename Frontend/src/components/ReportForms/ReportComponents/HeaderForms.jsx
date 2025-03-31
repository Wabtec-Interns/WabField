import React, { useState } from "react";
import Modal from "react-modal";
import './HeaderForms.css';

Modal.setAppElement('#root'); // Necessário para acessibilidade

function HeaderForms({ formData, handleChange, COMPANY_CHOICES, RESPONSABLE_CHOICES }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newWork, setNewWork] = useState({ name: "", location: "", deadline: "", contractor: "" });
    const [works, setWorks] = useState([]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleNewWorkChange = (e) => {
        const { name, value } = e.target;
        setNewWork((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddWork = () => {
        setWorks([...works, newWork.name]);
        setNewWork({ name: "", location: "", deadline: "", contractor: "" });
        closeModal();
    };

    return (
        <div className="page-main">
            <header className="header-forms">
                <div className="mb-3 text-left ml-1" style={{ flex: 1, padding: '20px', textAlign: 'center', flexGrow: 1 }}>
                    <div style={{ textAlign: "left" }}>Obra:</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <select className="form-select" name="nameWork" value={formData.nameWork} onChange={handleChange}>
                            <option value=""></option>
                            {works.map((work, index) => (
                                <option key={index} value={work}>{work}</option>
                            ))}
                        </select>
                        <button type="button" className="add-button" onClick={openModal}>+</button>
                    </div>
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
                    <select className="form-select" name="responsable" value={formData.responsable} onChange={handleChange}>
                        <option value=""></option>
                        {RESPONSABLE_CHOICES.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
            </header>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Cadastrar Nova Obra" className="modal" overlayClassName="overlay">
                <div className="modal-content">
                    <h2>Cadastrar Nova Obra</h2>
                    <div className="form-group">
                        <label>Nome da obra:</label>
                        <input type="text" name="name" value={newWork.name} onChange={handleNewWorkChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Local da obra:</label>
                        <input type="text" name="location" value={newWork.location} onChange={handleNewWorkChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Prazo contratual:</label>
                        <input type="text" name="deadline" value={newWork.deadline} onChange={handleNewWorkChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Nome da contratante:</label>
                        <input type="text" name="contractor" value={newWork.contractor} onChange={handleNewWorkChange} className="form-control" />
                    </div>
                    <button onClick={handleAddWork} className="btn btn-primary">Adicionar</button>
                    <button onClick={closeModal} className="btn btn-secondary">Fechar</button>
                </div>
            </Modal>
        </div>
    );
}

export default HeaderForms;