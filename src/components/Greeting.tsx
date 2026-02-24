import { useState } from "preact/hooks";

type GreetingProps = {
  messages: string[];
};

export default function Greeting({ messages }: GreetingProps) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="flex items-center gap-4">
      <h3 class="text-xl font-heading font-bold">{greeting}! 訪問ありがとうございます！</h3>
      <button
        onClick={() => setGreeting(randomMessage())}
        class="px-4 py-2 rounded-full text-sm font-medium bg-bzine-accent/15 text-[#88ccca] hover:bg-bzine-accent/25 transition-colors cursor-pointer border-none"
      >
        New Greeting
      </button>
    </div>
  );
}
