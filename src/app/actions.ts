"use server";

import { Resend } from 'resend';

export async function sendContactForm(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return { success: false, error: "Email service is not configured. Please contact us directly." };
  }

  const resend = new Resend(apiKey);

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const vehicle = formData.get('vehicle') as string;
  const service = formData.get('service') as string;
  const details = formData.get('details') as string;

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['humancoverai@gmail.com'],
      subject: `New Quote: ${firstName} ${lastName} — ${vehicle}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#ffffff;padding:40px;border-radius:20px;">
          <h1 style="color:#ff3d00;font-size:24px;margin-top:0;">New Quote Request 🚗</h1>
          <p style="color:#888;font-size:16px;">A new lead came in from the AJ Pro website.</p>
          <table style="width:100%;border-collapse:collapse;background:rgba(255,255,255,0.05);border-radius:10px;overflow:hidden;margin-top:20px;">
            <tr><td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05);color:#888;">Name</td><td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05);font-weight:bold;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05);color:#888;">Email</td><td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05);">${email}</td></tr>
            <tr><td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05);color:#888;">Phone</td><td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05);">${phone}</td></tr>
            <tr><td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05);color:#888;">Vehicle</td><td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.05);font-weight:bold;">${vehicle}</td></tr>
            <tr><td style="padding:12px 16px;color:#888;">Service</td><td style="padding:12px 16px;color:#ff3d00;font-weight:bold;">${service}</td></tr>
          </table>
          ${details ? `<div style="margin-top:24px;padding:20px;background:rgba(255,255,255,0.03);border-left:3px solid #ff3d00;border-radius:4px;"><p style="color:#888;margin:0 0 8px 0;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Additional Details</p><p style="margin:0;font-style:italic;">"${details}"</p></div>` : ''}
          <p style="color:#555;font-size:12px;margin-top:32px;text-align:center;">Sent from AJ Pro Mobile Detailing website</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send. Please call us directly." };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Server action error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
