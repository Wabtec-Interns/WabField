import React, { useState, useEffect } from "react";
import './HeaderForms.css';

function HeaderForms({ formData, handleChange, COMPANY_CHOICES, RESPONSABLE_CHOICES }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Carrega os dados do localStorage
        const storedProjectData = localStorage.getItem("projectData");
        if (storedProjectData) {
            const project = JSON.parse(storedProjectData);
            setProjects((prevProjects) => [...prevProjects, project]);
        }
    }, []);

    return (
        <form className="page-main">
            <header className="header-forms">
                <div className="nameWork">
                    <div>Obra:</div>
                    <select
                        name="nameWork"
                        className="form-select"
                        value={formData.nameWork}
                        onChange={handleChange}
                    >
                        <option value="">Selecione uma obra</option>
                        {projects.map((project) => (
                            <option key={project.id} value={project.id}>
                                {project.name} (ID: {project.id})
                            </option>
                        ))}
                    </select>
                </div>
                <div className="company">
                    <div>Contratante:</div>
                    <select
                        className="form-select"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    >
                        <option value="">Selecione o cliente</option>
                        {COMPANY_CHOICES.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
                <div className="responsable">
                    <label>Responsável:</label>
                    <select
                        className="form-select"
                        name="responsable"
                        value={formData.responsable}
                        onChange={handleChange}
                    >
                        <option value="">Selecione o Responsável</option>
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