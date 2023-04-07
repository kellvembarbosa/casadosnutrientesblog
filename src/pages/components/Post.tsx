import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

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

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex flex-col m-5 items-center justify-center min-h-screen bg-black">
        <h1 className="text-white text-3xl font-bold my-8">{title}</h1>
        <p className="text-white text-lg my-4">{content}</p>
        <div className="relative w-96 h-196 cursor-pointer" onClick={handleImageClick}>
          <Image src={imageUrl} alt="post thumbnail" width={1080} height={1920} />
          {isModalOpen && (
            <Modal>
              <div className="flex justify-center items-center h-56">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center justify-center mx-4">
                    <i className="fab fa-instagram text-white text-3xl mb-2"></i>
                    <p className="text-black">Instagram</p>
                  </div>
                </a>
                <a href={kawaiLink} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center justify-center mx-4">
                    <i className="fab fa-kawai text-white text-3xl mb-2"></i>
                    <p className="text-black">Kawai</p>
                  </div>
                </a>
                <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center justify-center mx-4">
                    <i className="fab fa-tiktok text-white text-3xl mb-2"></i>
                    <p className="text-black">TikTok</p>
                  </div>
                </a>
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center justify-center mx-4">
                    <i className="fab fa-youtube text-white text-3xl mb-2"></i>
                    <p className="text-black">YouTube</p>
                  </div>
                </a>
              </div>
            </Modal>
          )}
        </div>
        <p className="text-gray-400 text-sm mt-2">Created on: {createdAt}</p>
      </div>
    </>
  );
};

export default Post;
