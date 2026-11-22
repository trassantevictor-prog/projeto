// =====================================================================
// ARQUIVO: src/data/imagens.js
// PAPEL: guarda o endereço (URL) de cada foto usada no site, em um só lugar.
//
// LEGENDA DOS COMENTÁRIOS NESTE PROJETO:
//   [O quê]   = o que aquela linha faz
//   [React]   = a qual conceito do React ela se liga
//   [Por quê] = que problema ela resolve para o site
// =====================================================================

// [O quê] Cria e EXPORTA um objeto com todas as URLs de imagem.
// [React] Não é React puro: é JavaScript (módulo ES). Dados ficam separados dos componentes.
// [Por quê] Se uma foto mudar, você troca aqui UMA vez e o site inteiro atualiza.
//
// ATENÇÃO: estas fotos são ilustrativas, geradas pelo Stitch no protótipo.
// Antes de publicar, coloque fotos REAIS das lojas na pasta "public/imagens"
// e troque as URLs por caminhos como '/imagens/loja-moinhos.jpg'.
export const imagens = {
  // Foto grande da capa (Início).
  hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCWhclUk1gqXdRkcIiiZN_FdZMY8DFdPCDozY4sZAPDzpP4MJxE19cCmeHggZnkNZXtom5guMBdX2Mhqv-z3IBKAtX28E4bWg_8bfo0168cbk99wol8w9V7Y-xZ5qASDHReuuewRFeQfqi1XTWdAyN7paor7To3W3JVGLvWgBsuROyUvqjZs4HkVEQXlBHbQWMUa9z3-2lTRTSNk-SQcuE7fHoaSZWz-y0hlK3XR-kj',
  // Fachada da loja Moinhos de Vento.
  lojaMoinhos:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDjl0eAHpkFf1nQ9_4BrqWgaChVRhzyPLM0DAy7LCg4gT070bqWuUgZW-WzrfGgM-XCCwVJCT-vDlRdFp8MZ8SmHfp1RKPvyuR5qETjAvs3xrvWSy3btM0v-J4wyVW_GMlig8Vz6tm396wnZ9xkbUEX2jqgqKgoEISvSkc97gJmPZl5brYwG4tjyKoqTIRj_7vD69QoEtFQDZyuHD5yAd4-kLizCgg2E8Nw3dYQlfYC',
  // Fachada da loja Bela Vista.
  lojaBelaVista:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBmbdCNf5c4faen_yTVIs164w3t8K08b_UQO1yEWyZUVG61mpoEZyuZhhujG1fr0yJYUAsH59RhFLc3TmWSLunrMadO_GeYEJoxnZkNZeDlUsq21fN8PkqC1-IFeuCYyAFalztI_ytMIFGNpSZqdN_iibTDBMjTKYEEKURw1wSMA-TwubX9FdiuGfZHoChuIP8QWYhpRvS1s0Di6HizOfSAIe2PHvIcygS8wbZ60_Gl',
  // Fachada da loja Petrópolis.
  lojaPetropolis:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCrIaAj8LnPHzsH9CwOPffe7ulDzT1OnDwd7LZb8OWrfJxggaglWD0KdN4NyjrpoLFHLPNm3HZ5LpiWec5Kg2ZeCZy-ctWk44rAOOIkI7mY8uIi01Gx__YFi78tyxKwXPlo0Y0Opq_2XG2aYHJ_hVO1ztzq4yqBTNSw2-hOF2WiR1BlytDWGWtPP9_VzaMK0WsvIp4_XslpTErapxrh6GseE1izdYc_J6W3V0p7aluH',
  // Fachada da loja Menino Deus.
  lojaMeninoDeus:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA9kH_kHFDlZ7uUYB2-zFp8t8q4c-IVv0peX55CESV_2-YWIAibpj-zeO7yzl0J0cc5rEFpFI-9roVmSfZEyeSMAGy6xOjqQaTP8Xc3k42mMwxBrH48B4-NzhG2a-WAuf63QyBXRHpTrKddRuboSbL9wq0_f49VF-L2UAX45HjcLsaPrKQiHhum5SSteMSsMWawgaRySJ30Nwn2DBCtkuY7C0YDvnPMAs9VNkvfTIUf',
  // Foto da dica sobre pressão arterial.
  dicaPressao:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA6o8kv9T9WNOdLtB3gDDcYRPVSq4hV_F1UAivH6NVpE6fgyDVqwSNX9wO2Gr-BFLw1dea8q6FJBoH-juDfC-KYUWgnEM8I-GbIoVLzh2g6m01IyNEBZU8EtVa3pJs0C2f4fxP2Ib0sSlVQO2nKyrd5y-Iv3r3d_l2bvexUHp_eMZvBD3_E0uKOpzSz_UatTbLXxe2xm9EIjtQj53uuCCqzLv-guXXYV9YDtbDnhSIu',
  // Foto da dica sobre cuidados com a pele.
  dicaPele:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8oFbaNx3lCsQbWvJjXmAkZy75-ZDIun0tFMethnHd1BNEHy3fjEV2mBczkgiJccDU6mBU7a07P1qarJ6eAgvfJbDeB9_oLWDy415NxE3QMJPcVacISPF5Q12K1STMcIvFzPbA5isQ8OBfRabodHwmnbx-2usJaqUD0BzUTuPlmGI_YhK2EFHNdLlgfbsK6wjGYdXSMh9IHhvp7Y4THQqF6_0-aZMqj-kHBgpd0G-q',
  // Foto da dica sobre vacinas e imunidade.
  dicaVacinas:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCz9Glp1Vqjv0oAn8dpIKO5Mr-qM27Czr_dSlS-D_2Blmo-13YCBhq5oTe5emeRZRrKWog7mzE6wnYWGPDzFgdnqiHqjdKpdQbkZu9Kvs0hbu4QnPvglnBXuxhgtZbnsaTch3F0juxV87f4O4hY4f21YH3ghXhGHJFiXyaWjW37RloYVAivt4iMhQWu9ZVew1JprhwkZP1yJeq1u9XfnE1-D0-lIk0ggo6NhuyU562V',
  // Foto do espaço de dermocosméticos (página da loja).
  interiorDermo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAkksIDzhHMjDWioEYuNfmrjWEF0_rev7EE0l5jfdhVeojx04v8G7LKd9pIn38CdW68pENSu0vV9LrX63GAqNX6lfGigzRCGMPgSxR-6EQuaTbnCGhJ_BCc0pKDNvQrWpyhbuuDN5nOVtv-gjnfgTHEOCfLLtReGEaQzWggWT0uv6vKDwDEztf-LVKbE8xTmIG-P-cf8zk4RPj6UJhahFDj-IfNR6LdfUpl5XyhVo5g',
  // Foto da sala de atendimento farmacêutico (página da loja).
  interiorConsultorio:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBrzQ_W6uHkbMVd1-J3vACvGiCu2UNjox5LDZTH5s1g9CEpZXlLPWoQeNSbrWlkgWInd_VdST_vMiD-dE9IL_fHmf0voa_H0eGhNRgrYgPTfsbxc5DM2TffoPXqJAqt1iP8OGFC5JisfYJc0BqbkTLiEshD1Am6g7g5lOHMtB8PgeRmMwpvLcCpW9NuZqNmmysjuMByKgQ_E6UJvXsXwSWrfEWed9v-qZEIlnxZyCOn',
  // Foto do interior da farmácia (página Sobre Nós).
  sobre:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC6McLAy90XVanfvSFkbZfUJtj1J-tOdnTaTM5ZdLpb0Z70P7bcdRcIlOonAgwDH7aFl4sRNdJUQifzkwIG_Of-ffVr9Q6ZDngdbBXgkj-ZwsBmm8SWrrFZJeDq5rM1dMCS-FkShdJzdnS5p8uPSU3m1AdzQFgR_M952jt-UBFdj-NW86aQkBeuIjqKqg9xF0OFaLxhbcNxzTE4oOScYcTIC_qcoQoaRNWWckUzYf0N',
};
