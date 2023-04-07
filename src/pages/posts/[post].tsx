import { NextPage } from 'next';
import Post from '../components/Post';

const PostPage: NextPage = () => {
  return (
    <div>
      <Post
        title="Meu post"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sodales luctus. Proin nisl est, feugiat fermentum aliquam tristique, fringilla congue magna. Sed porta metus dolor, vel congue nulla convallis sit amet. Nulla sed fermentum elit, a sollicitudin mauris. Quisque eget ex ex. Mauris nec nisi eleifend, sagittis neque quis, semper velit. Praesent congue ex quis scelerisque consequat. Curabitur efficitur dolor suscipit, euismod tellus mattis, scelerisque massa. Vivamus sed scelerisque lacus, vitae tempor neque. Vivamus nec risus tincidunt, egestas est placerat, ultricies neque. Morbi laoreet neque tristique, tristique augue ac, efficitur mi. Aenean sodales eros non pellentesque pretium. Fusce pretium malesuada diam ut auctor. Aenean suscipit, tellus in condimentum suscipit, diam est fermentum velit, quis tempus metus nisl non nulla. Aenean suscipit posuere tortor, quis porttitor ligula mollis nec. Aenean nec sem mi.

        In id metus posuere, sodales lorem et, varius tellus. Fusce sed magna quis libero tempus varius at eu ex. Nunc aliquam ligula vitae ex malesuada, eget finibus dui dictum. Sed volutpat, diam quis pellentesque mollis, tellus odio commodo lorem, eget congue ante tortor aliquam sapien. Integer eget nisl vitae tellus malesuada cursus. Donec semper convallis diam, ac consectetur sem vulputate eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc eget velit id justo ullamcorper pretium suscipit eu erat. Aliquam cursus mi non vulputate sollicitudin. Proin volutpat dui et ligula sagittis, ac elementum mauris dapibus. Nulla feugiat, turpis eu placerat aliquam, ligula massa auctor mi, ac elementum dolor tortor quis nisl.
        
        Phasellus vitae eros nec dolor luctus fringilla sed in turpis. Nunc ante neque, aliquet eget tempor sed, dapibus eu risus. Duis auctor libero ut arcu porta, non lacinia est volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, massa et vulputate hendrerit, magna risus laoreet ligula, non pretium justo magna sit amet augue. Vivamus pretium a sem vel tempus. Fusce scelerisque laoreet justo efficitur ullamcorper."
        imageUrl="/gengibre2-1.png"
        instagramLink="https://www.instagram.com/"
        kawaiLink="https://www.kawai.com/"
        tiktokLink="https://www.tiktok.com/"
        youtubeLink="https://www.youtube.com/"
        createdAt="2023-04-07"
      />
    </div>
  );
};

export default PostPage;