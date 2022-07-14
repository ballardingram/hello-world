import React from 'react';
import Card from '../components/Card';
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import defaultPic from '../assets/orange-pug-256.png'
import Layout from '../components/Layout';
import { Icon } from '@iconify/react';
import sadButRelievedFace from '@iconify/icons-emojione-monotone/sad-but-relieved-face';


const Profile = () => {

  const { data } = useQuery(QUERY_USER, {  variables: { email: Auth.getUserEmail() }});

  const userData = data;
  console.log(userData);




  return (
    <>
    {userData && (
  
  <Layout>
    <main className="sm:grid sm:grid-cols-2 h-full lg:grid-cols-3 mx-4 text-lg lg:mt-56 mt-12 mb-8 md:mt-16 xl:mt-64">
        {/* <div className='w-full text-right text-2xl pr-5 font-bold'>Dashboard</div> */}
    {/*md break column 1 */}
    <div className="pt-1 sm:px-2 rounded-lg w-sm lg:max-w-sm h-full">
      <div className='font-semibold text-2xl'>Friends</div>
      <div className='font-normal mb-1 text-lg'>5 friends</div>
        <div className='grid grid-cols-4 gap-1 w-sm mb-5 rounded-2xl' id='friends'>
          {userData.user.friends.length > 0 ? userData.user.friends.map(friend => {
            return <a href='/'><img src={friend.profilePicURL ? friend.profilePicURL : defaultPic} alt={friend.diplayName} className='h-20 p-1'/></a>
          }) : <div className='grid col-span-4 text-xl py-4 text-center'>Make some friends!!</div>}
        </div>
      <div className='hidden sm:contents'>
      <div className='font-semibold text-2xl mb-1 pt-2 text-center'>Message Center</div>
        <div className='flex flex-col justify-center text-lg md:text-xl tracking-wide font-semibold'>
        {userData.user.friends.length > 0 ? userData.user.friends.map(friend => {
          return <a href='/' className='flex flex-row items-center mb-1 rounded-r-2xl' id='friends'>
            <img src={friend.profilePicURL ? friend.profilePicURL : defaultPic} alt={friend.diplayName} className='h-20 p-1'/>
            <div className='w-full text-center'>{friend.diplayName}</div>
          </a>
        }) : <div className='flex justify-center m-1'>You have no messages<Icon icon={sadButRelievedFace} color="black" height="30" className='ml-2'/></div>}
        </div>
      </div>
    </div>
    {/*md break column 2 */}
    <div className="pt-1 sm:px-2 rounded-lg min-w-md">
      <div className='flex flex-col justify-between'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  </main>
  </Layout>
    )}
    </>
  );
}

export default Profile;