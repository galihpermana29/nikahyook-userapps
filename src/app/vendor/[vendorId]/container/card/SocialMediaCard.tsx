type ISocialMediaCard = {
  icon: React.ReactNode;
  navigateTo: string;
};

const SocialMediaCard = ({ icon, navigateTo }: ISocialMediaCard) => {
  return (
    <a href={navigateTo} target="_blank" rel="noopener noreferrer">
      <div className="p-2 border border-ny-gray-100 rounded-lg">{icon}</div>
    </a>
  );
};

export default SocialMediaCard;
