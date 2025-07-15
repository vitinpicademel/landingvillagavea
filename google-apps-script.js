// Google Apps Script para salvar dados do formulário no Google Sheets
// Copie este código e cole no Google Apps Script (script.google.com)

function doPost(e) {
  try {
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    const { nome, email, celular, dataEnvio } = data;
    
    // ID da planilha (você vai substituir pelo seu)
    const spreadsheetId = 'SEU_ID_DA_PLANILHA_AQUI';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Adicionar nova linha com os dados
    sheet.appendRow([
      new Date(), // Timestamp
      nome,
      email,
      celular,
      dataEnvio || new Date().toISOString(),
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

function doGet(e) {
  return ContentService
    .createTextOutput('API do Formulário Villa Gávea - Funcionando!')
    .setMimeType(ContentService.MimeType.TEXT);
} 