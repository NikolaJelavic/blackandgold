import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-black p-1 md:p-2 border-pink-400 border-t'>
      <div className='w-11/12 lg:w-2/5 mx-auto flex justify-around'>
        <SocialIcon url="https://www.instagram.com/gcafe_2022/" />
        <SocialIcon url="https://www.facebook.com/ManayGcafe/" />
        <SocialIcon url="https://www.youtube.com/watch?v=oNN5pdqJoUE" />
      </div>
    </div>
  );
}