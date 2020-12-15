import {StyleSheet} from 'react-native';
import PX from './pixelPerfectProvider';

const black = '#000';
const lightBlue = '#F2F2F7';
const lightGray = '#8E8E93';
const red = '#FF2D55';
const orange = '#FF9500';
const green = '#34C759';
const yellow = '#FFCC00';
const skyBlue = '#5AC8FA';
const blue = '#007AFF';

const blockStyles = {
    backgroundColor: lightBlue,
    borderRadius: PX(14),
    marginBottom: PX(17),
};

const iconContainer = {
    width: PX(40),
    height: PX(40),
    borderRadius: PX(10),
    alignItems: 'center',
    justifyContent: 'center',
};
const totalBlock = {
    flex: 1,
    flexDirection: 'row',
};

const styles = StyleSheet.create({
    mainContainer:{flex: 1, justifyContent: 'space-between', alignItems: 'center'},
    h1: {
        fontSize: PX(24), // 3 * designSize
        lineHeight: PX(28),
        fontWeight: '700',
        color: black,
    },
    h2: {
        fontSize: PX(18), // 3 * designSize
        lineHeight: PX(18),
        fontWeight: '700',
    },
    h3: {
        fontSize: PX(14), // 3 * designSize
        lineHeight: PX(18),
        fontWeight: '400',
        color: lightGray,
    },
    h4: {
        fontSize: PX(12), // 3 * designSize
        lineHeight: PX(18),
        fontWeight: '400',
        color: lightGray,
    },
    totalValue: {
        fontSize: PX(18), // 3 * designSize
        fontWeight: '700',
    },
    listElement: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
        color: blue,
        paddingTop: PX(10),
        paddingBottom: PX(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    bubleCount: {
        borderRadius: PX(12),
        backgroundColor: '#C8C7CC',
        padding: PX(6),
        paddingLeft: PX(20),
        paddingRight: PX(20),
        marginRight: PX(10),
    },
    textListElement: {
        color: blue,
        fontWeight: '400',
        fontSize: PX(17),
    },
    textBubleListElement: {
        color: 'white',
        fontWeight: '700',
        fontSize: PX(14),
    },
    chartTitle:{
        flexDirection: 'row',
        padding: PX(17),
        height: '44%',
        borderBottomWidth: PX(1),
        borderBottomColor: '#E5E5EA',
    },
    container: {
        paddingLeft: PX(17),
        paddingRight: PX(17),
        backgroundColor: 'white',
        flex: 1,
    },
    chartContainer: {
        width: '100%',
        height: PX(157),
        marginTop: PX(17),
        alignSelf: 'center',
        ...blockStyles,
        paddingBottom: 0,
    },
    revenueContainer: {
        width: '100%',
        padding: PX(17),
        flexDirection: 'row',
        flexWrap: 'wrap',
        ...blockStyles,
    },
    title: {
        flexDirection: 'row',
        paddingBottom: PX(11),
    },
    revenueBlock: {
        flex: 1,
        padding: PX(1),
    },
    revenueText: {
        fontSize: PX(18), // 3 * designSize
        lineHeight: PX(18),
        fontWeight: '700',
        color: red,
    },
    totalsContainer: {
        marginTop: PX(7),
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginBottom: PX(17),
    },
    breakRow: {
        height: 0,
        flexBasis: '100%',
    },
    arrival: {
        backgroundColor: lightBlue,

        borderRadius: PX(10),
        padding: PX(8),

        ...totalBlock,
    },
    exits: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginLeft: PX(17),
        flex: 1,
        ...totalBlock,
    },
    reside: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginTop: PX(17),
        flex: 1,
        ...totalBlock,
    },
    free: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginTop: PX(17),
        marginLeft: PX(17),
        flex: 1,
        ...totalBlock,
    },
    greenIconContainer: {
        ...iconContainer,
        backgroundColor: green,
    },
    skyBlueIconContainer: {
        ...iconContainer,
        backgroundColor: skyBlue,
    },
    yellowIconContainer: {
        ...iconContainer,
        backgroundColor: yellow,
    },
    orangeIconContainer: {
        ...iconContainer,
        backgroundColor: orange,
    },

});

export default styles;
