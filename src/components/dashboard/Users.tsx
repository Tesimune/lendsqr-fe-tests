import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import formatDate from '../../utils/dateFormatter';
import FilterForm from '../FilterForm';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import {MdMoreVert} from 'react-icons/md';
import { Link } from 'react-router-dom';

export function useFetch(url: RequestInfo | URL) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setUsers(result)
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    fetchUser()
  }, [url])

  return { loading, users };
}

const itemsPerPage = 10;

interface User {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  orgName: string;
  createdAt: string;
}

const Users = () => {
  const { loading, users } = useFetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
  
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  

  const pageCount = Math.ceil(users.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <AiOutlineLoading3Quarters className='animate-spin text-2xl' />
      </div>
    )
  }

    return (

        <div className="py-10 w-full overflow-x-auto">
            <table className="w-full overflow-x-auto table-auto text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-white">
                    <tr>
                        <th scope='col' className='py-3 px-3'>
                            <FilterForm label='Organization' />
                        </th>
                        <th scope="col" className="py-3 px-3">
                            <FilterForm label='Username' />
                        </th>
                        <th scope="col" className="py-3 px-3">
                            <FilterForm label='Email' />
                        </th>
                        <th scope="col" className="py-3 px-3">
                            <FilterForm label='phone number' />
                        </th>
                        <th scope="col" className="py-3 px-3">
                            <FilterForm label='date joined' />
                        </th>
                        <th scope="col" className="py-3 px-3">
                            <FilterForm label='status' />
                        </th>
                        <th scope="col" className="py-3 px-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map(user => (
                        <tr key={user.id} className="bg-white border-b relative">
                            <th scope="row" className="py-4 px-3 font-medium text-gray-900">
                                <Link to={"/users/"+user.userName} className="hover:underline">{user.orgName}</Link>
                            </th>
                            <td className="py-4 px-3">
                                {user.userName}
                            </td>
                            <td className="py-4 px-3">
                                {user.email}
                            </td>
                            <td className="py-4 px-3">
                                {user.phoneNumber}
                            </td>
                            <td className="py-4 px-3">
                                {formatDate(user.createdAt)}
                            </td>
                            <td className="py-4 px-3">
                                <span className='px-3 py-2 text-xs rounded-full bg-warning/10 text-warning'>Pending</span>
                            </td>
                            <td className="py-4 px-3">
                                <Menu userName={user.userName} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName="flex justify-center items-center mt-4"
                pageClassName="mx-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                pageLinkClassName="py-2 px-4 block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
                activeClassName="bg-secondary text-white"
            />

        </div>

    )
}

function Menu({userName}: any){
    const [more, setMore] = useState(false)
    const openMore = () => {
        if (more === false) {
            setMore(true)
        }else{
            setMore(false)
        }
    }

    return (
        <div>
            <button onClick={openMore} className="" type="button">
                <MdMoreVert />    
            </button>
            {more ? (
                <div className="absolute z-10 right-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <Link to="/user" className="block px-4 py-2 hover:bg-gray-100">View Details</Link>
                        </li>
                        <li>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Blacklist User</Link>
                        </li>
                        <li>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Activate User</Link>
                        </li>
                    </ul>
                </div>
            ):(null)}
        </div>
    )
}

export default Users


