import { Link } from "../components/common/link";
import { Sidebar } from "../components/sidebar";
import { LogoutIcon, CreditCardIcon, UserCircleIcon, CalendarIcon } from '@heroicons/react/outline';

export const MainLayout = ({
    children
}) => (
    <div className="flex flex-row bg-defaultGrey w-full h-full">
        <Sidebar>
            <div className="mt-10 md:mt-20"></div>
            <Link to="/brand">
                <div className="flex flex-row flex-nowrap items-center"> 
                    <UserCircleIcon className="mr-3" width={20} height={20}/>
                    <span>My Brands</span>
                </div>
            </Link>
            <Link  to='/publications'>
                <div className="flex flex-row flex-nowrap items-center"> 
                    <CalendarIcon className="mr-3" width={20} height={20}/>
                    <span>My Publications</span>
                </div>
            </Link>
            <hr className="text-literalGrey mt-auto"/>
            <div className="my-5">
            <Link to="/billing/info">
                <div className="flex flex-row flex-nowrap items-center"> 
                    <CreditCardIcon className="mr-3" width={20} height={20}/>
                    <span>Billing info</span>
                </div>
            </Link>
            <Link to="/logout">
                <div className="flex flex-row flex-nowrap items-center"> 
                    <LogoutIcon className="mr-3" width={20} height={20}/>
                    <span>Log out</span>
                </div>
            </Link>
            </div>
        </Sidebar>
        <div className="flex w-full h-full overflow-auto">
            <div className="mx-4 mt-10 mb-4 md:mx-14 md:mt-7 w-full">
                {children}
            </div>
        </div>
    </div>
)