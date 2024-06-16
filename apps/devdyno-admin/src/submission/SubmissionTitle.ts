import { Submission as TSubmission } from "../api/submission/Submission";

export const SUBMISSION_TITLE_FIELD = "status";

export const SubmissionTitle = (record: TSubmission): string => {
  return record.status?.toString() || String(record.id);
};
