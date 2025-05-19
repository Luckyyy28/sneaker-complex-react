import logo from '../assets/logo.png'

export const Header = () => {
    return <>
    <div className='flex flex-row p-4 fixed bg-white w-full'>
        <div className='w-1/4'>
            <img src={logo} width="150px" height="30px"/>
        </div>
        <div className='gap-5 flex items-center justify-center w-1/2'>  
            <a href="#home">HOME</a>
            <a href="#product">PRODUCTS</a>
            <a href="#contact">CONTACTS</a>
        </div>
    </div>
    </>
}