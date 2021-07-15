import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = '03e11b4b967cb0a82a0541ea91aa0d';
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: '968046',
      ...request.body,
    });

    console.log(registroCriado);

    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!',
  });
}
