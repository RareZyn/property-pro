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
            <ul className='DropdownMenuNavigation'>
                <li className='DropdownMenuNavigationItem'>
                    <a href='/HomePage'>
                        <img src={require("../../Res/image/dropdownmenu-icons/house icon dropdownmenu.png")}/>
                        <h1>Home</h1>
                    </a>
                </li>
                <DropdownMenuNavItem
                    href='/publish-property'
                    src={require("../../Res/image/dropdownmenu-icons/sell icon dropdownmenu.png")}
                    itemName={"Sell Property"}
                ></DropdownMenuNavItem>
                <DropdownMenuNavItem
                    href='/browser-property'
                    src={require("../../Res/image/dropdownmenu-icons/find icon dropdownmenu.png")}
                    itemName={"Find Property"}
                ></DropdownMenuNavItem>
                <DropdownMenuNavItem
                    href='/browser-property'
                    src={require("../../Res/image/dropdownmenu-icons/chat icon.png")}
                    itemName={"Chat"}
                ></DropdownMenuNavItem>
                <DropdownMenuNavItem
                    href='/browser-property'
                    src={require("../../Res/image/dropdownmenu-icons/save icon.png")}
                    itemName={"Saved Property"}
                ></DropdownMenuNavItem>
                <DropdownMenuNavItem
                    href='/browser-property'
                    src={require("../../Res/image/dropdownmenu-icons/help center.png")}
                    itemName={"Help Center"}
                ></DropdownMenuNavItem>
                <DropdownMenuNavItem
                    href='/browser-property'
                    src={require("../../Res/image/dropdownmenu-icons/about app.png")}
                    itemName={"About App"}
                ></DropdownMenuNavItem>
                <DropdownMenuNavItem
                    href='/browser-property'
                    src={require("../../Res/image/dropdownmenu-icons/logout icon.png")}
                    itemName={"Logout"}
                ></DropdownMenuNavItem>
                
            </ul>
        </div>
    );
}

const DropdownMenuNavItem = ({href,src,itemName}) => {
    return(
        <li className='DropdownMenuNavigationItem'>
            <a href={href}>
                <img src={src}/>
                <h1>{itemName}</h1>
            </a>
        </li>
    )
}