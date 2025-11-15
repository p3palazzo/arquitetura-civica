---
title             : "Casa de câmara e cadeia"
titleType         : "descriptive"
alternative:
  - type          : "owner"
    text          : "Casa de câmara e antiga cadeia"
date              : 2024-09-23
author            : "Renata Baliza"
excerpt: >-
  Edificação do século XVIII no tipo do paço municipal bipartido,
  em estilo dito barroco funcional. Atualmente usada como museu.
creator:
  - name          : "José Pereira dos Santos"
    type          : "personal"
    role          : "design"
contributor:
  - name          : "José Pereira Arouca" # Seguir as mesmas instruções que o campo `creator`.
    type          : "personal"
    role          : "creation"
format:
#  extent: # https://www.loc.gov/standards/vracore/schemas.html
#    - type        : "area" # area, base, circumference, count, depth, diameter, distanceBetween, height, length, width, other
#      measurements: # apenas o valor numérico, se necessário com ponto decimal
#      unit        : "m²"
#  medium: # Usar vocabulários controlados sempre que possível.
#    material:
#      - type      : "" # medium (default), support, other
#        text      : "" # Usar vocabulário controlado se possível
#        vocab     : "" # Caso use vocabulário controlado, preencher os...
#        refid     : "" # ...campos `vocab` e `refid`.
#    technique: # Processos, técnicas e métodos de produção ou restauro
#      - text      : "" # Usar vocabulário controlado se possível
#        vocab     : "" # Caso use vocabulário controlado, preencher os...
#        refid     : "" # ...campos `vocab` e `refid`.
#  inscription:
#    - author  : ""
#      position: ""
#      text    : ""
#      type    : "" # signature, mark, caption, date, text, translation, other (default)
bibliographiCitation:
  citekey : "@barreto:1947casas11"
  href    : "http://portal.iphan.gov.br/publicacoes/lista?categoria=23&busca"
  text: >-
    Paulo Thedim Barreto, « Casas de câmara e cadeia », Revista do
    Serviço do Patrimonio Historico e Artistico Nacional 11 (1947):
    9–196.
identifier:
  - source: "IPHAN"
    refid : "414-T"
    text  : "Livro do tombo das belas artes inscr. n.º 345, de 19/12/1949"
#   href  : ""  # Caso exista um link para uma ficha na instituição de origem.
coverage:
  spatial:    
    location:
      type            : "site"
      lat             : -20.378073
      long            : -43.418324
      alt             : 389
      name:
        type          : "geographic"
        text          : "praça Minas Gerais 89"
        city          : "Mariana"
        state         : BR-MG
        country       : BR
  temporal:
    - type          : "design"
      text:
        headline    : "Projeto"
      start_date:
        year        : "1762"
#     media:             # Uma mídia por evento:
#       url         : "" # pode ser uma prévia da Wikipédia, imagem ou vídeo.
#       caption     : "" # Legenda.
#       credit      : "" # Créditos, se houver.
#       alt         : "" # Descrição sucinta da mídia para acessibilidade.
#     source:            # Fonte de autoridade para a data.
#       text        : ""
#       href        : ""
#       dataDate    : "" # Data em que a informação foi incluída.
    - type          : "creation"
      text:
        headline    : "Construção"
      start_date:
        year        : "1782"
      end_date:
        year        : "1812"
  stylePeriod:
    - text            : "barroco funcional"
#     vocab           : "" # Caso use vocabulário controlado, preencher os...
#     refid           : "" # ...campos `vocab` e `refid`.
  culturalContext:
    - text            : "Brasil colônia"
    - text            : "Ciclo do ouro"
#      vocab           : ""
#      refid           : ""
#subject: # Refere-se ao conteúdo da obra, conforme https://www.loc.gov/standards/vracore/schemas.html
#  - type              : "" # conceptTopic, descriptiveTopic, iconographicTopic, otherTopic, builtworkPlace, geographicPlace, otherPlace, corporateName, familyName, personalName, scientificName, otherName
#    text              : ""
#    vocab             : "" # Caso use vocabulário controlado, preencher os...
#    refid             : "" # ...campos `vocab` e `refid`.
drawings:
  - refid             : "" # O nome do arquivo sem a extensão.
    filetype          : "" # A extensão do nome do arquivo sem o ponto. Se omitido, o padrão é "svg".
    text              : "" # Título do desenho.
    type              :    # 0 = geral, 1 = planta baixa (padrão), 2 = elevação, 3 = corte, 4 = mapa de elementos, 5 = detalhe, 6 = mapa de revestimentos, 7 = planta de forro, 8 = vista ou modelo 3D, 9 = definido pelo agente
    author            : "" # Quem fez o redesenho para este projeto de pesquisa.
    date              :    # Data da atual revisão do redesenho.
    revision          : "" # Formato BS1192
    suitability       : "" # Formato BS1192
    source:                # Original(is) a partir do(s) qual(is) o redesenho foi feito.
      - relids        : "" # Caso o original tenha uma cota de arquivo ou outro identificador.
        href          : "" # Link onde o original pode ser encontrado, se houver.
        text          : "" # Título ou descrição sucinta que identifique o original.
        creator:           # Autor (arquiteto ou desenhista) do original, se conhecido ou diferente do `creator` da edificação.
          name        : ""
          type        : ""
          attribution : ""
          vocab       : ""
          refid       : ""
          href        : ""
    coverage:
      temporal:            # Período histórico da edificação ao qual o desenho corresponde.
        start_date:
          year       :
          display_date:
        end_date:
          year       :
          display_date:
########################################################################
# IMPORTANTE! As relações de representação `depictedIn`, `imageIs`,    #
# `modelIs` devem ser cadastradas na ficha da OBRA e não da mídia.     #
########################################################################
relation:
# - type              : "depictedIn" # Tipos usados no VRA Core:
    # cartoonFor, cartoonIs, componentOf, componentIs, copyAfter, copyIs,
    # counterProofFor, counterProofIs, depicts, depictedIn,
    # derivedFrom [DCMI: source], sourceFor, designedFor, contextIs,
    # exhibitedAt, venueFor, facsimileOf, facsimileIs, formerlyPartOf,
    # formerlyLargerContextFor, imageOf, imageIs, mateOf, modelFor,
    # modelIs, partOf [DCMI: isPartOf], largerContextFor [DCMI: hasPart],
    # partnerInSetWith, pendantOf, planFor, planIs, prepatoryFor,
    # basedOn, printingPlateFor, printingPlateIs, prototypeFor,
    # prototypeIs, relatedTo, reliefFor, impressionIs, replicaOf,
    # replicaIs, studyFor, studyIs, versionOf [DCMI: isVersionOf],
    # versionIs [DCMI: hasVersion]
    # Os campos seguintes do DublinCore (DCMI) mapeiam para mais de um
    # campo do VRA Core:
    # isFormatOf, hasFormat, references, isReferencedBy
    # Os campos seguintes do DublinCore não têm equivalente no VRA Core
    # mas podem ser mapeados para o bloco stateEdition:
    # replaces, isReplacedBy
#   relids : "" # Referência do objeto relacionado (nome de arquivo da ficha)
#   text   : "" # Legenda da imagem
#   href   : "" # Link direto para a imagem, no caso de arquivos hospedados em outro servidor.
########################################################################
# Os campos abaixo referem-se a informações de formatação da ficha.    #
########################################################################
header:
  teaser        : "/assets/media/an-teaser.jpg"
  overlay_image : "/assets/media/an-overlay.jpg"
  overlay_filter: 0.7
  caption       : "Antiga sede do Arquivo Nacional à praça da República, 1905"
---
