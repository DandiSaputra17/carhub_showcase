import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-6 px-6 py-4">
        <Link href="/" className="flex justify-center items-center ">
          <h3 className="font-bold text-2xl text-white bg-gray-900 py-1 px-1 rounded-tl-md rounded-bl-md select-none">
            Car
            <span className="not-italic absolute -mt-1 -ml-[-4px] text-2xl text-black bg-orange-600 py-1 px-1 rounded-tr-md rounded-br-md select-none">
              Hub
            </span>
          </h3>
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-white font-semibold rounded-full bg-primary-blue min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
