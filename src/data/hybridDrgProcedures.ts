export type HybridDrgProcedure = {
  id: string
  title: string
  category: string
  year: number
  description: string
  restrictions: string
  base_price: number
  disclaimer_key: "standard"
}

export const hybridDrgProcedures: HybridDrgProcedure[] = [
  {
    "id": "I20N",
    "title": "Arthrodese Zehengelenke",
    "category": "Orthopädie/Fußchirurgie",
    "year": 2025,
    "description": "Andere Eingriffe am Fuß oder chronische Polyarthritis oder Diabetes Mellitus mit Komplikationen oder Alter < 16 Jahre",
    "restrictions": "Chronische Polyarthritis oder Diabetes mit Komplikationen oder Alter < 16 Jahre",
    "base_price": 1095.02,
    "disclaimer_key": "standard"
  },
  {
    "id": "I20M",
    "title": "Arthrodese Zehengelenke",
    "category": "Orthopädie/Fußchirurgie",
    "year": 2025,
    "description": "Eingriffe am Fuß ohne komplexe Eingriffe oder komplizierende Faktoren, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre, ohne komplexe Eingriffe oder komplizierende Faktoren",
    "base_price": 1014.94,
    "disclaimer_key": "standard"
  },
  {
    "id": "G09N",
    "title": "Hernienoperationen",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2025,
    "description": "Beidseitige Eingriffe bei Leisten- und Schenkelhernien, Alter > 55 Jahre oder komplexe Herniotomien oder Operation einer Hydrocele testis oder andere kleine Eingriffe an Dünn- und Dickdarm",
    "restrictions": "Beidseitig oder Alter > 55 Jahre oder komplex oder Hydrocele oder kleine Darmeingriffe",
    "base_price": 2227.33,
    "disclaimer_key": "standard"
  },
  {
    "id": "G24N",
    "title": "Hernienoperationen",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2025,
    "description": "Eingriffe bei Hernien ohne plastische Rekonstruktion der Bauchwand, mit beidseitigem oder komplexem Eingriff oder Alter < 14 Jahre mit äußerst schweren oder schweren CC",
    "restrictions": "Beidseitig oder komplex oder Alter < 14 Jahre mit schweren CC",
    "base_price": 2000.81,
    "disclaimer_key": "standard"
  },
  {
    "id": "G24M",
    "title": "Hernienoperationen",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2025,
    "description": "Eingriffe bei Hernien ohne plastische Rekonstruktion der Bauchwand, ohne beidseitigen Eingriff, ohne komplexen Eingriff, Alter > 13 Jahre oder ohne äußerst schwere oder schwere CC",
    "restrictions": "Alter > 13 Jahre, ohne beidseitige oder komplexe Eingriffe",
    "base_price": 1852.71,
    "disclaimer_key": "standard"
  },
  {
    "id": "G26N",
    "title": "Eingriffe an Analfisteln",
    "category": "Proktologie",
    "year": 2025,
    "description": "Andere Eingriffe am Anus oder Anoproktoplastik und Rekonstruktion von Anus und Sphinkter bei Analfissuren und Hämorrhoiden, Alter < 18 Jahre oder mit komplexer Diagnose oder mit kleinem Eingriff am Rektum",
    "restrictions": "Alter < 18 Jahre oder komplexe Diagnose oder kleiner Rektumeingriff",
    "base_price": 961.98,
    "disclaimer_key": "standard"
  },
  {
    "id": "G26M",
    "title": "Eingriffe an Analfisteln",
    "category": "Proktologie",
    "year": 2025,
    "description": "Andere Eingriffe am Anus oder Anoproktoplastik und Rekonstruktion von Anus und Sphinkter bei Analfissuren und Hämorrhoiden, Alter > 17 Jahre, ohne komplexe Diagnose, ohne kleinen Eingriff am Rektum",
    "restrictions": "Alter > 17 Jahre, ohne komplexe Diagnose, ohne kleinen Rektumeingriff",
    "base_price": 929.36,
    "disclaimer_key": "standard"
  },
  {
    "id": "H41N",
    "title": "ERCP",
    "category": "Gastroenterologie",
    "year": 2025,
    "description": "Andere aufwendige ERCP oder bestimmter endoskopischer Eingriff ohne bestimmte BNB",
    "restrictions": "Aufwendige ERCP oder bestimmter endoskopischer Eingriff, ohne bestimmte BNB",
    "base_price": 1641.24,
    "disclaimer_key": "standard"
  },
  {
    "id": "H41M",
    "title": "ERCP",
    "category": "Gastroenterologie",
    "year": 2025,
    "description": "Andere ERCP ohne bestimmte oder andere aufwendige ERCP, Alter > 15 Jahre, ohne bestimmte BNB oder bestimmte Pankreatitis",
    "restrictions": "Alter > 15 Jahre, ohne bestimmte BNB oder bestimmte Pankreatitis",
    "base_price": 1380.29,
    "disclaimer_key": "standard"
  },
  {
    "id": "M04N",
    "title": "Eingriffe Hoden/Nebenhoden",
    "category": "Urologie",
    "year": 2025,
    "description": "Eingriffe am Hoden mit mäßig komplexem Eingriff, Alter < 3 Jahre oder mit schweren CC oder beidseitigem Hodenhochstand, Alter < 14 Jahre",
    "restrictions": "Alter < 3 Jahre oder schwere CC oder beidseitiger Hodenhochstand bei Alter < 14 Jahre",
    "base_price": 1587.87,
    "disclaimer_key": "standard"
  },
  {
    "id": "M04M",
    "title": "Eingriffe Hoden/Nebenhoden",
    "category": "Urologie",
    "year": 2025,
    "description": "Eingriffe am Hoden ohne äußerst schwere CC, ohne bestimmten Eingriff, ohne mäßig komplexen Eingriff oder Alter > 2 Jahre, ohne schwere CC oder ohne beidseitigen Hodenhochstand oder Alter > 13 Jahre",
    "restrictions": "Alter > 2 Jahre oder Alter > 13 Jahre, ohne äußerst schwere CC, ohne mäßig komplexen Eingriff",
    "base_price": 1445.25,
    "disclaimer_key": "standard"
  },
  {
    "id": "M05N",
    "title": "Zirkumzision/Peniseingriffe",
    "category": "Urologie",
    "year": 2025,
    "description": "Zirkumzision, andere Eingriffe am Penis oder großflächige Ablationen der Haut",
    "restrictions": "Keine spezifischen Restriktionen genannt",
    "base_price": 1171.39,
    "disclaimer_key": "standard"
  },
  {
    "id": "L17N",
    "title": "Harnleiterstein-Entfernung",
    "category": "Urologie",
    "year": 2025,
    "description": "Andere Eingriffe an der Urethra außer bei Para-/Tetraplegie, kleine Eingriffe an den Harnorganen, ohne bestimmte Eingriffe an der Urethra, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre, ohne Para-/Tetraplegie, ohne bestimmte Urethraeingriffe",
    "base_price": 1356.45,
    "disclaimer_key": "standard"
  },
  {
    "id": "L20N",
    "title": "Harnleiterstein-Entfernung",
    "category": "Urologie",
    "year": 2025,
    "description": "Transurethrale Eingriffe außer Prostataresektion und komplexe Ureterorenoskopien oder bestimmte Eingriffe an den Harnorganen, ohne äußerst schwere CC oder Alter < 16 Jahre oder Alter > 89 Jahre",
    "restrictions": "Ohne äußerst schwere CC oder Alter < 16 oder > 89 Jahre",
    "base_price": 1999.51,
    "disclaimer_key": "standard"
  },
  {
    "id": "L20M",
    "title": "Harnleiterstein-Entfernung",
    "category": "Urologie",
    "year": 2025,
    "description": "Transurethrale Eingriffe außer Prostataresektion und komplexe Ureterorenoskopien oder bestimmte Eingriffe an den Harnorganen, ohne äußerst schwere CC oder Alter > 15 Jahre oder Alter < 90 Jahre",
    "restrictions": "Alter > 15 und < 90 Jahre, ohne äußerst schwere CC",
    "base_price": 1525.54,
    "disclaimer_key": "standard"
  },
  {
    "id": "J09N",
    "title": "Sinus pilonidalis",
    "category": "Allgemeinchirurgie",
    "year": 2025,
    "description": "Eingriffe bei Sinus pilonidalis und perianal, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre",
    "base_price": 1199.83,
    "disclaimer_key": "standard"
  },
  {
    "id": "E02N",
    "title": "Lymphknotenbiopsie (Atmungsorgane)",
    "category": "Verschiedenes",
    "year": 2025,
    "description": "Andere OR-Prozeduren an den Atmungsorganen, Alter > 17 J., ohne best. Eingriff an Larynx oder Trachea, ohne mäßig aufwendigen Eingriff, ohne äußerst schwere CC, ohne endoskop. Lungenvolumenreduktion, ohne andere mäßig kompl. Eingriffe, ein Belegungstag",
    "restrictions": "Alter > 17 Jahre, ein Belegungstag, diverse Ausschlüsse",
    "base_price": 1880.22,
    "disclaimer_key": "standard"
  },
  {
    "id": "Q03N",
    "title": "Lymphknotenbiopsie (Blut/Immunsystem)",
    "category": "Hämatologie/Immunologie",
    "year": 2025,
    "description": "Kleine Eingriffe bei Krankheiten des Blutes, der blutbildenden Organe und des Immunsystems, Alter > 9 Jahre",
    "restrictions": "Alter > 9 Jahre",
    "base_price": 1693.16,
    "disclaimer_key": "standard"
  },
  {
    "id": "R14N",
    "title": "Lymphknotenbiopsie (Neubildungen)",
    "category": "Onkologie",
    "year": 2025,
    "description": "Andere hämatologische und solide Neubildungen mit anderen OR-Prozeduren ohne äußerst schwere oder schwere CC oder Therapie mit offenen Nukliden bei hämatologischen und soliden Neubildungen, mehr als ein Belegungstag",
    "restrictions": "Mehr als ein Belegungstag, ohne äußerst schwere/schwere CC",
    "base_price": 1484.37,
    "disclaimer_key": "standard"
  },
  {
    "id": "N05N",
    "title": "Ovariektomien",
    "category": "Gynäkologie",
    "year": 2025,
    "description": "Ovariektomien und komplexe Eingriffe an den Tubae uterinae außer bei bösartiger Neubildung, ohne äußerst schwere oder schwere CC oder anderer Eingriff an der Harnblase oder Adhäsiolyse, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre, außer bei bösartiger Neubildung, ohne äußerst schwere/schwere CC",
    "base_price": 1712.81,
    "disclaimer_key": "standard"
  },
  {
    "id": "N07N",
    "title": "Ovariektomien",
    "category": "Gynäkologie",
    "year": 2025,
    "description": "Andere Eingriffe an Uterus und Adnexen oder bestimmten Hernien außer bei bösartiger Neubildung, mit komplexer Diagnose oder bestimmte Eingriffe am Uterus oder kleine rekonstruktive Eingriffe an den weiblichen Geschlechtsorganen, mit bestimmtem Eingriff",
    "restrictions": "Außer bei bösartiger Neubildung, mit komplexer Diagnose oder bestimmten Eingriffen",
    "base_price": 1722.32,
    "disclaimer_key": "standard"
  },
  {
    "id": "N25N",
    "title": "Ovariektomien",
    "category": "Gynäkologie",
    "year": 2025,
    "description": "Andere Eingriffe an Uterus und Adnexen oder bestimmten Hernien außer bei bösartiger Neubildung, ohne komplexe Diagnose oder andere kleine Eingriffe an den weiblichen Geschlechtsorganen, Alter > 13 Jahre",
    "restrictions": "Alter > 13 Jahre, außer bei bösartiger Neubildung, ohne komplexe Diagnose",
    "base_price": 1568.91,
    "disclaimer_key": "standard"
  },
  {
    "id": "E02M",
    "title": "OR-Prozeduren Atmungsorgane",
    "category": "Pneumologie",
    "year": 2026,
    "description": "Andere OR-Prozeduren an den Atmungsorganen, Alter > 17 Jahre, mehr als 1 BT, ohne bestimmten Eingriff an Larynx oder Trachea, ohne mäßig aufwendigen Eingriff, ohne äußerst schwere CC, ohne endoskop. Lungenvolumenred., ohne anderen mäßig kompl. Eingriff",
    "restrictions": "Alter > 17 Jahre, mehr als 1 Belegungstag, diverse Ausschlüsse",
    "base_price": 2011.3,
    "disclaimer_key": "standard"
  },
  {
    "id": "F01M",
    "title": "AICD-Implantation (Dreikammer)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Implantation Kardioverter/Defibrillator (AICD), Dreikammer-Stimulation oder Defibrillator oder intrakardialer Pulsgenerator, ohne komplizierende Faktoren oder Implantation eines Drucksensors in die Pulmonalarterie",
    "restrictions": "Ohne komplizierende Faktoren",
    "base_price": 10067.56,
    "disclaimer_key": "standard"
  },
  {
    "id": "F01N",
    "title": "AICD-Implantation (Zweikammer)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Implantation Kardioverter/Defibrillator (AICD), Zweikammer-Stimulation oder aufwendige Sondenentfernung, ohne Implantation eines Drucksensors in Pulmonalarterie, ohne Implantation eines intrakardialen Pulsgenerators, Alter > 17 Jahre",
    "restrictions": "Alter > 17 Jahre, ohne Drucksensor oder intrakardialen Pulsgenerator",
    "base_price": 7484.31,
    "disclaimer_key": "standard"
  },
  {
    "id": "F01O",
    "title": "AICD-Implantation (Einkammer)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Impl. Kardioverter/Defibrillator (AICD), Einkammer-Stimulation, ohne zusätzl. Herz- od. Gefäßeingriff, ohne IntK > 392/368/- P., ohne äuß. schw. CC, ohne aufw. Sondenentf., ohne Impl. Drucksens. in Pulmonalart., ohne Impl. Pulsgen., Alter > 17 J.",
    "restrictions": "Alter > 17 Jahre, diverse Ausschlüsse",
    "base_price": 6163.41,
    "disclaimer_key": "standard"
  },
  {
    "id": "F02M",
    "title": "AICD-Aggregatwechsel (Zwei/Drei-Kammer)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Aggregatwechsel eines Kardioverters/Defibrillators (AICD), Zwei- oder Dreikammer-Stimulation",
    "restrictions": "Zwei- oder Dreikammer-Stimulation",
    "base_price": 6489.52,
    "disclaimer_key": "standard"
  },
  {
    "id": "F02N",
    "title": "AICD-Aggregatwechsel (Einkammer)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Aggregatwechsel eines Kardioverters/Defibrillators (AICD), Einkammer-Stimulation",
    "restrictions": "Einkammer-Stimulation",
    "base_price": 5088.25,
    "disclaimer_key": "standard"
  },
  {
    "id": "F19M",
    "title": "Transluminale Intervention",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Andere transluminale Intervention an Herz, Aorta und Lungengefäßen ohne äußerst schwere CC oder Ablation über A. renalis oder komplexe Rekanalisation von Koronargefäßen",
    "restrictions": "Ohne äußerst schwere CC",
    "base_price": 4877.78,
    "disclaimer_key": "standard"
  },
  {
    "id": "F24M",
    "title": "Perkutane Koronarangioplastie (komplex)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Perkutane Koronarangioplastie mit komplexer Diagnose und hochkomplexer Intervention oder mit bestimmten Rekanalisationsverfahren, Alter > 15 Jahre, ohne äußerst schwere CC",
    "restrictions": "Alter > 15 Jahre, ohne äußerst schwere CC",
    "base_price": 3702.33,
    "disclaimer_key": "standard"
  },
  {
    "id": "F49M",
    "title": "Invasive kardiologische Diagnostik (Variante 1)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Invasive kardiologische Diagnostik außer bei akutem Myokardinfarkt, ohne IntK > 196/184/368 Aufwandspunkte, Alter > 17 Jahre, ohne schwere CC bei BT > 1, mit kardialem Mapping oder best. andere kardiologische Diagnostik oder best. komplexer Diagnose",
    "restrictions": "Alter > 17 Jahre, mit Mapping oder bestimmter Diagnostik",
    "base_price": 2727.96,
    "disclaimer_key": "standard"
  },
  {
    "id": "F49N",
    "title": "Invasive kardiologische Diagnostik (Variante 2)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Invasive kardiologische Diagnostik außer bei akutem Myokardinfarkt, ohne IntK > 196/184/368 Aufwandspunkte, Alter > 17 Jahre, ohne schwere CC bei BT > 1, mit kardialem Mapping oder best. andere kardiologische Diagnostik oder best. komplexer Diagnose",
    "restrictions": "Alter > 17 Jahre, mit Mapping oder bestimmter Diagnostik",
    "base_price": 2504.25,
    "disclaimer_key": "standard"
  },
  {
    "id": "F49O",
    "title": "Invasive kardiologische Diagnostik (Variante 3)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Invasive kardiolog. Diagnostik außer bei akutem Myokardinfarkt, o. äußerst schwere CC, ohne IntK > 196/184/368 P., Alter > 17 J., o. kard. Mapping, o. best. and. kard. Diagnostik, o. schwere CC bei BT > 1, o. best. kompl. Diagnose, mit best. Eingr.",
    "restrictions": "Alter > 17 Jahre, mit bestimmtem Eingriff",
    "base_price": 2615.59,
    "disclaimer_key": "standard"
  },
  {
    "id": "F49P",
    "title": "Invasive kardiologische Diagnostik (Variante 4)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Invasive kardiolog. Diagnostik außer bei akutem Myokardinfarkt, o. äußerst schwere CC, ohne IntK > 196/184/368 P., Alter > 17 J., o. kard. Mapping, o. best. and. kard. Diagnostik, o. schwere CC bei BT > 1, o. best. kompl. Diagnose, mit best. Eingr.",
    "restrictions": "Alter > 17 Jahre, mit bestimmtem Eingriff",
    "base_price": 2047.45,
    "disclaimer_key": "standard"
  },
  {
    "id": "F49Q",
    "title": "Invasive kardiologische Diagnostik (Variante 5)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Invasive kardiolog. Diagnostik außer bei akutem Myokardinfarkt, o. äußerst schwere CC, ohne IntK > 196/184/368 P., Alter > 17 J., o. kard. Mapping, o. best. and. kard. Diagnostik, o. schwere CC bei BT > 1, o. best. kompl. Diagnose, ohne best. Eingr.",
    "restrictions": "Alter > 17 Jahre, ohne bestimmten Eingriff",
    "base_price": 1927.53,
    "disclaimer_key": "standard"
  },
  {
    "id": "F49R",
    "title": "Invasive kardiologische Diagnostik (Variante 6)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Invasive kardiolog. Diagnostik außer bei akutem Myokardinfarkt, o. äußerst schwere CC, ohne IntK > 196/184/368 P., Alter > 17 J., o. kard. Mapping, o. best. and. kard. Diagnostik, o. schwere CC bei BT > 1, o. best. kompl. Diagnose, ohne best. Eingr.",
    "restrictions": "Alter > 17 Jahre, ohne bestimmten Eingriff",
    "base_price": 1144.01,
    "disclaimer_key": "standard"
  },
  {
    "id": "F50M",
    "title": "Ablative Maßnahmen (hochkomplex)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Ablative Maßnahmen bei Herzrhythmusstörungen mit hochkomplexer Ablation im linken Vorhof, Ventrikel oder Pulmonalvenen oder Implantation eines Ereignisrekorders oder Alter < 16 Jahre oder best. angeb. Herzfehler oder mit kompl. Ablation, Alter < 18 Jahre",
    "restrictions": "Hochkomplex oder Alter < 16/18 Jahre oder angeborener Herzfehler",
    "base_price": 7406.84,
    "disclaimer_key": "standard"
  },
  {
    "id": "F50N",
    "title": "Ablative Maßnahmen (komplex)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Ablative Maßnahmen bei Herzrhythmusstörungen ohne hochkomplexe Ablation im linken Vorhof, Ventrikel oder Pulmonalvenen, ohne Implantation eines Ereignisrekorders, ohne best. angeb. Herzfehler, mit komplexer Ablation, Alter > 17 Jahre",
    "restrictions": "Alter > 17 Jahre, mit komplexer Ablation",
    "base_price": 5068.89,
    "disclaimer_key": "standard"
  },
  {
    "id": "F50O",
    "title": "Ablative Maßnahmen (einfach)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Ablative Maßnahmen bei Herzrhythmusstörungen ohne hochkomplexe Ablation im linken Vorhof, Ventrikel oder Pulmonalvenen, ohne Implantation eines Ereignisrekorders, ohne best. angeb. Herzfehler, ohne komplexe Ablation, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre, ohne komplexe Ablation",
    "base_price": 3599.3,
    "disclaimer_key": "standard"
  },
  {
    "id": "F52M",
    "title": "Perkutane Koronarangioplastie",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Perkutane Koronarangioplastie mit komplexer Diagnose, ohne äußerst schwere CC oder mit intrakoronarer Brachytherapie oder bestimmte Intervention",
    "restrictions": "Ohne äußerst schwere CC",
    "base_price": 3164.57,
    "disclaimer_key": "standard"
  },
  {
    "id": "F56M",
    "title": "Koronarangioplastie (hochkomplex, Var. 1)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Perkutane Koronarangioplastie mit hochkomplexer Intervention, ohne bestimmte hochkomplexe Intervention oder ohne äußerst schwere CC oder Kryoplastie oder koronare Lithoplastie",
    "restrictions": "Hochkomplex oder Kryoplastie oder Lithoplastie",
    "base_price": 3466.64,
    "disclaimer_key": "standard"
  },
  {
    "id": "F56N",
    "title": "Koronarangioplastie (hochkomplex, Var. 2)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Perkutane Koronarangioplastie mit hochkomplexer Intervention, ohne bestimmte hochkomplexe Intervention oder ohne äußerst schwere CC oder Kryoplastie oder koronare Lithoplastie",
    "restrictions": "Hochkomplex oder Kryoplastie oder Lithoplastie",
    "base_price": 3014.91,
    "disclaimer_key": "standard"
  },
  {
    "id": "F58M",
    "title": "Koronarangioplastie/Diagnostik + Gefäßeingriff (Var. 1)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Perkutane Koronarangioplastie oder bestimmte kardiologische Diagnostik mit Gefäßeingriff, ohne äußerst schwere CC",
    "restrictions": "Ohne äußerst schwere CC",
    "base_price": 2938.99,
    "disclaimer_key": "standard"
  },
  {
    "id": "F58N",
    "title": "Koronarangioplastie/Diagnostik + Gefäßeingriff (Var. 2)",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Perkutane Koronarangioplastie oder bestimmte kardiologische Diagnostik mit Gefäßeingriff, ohne äußerst schwere CC",
    "restrictions": "Ohne äußerst schwere CC",
    "base_price": 2309.52,
    "disclaimer_key": "standard"
  },
  {
    "id": "F59M",
    "title": "Mäßig komplexe Gefäßeingriffe (Var. 1)",
    "category": "Kardiologie/Gefäßchirurgie",
    "year": 2026,
    "description": "Mäßig komplexe Gefäßeingriffe ohne äußerst schwere CC, ohne aufwendige Gefäßintervention, mit aufwendigem Eingriff oder Mehrfacheingriff oder bestimmter Diagnose oder Alter < 16 Jahre, mehr als ein Belegungstag",
    "restrictions": "Mehr als 1 Belegungstag, mit aufwendigem/Mehrfacheingriff oder Alter < 16",
    "base_price": 5366.75,
    "disclaimer_key": "standard"
  },
  {
    "id": "F59N",
    "title": "Mäßig komplexe Gefäßeingriffe (Var. 2)",
    "category": "Kardiologie/Gefäßchirurgie",
    "year": 2026,
    "description": "Mäßig komplexe Gefäßeingriffe ohne äußerst schwere CC, ohne aufwendige Gefäßintervention, mit bestimmtem Eingriff oder anderem Mehrfacheingriff, Alter > 15 Jahre oder ein Belegungstag oder mit pAVK mit Gangrän, mehr als ein Belegungstag",
    "restrictions": "Alter > 15 Jahre oder pAVK mit Gangrän",
    "base_price": 3422.66,
    "disclaimer_key": "standard"
  },
  {
    "id": "F59O",
    "title": "Mäßig komplexe Gefäßeingriffe (Var. 3)",
    "category": "Kardiologie/Gefäßchirurgie",
    "year": 2026,
    "description": "Mäßig komplexe Gefäßeingriffe ohne äußerst schwere CC, ohne aufw. Gefäßinterv., mit best. anderen Eingriff oder best. Mehrfacheingriff oder PTA, mehr als ein Belegungstag, ohne aufwendigen oder bestimmten Eingr., Alter > 15 Jahre oder ein Belegungstag",
    "restrictions": "Alter > 15 Jahre, mehr als 1 Belegungstag oder 1 Belegungstag",
    "base_price": 2742.29,
    "disclaimer_key": "standard"
  },
  {
    "id": "F59P",
    "title": "Mäßig komplexe Gefäßeingriffe (Var. 4)",
    "category": "Kardiologie/Gefäßchirurgie",
    "year": 2026,
    "description": "Mäßig komplexe Gefäßeingriffe ohne äußerst schwere CC, ohne aufwendige Gefäßintervention, ohne aufwendigen, bestimmten oder bestimmten anderen Eingriff, ohne Mehrfacheingriff, Alter > 15 Jahre oder ein Belegungstag",
    "restrictions": "Alter > 15 Jahre, ohne aufwendige Eingriffe",
    "base_price": 2087.96,
    "disclaimer_key": "standard"
  },
  {
    "id": "F95M",
    "title": "Interventioneller Septum-/Vorhofohrverschluss",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Interventioneller Septumverschluss oder Verschluss einer paravalvulären Leckage mit einem kardialen Okkluder, Alter < 18 Jahre oder Vorhofohrverschluss",
    "restrictions": "Alter < 18 Jahre oder Vorhofohrverschluss",
    "base_price": 7123.54,
    "disclaimer_key": "standard"
  },
  {
    "id": "F95N",
    "title": "Interventioneller Septumverschluss",
    "category": "Kardiologie",
    "year": 2026,
    "description": "Interventioneller Septumverschluss oder Verschluss einer paravalvulären Leckage mit einem kardialen Okkluder, Alter > 17 Jahre, ohne Vorhofohrverschluss",
    "restrictions": "Alter > 17 Jahre, ohne Vorhofohrverschluss",
    "base_price": 5443.6,
    "disclaimer_key": "standard"
  },
  {
    "id": "G08M",
    "title": "Komplexe Bauchwandrekonstruktion",
    "category": "Allgemeinchirurgie",
    "year": 2026,
    "description": "Komplexe Rekonstruktion der Bauchwand, Alter > 0 Jahre, ohne äußerst schwere CC",
    "restrictions": "Alter > 0 Jahre, ohne äußerst schwere CC",
    "base_price": 3087.62,
    "disclaimer_key": "standard"
  },
  {
    "id": "G09M",
    "title": "Hernienoperationen (Variante 1)",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2026,
    "description": "Beidseitige Eingriffe bei Leisten- und Schenkelhernien, Alter > 55 Jahre oder komplexe Herniotomien oder Operation einer Hydrocele testis oder andere kleine Eingriffe an Dünn- und Dickdarm",
    "restrictions": "Beidseitig oder Alter > 55 oder komplex oder Hydrocele",
    "base_price": 3422.23,
    "disclaimer_key": "standard"
  },
  {
    "id": "G09N",
    "title": "Hernienoperationen (Variante 2)",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2026,
    "description": "Beidseitige Eingriffe bei Leisten- und Schenkelhernien, Alter > 55 Jahre oder komplexe Herniotomien oder Operation einer Hydrocele testis oder andere kleine Eingriffe an Dünn- und Dickdarm",
    "restrictions": "Beidseitig oder Alter > 55 oder komplex oder Hydrocele",
    "base_price": 2885.11,
    "disclaimer_key": "standard"
  },
  {
    "id": "G23M",
    "title": "Appendektomie/Adhäsiolyse",
    "category": "Allgemeinchirurgie",
    "year": 2026,
    "description": "Appendektomie oder andere komplexe oder laparoskopische Adhäsiolyse außer bei Peritonitis oder Exzision erkranktes Gewebe Dickdarm ohne äußerst schwere oder schwere CC, Alter > 9 Jahre, außer bei bösartiger Neubildung oder Endometriose am Darm",
    "restrictions": "Alter > 9 Jahre, ohne schwere CC, außer bei Malignität/Endometriose",
    "base_price": 2867.87,
    "disclaimer_key": "standard"
  },
  {
    "id": "G24M",
    "title": "Hernien mit Bauchwandrekonstruktion",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2026,
    "description": "Eingriffe bei Hernien mit plastischer Rekonstruktion der Bauchwand oder bestimmte partielle Resektion des Dickdarmes",
    "restrictions": "Mit plastischer Rekonstruktion",
    "base_price": 3639.27,
    "disclaimer_key": "standard"
  },
  {
    "id": "G24N",
    "title": "Hernien (Variante 1)",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2026,
    "description": "Eingriffe bei Hernien ohne plastische Rekonstruktion der Bauchwand, mit beidseitigem oder komplexem Eingriff oder Alter < 14 Jahre mit äußerst schweren oder schweren CC",
    "restrictions": "Beidseitig oder komplex oder Alter < 14 mit schweren CC",
    "base_price": 2711.39,
    "disclaimer_key": "standard"
  },
  {
    "id": "G24O",
    "title": "Hernien (Variante 2)",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2026,
    "description": "Eingriffe bei Hernien ohne plastische Rekonstruktion der Bauchwand, mit beidseitigem oder komplexem Eingriff oder Alter < 14 Jahre mit äußerst schweren oder schweren CC",
    "restrictions": "Beidseitig oder komplex oder Alter < 14 mit schweren CC",
    "base_price": 2465.72,
    "disclaimer_key": "standard"
  },
  {
    "id": "G24P",
    "title": "Hernien (Variante 3)",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2026,
    "description": "Eingriffe bei Hernien ohne plastische Rekonstruktion der Bauchwand, ohne beidseitigen Eingriff, ohne komplexen Eingriff, Alter > 17 Jahre",
    "restrictions": "Alter > 17 Jahre, ohne beidseitige/komplexe Eingriffe",
    "base_price": 2435.37,
    "disclaimer_key": "standard"
  },
  {
    "id": "G24Q",
    "title": "Hernien (Variante 4)",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2026,
    "description": "Eingriffe bei Hernien ohne plastische Rekonstruktion der Bauchwand, ohne beidseitigen Eingriff, ohne komplexen Eingriff, Alter > 17 Jahre",
    "restrictions": "Alter > 17 Jahre, ohne beidseitige/komplexe Eingriffe",
    "base_price": 2082.6,
    "disclaimer_key": "standard"
  },
  {
    "id": "G24R",
    "title": "Hernien (Variante 5)",
    "category": "Allgemeinchirurgie/Hernien",
    "year": 2026,
    "description": "Eingriffe bei Hernien ohne plastische Rekonstruktion der Bauchwand, ohne beidseitigen Eingriff, ohne komplexen Eingriff, Alter > 17 Jahre",
    "restrictions": "Alter > 17 Jahre, ohne beidseitige/komplexe Eingriffe",
    "base_price": 1246.41,
    "disclaimer_key": "standard"
  },
  {
    "id": "G26M",
    "title": "Anuseingriffe",
    "category": "Proktologie",
    "year": 2026,
    "description": "Andere Eingriffe am Anus oder Anoproktoplastik und Rekonstruktion von Anus und Sphinkter bei Analfissuren und Hämorrhoiden, Alter < 18 Jahre oder mit komplexer Diagnose oder mit kleinem Eingriff am Rektum",
    "restrictions": "Alter < 18 oder komplexe Diagnose oder kleiner Rektumeingriff",
    "base_price": 1426.87,
    "disclaimer_key": "standard"
  },
  {
    "id": "G26N",
    "title": "Anuseingriffe",
    "category": "Proktologie",
    "year": 2026,
    "description": "Andere Eingriffe am Anus oder Anoproktoplastik und Rekonstruktion von Anus und Sphinkter bei Analfissuren und Hämorrhoiden, Alter > 17 Jahre, ohne komplexe Diagnose, ohne kleinen Eingriff am Rektum",
    "restrictions": "Alter > 17, ohne komplexe Diagnose, ohne kleinen Rektumeingriff",
    "base_price": 1016.05,
    "disclaimer_key": "standard"
  },
  {
    "id": "H08M",
    "title": "Laparoskopische Cholezystektomie",
    "category": "Viszeralchirurgie",
    "year": 2026,
    "description": "Laparoskopische Cholezystektomie oder bestimmte Eingriffe an Leber und Bauchwand, Alter > 11 Jahre",
    "restrictions": "Alter > 11 Jahre",
    "base_price": 3036.49,
    "disclaimer_key": "standard"
  },
  {
    "id": "H41M",
    "title": "ERCP (aufwendig)",
    "category": "Gastroenterologie",
    "year": 2026,
    "description": "Andere aufwendige ERCP oder bestimmter endoskopischer Eingriff ohne bestimmte BNB",
    "restrictions": "Aufwendige ERCP oder bestimmter endoskopischer Eingriff",
    "base_price": 1846.44,
    "disclaimer_key": "standard"
  },
  {
    "id": "H41N",
    "title": "ERCP (Standard)",
    "category": "Gastroenterologie",
    "year": 2026,
    "description": "Andere ERCP ohne bestimmte oder andere aufwendige ERCP, Alter > 15 Jahre, ohne bestimmte BNB oder bestimmte Pankreatitis",
    "restrictions": "Alter > 15 Jahre, ohne bestimmte BNB/Pankreatitis",
    "base_price": 1479.81,
    "disclaimer_key": "standard"
  },
  {
    "id": "I13M",
    "title": "Extremitäteneingriffe/Endoprothese",
    "category": "Orthopädie/Traumatologie",
    "year": 2026,
    "description": "Bestimmte Eingriffe an den Extremitäten od. bei Endoproth. am Knie m. kompl. Eingr. od. schw. Weichteilsch. od. Pseudarthrose od. best. Osteotom. od. best. Eingr. Knieproth. od. Epiphyseodese od. bei BNB od. Alter > 17 J. od. ohne äuß. schw. od. schw. CC",
    "restrictions": "Alter > 17 Jahre oder diverse Komplikationen",
    "base_price": 3359.68,
    "disclaimer_key": "standard"
  },
  {
    "id": "I13N",
    "title": "Extremitäteneingriffe",
    "category": "Orthopädie/Traumatologie",
    "year": 2026,
    "description": "Bestimmte Eingriffe an den Extremitäten ohne bestimmten anderen Eingriff an den Extremitäten, außer bei bösartiger Neubildung, ohne kleinen Eingriff bei Knochen- und Gelenkinfektion oder Alter > 17 Jahre oder ohne äußerst schwere oder schwere CC",
    "restrictions": "Alter > 17 Jahre, außer bei Malignität",
    "base_price": 3091.04,
    "disclaimer_key": "standard"
  },
  {
    "id": "I20M",
    "title": "Fußeingriffe (komplex)",
    "category": "Orthopädie/Fußchirurgie",
    "year": 2026,
    "description": "Eingriffe am Fuß ohne bestimmte komplizierende Faktoren, mit Knochentransplantation oder schwerem Weichteilschaden oder bestimmtem Eingriff am Fuß oder Kalkaneusfraktur",
    "restrictions": "Mit Knochentransplantation oder schwerem Weichteilschaden",
    "base_price": 3280.38,
    "disclaimer_key": "standard"
  },
  {
    "id": "I20N",
    "title": "Fußeingriffe (Standard)",
    "category": "Orthopädie/Fußchirurgie",
    "year": 2026,
    "description": "Andere Eingriffe am Fuß oder chronische Polyarthritis oder Diabetes Mellitus mit Komplikationen oder Alter < 16 Jahre",
    "restrictions": "Chronische Polyarthritis oder Diabetes mit Komplikationen oder Alter < 16",
    "base_price": 2085.14,
    "disclaimer_key": "standard"
  },
  {
    "id": "I20O",
    "title": "Fußeingriffe (einfach)",
    "category": "Orthopädie/Fußchirurgie",
    "year": 2026,
    "description": "Eingriffe am Fuß ohne komplexe Eingriffe oder komplizierende Faktoren, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre, ohne komplexe Eingriffe",
    "base_price": 1006.54,
    "disclaimer_key": "standard"
  },
  {
    "id": "I21M",
    "title": "Osteosynthesematerial-Entfernung",
    "category": "Orthopädie/Traumatologie",
    "year": 2026,
    "description": "Lokale Exzision und Entfernung von Osteosynthesematerial an Hüftgelenk, Femur und Wirbelsäule oder komplexe Eingriffe an Ellenbogengelenk und Unterarm oder bestimmte Eingriffe an der Klavikula",
    "restrictions": "Spezifische anatomische Lokalisationen",
    "base_price": 3184.11,
    "disclaimer_key": "standard"
  },
  {
    "id": "I29M",
    "title": "Schultereingriffe",
    "category": "Orthopädie",
    "year": 2026,
    "description": "Komplexe Eingriffe am Schultergelenk oder best. Osteosynthesen an der Klavikula ohne kompliz. Diagnose, ohne Eingriff an mehreren Lokalisationen oder sonst. arthroskopische Rekonstruktion der Rotatorenmanschette mit bestimmten Eingriffen an der Schulter",
    "restrictions": "Ohne komplizierende Diagnose, ohne Mehrfachlokalisation",
    "base_price": 3652.1,
    "disclaimer_key": "standard"
  },
  {
    "id": "I31M",
    "title": "Ellenbogen/Unterarm (komplex)",
    "category": "Orthopädie/Handchirurgie",
    "year": 2026,
    "description": "Mehrere komplexe Eingriffe an Ellenbogengelenk und Unterarm oder gelenkübergreifende Weichteildistraktion bei angeborenen Anomalien der Hand oder bestimmte Eingriffe bei Mehrfragmentfraktur der Patella, mit bestimmten komplexen Eingriffen am Unterarm",
    "restrictions": "Mit bestimmten komplexen Eingriffen",
    "base_price": 3895.04,
    "disclaimer_key": "standard"
  },
  {
    "id": "I31N",
    "title": "Ellenbogen/Unterarm (Standard)",
    "category": "Orthopädie/Handchirurgie",
    "year": 2026,
    "description": "Mehrere komplexe Eingriffe an Ellenbogengelenk und Unterarm ohne gelenkübergreifende Weichteildistraktion bei angeborenen Anomalien der Hand, ohne bestimmte Eingriffe bei Mehrfragmentfraktur der Patella, ohne bestimmte komplexe Eingriffe am Unterarm",
    "restrictions": "Ohne bestimmte komplexe Eingriffe",
    "base_price": 3739.21,
    "disclaimer_key": "standard"
  },
  {
    "id": "J09M",
    "title": "Sinus pilonidalis",
    "category": "Allgemeinchirurgie",
    "year": 2026,
    "description": "Eingriffe bei Sinus pilonidalis und perianal, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre",
    "base_price": 1137.07,
    "disclaimer_key": "standard"
  },
  {
    "id": "L06M",
    "title": "Kleine Harnorganeingriffe",
    "category": "Urologie",
    "year": 2026,
    "description": "Andere kleine Eingriffe an den Harnorganen, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre",
    "base_price": 2353,
    "disclaimer_key": "standard"
  },
  {
    "id": "L17M",
    "title": "Urethraeingriffe (Variante 1)",
    "category": "Urologie",
    "year": 2026,
    "description": "Andere Eingriffe an der Urethra außer bei Para-/Tetraplegie, kleine Eingriffe an den Harnorganen, ohne bestimmte Eingriffe an der Urethra, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre, ohne Para-/Tetraplegie",
    "base_price": 1780.41,
    "disclaimer_key": "standard"
  },
  {
    "id": "L17N",
    "title": "Urethraeingriffe (Variante 2)",
    "category": "Urologie",
    "year": 2026,
    "description": "Andere Eingriffe an der Urethra außer bei Para-/Tetraplegie, kleine Eingriffe an den Harnorganen, ohne bestimmte Eingriffe an der Urethra, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre, ohne Para-/Tetraplegie",
    "base_price": 1258.81,
    "disclaimer_key": "standard"
  },
  {
    "id": "L20M",
    "title": "Transurethrale Eingriffe",
    "category": "Urologie",
    "year": 2026,
    "description": "Transurethrale Eingriffe außer Prostataresektion und komplexe Ureterorenoskopien oder bestimmte Eingriffe an den Harnorganen, ohne äußerst schwere CC oder Alter < 16 Jahre oder Alter > 89 Jahre",
    "restrictions": "Ohne äußerst schwere CC oder Alter < 16 oder > 89",
    "base_price": 2615.37,
    "disclaimer_key": "standard"
  },
  {
    "id": "L20N",
    "title": "Transurethrale Eingriffe",
    "category": "Urologie",
    "year": 2026,
    "description": "Transurethrale Eingriffe außer Prostataresektion und komplexe Ureterorenoskopien oder bestimmte Eingriffe an den Harnorganen, ohne äußerst schwere CC oder Alter > 15 Jahre oder Alter < 90 Jahre",
    "restrictions": "Alter 15-90 Jahre, ohne äußerst schwere CC",
    "base_price": 1777.25,
    "disclaimer_key": "standard"
  },
  {
    "id": "M04M",
    "title": "Hodeneingriffe",
    "category": "Urologie",
    "year": 2026,
    "description": "Eingriffe am Hoden ohne äußerst schwere CC, ohne bestimmten Eingriff, ohne mäßig komplexen Eingriff oder Alter > 2 Jahre, ohne schwere CC oder ohne beidseitigen Hodenhochstand oder Alter > 13 Jahre",
    "restrictions": "Alter > 2 Jahre oder > 13 Jahre, ohne schwere CC",
    "base_price": 1418.84,
    "disclaimer_key": "standard"
  },
  {
    "id": "M05M",
    "title": "Zirkumzision",
    "category": "Urologie",
    "year": 2026,
    "description": "Zirkumzision, andere Eingriffe am Penis oder großflächige Ablationen der Haut",
    "restrictions": "Keine spezifischen Restriktionen",
    "base_price": 1075.09,
    "disclaimer_key": "standard"
  },
  {
    "id": "N05M",
    "title": "Ovariektomien/Tubeneingriffe",
    "category": "Gynäkologie",
    "year": 2026,
    "description": "Ovariektomien und komplexe Eingriffe an den Tubae uterinae außer bei bösartiger Neubildung, ohne äuß. schwere oder schwere CC oder anderer Eingriff an der Harnblase oder Adhäsiolyse, Alter > 15 Jahre",
    "restrictions": "Alter > 15 Jahre, außer bei Malignität, ohne schwere CC",
    "base_price": 2453.35,
    "disclaimer_key": "standard"
  },
  {
    "id": "N07M",
    "title": "Uterus-/Adnexeneingriffe",
    "category": "Gynäkologie",
    "year": 2026,
    "description": "Andere Eingriffe an Uterus und Adnexen oder bestimmten Hernien außer bei bösartiger Neubildung, mit komplexer Diagnose oder bestimmte Eingriffe am Uterus oder kleine rekonstruktive Eingriffe an den weiblichen Geschlechtsorganen, mit bestimmtem Eingriff",
    "restrictions": "Außer bei Malignität, mit komplexer Diagnose oder bestimmten Eingriffen",
    "base_price": 2520.88,
    "disclaimer_key": "standard"
  },
  {
    "id": "N21M",
    "title": "Hysterektomie (aufwendig)",
    "category": "Gynäkologie",
    "year": 2026,
    "description": "Hysterektomie außer bei bösartiger Neubildung, ohne äuß. schw. oder schw. CC, ohne komplexen Eingriff, ohne Beckenbodenplastik oder subtotale und andere Hysterektomie bei bösartiger Neubildung oder komplexe Myomenukleation, mit aufwendigem Eingriff",
    "restrictions": "Mit aufwendigem Eingriff",
    "base_price": 3999.29,
    "disclaimer_key": "standard"
  },
  {
    "id": "N21N",
    "title": "Hysterektomie (Standard)",
    "category": "Gynäkologie",
    "year": 2026,
    "description": "Hysterektomie außer bei bösartiger Neubildung, ohne äuß. schw. oder schw. CC, ohne komplexen Eingriff, ohne Beckenbodenplastik oder subtotale und andere Hysterektomie bei bösartiger Neubildung oder komplexe Myomenukleation, ohne aufwendigen Eingriff",
    "restrictions": "Ohne aufwendigen Eingriff",
    "base_price": 3688.78,
    "disclaimer_key": "standard"
  },
  {
    "id": "N23M",
    "title": "Rekonstruktive Eingriffe/Myomenukleation",
    "category": "Gynäkologie",
    "year": 2026,
    "description": "Andere rekonstruktive Eingriffe an den weiblichen Geschlechtsorganen oder andere Myomenukleation",
    "restrictions": "Keine spezifischen Restriktionen",
    "base_price": 3832.21,
    "disclaimer_key": "standard"
  },
  {
    "id": "N25M",
    "title": "Andere gynäkologische Eingriffe",
    "category": "Gynäkologie",
    "year": 2026,
    "description": "Andere Eingriffe an Uterus und Adnexen oder bestimmten Hernien außer bei bösartiger Neubildung, ohne komplexe Diagnose oder andere kleine Eingriffe an den weiblichen Geschlechtsorganen, Alter > 13 Jahre",
    "restrictions": "Alter > 13 Jahre, außer bei Malignität, ohne komplexe Diagnose",
    "base_price": 1778.24,
    "disclaimer_key": "standard"
  },
  {
    "id": "Q03M",
    "title": "Kleine Eingriffe Blut/Immunsystem",
    "category": "Hämatologie/Immunologie",
    "year": 2026,
    "description": "Kleine Eingriffe bei Krankheiten des Blutes, der blutbildenden Organe und des Immunsystems, Alter > 9 Jahre",
    "restrictions": "Alter > 9 Jahre",
    "base_price": 1796.18,
    "disclaimer_key": "standard"
  },
  {
    "id": "R11M",
    "title": "Lymphom/Leukämie mit OR-Prozeduren",
    "category": "Onkologie",
    "year": 2026,
    "description": "Lymphom und Leukämie mit anderen OR-Prozeduren ohne äußerst schwere oder schwere CC",
    "restrictions": "Ohne äußerst schwere oder schwere CC",
    "base_price": 1629.74,
    "disclaimer_key": "standard"
  },
  {
    "id": "R14M",
    "title": "Neubildungen mit OR-Prozeduren",
    "category": "Onkologie",
    "year": 2026,
    "description": "Andere hämatologische und solide Neubildungen mit anderen OR-Prozeduren ohne äußerst schwere oder schwere CC oder Therapie mit offenen Nukliden bei hämatologischen und soliden Neubildungen, mehr als ein Belegungstag",
    "restrictions": "Mehr als ein Belegungstag, ohne äußerst schwere/schwere CC",
    "base_price": 1574.93,
    "disclaimer_key": "standard"
  }
]
