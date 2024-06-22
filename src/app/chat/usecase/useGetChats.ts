import { IChatOverview } from './../../../shared/models/chatInterfaces';
import gacoanVendorProfileImage from '@/../public/assets/gacoan.png';
import invillaVendorProfileImage from '@/../public/assets/invilla.png';

const chatsData = [
  {
    vendorId: '30e7b88d-666b-4251-aeaa-358acf0a80a6',
    vendorName: 'In Villa',
    vendorProfileImage: invillaVendorProfileImage.src,
    isRead: true,
    latestMessage: {
      sentBy: 'user',
      sentAt: new Date(2024, 6, 23, 7, 2, 12).toISOString(),
      message: "We're thinking about June 15th. Is that date open?",
    },
  },
  {
    vendorId: '43dc4511-9d28-4867-9f87-b9090ca1b4a5',
    vendorName: 'Gacoan',
    vendorProfileImage: gacoanVendorProfileImage.src,
    isRead: true,
    latestMessage: {
      sentBy: 'user',
      sentAt: new Date(2024, 6, 22, 11, 29, 16).toISOString(),
      message:
        "Hi, I'm looking to book a wedding venue for next summer. Is the Rosewood Hall available?",
    },
  },
  {
    vendorId: '89f7a123-456c-789b-0def-123456789abc',
    vendorName: 'The Flower Boutique',
    vendorProfileImage: invillaVendorProfileImage.src,
    isRead: false,
    latestMessage: {
      sentBy: 'vendor',
      sentAt: new Date(2024, 6, 21, 15, 38, 5).toISOString(),
      message:
        'Absolutely! We have several floral arrangements that would be perfect for a rustic theme.',
    },
  },
  {
    vendorId: '9876fedc-ba98-7654-3210-0fedcba98765',
    vendorName: 'DJ Soundwave',
    vendorProfileImage: gacoanVendorProfileImage.src,
    isRead: true,
    latestMessage: {
      sentBy: 'user',
      sentAt: new Date(2024, 6, 19, 9, 45, 22).toISOString(),
      message:
        'Could you send me a list of your top 10 most requested wedding songs?',
    },
  },
  {
    vendorId: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    vendorName: 'Sweet Treats Bakery',
    vendorProfileImage: invillaVendorProfileImage.src,
    isRead: false,
    latestMessage: {
      sentBy: 'vendor',
      sentAt: new Date(2024, 6, 18, 17, 2, 58).toISOString(),
      message:
        'We can definitely create a custom cake topper with your initials and wedding date.',
    },
  },
] as IChatOverview[];

export default async function useGetChats(options?: { vendorName: string }) {
  const chats = options
    ? chatsData.filter((data) =>
        data.vendorName.toLowerCase().includes(options.vendorName.toLowerCase())
      )
    : chatsData;

  return new Promise<IChatOverview[]>((resolve) =>
    setTimeout(() => resolve(chats), 500)
  );
}
