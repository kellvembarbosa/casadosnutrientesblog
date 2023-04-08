import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import SocialMediaLinks from './SocialMediaLinks';
import { FaPlayCircle } from 'react-icons/fa';
import Link from 'next/link';

interface PostProps {
  title: string;
  content: string;
  imageUrl: string;
  instagramLink: string;
  kawaiLink: string;
  tiktokLink: string;
  youtubeLink: string;
  createdAt: string;
}

const Post: React.FC<PostProps> = ({
  title,
  content,
  imageUrl,
  instagramLink,
  kawaiLink,
  tiktokLink,
  youtubeLink,
  createdAt,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = 'cateogira'
  const tags = ['palpite', 'iai', 'sera que voce volta']

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
          {/* <Link href={`/`} className='fixed top-0 right-0 m-4 p-2 rounded-full bg-gray-400 text-base font-semibold text-gray-800 hover:text-gray-300'>Voltar</Link> */}
      <div className="flex flex-col m-1 sm:m-10 p-5 items-center justify-center min-h-screen bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-white text-3xl text-center font-bold my-8">{title}</h1>
        <p className="text-gray-400 text-sm mt-2">Publicado em: {createdAt}</p>
        <p className="text-white text-lg my-4 text-center">{content}</p>
        <div className="relative w-96 h-196 cursor-pointer" onClick={handleImageClick}>
          <Image src={`data:image/png;base64,${imageUrl}`} alt="post thumbnail" width={1080} height={1920} />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <FaPlayCircle size={128} color="#fff" />
          </div>
          {isModalOpen && (
            <Modal>
              <div className="flex justify-center items-center h-56">
                <SocialMediaLinks
                  instagramLink={instagramLink}
                  kawaiLink={kawaiLink}
                  tiktokLink={tiktokLink}
                  youtubeLink={youtubeLink}
                />
              </div>
            </Modal>
          )}
        </div>

        <div className="flex flex-wrap mb-2 mt-3">
          <span className="text-gray-500 text-sm mr-2">Categoria:</span>
          <span className="text-gray-500 text-sm font-bold">{category}</span>
        </div>
        <div className="flex flex-wrap">
          <span className="text-gray-500 text-sm mr-2">Tags:</span>
          {tags.map(tag => (
            <span key={tag} className="text-gray-500 text-sm font-bold mr-2">
              {tag}
            </span>
          ))}
        </div>


      </div>
    </>
  );
};

export default Post;
