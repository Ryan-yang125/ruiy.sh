import Link from "next/link";

export const metadata = {
  title: "Project",
  description: "Here are some projects made by Rui Yang.",
};

const projectLinks = [
  {
    link: "http://chat-llm-web.vercel.app",
  },
  {
    link: "http://fusionote.pro",
  },
  {
    link: "http://headlines-ai.com",
  },
];

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <div>
        {projectLinks.map((post) => (
          <Link
            key={post.link}
            className="flex flex-col space-y-1 mb-4"
            href={post.link}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.link}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
