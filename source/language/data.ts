const json: any = [
    {
        name: 'js/ts json',
        scope: 'support.constant.json',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
        scope: [
            'source.json meta.structure.dictionary.json > string.quoted.json',
        ],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
        scope: ['source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string'],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
        scope: ['source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation'],
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
        scope: ['source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json'],
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: '[VSCODE-CUSTOM] JSON Property Name',
        scope: ['support.type.property-name.json'],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
        scope: ['support.type.property-name.json punctuation'],
        settings: {
            foreground: '#e06c75'
        }
    },
]

export const data = json