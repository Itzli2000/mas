const type = {
    bold: 'OpenSans-Bold',
    boldItalic: 'OpenSans-BoldItalic',
    boldExtra: 'OpenSans-ExtraBold',
    boldExtraItalic: 'OpenSans-ExtraBoldItalic',
    italic: 'OpenSans-Italic',
    light: 'OpenSans-Light',
    lightItalic: 'OpenSans-LightItalic',
    regular: 'OpenSans',
    semiBold: 'OpenSans-SemiBold',
}

const size = {
    h1: 38,
    h2: 34,
    h3: 30,
    h4: 26,
    h5: 20,
    h6: 19,
    input: 18,
    regular: 17,
    medium: 14,
    small: 12,
    tiny: 8.5
}

const style = {   
    title:{
        fontFamily: type.bold,        
        fontSize: size.h5
    },
    normal: {
        fontFamily: type.regular,
        fontSize: size.regular
    },
    description: {
        fontFamily: type.regular,
        fontSize: size.medium
    }
}

export default {
    type,
    size,
    style
}
