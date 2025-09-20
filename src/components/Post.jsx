import React, { useState } from "react";

export const Post = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      time: "1 min",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      images: [
        "https://www.w3schools.com/w3images/lights.jpg",
        "https://www.w3schools.com/w3images/nature.jpg",
      ],
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      user: "Jane Doe",
      avatar: "https://www.w3schools.com/w3images/avatar5.png",
      time: "16 min",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      images: [],
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      user: "Angie Jane",
      avatar: "https://www.w3schools.com/w3images/avatar6.png",
      time: "32 min",
      text: "Have you seen this? Lorem ipsum dolor sit amet...",
      images: ["https://www.w3schools.com/w3images/nature.jpg"],
      likes: 0,
      comments: [],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState({}); 

  const handleAddPost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: posts.length + 1,
      user: "You",
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      time: "Just now",
      text: newPost,
      images: [],
      likes: 0,
      comments: [],
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  const handleAddComment = (postId) => {
    const commentText = newComment[postId]?.trim();
    if (!commentText) return;

    setPosts(
      posts.map((p) =>
        p.id === postId
          ? { ...p, comments: [...p.comments, { text: commentText, user: "You" }] }
          : p
      )
    );

   
    setNewComment({ ...newComment, [postId]: "" });
  };

  return (
    <>
      {/* Formulario para crear un post */}
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">
              <h6 className="w3-opacity">Create a post</h6>
              <textarea
                className="w3-input w3-border w3-padding"
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button
                type="button"
                className="w3-button w3-theme w3-margin-top"
                onClick={handleAddPost}
              >
                <i className="fa fa-pencil"></i> Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="w3-container w3-card w3-white w3-round w3-margin"
        >
          <br />
          <img
            src={post.avatar}
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "100px" }}
          />
          <span className="w3-right w3-opacity">{post.time}</span>
          <h4>{post.user}</h4>
          <br />
          <hr className="w3-clear" />
          <p>{post.text}</p>

          {/* Imágenes del post */}
          {post.images.length > 0 && (
            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
              {post.images.map((img, index) => (
                <div className="w3-half" key={index}>
                  <img
                    src={img}
                    alt="Post media"
                    style={{ width: "100%" }}
                    className="w3-margin-bottom"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Botones */}
          <button
            type="button"
            className="w3-button w3-theme-d1 w3-margin-bottom"
            onClick={() => handleLike(post.id)}
          >
            <i className="fa fa-thumbs-up"></i> Like ({post.likes})
          </button>

          {/* Sección de comentarios */}
          <div className="w3-margin-top">
            <input
              type="text"
              className="w3-input w3-border"
              placeholder="Write a comment..."
              value={newComment[post.id] || ""}
              onChange={(e) =>
                setNewComment({ ...newComment, [post.id]: e.target.value })
              }
            />
            <button
              className="w3-button w3-theme w3-small w3-margin-top"
              onClick={() => handleAddComment(post.id)}
            >
              Comment
            </button>

            {/* Lista de comentarios */}
            <div className="w3-margin-top">
              {post.comments.map((c, i) => (
                <p key={i}>
                  <strong>{c.user}:</strong> {c.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
