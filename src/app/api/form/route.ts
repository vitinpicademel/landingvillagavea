import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, celular, dataEnvio } = body;

    // Enviar dados para o Google Sheets
    const params = new URLSearchParams({
      nome: nome || '',
      email: email || '',
      celular: celular || '',
      dataEnvio: dataEnvio || new Date().toISOString()
    });

    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbyeyDrDECwNe410YC5SMcQSWCNG72JWX4Jzgp-J3M4Rf1Rt9WRkpudFbNDu2irpzyC3/exec?${params}`,
      {
        method: 'GET',
        // Remover headers que podem causar problemas
      }
    );

    // O Google Apps Script sempre retorna 200, mesmo com erro
    const responseText = await response.text();
    console.log('Resposta do Google Apps Script:', responseText);

    return NextResponse.json({ success: true, message: 'Dados enviados!' });
    
  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 