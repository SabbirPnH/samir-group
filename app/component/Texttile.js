import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; 
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
const testimonialList = [
	{
		author: {
			fullName: "Choose from many fabrics and design your Create and print only the fabric .",
			picture: "/img/col-bgimage-02.jpg",
			number: "01",
		},
		rating: 3.5,
		description:
			"Since more than 40 years, FABLIO is operating in the textile market manufacture and trader. As years go by, the range of produced textiles has been increased.",
	},
	{
		author: {
			fullName: "Fablio is Operating In The Textile Market Manufacture",
			picture: "/img/col-bgimage-1.jpg",
			number: "02",
		},
		rating: 4,
		description:
			"Since more than 40 years, FABLIO is operating in the textile market manufacture and trader. As years go by, the range of produced textiles has been increased.",
	},
	
];

const Rating = ({ rating, showLabel, ...rest }) => (
	<p >
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating)) {
					content = <FaStar className="text-yellow-500" />;
				} else if (rating > i && rating < index + 1) {
					content = <FaStarHalfAlt className="text-yellow-500" />;
				} else if (index > rating) {
					content = <FaStar className="text-yellow-200 dark:text-opacity-20" />;
				}
				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial, index }) => (
	<div className="grid grid-cols-12  mt-12">
		<div
			className={`col-span-12 md:col-span-5 ${index % 2 !== 0 && "md:order-2"}`}
		>
			<Image
				src={testimonial.author.picture}
				alt={testimonial.author.fullName}
				className="w-full h-56 sm:h-96"
				width={400}
				height={400}
			/>
		</div>
		<div
			className={`col-span-12 md:col-span-6 ${
				index % 2 === 0 && "md:col-start-7"
			}`}
		>
			<div className="flex flex-col justify-center h-full">
            <p className="mb-1 border-2 rounded-full text-[#F56800] text-2xl font-bold w-14 p-2.5 mt-4 sm:mt-0">{testimonial.author.number}</p>
				<h4 className=" text-xl font-semibold sm:text-4xl pr-5 text-justify font-medium mb-1 py-4 sm:py-6 text-[#272B36]">
					{testimonial.author.fullName}
				</h4>
				<p className="mb-6 text-[#596277] text-md text-justify tracking-tight lg:pr-5 ">{testimonial.description}</p>
                <a href="#" className="  py-2.5 sm:py-4 mt-0 sm:mt-4   text-sm  text-[#F56800] uppercase font-semibold">
              View More
              <FaArrowRight className=' inline-flex ml-3' />

            </a>
			</div>
		</div>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const Texttile = () => {
	return (
		<section className=" light py-7 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="px-4 sm:px-20">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="sm:max-w-4xl text-center">
                    <h6 className="text-[#F56800] text-xl font-semibold uppercase"> Texttile </h6>
          <h1 className="mb-6 text-2xl sm:text-5xl font-bold pt-2 text-[#272B36]">
          The Textile,Product, And Apparel
            Manufacturing Industries.
          </h1>
         
					</div>
				</div>

				{testimonialList.map((testimonial, i) => (
					<TestimonialItem testimonial={testimonial} index={i} key={i} />
				))}
			</div>
		</section>
	);
};

export default Texttile;
