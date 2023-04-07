import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import SocialMediaLinks from './SocialMediaLinks';

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
          <p className="text-gray-400 text-sm mt-2">Created on: {createdAt}</p>
        <p className="text-white text-lg my-4 text-center">{content}</p>
        <div className="relative w-96 h-196 cursor-pointer" onClick={handleImageClick}>
          <Image src={imageUrl} alt="post thumbnail" width={1080} height={1920} />
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
      </div>
    </>
  );
};

export default Post;
