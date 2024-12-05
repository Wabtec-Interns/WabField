export class MockReportData {
    reportTitle: string;
    reportDescription: string;
    reportDate: string;
    reportStatus: string;
    reportType: string;

    constructor() {
        this.reportTitle = 'Relatório de Visita Técnica';
        this.reportDescription = 'Este é um relatório de exemplo para uma visita técnica realizada recentemente.';
        this.reportDate = new Date().toLocaleString();
        this.reportStatus = 'Open';
        this.reportType = 'Survey';
    }
}

export const mockReport = new MockReportData();