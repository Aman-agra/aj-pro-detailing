"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const vehicle = formData.get('vehicle') as string;
  const service = formData.get('service') as string;
  const details = formData.get('details') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'AJ Pro Leads <onboarding@resend.dev>', // Default for testing, change to verified domain in prod
      to: ['humancoverai@gmail.com'], 
      subject: `New Deep Clean Quote: ${firstName} ${lastName} - ${vehicle}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 20px;">
          <h1 style="color: #ff3d00; font-size: 24px;">New Quote Request</h1>
          <p style="color: #888; font-size: 16px;">A new lead just came in from the website.</p>
          
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin-top: 20px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Vehicle:</strong> ${vehicle}</p>
            <p><strong>Service:</strong> ${service}</p>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #888;">Additional Details</h3>
            <p style="font-style: italic;">"${details}"</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Action Error:", error);
    return { success: false, error: error.message };
  }
}
