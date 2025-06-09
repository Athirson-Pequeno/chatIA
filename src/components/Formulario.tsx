import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import { Card, CardContent } from "@mui/material";

type FormData = {
  
  // 1. Identificação Completa - Recorrente
  nomeRazaoSocial: string;
  cnpjCpf: string;
  endereco: string;
  cep: string;
  telefone: string;
  email: string;
  representanteLegal: string;

  // 1. Identificação Completa - Órgão/Entidade
  nomeOrgao: string;
  enderecoOrgao: string;
  setorResponsavel: string;

  // 2. Informações da Licitação
  numeroLicitacao: string;
  objetoLicitacao: string;
  dataPublicacaoEdital: string;
  dataSessaoPublica: string;
  valorEstimado: string;
  criterioJulgamento: string;
  linkEdital: string;

  // 3. Ato Recorrido
  descricaoAto: string;
  fundamentosDecisao: string;
  dataPublicacaoAto: string;

  // 4. Fundamentos do Recurso
  argumentosFato: string;
  argumentosDireito: string;
  argumentosTecnicos: string;
  demonstracaoPrejuizo: string;

  // 5. Documentos Anexos (serão texto para nomes/descrições no form)
  copiaEdital: string;
  copiaAtoRecorrido: string;
  procuracao: string;
  comprovacaoFatos: string;
  laudosTecnicos: string;
  outrosDocumentos: string;

  // 6. Pedido
  pedido: string;

  // 7. Informações Adicionais
  informacoesAdicionais: string;
};

function formatFormDataToString(data: FormData): string {
  return `
1. Identificação Completa
Do Recorrente:
Nome/Razão Social completa: ${data.nomeRazaoSocial}
CNPJ/CPF: ${data.cnpjCpf}
Endereço completo: ${data.endereco}
CEP: ${data.cep}
Telefone: ${data.telefone}
E-mail: ${data.email}
Dados do representante legal (se aplicável): ${data.representanteLegal}

Do Órgão/Entidade Licitante:
Nome do Órgão/Entidade: ${data.nomeOrgao}
Endereço completo: ${data.enderecoOrgao}
Setor responsável pela licitação: ${data.setorResponsavel}

2. Informações da Licitação:
Número da Licitação: ${data.numeroLicitacao}
Objeto da Licitação: ${data.objetoLicitacao}
Data da Publicação do Edital: ${data.dataPublicacaoEdital}
Data da Sessão Pública: ${data.dataSessaoPublica}
Valor Estimado da Licitação: ${data.valorEstimado}
Critério de Julgamento: ${data.criterioJulgamento}
Link para o Edital: ${data.linkEdital}

3. Ato Recorrido:
Descrição Detalhada do Ato: ${data.descricaoAto}
Fundamentos da Decisão: ${data.fundamentosDecisao}
Data da Publicação/Notificação do Ato Recorrido: ${data.dataPublicacaoAto}

4. Fundamentos do Recurso:
Argumentos de Fato: ${data.argumentosFato}
Argumentos de Direito: ${data.argumentosDireito}
Argumentos Técnicos: ${data.argumentosTecnicos}
Demonstração de Prejuízo: ${data.demonstracaoPrejuizo}

5. Documentos Anexos:
Cópia do edital da licitação: ${data.copiaEdital}
Cópia do ato recorrido: ${data.copiaAtoRecorrido}
Procuração: ${data.procuracao}
Documentos que comprovam os fatos alegados: ${data.comprovacaoFatos}
Laudos técnicos, pareceres de especialistas: ${data.laudosTecnicos}
Outros documentos relevantes: ${data.outrosDocumentos}

6. Pedido:
Pedido: ${data.pedido}

7. Informações Adicionais:
Informações adicionais relevantes: ${data.informacoesAdicionais}
  `.trim();
}

const INITIAL_STATE: FormData = {
  nomeRazaoSocial: "",
  cnpjCpf: "",
  endereco: "",
  cep: "",
  telefone: "",
  email: "",
  representanteLegal: "",

  nomeOrgao: "",
  enderecoOrgao: "",
  setorResponsavel: "",

  numeroLicitacao: "",
  objetoLicitacao: "",
  dataPublicacaoEdital: "",
  dataSessaoPublica: "",
  valorEstimado: "",
  criterioJulgamento: "",
  linkEdital: "",

  descricaoAto: "",
  fundamentosDecisao: "",
  dataPublicacaoAto: "",

  argumentosFato: "",
  argumentosDireito: "",
  argumentosTecnicos: "",
  demonstracaoPrejuizo: "",

  copiaEdital: "",
  copiaAtoRecorrido: "",
  procuracao: "",
  comprovacaoFatos: "",
  laudosTecnicos: "",
  outrosDocumentos: "",

  pedido: "",

  informacoesAdicionais: "",
};

export default function FormularioRecurso() {
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const navigate = useNavigate();

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formattedText = formatFormDataToString(formData);
      console.log("Texto formatado:", formattedText);

      navigate("/resultado", {
        state: { texto: formattedText },
      });
    } catch (error) {
      console.error("Erro ao navegar:", error);
    }
  }

  return (
  <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", pt: 25 }}>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
      noValidate
      autoComplete="off"
    >
      {/* CARD 1 - Identificação Completa */}
      <Card elevation={3} sx={{ borderRadius: 4, mb: 3 }}>
        <CardContent sx={{ px: 7, pt: 7, pb: 10 }}>
          <Typography variant="h5" gutterBottom>1. Identificação Completa</Typography>

          <Typography variant="subtitle1" gutterBottom>Do Recorrente</Typography>
          <TextField label="Nome/Razão Social completa" name="nomeRazaoSocial" value={formData.nomeRazaoSocial} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="CNPJ/CPF" name="cnpjCpf" value={formData.cnpjCpf} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Endereço completo" name="endereco" value={formData.endereco} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="CEP" name="cep" value={formData.cep} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Telefone" name="telefone" value={formData.telefone} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
          <TextField label="E-mail" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Dados do representante legal (se aplicável)" name="representanteLegal" value={formData.representanteLegal} onChange={handleChange} fullWidth multiline minRows={2} sx={{ mb: 4 }} />

          <Typography variant="subtitle1" gutterBottom>Do Órgão/Entidade Licitante</Typography>
          <TextField label="Nome do Órgão/Entidade" name="nomeOrgao" value={formData.nomeOrgao} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Endereço completo" name="enderecoOrgao" value={formData.enderecoOrgao} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Setor responsável pela licitação" name="setorResponsavel" value={formData.setorResponsavel} onChange={handleChange} fullWidth sx={{ mb: 4 }} />
        </CardContent>
      </Card>

      {/* CARD 2 - Informações da Licitação */}
      <Card elevation={3} sx={{ borderRadius: 4, mb: 3 }}>
        <CardContent sx={{ px: 7, pt: 7, pb: 10 }}>
          <Typography variant="h5" gutterBottom>2. Informações da Licitação</Typography>
          <TextField label="Número da Licitação (Pregão, Concorrência, etc.)" name="numeroLicitacao" value={formData.numeroLicitacao} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Objeto da Licitação" name="objetoLicitacao" value={formData.objetoLicitacao} onChange={handleChange} fullWidth multiline minRows={3} required sx={{ mb: 2 }} />
          <TextField label="Data da Publicação do Edital" name="dataPublicacaoEdital" type="date" value={formData.dataPublicacaoEdital} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
          <TextField label="Data da Sessão Pública" name="dataSessaoPublica" type="date" value={formData.dataSessaoPublica} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
          <TextField label="Valor Estimado da Licitação" name="valorEstimado" value={formData.valorEstimado} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
          <TextField label="Critério de Julgamento" name="criterioJulgamento" value={formData.criterioJulgamento} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
          <TextField label="Link para o Edital" name="linkEdital" value={formData.linkEdital} onChange={handleChange} fullWidth sx={{ mb: 4 }} />
        </CardContent>
      </Card>

      {/* CARD 3 - Ato Recorrido */}
      <Card elevation={3} sx={{ borderRadius: 4, mb: 3 }}>
        <CardContent sx={{ px: 7, pt: 7, pb: 10 }}>
          <Typography variant="h5" gutterBottom>3. Ato Recorrido</Typography>
          <TextField label="Descrição Detalhada do Ato" name="descricaoAto" value={formData.descricaoAto} onChange={handleChange} fullWidth multiline minRows={3} required sx={{ mb: 2 }} />
          <TextField label="Fundamentos da Decisão" name="fundamentosDecisao" value={formData.fundamentosDecisao} onChange={handleChange} fullWidth multiline minRows={3} sx={{ mb: 2 }} />
          <TextField label="Data da Publicação/Notificação do Ato Recorrido" name="dataPublicacaoAto" type="date" value={formData.dataPublicacaoAto} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} sx={{ mb: 4 }} />
        </CardContent>
      </Card>

      {/* CARD 4 - Fundamentos do Recurso */}
      <Card elevation={3} sx={{ borderRadius: 4, mb: 3 }}>
        <CardContent sx={{ px: 7, pt: 7, pb: 10 }}>
          <Typography variant="h5" gutterBottom>4. Fundamentos do Recurso</Typography>
          <TextField label="Argumentos de Fato" name="argumentosFato" value={formData.argumentosFato} onChange={handleChange} fullWidth multiline minRows={4} required sx={{ mb: 2 }} />
          <TextField label="Argumentos de Direito" name="argumentosDireito" value={formData.argumentosDireito} onChange={handleChange} fullWidth multiline minRows={4} sx={{ mb: 2 }} />
          <TextField label="Argumentos Técnicos (se aplicável)" name="argumentosTecnicos" value={formData.argumentosTecnicos} onChange={handleChange} fullWidth multiline minRows={4} sx={{ mb: 2 }} />
          <TextField label="Demonstração de Prejuízo" name="demonstracaoPrejuizo" value={formData.demonstracaoPrejuizo} onChange={handleChange} fullWidth multiline minRows={3} sx={{ mb: 4 }} />
        </CardContent>
      </Card>

      {/* CARD 5 - Documentos Anexos */}
      <Card elevation={3} sx={{ borderRadius: 4, mb: 3 }}>
        <CardContent sx={{ px: 7, pt: 7, pb: 10 }}>
          <Typography variant="h5" gutterBottom>5. Documentos Anexos</Typography>
          <TextField label="Cópia do edital da licitação" name="copiaEdital" value={formData.copiaEdital} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
          <TextField label="Cópia do ato recorrido" name="copiaAtoRecorrido" value={formData.copiaAtoRecorrido} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
          <TextField label="Procuração (se aplicável)" name="procuracao" value={formData.procuracao} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
          <TextField label="Documentos que comprovam os fatos alegados" name="comprovacaoFatos" value={formData.comprovacaoFatos} onChange={handleChange} fullWidth multiline minRows={2} sx={{ mb: 2 }} />
          <TextField label="Laudos técnicos, pareceres de especialistas" name="laudosTecnicos" value={formData.laudosTecnicos} onChange={handleChange} fullWidth multiline minRows={2} sx={{ mb: 2 }} />
          <TextField label="Outros documentos relevantes" name="outrosDocumentos" value={formData.outrosDocumentos} onChange={handleChange} fullWidth multiline minRows={2} sx={{ mb: 4 }} />
        </CardContent>
      </Card>

      {/* CARD 6 - Pedido */}
      <Card elevation={3} sx={{ borderRadius: 4, mb: 3 }}>
        <CardContent sx={{ px: 7, pt: 7, pb: 10 }}>
          <Typography variant="h5" gutterBottom>6. Pedido</Typography>
          <TextField label="O que você quer que a Administração faça?" name="pedido" value={formData.pedido} onChange={handleChange} fullWidth multiline minRows={3} required sx={{ mb: 4 }} />
        </CardContent>
      </Card>

      {/* CARD 7 - Informações Adicionais */}
      <Card elevation={3} sx={{ borderRadius: 4, mb: 3 }}>
        <CardContent sx={{ px: 7, pt: 7, pb: 10 }}>
          <Typography variant="h5" gutterBottom>7. Informações Adicionais</Typography>
          <TextField label="Informações adicionais relevantes" name="informacoesAdicionais" value={formData.informacoesAdicionais} onChange={handleChange} fullWidth multiline minRows={3} sx={{ mb: 4 }} />
        </CardContent>
      </Card>

      {/* Botão Final */}
      <Button
        variant="contained"
        type="submit"
        sx={{
          background: "#05467f",
          width: "300px",
          mt: 6,
          mb: 8,
          py: 1.5,
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "8px",
          boxShadow: 2,
          mx: "auto",
        }}
      >
        Construir Recurso
      </Button>
    </Box>
  </Box>
  );
}
