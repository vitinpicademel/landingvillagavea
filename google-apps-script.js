// Google Apps Script para salvar dados do formulário no Google Sheets
// Copie este código e cole no Google Apps Script (script.google.com)

function doGet(e) {
  try {
    // Pegar parâmetros da URL
    const params = e.parameter;
    const nome = params.nome || '';
    const email = params.email || '';
    const celular = params.celular || '';
    const dataEnvio = params.dataEnvio || new Date().toISOString();
    
    // ID da planilha
    const spreadsheetId = '1hzXwWeAcIG9iaw1E9k7ce6Gme15TLFtzFYeYMZrQyAY';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Adicionar nova linha com os dados
    sheet.appendRow([
      new Date(), // Timestamp
      nome,
      email,
      celular,
      dataEnvio,
      'Formulário Site' // Origem
    ]);
    
    // Retornar uma resposta simples (pode ser uma imagem 1x1 transparente)
    return ContentService
      .createTextOutput('OK')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    // Em caso de erro, ainda retorna OK para não quebrar o fluxo
    return ContentService
      .createTextOutput('OK')
      .setMimeType(ContentService.MimeType.TEXT);
  }
} 