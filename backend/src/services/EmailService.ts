import nodemailer from 'nodemailer';
import { IInvoice } from '../models/Invoice';

export class EmailService {
    private static transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    static async sendInvoiceEmail(invoice: IInvoice, pdfBuffer: Buffer): Promise<void> {
        const mailOptions = {
            from: process.env.SMTP_FROM || '"Gaugon" <billing@gaugon.com>',
            to: invoice.customerEmail,
            subject: `Invoice ${invoice.invoiceNumber} from Gaugon`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6B4CFF 0%, #00E0FF 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">GAUGON</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0;">AI Automation & IT Solutions</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">Invoice ${invoice.invoiceNumber}</h2>
            
            <p style="color: #4b5563;">Dear ${invoice.customerName},</p>
            
            <p style="color: #4b5563;">
              Please find attached your invoice for <strong>$${invoice.total.toFixed(2)}</strong>.
            </p>
            
            <div style="background: white; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="color: #6b7280; padding: 8px 0;">Invoice Number:</td>
                  <td style="color: #1f2937; text-align: right; font-weight: bold;">${invoice.invoiceNumber}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; padding: 8px 0;">Amount Due:</td>
                  <td style="color: #1f2937; text-align: right; font-weight: bold;">$${invoice.total.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; padding: 8px 0;">Due Date:</td>
                  <td style="color: #1f2937; text-align: right;">${new Date(invoice.dueDate).toLocaleDateString()}</td>
                </tr>
              </table>
            </div>
            
            <p style="color: #4b5563;">
              If you have any questions about this invoice, please contact us at 
              <a href="mailto:support@gaugon.com" style="color: #6B4CFF;">support@gaugon.com</a>.
            </p>
            
            <p style="color: #4b5563;">
              Thank you for your business!<br>
              <strong>The Gaugon Team</strong>
            </p>
          </div>
          
          <div style="background: #1f2937; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              Gaugon | AI Automation & IT Solutions<br>
              <a href="https://app.gaugon.com" style="color: #6B4CFF;">app.gaugon.com</a>
            </p>
          </div>
        </div>
      `,
            attachments: [
                {
                    filename: `Invoice-${invoice.invoiceNumber}.pdf`,
                    content: pdfBuffer,
                    contentType: 'application/pdf',
                },
            ],
        };

        await this.transporter.sendMail(mailOptions);
    }
}
