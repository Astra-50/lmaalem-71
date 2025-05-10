
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ServiceSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ServiceSelect = ({ value, onChange, placeholder }: ServiceSelectProps) => {
  const { t } = useLanguage();
  
  const services = [
    { id: "assembly", name: t('category.assembly') },
    { id: "mounting", name: t('category.mounting') },
    { id: "moving", name: t('category.moving') },
    { id: "cleaning", name: t('category.cleaning') },
    { id: "outdoor", name: t('category.outdoor') },
    { id: "repairs", name: t('category.repairs') },
    { id: "painting", name: t('category.painting') }
  ];

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder || t('job.service.placeholder')} />
      </SelectTrigger>
      <SelectContent>
        {services.map((service) => (
          <SelectItem key={service.id} value={service.id}>
            {service.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ServiceSelect;
