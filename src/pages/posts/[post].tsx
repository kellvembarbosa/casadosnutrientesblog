import { NextPage } from 'next';
import Post from '../components/Post';
import { GetServerSideProps } from 'next'
import { post } from '@prisma/client';

const fetcher = (url: string, options: {
  'slug': string}) => fetch(url, {
  body: JSON.stringify(options),
  method: 'POST'
}).then((res) => res.json());

const API = 'http://localhost:3000/api/post'

type Data = {
  post: post,
  imagesSTR: string
//   category: category,
//   tags: tag[]
}

type PropsPost = {
  resPostPage: Data
}


const PostPage: NextPage<PropsPost> = ({resPostPage}) => {
  const {post, imagesSTR} = resPostPage

  return (
    <div>
      <Post
        title= {post.title}
        content= {post.content}
        imageUrl= {imagesSTR}
        instagramLink= {post.ig_url ?? '#'}
        kawaiLink= {post.kawai_url ?? '#'}
        tiktokLink= {post.tiktok_url}
        youtubeLink= {post.yt_url ?? '#'}
        createdAt= {new Date(post.created_at ?? '').toLocaleDateString()}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context

  const resPostPage: Data = await fetcher(API, {
    slug: params?.post?.toString() ?? ''
  });

  return {
      props: {
        resPostPage
      }
  };
}

export default PostPage;