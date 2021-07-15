import { siteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response) {
  const TOKEN = 'fd291735ea0ae9d8f54b7de679ba22';
  const client = new SiteClient(TOKEN);

  response.json({
    dados: 'Algum dado qualquer',
  });
}
