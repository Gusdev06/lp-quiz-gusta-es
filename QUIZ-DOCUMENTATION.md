# Quiz de Conversão - Documentação

## Visão Geral

Sistema de quiz de 7 perguntas implementado para segmentar visitantes em 3 perfis diferentes e mostrar um resultado personalizado antes da oferta
## Fluxo do Quiz

```
1. Tela de Entrada (VSL)
   ↓
2-7. 6 Perguntas do Quiz
   ↓
8. Captura de Lead (Pergunta 7)
   ↓
9. Resultado Personalizado (A, B ou C)
   ↓
10-16. Funil Original (Desafio, Revelação, etc.)
   ↓
17. Oferta Final
```

## Estrutura de Arquivos

### Tipos TypeScript
- `types/quiz.ts` - Definições de tipos para todo o sistema de quiz

### Dados
- `data/quiz-questions.ts` - Array com as 6 perguntas e suas opções com tags

### Componentes
- `components/quiz/screen-question.tsx` - Componente reutilizável para perguntas 1-6
- `components/quiz/screen-lead-capture.tsx` - Tela de captura de lead (pergunta 7)
- `components/quiz/screen-result-invisivel.tsx` - Resultado A: Criador Invisível
- `components/quiz/screen-result-afiliado.tsx` - Resultado B: Afiliado Estratégico
- `components/quiz/screen-result-empreendedor.tsx` - Resultado C: Empreendedor Digital

### Lógica
- `lib/quiz-utils.ts` - Funções para calcular perfil baseado nas tags

## Sistema de Segmentação

### Tags Disponíveis
- `invisivel` - Usuário quer criar conteúdo sem aparecer
- `afiliado` - Usuário quer vender produtos como afiliado
- `empreendedor` - Usuário quer criar negócio escalável
- `neutro` - Resposta não influencia na segmentação

### Lógica de Segmentação

O sistema conta todas as tags das respostas (excluindo "neutro") e define o perfil baseado na maioria:

- **Maioria "invisivel"** → Perfil A: Criador Invisível
- **Maioria "afiliado"** → Perfil B: Afiliado Estratégico
- **Maioria "empreendedor"** → Perfil C: Empreendedor Digital
- **Empate ou sem respostas relevantes** → Perfil A (padrão)

## Perguntas do Quiz

### Pergunta 1: "O que mais te atraiu na ideia de usar IA para ganhar dinheiro?"
- A) Não precisar aparecer ou gravar vídeos [invisivel]
- B) Poder vender produtos como afiliado [afiliado]
- C) Criar algo inovador e estar na frente da tendência [empreendedor]
- D) Ter uma renda extra trabalhando de casa [afiliado]

### Pergunta 2: "Qual é o seu maior desafio hoje para criar conteúdo na internet?"
- A) Não gosto de aparecer na câmera [invisivel]
- B) Não tenho tempo para gravar e editar [invisivel]
- C) Não tenho equipamento bom (luz, cenário, câmera) [invisivel]
- D) Não sei o que postar ou como criar conteúdo [afiliado]

### Pergunta 3: "Qual seu nível de experiência com inteligência artificial?"
- A) Nunca usei nada [neutro]
- B) Já testei algumas ferramentas básicas [neutro]
- C) Uso no dia a dia mas não monetizo [empreendedor]
- D) Já ganho dinheiro com IA [empreendedor]

### Pergunta 4: "Como você gostaria de ganhar dinheiro com uma influencer de IA?"
- A) Vendendo produtos como afiliado (Shopee, TikTok Shop) [afiliado]
- B) Fechando parcerias com marcas [empreendedor]
- C) Divulgando meu próprio negócio [empreendedor]
- D) Vendendo esse serviço para empresas [empreendedor]

### Pergunta 5: "Se você tivesse um método pronto nas mãos, quando começaria?"
- A) Hoje mesmo [neutro]
- B) Essa semana [neutro]
- C) Quando tiver um tempo livre [neutro]
- D) Ainda estou só pesquisando [neutro]

### Pergunta 6: "Quanto você estaria disposto a investir para aprender uma habilidade que pode te gerar renda todos os meses?"
- A) Menos de R$100 [neutro]
- B) Entre R$100 e R$300 [neutro]
- C) Entre R$300 e R$500 [neutro]
- D) Mais de R$500 se o método for comprovado [neutro]

## Captura de Lead

### Campos Obrigatórios
- **Nome**: Validação de campo vazio
- **WhatsApp**: Formatação automática (XX) XXXXX-XXXX, validação mínimo 10 dígitos
- **Email**: Validação de formato de email

### Validações
- Todos os campos são obrigatórios
- WhatsApp aceita apenas números e formata automaticamente
- Email valida formato padrão (xxx@xxx.xxx)
- Mensagens de erro em tempo real

## Resultados Personalizados

### Perfil A: Criador Invisível
**Para quem**: Pessoas que não querem aparecer, sem tempo/equipamento
**Benefícios destacados**:
- 100% Anônimo - nunca precisa aparecer
- Zero Gravações - sem câmera, luz ou edição
- Método Acelerado - começar sem experiência

### Perfil B: Afiliado Estratégico
**Para quem**: Pessoas interessadas em marketing de afiliados
**Benefícios destacados**:
- Afiliado Shopee & TikTok Shop
- Conteúdo 24/7 divulgando produtos
- Renda Escalável com comissões

### Perfil C: Empreendedor Digital
**Para quem**: Pessoas que querem construir negócio escalável
**Benefícios destacados**:
- Parcerias com Marcas
- Venda o Serviço para empresas
- Negócio Escalável com múltiplas influencers

## Personalização

### Modificar Perguntas
Edite o arquivo `data/quiz-questions.ts` para alterar textos ou tags das perguntas.

### Modificar Resultados
Edite os componentes em `components/quiz/screen-result-*.tsx` para personalizar:
- Títulos e descrições
- Benefícios destacados
- CTAs e próximos passos

### Modificar Lógica de Segmentação
Edite `lib/quiz-utils.ts` para ajustar:
- Prioridades de tags
- Regras de empate
- Perfil padrão

## Próximos Passos Sugeridos

1. **Integração com Backend**: Enviar dados do lead para seu CRM/banco de dados
2. **Analytics**: Adicionar tracking para cada pergunta e resultado
3. **A/B Testing**: Testar variações de perguntas e resultados
4. **Personalização do Funil**: Usar o `profileType` para personalizar as telas seguintes
5. **WhatsApp Automation**: Enviar mensagem personalizada via API do WhatsApp

## Exemplos de Uso

### Acessar dados do lead no funil
```tsx
// Em qualquer componente filho, você pode acessar:
const { leadData, profileType } = useQuizContext()
```

### Personalizar conteúdo baseado no perfil
```tsx
{profileType === "criador-invisivel" && (
  <p>Conteúdo específico para criadores invisíveis</p>
)}
```

## Suporte

Para dúvidas ou customizações, consulte a documentação dos componentes individuais ou entre em contato.
