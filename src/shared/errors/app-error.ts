export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  public report: any = null;

  constructor(message: string, statusCode = 400, report?: any) {
    this.message = message;
    this.statusCode = statusCode;
    this.report = report?.response ? { ...report.response } : report;
  }
}
