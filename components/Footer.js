import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/RestoreOutlined'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FolderIcon from '@material-ui/icons/Folder'

const Footer = ({value, navigation}) => {
    return (
        <BottomNavigation value = {value}>
            <BottomNavigationAction onClick={()=>navigation.navigate('Calendar')} label="Recents" value="calendar" icon={<svg width="90" height="56" viewBox="0 0 90 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i)">
<rect width="90" height="56" fill="white"/>
<rect x="34" y="19" width="20" height="19" rx="3" stroke="#0872B9" strokeWidth="2"/>
<path d="M39 17V19" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 17V19" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34 24H54" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.5 29H39.5" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.5 29H44.5" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.5 29H49.5" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.5 33H39.5" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.5 33H44.5" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48.5 33H49.5" stroke="#0872B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_i" x="0" y="0" width="90" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
</defs>
</svg>
} />
            <BottomNavigationAction onClick={()=>navigation.navigate('Info')} label="Favorites" value="info" icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 15V11" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 7H11.01" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

} />
            <BottomNavigationAction label="Nearby" value="archive" icon={<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.981 11.6673L12.0815 21.5668C12.0815 21.5668 7.48528 26.163 3.24264 21.9203C-1 17.6777 3.59619 13.0815 3.59619 13.0815L13.8492 2.82843C13.8492 2.82843 16.6777 3.94413e-06 19.5061 2.82843C22.3345 5.65686 19.5061 8.48529 19.5061 8.48529L9.6066 18.3848C9.6066 18.3848 8.19239 19.799 6.77817 18.3848C5.36396 16.9706 6.77817 15.5564 6.77817 15.5564L15.9706 6.36396" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
} />
            <BottomNavigationAction label="Folder" value="profile" icon={<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9298 19V17C17.9298 15.9391 17.5084 14.9217 16.7582 14.1716C16.0081 13.4214 14.9907 13 13.9298 13H5.92981C4.86894 13 3.85153 13.4214 3.10138 14.1716C2.35124 14.9217 1.92981 15.9391 1.92981 17V19" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.92981 9C12.1389 9 13.9298 7.20914 13.9298 5C13.9298 2.79086 12.1389 1 9.92981 1C7.72067 1 5.92981 2.79086 5.92981 5C5.92981 7.20914 7.72067 9 9.92981 9Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
} />
        </BottomNavigation>
    )
}
const styles = StyleSheet.create({
    bottom:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        flexDirection: 'row'

    },
    text:{
        fontSize:30,
        color: '#ffffff',
        textAlign:'center',
        
    }

})
export default Footer
