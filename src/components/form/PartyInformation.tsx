
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormSchemaType } from "./FormSchema";

interface PartyInformationProps {
  control: Control<FormSchemaType>;
}

const PartyInformation = ({ control }: PartyInformationProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">1. Landlord & Tenant Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 p-4 border border-border rounded-lg bg-background/50">
          <h4 className="font-medium">Landlord Details</h4>
          
          <FormField
            control={control}
            name="landlordName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Landlord's Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} className="input-glass" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="landlordAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter complete address" 
                    className="min-h-20 input-glass"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="landlordPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="10-digit number" {...field} className="input-glass" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={control}
              name="landlordEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email address" {...field} className="input-glass" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="space-y-4 p-4 border border-border rounded-lg bg-background/50">
          <h4 className="font-medium">Tenant Details</h4>
          
          <FormField
            control={control}
            name="tenantName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tenant's Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} className="input-glass" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="tenantAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter complete address" 
                    className="min-h-20 input-glass"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="tenantPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="10-digit number" {...field} className="input-glass" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={control}
              name="tenantEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email address" {...field} className="input-glass" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyInformation;
