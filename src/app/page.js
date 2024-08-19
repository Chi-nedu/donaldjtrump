import Homepage from '@/components/homepage'

// export const metadata = {
//   title: "Donald J. Trump",
//   description: "Making sure Americans are living the American dream. ",
// };

export const metadata = {
  title: "Donald J. Trump",
  description: "Making sure Americans are living the American dream.",
  openGraph: {
    title: "Donald J. Trump",
    description: "Making sure Americans are living the American dream.",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 800,
        height: 600,
        alt: "Donald J. Trump",
      },
    ],
  },
};


export default function Home() {
  return (
  <Homepage/>   
  );
}
