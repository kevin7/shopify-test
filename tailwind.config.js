module.exports = {
    content: [
        './src/**/*.scss', 
        './layout/*.liquid', 
        './sections/*.liquid', 
        './snippets/*.liquid', 
        './templates/*.liquid', 
        './src/js/**/*.js', 
        './src/js/components/**/*.js'
    ],
    safelist: [
        'pt-0',
        'pt-5',
        'pt-6',
        'pt-7',
        'pt-8',
        'pt-9',
        'pt-10',
        'pt-14',
        'pt-15',
        'pt-17',
        'pt-20',
        'pb-0',
        'pb-5',
        'pb-6',
        'pb-7',
        'pb-8',
        'pb-9',
        'pb-10',
        'pb-14',
        'pb-15',
        'pb-17',
        'pb-20',
        'lg:pt-0',
        'lg:pt-5',
        'lg:pt-6',
        'lg:pt-7',
        'lg:pt-8',
        'lg:pt-9',
        'lg:pt-10',
        'lg:pt-14',
        'lg:pt-15',
        'lg:pt-17',
        'lg:pt-20',
        'lg:pb-0',
        'lg:pb-5',
        'lg:pb-6',
        'lg:pb-7',
        'lg:pb-8',
        'lg:pb-9',
        'lg:pb-10',
        'lg:pb-14',
        'lg:pb-15',
        'lg:pb-17',
        'lg:pb-20',
        'bg-primary',
        'bg-primary-mid',
        'bg-secondary',
        'bg-secondary-mid'
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '24px',
                md: '80px',
                lg: '80px',
            },
            screens: {
                sm: '576px',
                md : '768px',
                lg: '1024px',
                xl: '1280px',
                qhd: '1440px',
            },
        },
        transitionDuration: {
            DEFAULT: '450ms',
            '200' : '200ms'
        },
        extend: {
            screens: {
                xs: '400px'
            },

            borderRadius: {
                'sm': '3px',
                DEFAULT: '5px',
                'md': '10px',
                'lg': '20px',
                'large': '40px'
            }
        },
        spacing: {
            0: '0',
            1: '8px',
            2: '16px',
            3: '24px',
            4: '32px',
            5: '40px',
            6: '48px',
            7: '56px',
            8: '64px',
            9: '72px',
            10: '80px',
            11: '88px',
            12: '96px',
            13: '104px',
            14: '112px',
            15: '120px',
            16: '128px',
            17: '136px',
            18: '144px',
            19: '152px',
            20: '160px'
        },
        fontFamily: {
            base: ['Futura', 'sans-serif'],
            heading: ['Futura', 'sans-serif'],
        },
        lineHeight: {
            'none' : '1',
            'extra-tight' : '1.2',
            'tight' : '1.25',
            'snug' : '1.3',
            'normal' : '1.5'
        },
        fontSize: {
            12: ['12px', '1.3'],
            14: ['14px', '1.5'],
            16: ['16px', '1.5'],
            18: ['18px', '1.3'],
            20: ['20px', '1.2'],
            24: ['24px', '1.3'],
            28: ['28px', '1.4'],
            32: ['32px', '1.25'],
            40: ['40px', '1.2'],
            48: ['48px', '1.16'],
            56: ['56px', '1.2']
        },
        colors: {
            'transparent': 'transparent',
            'black': '#000000',
            'white': '#FFFFFF',
            'success': '#3ccf5c',
            'error': '#ff3c3c',
            'blue': '#749DDD',
            'brown': '#746257',
            'red': '#CC1A1A',
            'primary': '#215169',
            'primary-mid': '#60BCD0',
            'secondary': '#F1C479',
            'secondary-mid': '#F5EFE0'
        }
    },
};
