import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getValueByDataKey } from "recharts/types/util/ChartUtils";
import { Label } from "recharts";


type FormData = {
  status: string;
  type: string;
  morningType: string;
  morningWeather: string;
  morningWork: string;
  afternoonType: string;
  afternoonWeather: string;
  afternoonWork: string;
  nightType: string;
  nightWeather: string;
  nightWork: string;
  weatherCondition: string;
  workCondition: string;
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

const ReportForms = () => {
  const [formData, setFormData] = useState<FormData>({
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


    <div className="container mt-0 text-light bg-dark center rounded" style={{ maxWidth: "1500px"}}>
      <h1 className="text-center mb-4">Relatório de Campo</h1>
      <form onSubmit={handleSubmit}>
      <div className="text-center mb-4" style={{display: 'flex', justifyContent: 'space-between', padding: '20px', border: '1px  #000' }}>

      <div className="mb-3 text-left ml-1" style={{ flex: 1, margin: '0 10px', padding: '20px', border: '1px solid #000', textAlign: 'center' }}>
        <div className= "text-left mb-6" style={{textAlign: 'center'}}>Turno manhã:</div>
          <div style={{textAlign: "left"}}>Tipo de registro:</div>
            <select className="form-select" name="morningType" value={formData.morningType} onChange={handleChange} required>
              <label className="form-label"></label>
                <option value=""></option>
                {TYPE_REPORT_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
          ))}
            </select>
            <div style={{textAlign: 'left'}}>Condições climáticas:</div>
            <select className="form-select" name="morningWeather" value={formData.morningWeather} onChange={handleChange} required>
              <label className="form-label"></label>
                <option value=""></option>
                {WEATHER_CONDITION_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
          ))}
            </select>
            <div style={{textAlign: 'left'}}>Condições de trabalho:</div>
            <select className="form-select" name="morningWork" value={formData.morningWork} onChange={handleChange} required>
              <label className="form-label"></label>
              <option value=""></option>
              {WORK_CONDITION_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
      </div>
    

      <div className="mb-3 text-left ml-1" style={{ flex: 1, margin: '0 10px', padding: '20px', border: '1px solid #000', textAlign: 'center' }}>
        <div className= "text-left mb-6" style={{textAlign: 'center'}}>Turno tarde:</div>
          <div style={{textAlign: "left"}}>Tipo de registro:</div>
            <select className="form-select" name="afternoonType" value={formData.afternoonType} onChange={handleChange} required>
              <label className="form-label"></label>
                <option value=""></option>
                {TYPE_REPORT_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
          ))}
            </select>
            <div style={{textAlign: 'left'}}>Condições climáticas:</div>
            <select className="form-select" name="afternoonWeather" value={formData.afternoonWeather} onChange={handleChange} required>
              <label className="form-label"></label>
                <option value=""></option>
                {WEATHER_CONDITION_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
          ))}
            </select>
            <div style={{textAlign: 'left'}}>Condições de trabalho:</div>
            <select className="form-select" name="afternoonWork" value={formData.afternoonWork} onChange={handleChange} required>
              <label className="form-label"></label>
              <option value=""></option>
              {WORK_CONDITION_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>            
      </div>

      <div className="mb-3 text-left ml-1" style={{ flex: 1, margin: '0 10px', padding: '20px', border: '1px solid #000', textAlign: 'center' }}>
        <div className= "text-left mb-6" style={{textAlign: 'center'}}>Turno noite:</div>
          <div style={{textAlign: "left"}}>Tipo de registro:</div>
            <select className="form-select" name="nightType" value={formData.nightType} onChange={handleChange} required>
              <label className="form-label"></label>
                <option value=""></option>
                {TYPE_REPORT_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
          ))}
            </select>
            <div style={{textAlign: 'left'}}>Condições climáticas:</div>
            <select className="form-select" name="nightWeather" value={formData.nightWeather} onChange={handleChange} required>
              <label className="form-label"></label>
                <option value=""></option>
                {WEATHER_CONDITION_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
          ))}
            </select>
            <div style={{textAlign: 'left'}}>Condições de trabalho:</div>
            <select className="form-select" name="nightWork" value={formData.nightWork} onChange={handleChange} required>
              <label className="form-label"></label>
              <option value=""></option>
              {WORK_CONDITION_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
      </div>

    </div>

      <div style={{ maxWidth: "1500px", margin: '0 10px', padding: '20px', border: '1px solid #ffffff' }}>
        <div className="text-center mb-4" style={{ maxWidth: "1500px", border: '1px solid #000'}}>DIV para soltar os cards</div>
        <div className="text-center mb-4" style={{ maxWidth: "1500px", border: '1px solid #000'}}>DIV para definir o tipo de servico ind, dir, ter</div>
        <div className="text-center mb-4" style={{ maxWidth: "1500px", border: '1px solid #000'}}>DIV cards drag drop</div>
      </div>

  

      <button type="submit" className="btn btn-primary w-100 mt-3">
          Enviar
        </button>
      </form>
    </div>
    
  );
};

//colocar a regra para tornar 1 das 3 div sobre turno obrigatórios* melhoria 1 
export default ReportForms;