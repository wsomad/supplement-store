"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiMiniBars3, HiOutlineBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isArticleOpen, setIsArticleOpen] = useState(false);
    const productName: string[] = [
        'All Products',
        'Whey',
        'Mass Gainer',
        'Pre-Workout',
        'Fat Burner',
        'Shaker'
    ];
    const articleTitle: string[] = [
        'Training Tips',
        'Nutrition Tips'
    ]


    return (
        <div>
            <header className="lg:max-w-8xl mx-auto flex items-start justify-end sm:justify-between sm:space-x-8 py-5 border-gray-300 px-6">
                {/* Desktop Navigation */}
                <nav className="hidden sm:flex space-x-6">
                    <div>
                        <Image
                            src={`/images/logo/logo.png`}
                            alt="Brand Logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <ul className="flex space-x-6 text-black cursor-pointer text-sm">
                        <li>Home</li>
                        {/* Products with Dropdown */}
                        <li 
                            className="relative flex" 
                            onMouseEnter={() => setIsProductOpen(true)} 
                            onMouseLeave={() => setIsProductOpen(false)}
                        >
                            Products
                            {isProductOpen && (
                                <ul className="absolute left-0 mt-6 w-52 bg-white border border-gray-300 transition-all duration-100 ease-out text-black text-sm z-50">
                                    {productName.map((product, index) => (
                                        <li key={index} className="px-4 py-2 hover:bg-gray-100">{product}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li 
                            className="relative flex" 
                            onMouseEnter={() => setIsArticleOpen(true)} 
                            onMouseLeave={() => setIsArticleOpen(false)}
                        >
                            Articles
                            {isArticleOpen && (
                                <ul className="absolute left-0 mt-6 w-52 bg-white border border-gray-300 transition-all duration-100 ease-out text-black text-sm">
                                    {articleTitle.map((article, index) => (
                                        <li key={index} className="px-4 py-2 hover:bg-gray-100">{article}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li>FAQ</li>
                    </ul>
                </nav>
                <div className="flex">
                    <LuSearch className="text-black mr-6 cursor-pointer" size={20}></LuSearch>
                    <HiOutlineShoppingBag className="text-black mr-6 sm:mr-0 cursor-pointer" size={20}></HiOutlineShoppingBag>
                </div>

                {/* Mobile Menu Button */}
                <div className="sm:hidden text-black font-normal flex-row justify-start items-start">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <LiaTimesSolid className="font-bold text-sm" size={22} /> : <HiMiniBars3 className="text-sm font-normal" size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden border-t border-gray-300">
                    <ul className="flex flex-col items-start space-y-4 p-4 text-black cursor-pointer text-sm">
                        <li className="hover:text-gray-600">Home</li>
                        {/* Products with Click-to-Toggle Dropdown */}
                        <li 
                            className="hover:text-gray-600 relative"
                            onClick={() => setIsProductOpen(!isProductOpen)}
                        >
                            Products
                            {isProductOpen && (
                                <ul className="mt-4 pl-4 space-y-4 text-black text-sm">
                                    {productName.map((product, index) => (
                                        <li key={index} className="hover:text-gray-600">{product}</li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="hover:text-gray-600">Review</li>
                        <li 
                            className="hover:text-gray-600 relative"
                            onClick={() => setIsArticleOpen(!isArticleOpen)} 
                        >
                            Articles
                            {isArticleOpen && (
                                <ul className="mt-4 pl-4 space-y-4 text-black text-sm">
                                    {articleTitle.map((article, index) => (
                                        <li key={index} className="hover:text-gray-600">{article}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
