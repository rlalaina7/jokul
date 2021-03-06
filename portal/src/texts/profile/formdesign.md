---
title: skjemadesign
path: /profil/skjemadesign
order: 11
---

# Skjemadesign
Skjemaer er viktige i Fremtinds løsninger og vi ønsker at de skal være konsekvente. Her finner du noen regler for skjemaoppsett og hvordan vi bruker skjemakomponentene.

## Skjemaseksjoner
I Jøkul har vi flere skjemakomponenter, for eksempel
- tekstfelt
- radioknapper
- avmerkingsbokser
- nedtrekksfelt
- datovelgere

En eller flere skjemakomponenter sammen, utgjør en _skjemaseksjon_, og et skjema kan bestå av en eller flere seksjoner. 

Hver skjemakomponent har en _ledetekst_. Det kan være en overskrift med et spørsmål, et ord eller en setning, som sier noe om hva vi ønsker at brukeren skal oppgi eller gjøre. Deretter er det selve komponenten som brukeren skal gjøre noe med, og eventuelt en hjelpetekst eller melding. Ledetekstene kommer i to størrelser, stor og normal. Vi bruker den store varianten når skjemakomponenten er alene i en seksjon, og den normale når skjemakomponenten står sammen med flere komponenter i samme seksjon.

Vi avgrenser seksjoner tydelig fra hverandre. Hvis seksjonene ligger på en felles bakgrunn, bruker vi luft til å vise dette skillet. Ellers kan vi ramme dem inn i  egne kort. Hvis det er nødvendig, kan vi ha en overskrift på hver seksjon.

De interne løsningene vi lager, kan ha mer kompakte skjemakomponenter. Det kan være nyttig hvis det er viktig å komprimere informasjonen vi gir i et skjermbilde, men hovedregelen er at vi skal følge prinsippene for skjemaoppsett.

### Hvilken størrelse skal ledetekstene ha i et dynamisk skjema?
I et dynamisk skjema kommer underordnede spørsmål frem når brukeren har tatt stilling til ett eller flere steg i skjemaet. Velg  størrelse på ledeteksten ut fra det brukeren ser i standardmodus. Det vil si at hvis en seksjon starter med bare ett spørsmål, velger du stor ledetekst, mens spørsmålene som dukker opp når du har svart på dette ene spørsmålet, får normal ledetekst. Svar på ett spørsmål kan også starte en ny skjemaseksjon. 

## Skjemavalidering
I et skjema validerer vi innndata i et felt etter følgende praksis: Når brukeren flytter markøren videre til neste felt, og når brukernen skal gå videre i skjemaet eller sende det inn. 

Hvis brukeren glemmer å  fylle ut et felt eller fyller det ut feil, får komponenten feilstatus. Vi viser feil ved at svaret blir understreket med rødt, og det vises en feilmelding. Hvis brukeren får feil når hen sender inn skjemaet, fokuserer vi skjemaet på det første feltet som har feil.

MERK! Vi har valgt at valideringsteksten skal _erstatte_ hjelpeteksten. Derfor er det veldig viktig at feilmeldingen også tar med seg informasjonen fra hjelpeteksten, i tillegg til å forklare hva som er feil.

Eksempel: Fødselsnummeret er feil (feilmelding/valideringstekst). Fødselsnummer har 11 siffer (hjelpetekst). 
