export default function TabButton({children, onSelect, isSelected}) {
    console.log("BUTTON");
    
    return <li><button className={isSelected ? "active": ''} onClick={onSelect}>{children}</button></li>
}