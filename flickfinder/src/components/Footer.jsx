import {footerlinks , social} from '../Data';

const Footer = () => {
    return(
        <div id="footer" className='bg-gray-950'>
            <div className="grid pt-12  mx-8 justify-center">
                <div className='grid items-center justify-center'>
                    <div className='flex flex-wrap gap-x-8'>
                    {
                        footerlinks.map(({id,text,href})=>{
                            return(
                                <a key={id} href={href} className='mt-4 text-base text-gray-200 hover:text-yellow-400 duration-300'>{text}</a>
                            );
                        })
                    }
                    </div>

                </div>
                
                <div className="mt-8 py-4 text-md font-thin tracking-wider text-center min-h-12 items-center">
                    <h4>Copyright &copy; {new Date().getFullYear()}  Flick Finder All Rights Reserved.</h4>
                    <h4>Website developed by: Shwet Patel</h4>
                </div>
                
                <div className='grid items-center justify-center'>
                    <div className='my-8 flex flex-row gap-x-4'>
                    {
                        social.map(({id,icon,href})=>{
                            return(
                                <a key={id} className='bg-white rounded-full p-2 transform transition-transform duration-300 hover:scale-125' href={href}>
                                    {icon}
                                </a>
                            );
                        })
                    }
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Footer;