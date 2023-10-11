import React from "react";

const HeroSection = () => {
  return (
    <div className=" max-w-9xl md:py-20 py-5 flex mx-auto flex-col lg:flex-row shadow-md">
      <div className="basis-6/12">
        <img
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3200&q=80"
          alt=""
          className="w-full"
        />
      </div>
      <div className="px-5">
        <h1 className="lg:text-4xl text-2xl pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          illum?
        </h1>
        <p className="pb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          maiores ullam, aliquam delectus impedit illo sit fugit perferendis?
          Repellat autem et blanditiis quas enim eaque nesciunt qui, odio modi.
          Minima.
        </p>
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          rem quidem deleniti repellat quos aliquid? Maiores voluptas
          dignissimos, commodi a itaque dolores quod eaque, temporibus error,
          dolor tenetur incidunt repellat.
        </p>
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          aspernatur possimus aliquid ad delectus magnam quia consequatur
          asperiores, rem sunt eum nesciunt nihil sed sit illo, iusto ipsum
          reiciendis ratione.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
