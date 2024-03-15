

import React from 'react';

const commentsData = [
  {
    name: "Aditya Singh",
    text: "Minim cupidatat non consequat eiusmod aliquip.",
    replies: [],
  },
  {
    name: "Aditya Singh",
    text: "Amet mollit do ullamco reprehenderit commodo cupidatat mollit et aliqua quis.",
    replies: [
      {
        name: "Aditya Singh",
        text: "Duis est ad id id labore veniam non ea commodo.",
        replies: [],
      },
      {
        name: "Aditya Singh",
        text: "Ea culpa aliquip consequat veniam duis enim labore.",
        replies: [
          {
            name: "Aditya Singh",
            text: "Veniam pariatur labore ut est amet laborum aliquip minim.",
            replies: [
              {
                name: "Aditya Singh",
                text: "Aute qui duis quis cillum mollit magna amet voluptate dolor ut labore voluptate labore incididunt.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" // Provide a valid image source URL
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ Comments }) => {
  return Comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList Comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList Comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
