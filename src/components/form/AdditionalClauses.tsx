
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormSchemaType } from "./FormSchema";

interface AdditionalClausesProps {
  control: Control<FormSchemaType>;
}

const AdditionalClauses = ({ control }: AdditionalClausesProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">7. Additional Clauses</h3>
      <FormField
        control={control}
        name="customClauses"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Custom Clauses (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Add any additional terms or conditions here..." 
                className="min-h-36 input-glass"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default AdditionalClauses;
