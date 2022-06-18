import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="./images/post (3).jpg" alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour Ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur,
        quisquam dolorum! Nostrum enim natus ducimus ullam voluptas ipsa
        pariatur, accusantium at iste dolorem labore dolores nisi blanditiis nam
        tempora vero praesentium animi iure veniam doloremque sequi doloribus
        eveniet vel molestias. Ducimus incidunt veritatis error quia reiciendis,
        labore cum ea autem Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Natus voluptatum dolorem magni saepe ex adipisci qui sapiente?
        Autem veniam officiis veritatis eum architecto quas ad tempore nobis
        natus dolor rem quos maiores reprehenderit unde blanditiis, aliquam
        voluptate doloremque laudantium distinctio omnis? Nam deserunt quo
        dolore unde quisquam repellendus adipisci, nulla voluptatum, numquam
        aut, molestiae corporis aliquid fugit autem quod. Eveniet eos vitae
        atque eum. Quidem illo sunt animi iusto nostrum?.
      </p>
    </div>
  );
};

export default Post;
