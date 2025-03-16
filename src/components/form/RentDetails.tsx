
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Control } from "react-hook-form";
import { FormSchemaType } from "./FormSchema";

interface RentDetailsProps {
  control: Control<FormSchemaType>;
}

const RentDetails = ({ control }: RentDetailsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">3. Rent & Payment Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <FormField
            control={control}
            name="monthlyRent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Rent (₹)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="e.g. 15000" 
                    {...field} 
                    className="input-glass" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="rentDueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rent Due Date</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-glass">
                      <SelectValue placeholder="Select due date" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1st">1st of every month</SelectItem>
                    <SelectItem value="5th">5th of every month</SelectItem>
                    <SelectItem value="10th">10th of every month</SelectItem>
                    <SelectItem value="15th">15th of every month</SelectItem>
                    <SelectItem value="Last day">Last day of every month</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="paymentMethods"
            render={() => (
              <FormItem>
                <div className="mb-2">
                  <FormLabel>Accepted Payment Methods</FormLabel>
                </div>
                <div className="space-y-2">
                  <FormField
                    control={control}
                    name="paymentMethods"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes("Bank Transfer")}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, "Bank Transfer"])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== "Bank Transfer"
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Bank Transfer
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                  <FormField
                    control={control}
                    name="paymentMethods"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes("UPI")}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, "UPI"])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== "UPI"
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            UPI
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                  <FormField
                    control={control}
                    name="paymentMethods"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes("Cash")}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, "Cash"])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== "Cash"
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Cash
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="space-y-6">
          <FormField
            control={control}
            name="securityDeposit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Security Deposit (₹)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="e.g. 50000" 
                    {...field} 
                    className="input-glass" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="advanceRent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Advance Rent (₹, if any)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="e.g. 15000" 
                    {...field} 
                    className="input-glass" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default RentDetails;
