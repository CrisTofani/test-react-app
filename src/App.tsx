import React, { useEffect, useState } from "react";
import "./App.scss";
import Card from "./Components/Card";
import { months } from "./utils/months";

type Post = {
  id: string;
  imgSrc: string;
  title: string;
  link: string;
  creationDate: string;
  authorLink?: string;
  author?: string;
};

const convertToReadablePost = (post: any): Post => {
  const authors = post._embedded.author.filter(
    (a: any) => a.id === post.author
  );
  
  return {
    id: post.id,
    title: post.title.rendered as string,
    link: post.link,
    author: authors.length > 0 ? authors[0].name : "",
    authorLink: authors.length > 0 ? authors[0].link : "",
    imgSrc: post.featured_media,
    creationDate: `${post._end_day} ${months[post._end_month]} ${
      post._end_year
    }`,
  };
};

const App = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    )
      .then((resp) => resp.json())
      .then((retrievedPosts: ReadonlyArray<any>) => {
        const reusablePosts = retrievedPosts.map(convertToReadablePost);
        setPosts(reusablePosts);
      })
      .catch(console.error); // could be usefull to show the user a proper error
  }, []);

  return (
    <div className="containter">
      <div className="row u-equal-height u-clearfix">
        {posts.map((p) => (
          <div className="col-4 spaces-vertical" key={p.id}>
            <Card
              author={p.author}
              img={p.imgSrc}
              createdAt={p.creationDate}
              title={p.title}
              link={p.link}
              authorLink={p.authorLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
