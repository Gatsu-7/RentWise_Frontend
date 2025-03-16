
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { FormSchemaType } from "./FormSchema";
import { indianStates } from "./constants";

interface PropertyDetailsProps {
  control: Control<FormSchemaType>;
}

const PropertyDetails = ({ control }: PropertyDetailsProps) => {
  return (
    <div className="space-y-4 font-elegant">
      <h3 className="text-lg font-medium text-primary">2. Property Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <FormField
            control={control}
            name="propertyAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#403E43]">Property Address</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Flat/House No., Building Name, Street, Landmark, City, PIN" 
                    className="min-h-24 input-glass"
                    {...field} 
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
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#403E43]">Property Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Flat">Flat/Apartment</SelectItem>
                    <SelectItem value="Independent House">Independent House</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="PG/Hostel">PG/Hostel</SelectItem>
                    <SelectItem value="Commercial Space">Commercial Space</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#403E43]">State</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[300px]">
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
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

export default PropertyDetails;
