import {create, PREDEF_RES} from 'react-native-pixel-perfect';

const perfectSize = create(PREDEF_RES.iphoneX.px);

const PX = (px) => {
    return perfectSize(px * 3);
};

export default PX;
