import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


type FormData = {
  status: string;
  Type: string;
  weatherCondition: string;
  workCondition: string;
  profissionalResponsable: string;
};

const REPORT_STATUS_CHOICES = [
  ["Open", "Aberto"],
  ["Closed", "Fechado"],
  ["In Progress", "Em Andamento"],
];

const TYPE_REPORT_CHOICES = [
  ["Survey", "Visita"],
  ["Project Monitoring", "Acompanhamento de Obra"],
  ["Commissioning", "Comissionamento"],
];

const WEATHER_CONDITION_CHOICES = [
  ["Sunny", "Ensolarado"],
  ["Cloudy", "Nublado"],
  ["Rainy", "Chuvoso"],
  ["Foggy", "Nebuloso"],
  ["Stormy", "Tempestuoso"],
];

const WORK_CONDITION_CHOICES = [
  ["Practicable", "Praticável"],
  ["Partially Practicable", "Parcialmente Praticável"],
  ["Unpracticable", "Impraticável"],
];

const PROFISSIONAL_RESPONSABLE_CHOICHES = [
  ["Mario", "Mario"],
  ["Mario 2", "Mario 2"],
];

const ReportForms = () => {
  const [formData, setFormData] = useState<FormData>({
    status: "",
    Type: "",
    weatherCondition: "",
    workCondition: "",
    profissionalResponsable: "",
  });

  useEffect(() => {
    console.log("Fetching dropdown options...");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Aqui vai ficar a conexão com a api, teoricamente está pronto a conexão e vou chamar a api
    //passando informações daqui para a api, na teoria vou chamar o obj
    //chamado "formData", formData.NomeDoCampo e isso joga os dados no back
    console.log("Apertei o botão e funcionou", formData);
    alert('Relatório enviado');
  };

  return (
    <div className="container mt-5 text-light bg-dark m-2 rounded" style={{ maxWidth: "600px" }}>
      <h1 className="text-left mb-4">Relatório de Campo</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select className="form-select" name="status" value={formData.status} onChange={handleChange} required>
            <option value=""> </option>
            {REPORT_STATUS_CHOICES.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo</label>
          <select className="form-select" name="Type" value={formData.Type} onChange={handleChange} required>
            <option value=""> </option>
            {TYPE_REPORT_CHOICES.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Condição Climática</label>
          <select className="form-select" name="weatherCondition" value={formData.weatherCondition} onChange={handleChange} required>
            <option value=""> </option>
            {WEATHER_CONDITION_CHOICES.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Condição de Trabalho</label>
          <select className="form-select" name="workCondition" value={formData.workCondition} onChange={handleChange} required>
            <option value=""> </option>
            {WORK_CONDITION_CHOICES.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
            <label className="form-label">Qual Pátio</label>
            <input type="text" className="form-control" name="otherField1" placeholder="Insira seu texto aqui" />
        </div>
        <div className="mb-3">
            <label className="form-label">Nome do profissional</label>
            <select className="form-select" name="profissionalResponsable" value={formData.profissionalResponsable} onChange={handleChange} required>
            <option value=""> </option>
            {PROFISSIONAL_RESPONSABLE_CHOICHES.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
            <label className="form=label">Tarefas realizadas</label>
            <input type="file"></input>
        </div>
      

  

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ReportForms;