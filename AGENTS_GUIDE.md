# Průvodce agenty ve vývoji hry

## Co jsou agenti?

**Agenti** jsou inteligentní asistenti pohánění umělou inteligencí, kteří vám pomáhají s vývojem softwaru. V kontextu Cursoru (nebo podobných nástrojů) jsou to AI systémy, které:

1. **Rozumí vašemu kódu** - analyzují strukturu projektu, soubory a jejich vztahy
2. **Navrhují řešení** - na základě vašich požadavků navrhují konkrétní změny
3. **Automatizují úkoly** - mohou provádět opakující se úkoly nebo refaktoring
4. **Učí se z kontextu** - berou v úvahu styl kódu, použité technologie a architekturu

## Typy agentů: Univerzální vs. Multi-Agent Systém

### 🔵 **Univerzální agent** (jako jsem já teď)
- Jeden agent, který dělá všechno
- Může pracovat na různých typech úkolů
- Vhodný pro menší projekty nebo když potřebujete rychlou pomoc

### 🟢 **Multi-Agent Systém** (specializovaní agenti)
- **Více agentů**, každý se specializuje na konkrétní oblast
- Agenti mohou **pracovat paralelně** na různých úkolech
- Agenti mohou **komunikovat mezi sebou** a spolupracovat
- Každý agent má svou **roli a zodpovědnost**

## Multi-Agent Systém: Jak to funguje?

### Příklad architektury pro vaši hru:

```
┌─────────────────────────────────────────┐
│         VÁŠ POŽADAVEK                   │
│  "Přidej mód násobení s animacemi"      │
└──────────────┬──────────────────────────┘
               │
               ▼
    ┌──────────────────────┐
    │  Router Agent        │  ← Rozdělí úkol
    │  (koordinátor)       │
    └──────────┬───────────┘
               │
    ┌──────────┴───────────┐
    │                     │
    ▼                     ▼
┌──────────┐        ┌──────────┐
│ Game     │        │ UI/UX     │
│ Logic    │◄──────►│ Agent     │
│ Agent    │        │           │
└──────────┘        └──────────┘
    │                     │
    │                     │
    ▼                     ▼
┌──────────┐        ┌──────────┐
│ Test     │        │ CSS      │
│ Agent    │        │ Agent     │
└──────────┘        └──────────┘
```

### Specializované role agentů:

#### 1. **Game Logic Agent** 🎮
- **Specializace:** Herní logika, generování otázek, skórování
- **Pracuje s:** `script.js` - herní logika
- **Příklad úkolu:** "Přidej logiku pro násobení"

#### 2. **UI/UX Agent** 🎨
- **Specializace:** Uživatelské rozhraní, HTML struktura
- **Pracuje s:** `index.html`
- **Příklad úkolu:** "Přidej tlačítka pro nový mód"

#### 3. **CSS Agent** 💅
- **Specializace:** Stylování, animace, responzivita
- **Pracuje s:** `styles.css`
- **Příklad úkolu:** "Vytvoř animaci pro správnou odpověď"

#### 4. **Test Agent** 🧪
- **Specializace:** Testování, kontrola chyb
- **Pracuje s:** Všechny soubory
- **Příklad úkolu:** "Otestuj, že nový mód funguje správně"

#### 5. **Refactoring Agent** 🔧
- **Specializace:** Optimalizace, čištění kódu
- **Pracuje s:** Všechny soubory
- **Příklad úkolu:** "Optimalizuj duplicitní kód"

#### 6. **Documentation Agent** 📝
- **Specializace:** Dokumentace, komentáře
- **Pracuje s:** Všechny soubory
- **Příklad úkolu:** "Dokumentuj nové funkce"

### Jak agenti komunikují?

**Příklad workflow:**

1. **Vy zadáte:** "Přidej mód násobení s animacemi"

2. **Router Agent** rozdělí úkol:
   - → **Game Logic Agent:** "Vytvoř logiku násobení"
   - → **UI/UX Agent:** "Přidej UI pro násobení"
   - → **CSS Agent:** "Vytvoř animace pro násobení"

3. **Agenti pracují paralelně:**
   ```
   Game Logic Agent:    [████████░░] 80% hotovo
   UI/UX Agent:          [██████████] 100% hotovo
   CSS Agent:           [██████░░░░] 60% hotovo
   ```

4. **Agenti komunikují:**
   - UI Agent → Game Logic Agent: "Jaké parametry potřebuješ pro zobrazení?"
   - CSS Agent → UI Agent: "Jaké třídy mám použít pro animace?"
   - Game Logic Agent → CSS Agent: "Potřebuji třídu `.multiply-correct`"

5. **Test Agent** zkontroluje výsledek:
   - Otestuje funkčnost
   - Zkontroluje kompatibilitu
   - Nahlásí problémy ostatním agentům

6. **Výsledek:** Kompletní funkční mód s animacemi

## Praktické použití: Kde jsou multi-agent systémy dostupné?

### V současnosti:

**Cursor (kde jsme teď):**
- Já jsem **univerzální agent** - dělám všechny typy úkolů
- Můžete mě "přepnout" do různých režimů podle úkolu
- **Multi-agent systém není standardní funkcí** - ale můžete to simulovat!

**💡 Praktické řešení v Cursoru:**

1. **Více chat oken** (pokud Cursor podporuje):
   - Otevřete více chat oken současně
   - V každém chat okně pracujte s jiným "agentem" (rolí)
   - Chat 1: "Jako Game Logic Agent, přidej logiku..."
   - Chat 2: "Jako CSS Agent, vytvoř animace..."
   - Chat 3: "Jako Test Agent, otestuj..."

2. **Sekvenční role-playing:**
   - Požádejte mě, abych pracoval jako různí agenti postupně
   - "Nejdřív jako Game Logic Agent, pak jako CSS Agent..."

3. **Externí nástroje s multi-agent podporou:**
   - **Aider** - může spouštět více specializovaných agentů
   - **Continue.dev** - podporuje paralelní agenty
   - **GitHub Copilot Workspace** - experimentální multi-agent režimy
   - **V0.dev** - specializovaní agenti pro UI komponenty
   - **Cline** - podporuje multi-agent workflow

### Jak simulovat multi-agent systém v Cursoru:

I když jsem univerzální agent, můžete mě "přepnout" do různých rolí:

**Příklad 1: Game Logic Agent**
```
"Jako Game Logic Agent: Přidej logiku pro mód násobení. 
Zaměř se pouze na JavaScript logiku v script.js, 
ignoruj UI a CSS."
```

**Příklad 2: CSS Agent**
```
"Jako CSS Agent: Vytvoř animaci pro správnou odpověď. 
Zaměř se pouze na styles.css, vytvoř keyframe animace 
a přidej třídy pro animace."
```

**Příklad 3: Paralelní práce (simulace)**
```
"Rozděl tento úkol:
1. Game Logic Agent: Přidej logiku násobení
2. UI Agent: Přidej tlačítka do HTML
3. CSS Agent: Vytvoř animace

Začni s Game Logic Agentem, pak pokračuj s UI a CSS."
```

### Budoucnost multi-agent systémů:

Multi-agent systémy jsou aktivní oblast výzkumu a vývoje. Očekávejte:
- **Automatické rozdělování úkolů** mezi agenty
- **Paralelní zpracování** bez vašeho zásahu
- **Inteligentní komunikaci** mezi agenty
- **Specializované agenty** pro různé technologie (React, Vue, Python, atd.)

## Jak fungují agenti? (Základní principy)

### 1. **Analýza kontextu**
Agent prozkoumá váš projekt:
- Strukturu souborů (HTML, CSS, JavaScript)
- Existující funkce a jejich logiku
- Styl kódu a konvence
- Závislosti a technologie

### 2. **Porozumění požadavku**
Když zadáte úkol (např. "přidej nový herní mód"), agent:
- Pochopí, co chcete dosáhnout
- Najde relevantní části kódu
- Navrhne implementaci v souladu s existujícím kódem

### 3. **Generování řešení**
Agent vytvoří:
- Nový kód nebo úpravy existujícího
- Komentáře a dokumentaci
- Testy (pokud jsou požadovány)

### 4. **Iterace a vylepšení**
Agent může:
- Opravit chyby na základě linteru
- Refaktorovat kód pro lepší čitelnost
- Optimalizovat výkon

## Jak využít agenty při vývoji této hry?

### 🔵 **S univerzálním agentem (jako jsem já):**

**Příklad úkolu:**
```
"Přidej nový herní mód 'Násobení' pro starší děti, podobný jako 'Add & Subtract'"
```

**Co udělám:**
- Analyzuji existující `addsub` mód v `script.js`
- Vytvořím novou logiku pro násobení
- Přidám UI prvky do `index.html`
- Upravím CSS pro nový mód
- Integruji do navigace a nastavení
- **Všechno najednou, postupně**

### 🟢 **S multi-agent systémem (budoucnost):**

**Stejný úkol by se rozdělil:**

**Game Logic Agent:**
- Analyzuje `addsub` mód
- Vytvoří logiku násobení v `script.js`
- Implementuje generování otázek

**UI/UX Agent (paralelně):**
- Přidá tlačítko do `index.html`
- Vytvoří UI strukturu pro násobení
- Integruje do navigace

**CSS Agent (paralelně):**
- Upraví styly pro nový mód
- Zajistí konzistenci s existujícím designem

**Test Agent (po dokončení):**
- Otestuje funkčnost
- Zkontroluje kompatibilitu

**Výhoda:** Všechno se děje **paralelně**, rychleji!

### 🎮 **1. Přidávání nových herních módů**

### 🎨 **2. Vylepšování UI/UX**

**Příklad úkolu:**
```
"Přidej animaci při správné odpovědi - ovoce by mělo vyskočit a oslavit"
```

**Co agent udělá:**
- Prozkoumá existující CSS animace
- Vytvoří nové keyframe animace
- Přidá JavaScript pro spuštění animací
- Zajistí kompatibilitu s existujícím kódem

### 📊 **3. Přidávání funkcí sledování pokroku**

**Příklad úkolu:**
```
"Přidej systém ukládání nejlepších skóre do localStorage a zobraz je na výsledkové obrazovce"
```

**Co agent udělá:**
- Analyzuje existující localStorage použití (nastavení)
- Vytvoří funkce pro ukládání skóre
- Přidá UI pro zobrazení statistik
- Implementuje porovnávání a řazení

### 🔧 **4. Refaktoring a optimalizace**

**Příklad úkolu:**
```
"Optimalizuj generování otázek - některé funkce jsou příliš dlouhé a opakují se"
```

**Co agent udělá:**
- Identifikuje duplicitní kód
- Vytvoří pomocné funkce
- Zjednoduší složité funkce
- Zachová původní funkcionalitu

### 🐛 **5. Opravování chyb**

**Příklad úkolu:**
```
"Když hráč rychle klikne na odpověď, někdy se otázka zobrazí dvakrát"
```

**Co agent udělá:**
- Najde problém v event handlerech
- Přidá ochranu proti duplicitním kliknutím
- Otestuje opravu
- Zajistí, že neporuší jiné funkce

### 🌐 **6. Přidávání lokalizace**

**Příklad úkolu:**
```
"Přidej podporu pro angličtinu a češtinu - všechny texty by měly být přeložitelné"
```

**Co agent udělá:**
- Vytvoří systém překladů
- Extrahuje všechny texty do objektu překladů
- Přidá přepínač jazyka
- Aktualizuje všechny UI prvky

### 📱 **7. Vylepšování responzivity**

**Příklad úkolu:**
```
"Optimalizuj hru pro tablety - některé prvky jsou příliš malé"
```

**Co agent udělá:**
- Analyzuje existující media queries
- Přidá breakpointy pro tablety
- Upraví velikosti fontů a prvků
- Otestuje na různých rozlišeních

## Praktické tipy pro práci s agenty

### ✅ **Dobré praktiky:**

1. **Buďte specifický**
   - ❌ "Oprav chyby"
   - ✅ "Oprav problém, kdy se timer nezastaví po správné odpovědi v questions módu"

2. **Poskytněte kontext**
   - Uveďte, ve kterém souboru je problém
   - Zmiňte související funkce
   - Ukažte příklad chování

3. **Požádejte o vysvětlení**
   - "Vysvětli, jak funguje funkce `generateQuestion()`"
   - "Proč se používá `setTimeout` v této části?"

4. **Požádejte o testování**
   - "Otestuj, že nová funkce neporuší existující módy"
   - "Zkontroluj, že animace fungují na mobilních zařízeních"

### ❌ **Čeho se vyvarovat:**

1. Příliš vágní požadavky
2. Požadavky na změny bez kontextu
3. Ignorování návrhů agenta bez vysvětlení
4. Očekávání, že agent zná všechny externí závislosti

## Příklady konkrétních úkolů pro vaši hru

### Úkol 1: Přidání nového typu ovoce
```
"Přidej jahodu (strawberry) jako nový typ ovoce. Musí být podporována ve všech 
herních módech (count, add, compare, match) a mít odpovídající emoji."
```

### Úkol 2: Vylepšení feedbacku
```
"Když hráč odpoví špatně, zobraz krátkou animaci, která ukáže správnou odpověď 
pomocí zvýraznění správného tlačítka nebo čísla."
```

### Úkol 3: Přidání zvukových efektů
```
"Přidej zvukové efekty: úspěšný tón při správné odpovědi, chybový tón při špatné 
odpovědi. Použij Web Audio API podobně jako existující `playBeep` funkce."
```

### Úkol 4: Statistiky hráče
```
"Vytvoř obrazovku statistik, která zobrazí: celkový počet odehraných her, 
nejlepší skóre, průměrné skóre, a nejčastěji hraný mód. Ukládej data do localStorage."
```

### Úkol 5: Přizpůsobení obtížnosti
```
"Implementuj adaptivní obtížnost: pokud hráč odpovídá správně na 3 otázky za sebou, 
zvýš obtížnost. Pokud odpovídá špatně, sniž obtížnost."
```

## Závěr: Univerzální vs. Multi-Agent

### 🔵 **Univerzální agent (současnost v Cursoru)**
- ✅ Jeden agent dělá všechno
- ✅ Jednoduché použití
- ✅ Vhodný pro většinu úkolů
- ⚠️ Postupné zpracování (jeden úkol po druhém)
- ⚠️ Může být pomalejší na komplexní úkoly

**Kdy použít:** Většina běžných úkolů, rychlé změny, refaktoring

### 🟢 **Multi-Agent systém (budoucnost/pokročilé nástroje)**
- ✅ Specializovaní agenti pro každou oblast
- ✅ Paralelní zpracování = rychlejší
- ✅ Lepší kvalita díky specializaci
- ✅ Agenti komunikují a spolupracují
- ⚠️ Složitější nastavení
- ⚠️ Vyžaduje koordinaci

**Kdy použít:** Velké feature, komplexní refaktoring, když potřebujete rychlost

### 💡 **Klíčové principy práce s agenty:**

1. **Komunikace** - jasně formulujte požadavky
2. **Kontrola** - vždy zkontrolujte generovaný kód
3. **Iterace** - agent může vylepšovat řešení na základě vaší zpětné vazby
4. **Učení** - agent se učí z vašeho stylu kódu a preferencí
5. **Role-playing** - můžete mě "přepnout" do různých rolí pro lepší výsledky

### 🎯 **Pro vaši hru:**

**Současnost (univerzální agent):**
- Použijte mě pro všechny úkoly
- Buďte specifický v požadavcích
- Můžete mě "přepnout" do rolí: "Jako CSS Agent..."

**Budoucnost (multi-agent):**
- Očekávejte automatické rozdělování úkolů
- Paralelní zpracování různých částí
- Specializovaní agenti pro každou technologii

Pamatujte: agent je váš **asistent**, ne náhrada za vaše programátorské dovednosti. Nejlepších výsledků dosáhnete, když kombinujete vaše znalosti projektu s schopnostmi agenta.

