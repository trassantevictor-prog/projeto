// =====================================================================
// ARQUIVO: src/components/Footer.jsx
// PAPEL: rodapé com endereço das 4 lojas, WhatsApp, links e informações legais.
// =====================================================================

import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icone from './Icone.jsx';
import { empresa } from '../data/empresa.js';
import { lojas } from '../data/lojas.js';
import { itensMenu } from '../data/menu.js';
import { criarLinkWhatsapp } from '../utils/links.js';
import { formatarTurno } from '../utils/horario.js';
import './Footer.css';

// [O quê]   Componente sem props: o rodapé é igual em todas as páginas.
export default function Footer() {
  // [O quê]   Pega o ano atual do computador da pessoa.
  // [React]   Dentro do componente podemos usar JavaScript normal antes do return.
  // [Por quê] O "© 2026" nunca fica desatualizado: ele muda sozinho no ano seguinte.
  const anoAtual = new Date().getFullYear();

  return (
    // [O quê] <footer> é a tag semântica de rodapé.
    <footer className="footer">
      <div className="container footer__grade">
        {/* ---------- Coluna 1: marca, lema e Instagram ---------- */}
        <div className="footer__marca">
          <Logo />
          {/* [React] {empresa.lema}: valor vindo do arquivo de dados. */}
          <p className="texto-suave">{empresa.lema}</p>
          {/* [O quê]   Link externo: abre em outra aba (target="_blank").
              [Por quê] rel="noopener noreferrer" impede que a página aberta controle a nossa (segurança). */}
          <a
            className="footer__instagram"
            href={`https://instagram.com/${empresa.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone nome="photo_camera" tamanho={18} />@{empresa.instagram}
          </a>
        </div>

        {/* ---------- Coluna 2: as 4 lojas (endereço + WhatsApp) ---------- */}
        <div>
          <h2 className="footer__titulo">Nossas lojas</h2>
          <ul className="footer__lojas">
            {/* [React] .map(): uma <li> para cada loja. key={loja.slug} identifica cada item. */}
            {lojas.map((loja) => (
              <li key={loja.slug} className="footer__loja">
                <strong>{loja.bairro}</strong>
                <span>{loja.endereco}</span>
                {/* [O quê]   Monta o horário a partir dos dados da loja.
                    [React]   {`...${variavel}...`}: template string dentro de chaves. */}
                <span>
                  Seg–Sáb {formatarTurno(loja.horarios.segASab)} • Dom {formatarTurno(loja.horarios.domingo)}
                </span>
                <a
                  className="footer__whatsapp"
                  href={criarLinkWhatsapp(loja.whatsapp, `Olá! Gostaria de falar com a loja ${loja.bairro}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icone nome="chat" tamanho={16} />
                  WhatsApp {loja.whatsappTexto}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Coluna 3: navegação (inclui o link Sobre Nós) ---------- */}
        <div>
          <h2 className="footer__titulo">Navegação</h2>
          <ul className="footer__links">
            {/* [O quê]   Mesmo array do cabeçalho: os links nunca ficam diferentes entre os dois. */}
            {itensMenu.map((item) => (
              <li key={item.caminho}>
                <Link to={item.caminho}>{item.rotulo}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Faixa legal ---------- */}
      {/* [O quê]   O container limita a largura; a <div> de dentro desenha a linha e o texto.
          [Por quê] Assim a linha divisória tem a mesma largura do conteúdo acima dela. */}
      <div className="container">
        <div className="footer__legal">
          <p>
            CNPJ {empresa.cnpj} • Farmacêutico(a) responsável: {empresa.responsavelTecnico} ({empresa.crf})
          </p>
          <p>
            © {anoAtual} {empresa.nome}. Todos os direitos reservados.
          </p>
          <p>Imagens ilustrativas. Medicamentos devem ser usados com orientação de um profissional de saúde.</p>
        </div>
      </div>
    </footer>
  );
}
