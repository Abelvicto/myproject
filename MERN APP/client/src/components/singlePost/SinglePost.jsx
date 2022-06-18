import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./images/post (6).jpg" alt="" className="singlePosting" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor consectetur elit. Consequuntur, sequi.
          <div className="singlePostEdit">
            <i className="singlepostIcon far fa-edit"></i>
            <i className="singlepostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author
            <b>safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsam
          reprehenderit delectus ipsum iure. Aut numquam quam voluptate
          assumenda dolor laboriosam, magni alias hic molestiae quasi, quae id
          quod expedita voluptates voluptas sit ipsa eius tempora, temporibus
          perferendis. Nemo impedit porro aperiam natus temporibus alias
          dignissimos incidunt, animi perspiciatis ratione tempora odio,
          necessitatibus nesciunt, unde quia sapiente? Corrupti nesciunt sequi
          nam perspiciatis quas in, qui quia porro libero tenetur! Placeat
          consectetur officiis necessitatibus voluptates dolore natus qui
          architecto unde corrupti voluptas, vero ducimus laudantium ipsum,
          repudiandae animi labore. Voluptate, error. Odit dicta ullam fugit ad
          accusamus praesentium magnam sint accusantium!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
