import { Component, OnInit } from '@angular/core';
const data = [
  {
    id: '1',
    title: 'Nasa confirma existência de água na lua de Júpiter',
    subtitle: 'Equipe do Goddard Space Flight Center encontrou traços de vapor de água na lua de Júpiter',
    published: {
      month: 'Dezembro',
      day: '2',
      year: '2019'
    },
    thumbnail: 'https://img.olhardigital.com.br/uploads/acervo_imagens/2019/11/r16x9/20191119084908_1200_675_-_lua_europa.jpg',
    text: 'A Nasa confirmou que a equipe de pesquisadores do Goddard Space Flight Center encontrou traços de vapor de água acima da superfície da lua de Júpiter, a Europa. Essa é uma grande descoberta, já que o satélite natural do planeta é uma das prioridades na busca de vida extraterrestre.'
  },
  {
    id: '2',
    title: 'Governo disponibiliza atendimento virtual via WhatsApp',
    subtitle: 'Os usuários podem ter suas dúvidas respondidas por meio do aplicativo de mensagens; a ideia do governo é economizar até R$ 260 mil por ano com a nova função.',
    published: {
      month: 'Dezembro',
      day: '4',
      year: '2019'
    },
    thumbnail: 'https://img.olhardigital.com.br/uploads/acervo_imagens/2019/04/r16x9/20190409072534_1200_675_-_whatsapp.jpg',
    text: 'Como forma de inovar e baratear custos, o Ministério da Economia mudou a forma como atende usuários do ComprasNet, Plataforma +Brasil e Sistema de Concessão de Diárias e Passagens. A partir desta semana, todo atendimento para responder dúvidas será feito por WhatsApp.'
  },
  {
    id: '3',
    title: 'Carteira Digital de Trânsito vai alertar motorista sobre multas pelo celular',
    subtitle: 'Entre as novidades também está a notificação de recall, consulta de infrações e notificações sobre quando a CNH estiver próxima do vencimento.',
    published: {
      month: 'Dezembro',
      day: '3',
      year: '2019'
    },
    thumbnail: 'https://img.olhardigital.com.br/uploads/acervo_imagens/2019/11/r16x9/20191119092129_1200_675_-_carteira_digital_de_transito.jpg',
    text: 'A nova versão da Carteira Digital de Trânsito (CDT) foi disponibilizada nesta segunda-feira (18) pelo Departamento Nacional de Trânsito (Denatran), órgão relacionado ao Ministério da Infraestrutura. O lançamento ocorreu em São Paulo, durante a abertura do Salão Duas Rodas e entre as novidades do aplicativo está a possibilidade de consultar infrações registradas no nome do condutor, receber alertas sobre quando a CNH estiver próxima do vencimento e notificações para o motorista em caso de "recall" do automóvel.'
  }
];
@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})
export class FeedPage implements OnInit {

  articles: any = [];

  constructor() { }

  ngOnInit() {
    this.articles = data;
  }
}