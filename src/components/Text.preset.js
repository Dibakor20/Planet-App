import { colors } from "../themes/colors";
import { typography } from "../themes/typography";

const Base = {
    fontFamily: typography.primary,
    fontSize: 16,
    color:colors.white
}

const Base_Semi_Bold = {
    fontFamily: typography.semiBold,
    fontSize: 16,
    color:colors.white
}

const Base_Bold = {
    fontFamily: typography.bold,
    fontSize: 16,
    color:colors.white
}

export const presets = {
    default: Base,
    bold: Base_Bold,
    h1: {
        ...Base_Bold,
        fontSize:32
    },
    h2: {
        ...Base_Bold,
        fontSize:28
    },
    h3: {
        ...Base_Semi_Bold,
        fontSize:24
    },
    h4: {
        ...Base_Semi_Bold,
        fontSize:14
    },
    small: {
        ...Base,
        fontSize:12
    }
}