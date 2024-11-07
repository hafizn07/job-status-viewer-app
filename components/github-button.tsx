import Image from "next/image";
import Link from "next/link";

const GitHubButton = () => {
  return (
    <Link
      href="https://github.com/hafizn07/job-status-viewer-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fixed bottom-6 right-6 rounded-full p-2.5 shadow-lg hover:shadow-xl transition">
        <Image
          src="/assets/icons/github.svg"
          alt="GitHub"
          width={24}
          height={24}
        />
      </div>
    </Link>
  );
};

export default GitHubButton;
