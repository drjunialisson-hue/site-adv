import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Service, allServices } from "@/data/services";
import { Phone } from "lucide-react";

interface ServiceModalProps {
  service: typeof allServices[0] | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceModal = ({ service, open, onOpenChange }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl">{service.text}</DialogTitle>
          </div>
          {service.description && (
            <DialogDescription className="text-base text-foreground/70 pt-2">
              {service.description}
            </DialogDescription>
          )}
        </DialogHeader>

        {service.details && service.details.length > 0 && (
          <div className="space-y-4 py-4">
            <h3 className="font-semibold text-foreground">Principais aspectos:</h3>
            <ul className="space-y-2">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground/70 leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button
            variant="gold"
            className="flex-1"
            onClick={() => {
              onOpenChange(false);
              window.location.href = "/#contato";
            }}
          >
            Falar com Advogado
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              onOpenChange(false);
              window.location.href = "tel:+5571997071372";
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Ligar Agora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;

