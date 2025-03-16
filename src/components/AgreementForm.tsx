import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateAgreement } from "@/lib/api";
import { FileText, Loader2 } from "lucide-react";
import { AgreementFormData } from "@/types/agreement";
import { formSchema, defaultValues, FormSchemaType } from "./form/FormSchema";
import PartyInformation from "./form/PartyInformation";
import PropertyDetails from "./form/PropertyDetails";
import RentDetails from "./form/RentDetails";
import AgreementDuration from "./form/AgreementDuration";
import TerminationNotice from "./form/TerminationNotice";
import Restrictions from "./form/Restrictions";
import AdditionalClauses from "./form/AdditionalClauses";

interface AgreementFormProps {
  onAgreementGenerated: (agreement: string) => void;
}

const AgreementForm = ({ onAgreementGenerated }: AgreementFormProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values: FormSchemaType) => {
    setIsGenerating(true);
    try {
      const agreementText = await generateAgreement(
        values as AgreementFormData
      );

      onAgreementGenerated(agreementText);
      toast.success("Agreement generated successfully");
    } catch (error) {
      toast.error("Failed to generate agreement. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="glass-panel w-full max-w-6xl mx-auto animate-scale-in">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-medium">Rental Agreement Details</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Party Information Section */}
            <PartyInformation control={form.control} />

            {/* Property Details Section */}
            <PropertyDetails control={form.control} />

            {/* Rent Details Section */}
            <RentDetails control={form.control} />

            {/* Agreement Duration Section */}
            <AgreementDuration control={form.control} watch={form.watch} />

            {/* Termination & Notice Period Section */}
            <TerminationNotice control={form.control} watch={form.watch} />

            {/* Restrictions & Conditions Section */}
            <Restrictions control={form.control} />

            {/* Additional Clauses Section */}
            <AdditionalClauses control={form.control} />

            <Button
              type="submit"
              className="w-full mt-8"
              size="lg"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Agreement...
                </>
              ) : (
                "Generate Agreement"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AgreementForm;
