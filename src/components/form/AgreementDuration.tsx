
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";
import { Control, UseFormWatch } from "react-hook-form";
import { FormSchemaType } from "./FormSchema";

interface AgreementDurationProps {
  control: Control<FormSchemaType>;
  watch: UseFormWatch<FormSchemaType>;
}

const AgreementDuration = ({ control, watch }: AgreementDurationProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">4. Agreement Duration & Renewal</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="startDate"
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  label="Start Date"
                  placeholder="Select start date"
                />
              )}
            />
            
            <FormField
              control={control}
              name="endDate"
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  label="End Date"
                  placeholder="Select end date"
                />
              )}
            />
          </div>
          
          <FormField
            control={control}
            name="leaseDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lease Duration</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="11 months">11 months</SelectItem>
                    <SelectItem value="12 months">12 months</SelectItem>
                    <SelectItem value="24 months">24 months</SelectItem>
                    <SelectItem value="36 months">36 months</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
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
            name="renewalClause"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Renewal Clause</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes, renewable</SelectItem>
                    <SelectItem value="No">No, not renewable</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {watch("renewalClause") === "Yes" && (
            <FormField
              control={control}
              name="renewalDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Renewal Process Details</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g. Renewal with 5% increase in rent" 
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

export default AgreementDuration;
