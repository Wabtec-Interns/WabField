import React, { useState } from "react";
import Modal from "react-modal";
import './HeaderForms.css';

Modal.setAppElement('#root');

function HeaderForms({ formData, handleChange, COMPANY_CHOICES, RESPONSABLE_CHOICES }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newWork, setNewWork] = useState({ name: "", location: "", contractNumber: "" });
    const [works, setWorks] = useState([]);

    const openModal = () => {
        console.log("Opening modal"); // Verificação
        setModalIsOpen(true);
        console.log("Modal isOpen:", modalIsOpen); // Verificação
    };

    const closeModal = () => {
        console.log("Closing modal"); // Verificação
        setModalIsOpen(false);
        console.log("Modal isOpen:", modalIsOpen); // Verificação
    };

    const handleNewWorkChange = (e) => {
        const { name, value } = e.target;
        setNewWork((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddWork = () => {
        setWorks([...works, newWork.name]);
        setNewWork({ name: "", location: "", contractNumber: "" });
        closeModal();
    };

    return (
        <div className="page-main">
            <header className="header-forms">
                <div className="form-group">
                    <label>Obra:</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <select className="form-control" name="nameWork" value={formData.nameWork} onChange={handleChange}>
                            <option value=""></option>
                            {works.map((work, index) => (
                                <option key={index} value={work}>{work}</option>
                            ))}
                        </select>
                        <button type="button" className="add-button" onClick={openModal}>+</button>
                    </div>
                </div>
                <div className="form-group">
                    <label>Contratante:</label>
                    <select className="form-control" name="company" value={formData.company} onChange={handleChange}>
                        <option value=""></option>
                        {COMPANY_CHOICES.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Responsável:</label>
                    <select className="form-control" name="responsable" value={formData.responsable} onChange={handleChange}>
                        <option value=""></option>
                        {RESPONSABLE_CHOICES.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
            </header>

            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                contentLabel="Cadastrar Nova Obra" 
                className="modal" 
                overlayClassName="overlay"
                shouldCloseOnEsc={true} 
            >
                <div className="modal-content">
                    <button onClick={closeModal} className="close-button">X</button>
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
                        <label>Número do contrato:</label>
                        <input type="text" name="contractNumber" value={newWork.contractNumber} onChange={handleNewWorkChange} className="form-control" />
                    </div>
                    <button onClick={handleAddWork} className="btn btn-primary">Adicionar</button>
                </div>
            </Modal>
        </div>
    );
}

export default HeaderForms;
