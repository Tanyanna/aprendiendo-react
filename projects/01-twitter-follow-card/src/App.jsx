import { useState } from "react";

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import { TwitterCard } from "./TwitterCard";
import { TwitterTrendingCard } from "./TwitterTrendingCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

const topics = [
  {
    category: "Sports",
    name: "Fresneda",
    tweetNumber: 8083,
  },
  {
    category: "Politics",
    name: "Abascal",
    tweetNumber: 5000,
  },
  {
    category: "Spain",
    name: "Carlos Rios",
    tweetNumber: 3000,
  },
];

export function App() {
  return (
    <section className="App">
      <TwitterCard title="What's happening">
        {topics.map(({ category, name, tweetNumber }) => (
          <TwitterTrendingCard
            key={name}
            category={category}
            name={name}
            tweetNumber={tweetNumber}
          ></TwitterTrendingCard>
        ))}
      </TwitterCard>
      <TwitterCard title="Who to follow">
        {users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))}
      </TwitterCard>
    </section>
  );
}
