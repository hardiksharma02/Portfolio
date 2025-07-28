import emailjs from '@emailjs/browser';

export const emailConfig = {
  serviceId: 'service_y5f2n5b',
  templateId: 'template_01wihyb', // Updated template ID
  publicKey: 'RwlWfz1IUDBOON_if'
};

// Initialize EmailJS
emailjs.init(emailConfig.publicKey); 