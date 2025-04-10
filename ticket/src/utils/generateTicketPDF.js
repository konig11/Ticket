import jsPDF from 'jspdf';
import QRCode from 'qrcode';

// Caminho para o ícone (ajuste conforme a estrutura do seu projeto)
import ticketIcon from '../assets/logo.png'; // ou '@/assets/ticket-icon.png' dependendo do bundler

export async function generateTicketPDF({ game, quantity, buyer = 'Cliente', ticketId }) {
    const doc = new jsPDF();

    // Dados do QR Code
    const qrData = `Bilhete ID: ${ticketId} | ${game.name} | Qt: ${quantity}`;
    const qrCodeDataURL = await QRCode.toDataURL(qrData);

    // Centralizar título
    doc.setFontSize(18);
    const title = "Bilhete Eletronico";
    const titleWidth = doc.getTextWidth(title);
    doc.text(title, (210 - titleWidth) / 2, 20); // Centraliza horizontalmente (210 é a largura A4)

    // Adicionar ícone (opcional, pode ajustar tamanho e posição)
    const iconSize = 20;
    doc.addImage(ticketIcon, 'PNG', (210 - iconSize) / 2, 25, iconSize, iconSize);

    // Conteúdo principal centralizado com base horizontal
    doc.setFontSize(12);
    const lines = [
        `Comprador: ${buyer}`,
        `Jogo: ${game.name}`,
        `Quantidade: ${quantity}`,
        `Preco Total: ${game.price * quantity} MZN`,
        `Apresente este bilhete no dia do evento`
    ];

    let startY = 60;
    lines.forEach(line => {
        const textWidth = doc.getTextWidth(line);
        doc.text(line, (210 - textWidth) / 2, startY);
        startY += 10;
    });

    // Adiciona QR Code centralizado
    const qrSize = 50;
    doc.addImage(qrCodeDataURL, 'PNG', (210 - qrSize) / 2, startY + 10, qrSize, qrSize);

    // Salvar PDF
    doc.save(`Bilhete-${ticketId}.pdf`);
}
