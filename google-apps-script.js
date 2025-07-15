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
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Dados salvos com sucesso!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  // Manter compatibilidade com POST também
  return doGet(e);
} 