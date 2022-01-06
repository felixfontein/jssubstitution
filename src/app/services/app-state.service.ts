import { Injectable } from '@angular/core';

import { Substitution } from '../utils/substitution';
import { SubstitutionService } from './substitution.service';
import { Alphabet } from '../utils/alphabet';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public text: string;

  public showHeader: boolean;

  constructor(private readonly subsService: SubstitutionService) {
    // Configure app
    const params = new URLSearchParams(window.location.search);
    this.showHeader = params.get('header') !== 'off';

    // Set up text and alphabet
    this.text = '';
    this.resetText();
  }

  public resetText(): void {
    const alphabet = new Alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', ' .,;:-');
    this.text = 'CFOC IDLC QYFGGZC NCFQYOCL RFQY WJWDZQY JDR, WJRR TJO RFC OFQYL CFOGJQY HOJQHCO HJOO. WJR FRL KCF RDKRLFLDLFSOR-QYFGGZCO DOW WCZ VFICOCZC-QYFGGZC OFQYL WCZ GJBB. KCF KCFWCO YFBGL CFOC YJCDGFIHCFLRJOJBXRC WCZ VCZPCOWCLCO KDQYRLJKCO FT QYFGGZC-LCML. WJR ICRDQYLC VFCZLC BSCRDOIRPSZL FRL WCZ VSZOJTC VSO PYFLGFCBW WFGGFC, CFOCT JTCZFHJOFRQYCO HZXELSIZJGCO, WCZ NDRJTTCO TFL TJZLFO YCBBTJO WCO RS ICOJOOLCO WFGGFC-YCBBTJO-RQYBDCRRCBJDRLJDRQY VSZICRLCBBL YJL. WFCRCR VCZGJYZCO NDT JDRLJDRQY CFOCR ICYCFTCO RQYBDCRRCBR DCKCZ CFOCO OFQYL JKYSCZRFQYCZCO HJOJB PFZW JDQY YCDLC OSQY KCF GJRL ACWCZ VCZKFOWDOI FT FOLCZOCL VCZPCOWCL. NDT RQYBDRR OSQY CFO YFOPCFR GDCZ WFC BCLNLC QYFGGZC: WJR ICYCFTPSZL WSZL FRL WJR YCFTJLBJOW WCZ ICRDQYLCO HZXELSIZJGFO. RFC RLJTTL JDR WCT IBCFQYCO BJOW PFC WFGGFC DOW YCBBTJO.';
    this.subsService.setSubstitution(new Substitution(alphabet));
  }
}
