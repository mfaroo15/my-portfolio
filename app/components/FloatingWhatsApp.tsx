import { whatsappHref, whatsappLabel } from "@/app/data/site";

export function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={whatsappHref} rel="noopener noreferrer" target="_blank" aria-label="Discuss your project on WhatsApp">
      <span className="floating-whatsapp-icon" aria-hidden="true">
        W
      </span>
      <span>{whatsappLabel}</span>
    </a>
  );
}
