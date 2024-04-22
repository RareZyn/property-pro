import './DropdownMenu.css'

export const DropdownMenu = ({className}) => {
    console.log(className);
    return(
        <div className={className}>
            <a className='ProfileViewDetailsCard' href='/myaccount-property'>
                <img className='ProfileView' src={require("../../Res/image/user profile.png")}/>
                <h3 className='ProfileViewName'>Name</h3>
                <p className='ProfileViewDesc'>Bla bla bla</p>
            </a>
            <nav>
                <ul>

                </ul>
            </nav>
        </div>
    );
}