export class ISjednaniResp {
    id: string;
    status: string;
    docs: any[];
    time: string;
}

export class IPojistnik {
    typ: any;
    titul: any;
    titul_za: any;
    jmeno: any;
    prijmeni: any;
    spolecnost: any;
    rc: any;
    ic: any;
    platce_dph: boolean;
    telefon: any;
    email: any;
    adresa: IAdresa;
    kadresa: any;
    kor_adresa: IAdresa;
}

export class IOsoba {
    typ: any;
    titul: any;
    titul_za: any;
    jmeno: any;
    prijmeni: any;
    spolecnost: any;
    rc: any;
    ic: any;
    adresa: IAdresa;
}

export class IAdresa {
    psc: any;
    cast_obce_id: any;
    obec: any;
    ulice: any;
    cp: any;
    adr_id: any;
}

export class ISrovnani {
    id: string;
    items: any[];
    time: string;
}

export class ISelectItem {
    value: any;
    label: string;
}

export class IOdpovednost {
    id: string;
    extra: any;
    pojisteni: string;
    pojistovna: string;
    produkt: number;
    sjed_cislo: any;
    sjed_status: number;
    sjed_datum: any;
    pocatek: any;
    konec: any;
    pojistne: number;
    provize: number;
    pc: number;
    vek: number;
    povolani: any;
    profese: string;
    spoluc: any;
    rizeni_voz: number;
    rizeni_sou: number;
    rizeni_nakl: number;
    rizeni_str: number;
    uz_platnost: number;
    pz: any;
    platba: number;
    pojistnik: IPojistnik;
    pojistenypojistnik: boolean;
    pojisteny: IOsoba;
    poznamka: string;
    promo_kod: string;
    ziskatel: any;
    id_sml: number;
    ipadr: string;
    email: string;
    link: string;
}

export class Odpovednost implements IOdpovednost {
    id: string;
    extra: any;
    pojisteni: string;
    pojistovna: string;
    produkt: number;
    sjed_cislo: any;
    sjed_status: number;
    sjed_datum: any;
    pocatek: any;
    konec: any;
    pojistne: number;
    provize: number;
    pc: number;
    vek: number;
    povolani: any;
    profese: string;
    spoluc: any;
    rizeni_voz: number;
    rizeni_sou: number;
    rizeni_nakl: number;
    rizeni_str: number;
    uz_platnost: number;
    pz: any;
    platba: number;
    pojistnik: IPojistnik;
    pojistenypojistnik: boolean;
    pojisteny: IOsoba;
    poznamka: string;
    promo_kod: string;
    ziskatel: any;
    id_sml: number;
    ipadr: string;
    email: string;
    link: string;

  constructor(data: any) {
    data = data || {}
    this.id = data.id || ''
    this.pojisteni = ["OBODP", "ZAMODP"].indexOf(data.pojisteni) ? data.pojisteni : null
    this.pojistovna = data.pojistovna || ''
    this.produkt = Number(data.produkt) || null
    this.sjed_cislo = data.sjed_cislo || null
    this.sjed_status = Number(data.sjed_status) || null
    this.sjed_datum = data.sjed_datum ? new Date(data.sjed_datum) : new Date(),
    // this.sjed_datum = new Date(this.sjed_datum)
    this.pocatek = data.pocatek ? new Date(data.pocatek) : new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    this.konec = data.konec || ''
    this.pojistne = Number(data.pojistne) || null
    this.provize = Number(data.provize) || null
    this.pc = Number(data.pc) || 100000
    this.vek = Number(data.vek) || null
    this.povolani = data.povolani || null
    this.profese = data.profese || null
    this.rizeni_voz = Number(data.rizeni_voz) || 0
    this.rizeni_sou = Number(data.rizeni_sou) || 0
    this.rizeni_nakl = Number(data.rizeni_nakl) || 0
    this.rizeni_str = Number(data.rizeni_str) || 0
    this.uz_platnost = Number(data.uz_platnost) || 2

    data.extra = data.extra || {}
    this.extra = data.extra || {}
      this.extra.pel = Number(data.extra.asn) || 0
      this.extra.hzv = Number(data.extra.asp) || 0
      this.extra.nem = Number(data.extra.skl) || 0
      this.extra.pro = Number(data.extra.nv) || 0
      this.extra.spol = Number(data.extra.pa) || -100000
      this.extra.zsv = Number(data.extra.ur) || 0
      this.extra.ppp = Number(data.extra.vlsk) || 0  
    this.platba = Number(data.platba) || 1

    data.pojistnik = data.pojistnik || {}
    this.pojistnik = data.pojistnik || {}
        this.pojistnik.typ = Number(data.pojistnik.typ) || 1
        this.pojistnik.titul = data.pojistnik.titul || ''
        this.pojistnik.titul_za = data.pojistnik.titul_za || ''
        this.pojistnik.jmeno = data.pojistnik.jmeno || ''
        this.pojistnik.prijmeni = data.pojistnik.prijmeni || ''
        this.pojistnik.spolecnost = data.pojistnik.spolecnost || ''
        this.pojistnik.rc = data.pojistnik.rc || ''
        this.pojistnik.ic = data.pojistnik.ic || ''
        this.pojistnik.platce_dph = (data.pojistnik.platce_dph == 'true' || data.pojistnik.platce_dph === true) ? true : false
        this.pojistnik.telefon = data.pojistnik.telefon || ''
        this.pojistnik.email = data.pojistnik.email || ''
        data.pojistnik.adresa = data.pojistnik.adresa || {}
        this.pojistnik.adresa = data.pojistnik.adresa || {}
            this.pojistnik.adresa.psc = data.pojistnik.adresa.psc || null
            this.pojistnik.adresa.cast_obce_id = data.pojistnik.adresa.cast_obce_id || null
            this.pojistnik.adresa.obec = data.pojistnik.adresa.obec || ''
            this.pojistnik.adresa.ulice = data.pojistnik.adresa.ulice || ''
            this.pojistnik.adresa.cp = data.pojistnik.adresa.cp || ''
            this.pojistnik.adresa.adr_id = data.pojistnik.adresa.adr_id || null
        this.pojistnik.kadresa  = (data.pojistnik.kadresa == 'true' || data.pojistnik.kadresa === true) ? true : false
        data.pojistnik.kor_adresa = data.pojistnik.kor_adresa || {}
        this.pojistnik.kor_adresa = data.pojistnik.kor_adresa || {}
            this.pojistnik.kor_adresa.psc = data.pojistnik.kor_adresa.psc || null
            this.pojistnik.kor_adresa.cast_obce_id = data.pojistnik.kor_adresa.cast_obce_id || null
            this.pojistnik.kor_adresa.obec = data.pojistnik.kor_adresa.obec || ''
            this.pojistnik.kor_adresa.ulice = data.pojistnik.kor_adresa.ulice || ''
            this.pojistnik.kor_adresa.cp = data.pojistnik.kor_adresa.cp || ''
            this.pojistnik.kor_adresa.adr_id = data.pojistnik.kor_adresa.adr_id || null
    this.pojistenypojistnik = (data.pojistenypojistnik == 'false' || data.pojistenypojistnik === false) ? false : true
    data.pojisteny = data.pojisteny || {}
    this.pojisteny = data.pojisteny || {}
        this.pojisteny.typ = Number(data.pojisteny.typ) || 1
        this.pojisteny.titul = data.pojisteny.titul || ''
        this.pojisteny.titul_za = data.pojisteny.titul_za || ''
        this.pojisteny.jmeno = data.pojisteny.jmeno || ''
        this.pojisteny.prijmeni = data.pojisteny.prijmeni || ''
        this.pojisteny.spolecnost = data.pojisteny.spolecnost || ''
        this.pojisteny.rc = data.pojisteny.rc || ''
        this.pojisteny.ic = data.pojisteny.ic || ''
        data.pojisteny.adresa = data.pojisteny.adresa || {}
        this.pojisteny.adresa = data.pojisteny.adresa || {}
            this.pojisteny.adresa.psc = data.pojisteny.adresa.psc || null
            this.pojisteny.adresa.cast_obce_id = data.pojisteny.adresa.cast_obce_id || null
            this.pojisteny.adresa.obec = data.pojisteny.adresa.obec || ''
            this.pojisteny.adresa.ulice = data.pojisteny.adresa.ulice || ''
            this.pojisteny.adresa.cp = data.pojisteny.adresa.cp || ''
            this.pojisteny.adresa.adr_id = data.pojisteny.adresa.adr_id || null
    this.poznamka = data.poznamka || ''
    this.promo_kod = data.promo_kod || ''
    this.ziskatel = data.ziskatel || ''
    this.ipadr = data.ipadr || ''
    this.email = data.email || ''
    this.link = data.link || ''
  }
}
