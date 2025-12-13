import PDFDocument from 'pdfkit';
import { IInvoice } from '../models/Invoice';

export class PDFService {
    static generateInvoicePDF(invoice: IInvoice): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            try {
                const doc = new PDFDocument({ margin: 50 });
                const buffers: Buffer[] = [];

                doc.on('data', buffers.push.bind(buffers));
                doc.on('end', () => resolve(Buffer.concat(buffers)));

                // Header
                doc.fontSize(24).font('Helvetica-Bold').text('GAUGON', 50, 50);
                doc.fontSize(10).font('Helvetica').text('AI Automation & IT Solutions', 50, 80);
                doc.text('app.gaugon.com', 50, 95);

                // Invoice Title
                doc.fontSize(20).font('Helvetica-Bold').text('INVOICE', 400, 50, { align: 'right' });
                doc.fontSize(10).font('Helvetica').text(`#${invoice.invoiceNumber}`, 400, 75, { align: 'right' });
                doc.text(`Date: ${new Date(invoice.createdAt).toLocaleDateString()}`, 400, 90, { align: 'right' });
                doc.text(`Due: ${new Date(invoice.dueDate).toLocaleDateString()}`, 400, 105, { align: 'right' });

                // Bill To
                doc.fontSize(12).font('Helvetica-Bold').text('Bill To:', 50, 150);
                doc.fontSize(10).font('Helvetica').text(invoice.customerName, 50, 170);
                doc.text(invoice.customerEmail, 50, 185);

                // Status Badge
                const statusColors: Record<string, string> = {
                    draft: '#6B7280',
                    sent: '#3B82F6',
                    paid: '#10B981',
                    overdue: '#EF4444',
                    cancelled: '#9CA3AF',
                };
                doc.fontSize(10).fillColor(statusColors[invoice.status] || '#6B7280')
                    .text(invoice.status.toUpperCase(), 400, 150, { align: 'right' });
                doc.fillColor('#000000');

                // Table Header
                const tableTop = 240;
                doc.fontSize(10).font('Helvetica-Bold');
                doc.text('Description', 50, tableTop);
                doc.text('Qty', 280, tableTop, { width: 50, align: 'center' });
                doc.text('Unit Price', 340, tableTop, { width: 80, align: 'right' });
                doc.text('Total', 430, tableTop, { width: 80, align: 'right' });

                // Line under header
                doc.moveTo(50, tableTop + 15).lineTo(510, tableTop + 15).stroke();

                // Table Rows
                let y = tableTop + 25;
                doc.font('Helvetica');
                for (const item of invoice.items) {
                    doc.text(item.description, 50, y, { width: 220 });
                    doc.text(String(item.quantity), 280, y, { width: 50, align: 'center' });
                    doc.text(`$${item.unitPrice.toFixed(2)}`, 340, y, { width: 80, align: 'right' });
                    doc.text(`$${item.total.toFixed(2)}`, 430, y, { width: 80, align: 'right' });
                    y += 20;
                }

                // Totals
                y += 20;
                doc.moveTo(340, y).lineTo(510, y).stroke();
                y += 10;

                doc.font('Helvetica').text('Subtotal:', 340, y, { width: 80, align: 'right' });
                doc.text(`$${invoice.subtotal.toFixed(2)}`, 430, y, { width: 80, align: 'right' });
                y += 20;

                if (invoice.taxRate > 0) {
                    doc.text(`Tax (${invoice.taxRate}%):`, 340, y, { width: 80, align: 'right' });
                    doc.text(`$${invoice.taxAmount.toFixed(2)}`, 430, y, { width: 80, align: 'right' });
                    y += 20;
                }

                doc.font('Helvetica-Bold').fontSize(12);
                doc.text('Total:', 340, y, { width: 80, align: 'right' });
                doc.text(`$${invoice.total.toFixed(2)}`, 430, y, { width: 80, align: 'right' });

                // Notes
                if (invoice.notes) {
                    y += 50;
                    doc.fontSize(10).font('Helvetica-Bold').text('Notes:', 50, y);
                    doc.font('Helvetica').text(invoice.notes, 50, y + 15, { width: 400 });
                }

                // Footer
                doc.fontSize(8).font('Helvetica').fillColor('#6B7280');
                doc.text('Thank you for your business!', 50, 720, { align: 'center', width: 500 });
                doc.text('Gaugon - AI Automation & IT Solutions | app.gaugon.com', 50, 735, { align: 'center', width: 500 });

                doc.end();
            } catch (error) {
                reject(error);
            }
        });
    }
}
