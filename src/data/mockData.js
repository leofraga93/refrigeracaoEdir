export const WHATSAPP_NUMBER = '557199153220'

/** Altere para `true` quando quiser exibir o crédito do desenvolvedor no rodapé. */
export const SHOW_DEVELOPER_CREDIT = false

export const developerCredit = {
  linkedin: 'https://www.linkedin.com/in/leofraga93/',
}

export const companyInfo = {
  name: 'Refrigeração Edir',
  tagline: 'Climatização, elétrica e PMOC com excelência técnica',
  phone: '(71) 9915-3220',
  email: 'contato@refrigeracaoedir.com.br',
  regions: ['Salvador', 'Feira de Santana', 'Região Metropolitana'],
}

export const services = [
  {
    id: 'instalacao-manutencao',
    title: 'Instalação e Manutenção',
    subtitle: 'Ar-condicionado residencial e comercial',
    description:
      'Instalação profissional, limpeza, recarga de gás e manutenção preventiva para garantir conforto e economia de energia.',
    image: 'https://images.unsplash.com/photo-1718203862467-c33159fdc504?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlight: false,
    audience: 'B2C',
  },
  {
    id: 'pmoc',
    title: 'PMOC',
    subtitle: 'Plano de Manutenção, Operação e Controle',
    description:
      'Documentação técnica completa e conformidade legal para empresas e órgãos públicos participarem de licitações com segurança.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    highlight: true,
    audience: 'B2B',
  },
  {
    id: 'eletrica',
    title: 'Serviços Elétricos',
    subtitle: 'Infraestrutura e adequação de circuitos',
    description:
      'Adequação de pontos elétricos, instalação de disjuntores e infraestrutura para equipamentos de climatização.',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    highlight: false,
    audience: 'B2C',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendes',
    role: 'Gerente de Facilities — Empresa de Logística',
    text: 'Contratamos o PMOC para nossa sede e a documentação foi aceita sem ressalvas na licitação. Profissionalismo do início ao fim.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
  },
  {
    id: 2,
    name: 'Ana Paula Souza',
    role: 'Proprietária — Residência em Salvador',
    text: 'Instalação rápida e limpa. O orçamento pelo site foi super prático — em minutos já estávamos conversando no WhatsApp.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
  {
    id: 3,
    name: 'Roberto Lima',
    role: 'Diretor — Clínica Médica',
    text: 'Manutenção preventiva impecável. Ambiente sempre climatizado e equipe pontual. Recomendo para empresas de saúde.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
]

export const equipmentOptions = [
  {
    id: 'pequeno',
    label: 'Ambiente Pequeno',
    detail: 'Até 12m² / ~9.000 BTUs',
  },
  {
    id: 'medio',
    label: 'Ambiente Médio',
    detail: 'De 15m² a 20m² / ~12.000 BTUs',
  },
  {
    id: 'grande',
    label: 'Ambiente Grande',
    detail: 'Acima de 25m² / 18.000+ BTUs',
  },
  {
    id: 'possuo',
    label: 'Já possuo o equipamento',
    detail: 'Sei os BTUs ou modelo',
  },
]

export const electricalOptions = ['Sim', 'Não', 'Não sei']
export const masonryOptions = ['Sim', 'Não', 'Não sei']
export const propertyOptions = ['Casa térrea', 'Apartamento', 'Ponto Comercial']
export const locationOptions = ['Salvador', 'Feira de Santana', 'Outras localidades']

export const stats = [
  { value: '15+', label: 'Anos de experiência' },
  { value: '500+', label: 'Clientes atendidos' },
  { value: '100%', label: 'Conformidade PMOC' },
  { value: '2', label: 'Cidades atendidas' },
]
