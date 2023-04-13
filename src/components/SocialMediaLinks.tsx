import React from "react";
import { FaInstagram, FaKaggle, FaTiktok, FaYoutube } from "react-icons/fa";


const SocialMediaLinks = ({ instagramLink, kawaiLink, tiktokLink, youtubeLink }: {
    instagramLink: string,
    kawaiLink: string,
    tiktokLink: string,
    youtubeLink: string
}) => {
  return (
    <div className="flex justify-center items-center h-56">
      <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center mx-4">
        <FaInstagram className="text-white text-3xl mb-2" />
        <p className="text-white">Instagram</p>
      </a>
      <a href={kawaiLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center mx-4">
        <FaKaggle className="text-white text-3xl mb-2" />
        <p className="text-white">Kawai</p>
      </a>
      <a href={tiktokLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center mx-4">
        <FaTiktok className="text-white text-3xl mb-2" />
        <p className="text-white">TikTok</p>
      </a>
      <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center mx-4">
        <FaYoutube className="text-white text-3xl mb-2" />
        <p className="text-white">YouTube</p>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
