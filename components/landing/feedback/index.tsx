import Image from "next/image";

const feedbacks = [
  {
    text: "Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integerI recently purchased a pair of shoes from Shoes brand, and I have to say, I'm thoroughly impressed. Not only are they stylish and trendy, but they're also incredibly comfortable to wear. The padding on the sole is just the right amount, providing enough support for my feet without feeling too bulky or heavy. Additionally, the shoes are made of high-quality materials that have held up well against regular wear and tear. I've worn them for long hours at work and they've held up great, with no signs of wear or tear. Overall, I highly recommend these shoes to anyone looking for a stylish and comfortable option for everyday wear.",
    rating: 5,
    review: {
      name: "julia keys",
      src: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg",
    },
  },
  {
    text: "There was a discoint for a shoes manufactured in 2018, I did purchase them and in less than a month with normal usage, they damaged. Skethcre customer care said: we garantee shoes manufactured in six months only. This is not what the salesman told me in teh purchasing time.",
    rating: 5,
    review: {
      name: "luis adrian",
      src: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-2.jpg",
    },
  },
  {
    text: "Just blown away! It's quite a magical experience to go in, get measured up, choose styles, leathers, colours etc and then have a beautiful pair of shoes appear a day later! Exceptional service and attention to detail. I will be ordering more online (it's awesome, they keep your measurements so you can order more shoes in the future) and they provide a warranty!! Woo!!",
    rating: 5,
    review: {
      name: "maria anna",
      src: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-1.jpg",
    },
  },
];
const Feedback = () => {
  return (
    <section className="container container-primary-px py-[6rem]">
      <h2 className="h2-primary">
        <span className="capitalize">our costumer</span> speak for us
      </h2>
      <div className="grid grid-cols-auto-fit gap-[1.5rem] pt-[3rem]">
        {feedbacks.map((feedback, idx) => (
          <div
            key={idx}
            className="bg-fifth px-[1.5rem] py-[1.8rem] border-[1px]   border-[#e4e6e7]"
          >
            {new Array(5).fill(undefined).map((_, idx) => (
              <span
                key={idx}
                className={`fa fa-star  ${
                  feedback.rating >= idx + 1 ? `text-secondary` : `text-fourth`
                } `}
              ></span>
            ))}
            <p className="text-[1.12rem] text-third font-semibold py-[1.8rem]">
              &ldquo;{feedback.text}&rdquo;
            </p>
            <div className="flex items-center gap-[1rem]">
              <div className="rounded-full overflow-hidden ">
                <Image
                  src={feedback.review.src}
                  alt={`${feedback.review.name} profile image`}
                  height={40}
                  width={40}
                  layout="fixed"
                  className="rounded-full"
                  objectFit="cover"
                />
              </div>
              <p className="uppercase font-inter text-[0.9rem] text-primary tracking-widest">
                {feedback.review.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-fourth text-center pt-[3rem] text-[1.1rem] font-semibold">
        4.8 average rating from 1814 reviews
      </p>
    </section>
  );
};

export default Feedback;
