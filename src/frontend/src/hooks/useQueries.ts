import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface AuditFormData {
  fullName: string;
  businessEmail: string;
  company: string;
  website: string;
  monthlyAdSpend: string;
  biggestProblem: string;
  message: string;
}

export function useSubmitAuditForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: AuditFormData) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitAuditForm(
        data.fullName,
        data.businessEmail,
        data.company,
        data.website,
        data.monthlyAdSpend,
        data.biggestProblem,
        data.message,
      );
    },
  });
}
