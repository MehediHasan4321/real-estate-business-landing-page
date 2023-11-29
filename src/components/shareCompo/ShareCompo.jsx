import './ShareCompo.css'


export const IconBox = ({ icon: Icon, color,size=30,className }) => {

    return<div className={`icon ${className}`}>
        <Icon color={color} size={size}  />
    </div>
    
    
}