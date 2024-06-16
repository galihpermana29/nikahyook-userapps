import EditIcon from '@/shared/container/Icon/EditIcon';
import { getServerSession } from '@/shared/usecase/getServerSession';
import { Avatar, Button } from 'antd';
import defaultProfilePicture from '@/../public/assets/default-profile-picture.jpg';

export default async function UserInformation() {
  const user = await getServerSession();

  return (
    <div className="flex items-center gap-4">
      <Avatar
        className="size-24"
        src={user.user_detail.profile_image_uri ?? defaultProfilePicture.src}
      />

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-caption-1">
            {user.user_detail.name}
          </h1>

          <h3 className="text-caption-2">{user.user_detail.email}</h3>
        </div>

        <Button
          className="items-center flex"
          href="/profile/edit"
          icon={<EditIcon />}
          type="primary">
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
