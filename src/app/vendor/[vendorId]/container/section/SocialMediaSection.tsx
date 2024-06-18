import React from 'react';
import SocialMediaCard from '../card/SocialMediaCard';
import { WebsiteIcon } from '@/shared/container/Icon/WebsiteIcon';
import { InstagramIcon } from '@/shared/container/Icon/InstagramIcon';
import { TikTokIcon } from '@/shared/container/Icon/TikTokIcon';
import { FacebookIcon } from '@/shared/container/Icon/FacebookIcon';

type ISocialMediaSection = {
  website_url?: string;
  instagram_url?: string;
  tiktok_url?: string;
  facebook_url?: string;
};

const SocialMediaSection = ({
  website_url,
  instagram_url,
  tiktok_url,
  facebook_url,
}: ISocialMediaSection) => {
  return (
    <section className="space-y-3 px-4">
      <h3 className="text-body-2 font-medium">Social Media</h3>
      <div className="flex items-center gap-3 flex-wrap">
        {website_url && (
          <SocialMediaCard navigateTo={website_url} icon={<WebsiteIcon />} />
        )}
        {instagram_url && (
          <SocialMediaCard
            navigateTo={instagram_url}
            icon={<InstagramIcon />}
          />
        )}
        {tiktok_url && (
          <SocialMediaCard navigateTo={tiktok_url} icon={<TikTokIcon />} />
        )}
        {facebook_url && (
          <SocialMediaCard navigateTo={facebook_url} icon={<FacebookIcon />} />
        )}
      </div>
    </section>
  );
};

export default SocialMediaSection;
