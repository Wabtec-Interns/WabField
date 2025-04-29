import { useState, useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReportForms.css";  
import HeaderForms from "./ReportComponents/HeaderForms";
import ControlDateHour from "./ReportComponents/ControlDateHour";
import ControlTurns from "./ReportComponents/ControlTurns";
import H1 from "./ReportComponents/H1";
import FileUploadForm from "./ReportComponents/FileUploadForm";
import { useNavigate } from "react-router";
import TypeContract from "./ReportComponents/TypeContract";
import ActivitiesChoice from "./ReportComponents/ActivitiesChoice";
import { FormData } from "@/interfaces/IFormData";
import { ACTIVITIES_CHOICES, COMPANY_CHOICES, DIRECT_PROFISSIONAL_CHOICES, INDIRECT_PROFISSIONAL_CHOICES, OUTSOURCED_PROFISSIONAL_CHOICES, REPORT_STATUS_CHOICES, RESPONSABLE_CHOICES, TYPE_ACTIVITIES1, TYPE_ACTIVITIES2, TYPE_ACTIVITIES3, TYPE_CONTRACT_CHOICES, TYPE_REPORT_CHOICES, WEATHER_CONDITION_CHOICES, WORK_CONDITION_CHOICES } from "@/interfaces/IReportChoices";

const ReportForms = () => {
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    status: "",
    type: "",
    morningType: "",
    morningWeather: "",
    morningWork: "",
    afternoonType: "",
    afternoonWeather: "",
    afternoonWork: "",
    nightType: "",
    nightWeather: "",
    nightWork: "",
    weatherCondition: "",
    workCondition: "",
    typeContract: "",
    directProfissional: "",
    indirectProfissional: "",
    outsourcedProfissional: "",
    professional: "",
    nameWork: "",
    responsable: "",
    company: "",
    dateBegin: "",
    hourBegin: "",
    dateEnd: "",
    hourEnd: "",
    hourRestBegin: "",
    hourRestEnd: "",
    activitiesType: "",
    activitiesExecuted: "",
    activitiesPerCent: "",
    contracts: [], 
    activities: [],
    files: {
      image: [],
      video: [],
      file: [],
    }
  });

const getProfessionalChoices = (typeContract) => {
  switch (typeContract) {
    case "Direct":
      return DIRECT_PROFISSIONAL_CHOICES;
    case "Outsourced":
      return OUTSOURCED_PROFISSIONAL_CHOICES;
    case "Indirect":
      return INDIRECT_PROFISSIONAL_CHOICES;
    default:
      return [];
  }
};

const getActivitiesChoices = (activitiesType) => {
  switch (activitiesType) {
    case "Activities 1":
      return TYPE_ACTIVITIES1;
    case "Activities 2":
      return TYPE_ACTIVITIES2;
      case "Activities 3":
        return TYPE_ACTIVITIES3;
    default:
      return [];
  }
};


const updateFormDataWithContracts = (contracts) => {
  setFormData((prev) => ({ ...prev, contracts }));
  };
  
  const updateFormDataWithActivities = (activities) => {
  setFormData((prev) => ({ ...prev, activities }));
  };
  

  useEffect(() => {
    console.log("Fetching dropdown options...");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.contracts.length || !formData.activities.length) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    alert('Relatório enviado');
    localStorage.setItem("reportData", JSON.stringify(formData));
    alert('Aguarde, estamos gerando seu relatório...');
    setTimeout(() => {
      window.location.href = `/survey/projectReports/${formData.id}`;
    }, 100); // 100ms de atraso
};
  

  return (
    <div className="container bg-custom center">
      <H1 formData={formData} handleChange={handleChange} REPORT_STATUS_CHOICES={REPORT_STATUS_CHOICES} />
      <form onSubmit={handleSubmit}>
        <HeaderForms formData={formData} handleChange={handleChange} COMPANY_CHOICES={COMPANY_CHOICES} RESPONSABLE_CHOICES={RESPONSABLE_CHOICES} />
        <ControlDateHour formData={formData} handleChange={handleChange} />
        <ControlTurns formData={formData} handleChange={handleChange} TYPE_REPORT_CHOICES={TYPE_REPORT_CHOICES} WEATHER_CONDITION_CHOICES={WEATHER_CONDITION_CHOICES} WORK_CONDITION_CHOICES={WORK_CONDITION_CHOICES} />
        <TypeContract formData={formData} handleChange={handleChange} TYPE_CONTRACT_CHOICES={TYPE_CONTRACT_CHOICES} getProfessionalChoices={getProfessionalChoices} updateFormDataWithContracts={updateFormDataWithContracts} />
        <ActivitiesChoice formData={formData} handleChange={handleChange} ACTIVITIES_CHOICES={ACTIVITIES_CHOICES} getActivitiesChoices={getActivitiesChoices} updateFormDataWithActivities={updateFormDataWithActivities} />
        <FileUploadForm formData={formData} setFormData={setFormData} />
        
        <button type="submit" className="btn btn-primary w-100 mt-3">Enviar</button>
      </form>
      <div></div>
    </div>
    
    
  );
};

export default ReportForms;