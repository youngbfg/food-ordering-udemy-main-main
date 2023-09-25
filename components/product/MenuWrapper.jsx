import { useEffect, useState } from "react";


const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);
  const [productLimit, setProductLimit] = useState(3);

  useEffect(() => {
    setFilter(
      productList?.filter(
        (product) =>
          product.category === categoryList[active].title.toLowerCase()
      )
    );
  }, [categoryList, productList, active]);

  return (
    <div className="container mx-auto  ">
      <div className="flex flex-col items-center w-full">
          <a href="#" className="md:inline-block hidden sm">
            <button className="text-white bg-site w-80 h-20 rounded-3xl -mt-60  mb-40">Order Online</button>
          </a>
      </div>
    </div>
  );
};

export default MenuWrapper;
