class Language {
    base
    variant
    name
    flag

    constructor (base, variant, name, flag) {
        this.base = base
        this.variant = variant
        this.name = name
        this.flag = flag
    }

    code = () => {
        let v = "";
        if (this.variant !== null) {
            v = `-${this.variant}`;
        }

        return `${this.base}${v}`;
    }
}



const Languages = [  { code: 'af', name: 'Afrikaans', flag: 'ðŸ‡¿ðŸ‡¦' },
    { code: 'sq', name: 'Shqip', flag: 'ðŸ‡¦ðŸ‡±' },
    { code: 'am', name: 'áŠ áˆ›áˆ­áŠ›', flag: 'ðŸ‡ªðŸ‡¹' },
    { code: 'ar', name: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', flag: 'ðŸ‡¸ðŸ‡¦' },
    { code: 'hy', name: 'Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶', flag: 'ðŸ‡¦ðŸ‡²' },
    { code: 'my', name: 'á€—á€™á€¬', flag: 'ðŸ‡²ðŸ‡²' },
    { code: 'eu', name: 'Euskara', flag: 'ðŸ‡ªðŸ‡¸' },
    { code: 'bn', name: 'à¦¬à¦¾à¦‚à¦²à¦¾', flag: 'ðŸ‡§ðŸ‡©' },
    { code: 'bg', name: 'Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸', flag: 'ðŸ‡§ðŸ‡¬' },
    { code: 'be', name: 'Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ', flag: 'ðŸ‡§ðŸ‡¾' },
    { code: 'hr', name: 'Hrvatski', flag: 'ðŸ‡­ðŸ‡·' },
    { code: 'da', name: 'Dansk', flag: 'ðŸ‡©ðŸ‡°' },
    { code: 'en', name: 'English', flag: 'ðŸ‡¨ðŸ‡¦' },
    { code: 'en-AU', name: 'English (Australia)', flag: 'ðŸ‡¦ðŸ‡º' },
    { code: 'en-CA', name: 'English (Canada)', flag: 'ðŸ‡¨ðŸ‡¦' },
    { code: 'en-GB', name: 'English (United Kingdom)', flag: 'ðŸ‡¬ðŸ‡§' },
    { code: 'en-US', name: 'English (United States)', flag: 'ðŸ‡ºðŸ‡¸' },
    { code: 'et', name: 'Eesti', flag: 'ðŸ‡ªðŸ‡ª' },
    { code: 'tl', name: 'Filipino', flag: 'ðŸ‡µðŸ‡­' },
    { code: 'fi', name: 'Suomi', flag: 'ðŸ‡«ðŸ‡®' },
    { code: 'fr-FR', name: 'FranÃ§ais (France)', flag: 'ðŸ‡«ðŸ‡·' },
    { code: 'fr-CA', name: 'FranÃ§ais (Canada)', flag: 'ðŸ‡¨ðŸ‡¦' },
    { code: 'gl', name: 'Galego', flag: 'ðŸ‡ªðŸ‡¸' },
    { code: 'ka', name: 'áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜', flag: 'ðŸ‡¬ðŸ‡ª' },
    { code: 'gu', name: 'àª—à«àªœàª°àª¾àª¤à«€', flag: 'ðŸ‡®ðŸ‡³' },
    { code: 'he', name: '×¢×‘×¨×™×ª', flag: 'ðŸ‡®ðŸ‡±' },
    { code: 'hi', name: 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', flag: 'ðŸ‡®ðŸ‡³' },
    { code: 'id', name: 'Indonesia', flag: 'ðŸ‡®ðŸ‡©' },
    { code: 'is', name: 'Ãslenska', flag: 'ðŸ‡®ðŸ‡¸' },
    { code: 'it', name: 'Italiano', flag: 'ðŸ‡®ðŸ‡¹' },
    { code: 'ja', name: 'æ—¥æœ¬èªž', flag: 'ðŸ‡¯ðŸ‡µ' },
    { code: 'kn', name: 'à²•à²¨à³à²¨à²¡', flag: 'ðŸ‡®ðŸ‡³' },
    { code: 'ca', name: 'CatalÃ ', flag: 'ðŸ‡ªðŸ‡¸' },
    { code: 'kk', name: 'ÒšÐ°Ð·Ð°Ò› Ñ‚Ñ–Ð»Ñ–', flag: 'ðŸ‡°ðŸ‡¿' },
    { code: 'km', name: 'ážáŸ’áž˜áŸ‚ážš', flag: 'ðŸ‡°ðŸ‡­' },
    { code: 'ko', name: 'í•œêµ­ì–´', flag: 'ðŸ‡°ðŸ‡·' },
    { code: 'ky', name: 'ÐšÑ‹Ñ€Ð³Ñ‹Ð·Ñ‡Ð°', flag: 'ðŸ‡°ðŸ‡¬' },
    { code: 'lo', name: 'àº¥àº²àº§', flag: 'ðŸ‡±ðŸ‡¦' },
    { code: 'lt', name: 'LietuviÅ³', flag: 'ðŸ‡±ðŸ‡¹' },
    { code: 'lv', name: 'LatvieÅ¡u', flag: 'ðŸ‡±ðŸ‡»' },
    { code: 'mk', name: 'ÐœÐ°ÐºÐµÐ´Ð¾Ð½ÑÐºÐ¸', flag: 'ðŸ‡²ðŸ‡°' },
    { code: 'ml', name: 'à´®à´²à´¯à´¾à´³à´‚', flag: 'ðŸ‡®ðŸ‡³' },
    { code: 'ms-MY', name: 'Bahasa Melayu (Malaysia)', flag: 'ðŸ‡²ðŸ‡¾' },
    { code: 'ms', name: 'Bahasa Melayu', flag: 'ðŸ‡²ðŸ‡¾' },
    { code: 'mr', name: 'à¤®à¤°à¤¾à¤ à¥€', flag: 'ðŸ‡®ðŸ‡³' },
    { code: 'hu', name: 'Magyar', flag: 'ðŸ‡­ðŸ‡º' },
    { code: 'mn', name: 'ÐœÐ¾Ð½Ð³Ð¾Ð»', flag: 'ðŸ‡²ðŸ‡³' },
    { code: 'ne', name: 'à¤¨à¥‡à¤ªà¤¾à¤²à¥€', flag: 'ðŸ‡³ðŸ‡µ' },
    { code: 'nl', name: 'Nederlands', flag: 'ðŸ‡³ðŸ‡±' },
    { code: 'no', name: 'Norsk', flag: 'ðŸ‡³ðŸ‡´' },
    { code: 'de', name: 'Deutsch', flag: 'ðŸ‡©ðŸ‡ª' },
    { code: 'pa', name: 'à¨ªà©°à¨œà¨¾à¨¬à©€', flag: 'ðŸ‡®ðŸ‡³' },
    { code: 'fa', name: 'ÙØ§Ø±Ø³ÛŒ', flag: 'ðŸ‡®ðŸ‡·' },
    { code: 'pl', name: 'Polski', flag: 'ðŸ‡µðŸ‡±' },
    { code: 'pt-BR', name: 'PortuguÃªs (Brasil)', flag: 'ðŸ‡§ðŸ‡·' },
    { code: 'pt-PT', name: 'PortuguÃªs (Portugal)', flag: 'ðŸ‡µðŸ‡¹' },
    { code: 'ro', name: 'RomÃ¢nÄƒ', flag: 'ðŸ‡·ðŸ‡´' },
    { code: 'ru', name: 'Ð ÑƒÑÑÐºÐ¸Ð¹', flag: 'ðŸ‡·ðŸ‡º' },
    { code: 'rm', name: 'Rumantsch', flag: 'ðŸ‡¨ðŸ‡­' },
    { code: 'si', name: 'à·ƒà·’à¶‚à·„à¶½', flag: 'ðŸ‡±ðŸ‡°' },
    { code: 'sk', name: 'SlovenÄina', flag: 'ðŸ‡¸ðŸ‡°' },
    { code: 'sl', name: 'SlovenÅ¡Äina', flag: 'ðŸ‡¸ðŸ‡®' },
    { code: 'sr', name: 'Ð¡Ñ€Ð¿ÑÐºÐ¸', flag: 'ðŸ‡·ðŸ‡¸' },
    { code: 'sw', name: 'Kiswahili', flag: 'ðŸ‡¹ðŸ‡¿' },
    { code: 'ta', name: 'à®¤à®®à®¿à®´à¯', flag: 'ðŸ‡®ðŸ‡³' },
    { code: 'te', name: 'à°¤à±†à°²à±à°—à±', flag: 'ðŸ‡®ðŸ‡³' },
    { code: 'th', name: 'à¹„à¸—à¸¢', flag: 'ðŸ‡¹ðŸ‡­' },
    { code: 'tr', name: 'TÃ¼rkÃ§e', flag: 'ðŸ‡¹ðŸ‡·' },
    { code: 'uk', name: 'Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°', flag: 'ðŸ‡ºðŸ‡¦' },
    { code: 'ur', name: 'Ø§Ø±Ø¯Ùˆ', flag: 'ðŸ‡µðŸ‡°' },
    { code: 'vi', name: 'Tiáº¿ng Viá»‡t', flag: 'ðŸ‡»ðŸ‡³' },
    { code: 'zu', name: 'Zulu', flag: 'ðŸ‡¿ðŸ‡¦' },
    { code: 'az', name: 'AzÉ™rbaycan dili', flag: 'ðŸ‡¦ðŸ‡¿' },
    { code: 'cs', name: 'ÄŒeÅ¡tina', flag: 'ðŸ‡¨ðŸ‡¿' },
    { code: 'zh-HK', name: 'ä¸­æ–‡ï¼ˆé¦™æ¸¯ï¼‰', flag: 'ðŸ‡­ðŸ‡°' },
    { code: 'zh-TW', name: 'ä¸­æ–‡ï¼ˆç¹é«”ï¼‰', flag: 'ðŸ‡¹ðŸ‡¼' },
    { code: 'zh', name: 'ä¸­æ–‡ï¼ˆç®€ä½“ï¼‰', flag: 'ðŸ‡¨ðŸ‡³' },
    { code: 'el', name: 'Î•Î»Î»Î·Î½Î¹ÎºÎ¬', flag: 'ðŸ‡¬ðŸ‡·' },
    { code: 'es-419', name: 'EspaÃ±ol (LatinoamÃ©rica)', flag: 'ðŸŒŽ' },
    { code: 'es-US', name: 'EspaÃ±ol (Estados Unidos)', flag: 'ðŸ‡ºðŸ‡¸' },
    { code: 'es', name: 'EspaÃ±ol (EspaÃ±a)', flag: 'ðŸ‡ªðŸ‡¸' },
    { code: 'sv', name: 'Svenska', flag: 'ðŸ‡¸ðŸ‡ª' },
    ]

