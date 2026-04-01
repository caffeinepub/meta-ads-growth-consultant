import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Submission {
    id: SubmissionId;
    fullName: string;
    businessEmail: string;
    website: string;
    company: string;
    monthlyAdSpend: string;
    message: string;
    timestamp: Time;
    biggestProblem: string;
}
export type SubmissionId = bigint;
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    getSubmission(id: SubmissionId): Promise<Submission>;
    submitAuditForm(fullName: string, businessEmail: string, company: string, website: string, monthlyAdSpend: string, biggestProblem: string, message: string): Promise<SubmissionId>;
}
