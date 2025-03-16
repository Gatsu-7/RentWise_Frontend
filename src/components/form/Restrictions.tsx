
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { FormSchemaType } from "./FormSchema";

interface RestrictionsProps {
  control: Control<FormSchemaType>;
}

const Restrictions = ({ control }: RestrictionsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">6. Restrictions & Conditions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <FormField
            control={control}
            name="sublettingAllowed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subletting Allowed?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="petPolicy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet Policy</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Pets Allowed</SelectItem>
                    <SelectItem value="No">No Pets Allowed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="guestStayDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guest Stay Duration</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g. Not more than 7 days" 
                    {...field} 
                    className="input-glass" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="space-y-6">
          <FormField
            control={control}
            name="propertyUse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Use of Property</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Residential Use Only">Residential Use Only</SelectItem>
                    <SelectItem value="Commercial Prohibited">Commercial Prohibited</SelectItem>
                    <SelectItem value="Mixed Use">Mixed Use</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="inspectionNotice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Landlord's Entry for Inspection</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select notice period" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="24-hour notice">24-hour notice</SelectItem>
                    <SelectItem value="48-hour notice">48-hour notice</SelectItem>
                    <SelectItem value="72-hour notice">72-hour notice</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Restrictions;
