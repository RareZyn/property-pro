import './DropdownMenu.css'

export const DropdownMenu = ({className}) => {
    console.log(className);
    return(
        <div className={className}>
            <div className='ProfileView'></div>
            <nav>
                <ul>

                </ul>
            </nav>
        </div>
    );
}