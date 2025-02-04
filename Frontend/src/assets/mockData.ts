import MRSLoco  from '../assets/MRS_AC44i-30x40.jpg'
import RailwayImage from '../assets/Beena Vision TruckView.jpg'

export class MockReportData {


    reportTitle: string;
    reportDescription: string;
    reportDate: string;
    reportStatus: string;
    reportType: string;
    reportImage: string;

    constructor() {
        this.reportTitle = 'Relatório de Visita Técnica';
        this.reportDescription = 'Este é um relatório de exemplo para uma visita técnica realizada recentemente.';
        this.reportDate = new Date().toLocaleString();
        this.reportStatus = 'Open';
        this.reportType = 'Survey';
        this.reportImage = MRSLoco;
    }
}

export const mockReport = new MockReportData();

export class MockProjectData {
    projectName: string;
    projectDescription: string;
    projectStartDate: string;
    projectEndDate: string;
    projectStatus: string;
    visits: number;
    projectPeriod: string;
    reportSummary: number;
    employedCompany: string;
    clientCompany: string;
    intermediaryCompany: string;
    projectImage: string;
    projectCategory: string;
    projectType: string;

    constructor(
        projectName: string,
        projectDescription: string,
        projectStartDate: string,
        projectEndDate: string,
        projectStatus: string,
        projectPeriod: string,
        reportSummary: number,
        employedCompany: string,
        clientCompany: string,
        intermediaryCompany: string,
        projectImage: string,
        visits: number,
        projectCategory: 'recent' | 'popular',
        projectType: string,
    ) {
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectStartDate = projectStartDate;
        this.projectEndDate = projectEndDate;
        this.projectStatus = projectStatus;
        this.projectPeriod = projectPeriod;
        this.reportSummary = reportSummary;
        this.employedCompany = employedCompany;
        this.clientCompany = clientCompany;
        this.intermediaryCompany = intermediaryCompany;
        this.projectImage = projectImage;
        this.visits = visits;
        this.projectCategory = projectCategory;
        this.projectType = projectType;                                                                                                                                                                                                                                                                                                                     
    }
}

export const mockProjects = [
    new MockProjectData('Projeto de Reforma', 'Este é um projeto de exemplo para uma reforma do auditório realizada recentemente.', new Date().toLocaleString(), new Date().toLocaleString(), 'Em Andamento', 'Mensal', 45, 'Empresa Empregadora', 'Empresa Cliente', 'Empresa Intermediaria', RailwayImage, 2000, 'recent', 'external'),
    new MockProjectData('Projeto de Construção', 'Um novo projeto de construção de um edifício comercial.', new Date().toLocaleString(), new Date().toLocaleString(), 'Planejado', 'Anual', 20, 'Construtora XYZ', 'Cliente ABC', 'Agente DEF', RailwayImage, 1950, 'recent', 'internal'),
    new MockProjectData('Projeto de Modernização', 'Modernização do sistema de TI.', new Date().toLocaleString(), new Date().toLocaleString(), 'Concluído', 'Semestral', 60, 'Wabtec Corporation', 'VLI', 'Consultoria GHI', RailwayImage, 1500, 'popular', 'external'),
    new MockProjectData('Projeto de Construção', 'Um novo projeto de construção de um edifício comercial.', new Date().toLocaleString(), new Date().toLocaleString(), 'Planejado', 'Anual', 20, 'Construtora XYZ', 'Cliente ABC', 'Agente DEF', RailwayImage, 850, 'popular', 'internal'),
];
