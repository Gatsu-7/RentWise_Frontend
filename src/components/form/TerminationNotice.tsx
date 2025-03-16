
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Control, UseFormWatch } from "react-hook-form";
import { FormSchemaType } from "./FormSchema";

interface TerminationNoticeProps {
  control: Control<FormSchemaType>;
  watch: UseFormWatch<FormSchemaType>;
}

const TerminationNotice = ({ control, watch }: TerminationNoticeProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">5. Termination & Notice Period</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <FormField
            control={control}
            name="noticePeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notice Period for Termination</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1 month">1 month</SelectItem>
                    <SelectItem value="2 months">2 months</SelectItem>
                    <SelectItem value="3 months">3 months</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="lockInPeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lock-in Period</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="No lock-in">No lock-in period</SelectItem>
                    <SelectItem value="3 months">3 months</SelectItem>
                    <SelectItem value="6 months">6 months</SelectItem>
                    <SelectItem value="12 months">12 months</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="space-y-6">
          <FormField
            control={control}
            name="holdoverClause"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Holdover Clause</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes, include penalty</SelectItem>
                    <SelectItem value="No">No penalty for holdover</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {watch("holdoverClause") === "Yes" && (
            <FormField
              control={control}
              name="holdoverDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Holdover Penalty Details</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g. 1.5x rent for each day of overstay" 
                      className="min-h-20 input-glass"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminationNotice;
