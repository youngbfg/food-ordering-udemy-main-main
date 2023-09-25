import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Category from "../../components/admin/Category";
import Footer from "../../components/admin/Footer";
import Order from "../../components/admin/Order";
import Products from "../../components/admin/Products";
import { toast } from "react-toastify";
import AddProduct from "../../components/admin/AddProduct";
import Link from 'next/link'

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  const [isProductModal, setIsProductModal] = useState(false);

  const { push } = useRouter();

  // const closeAdminAccount = async () => {
  //   try {
  //     if (confirm("Are you sure you want to close your Admin Account?")) {
  //       const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
  //       if (res.status === 200) {
  //         push("/admin");
  //         toast.success("Admin Account Closed!");
  //       }
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10">
      <div className="lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
          // Adsız (Logo) (123 × 123 piksel)
            // src="/images/admin.png"
            src="/images/cc.png"
            alt=""
            width={500}
            height={500}
            className="rounded-full"
          />
          <b className="text-l ">UKM HABERLER ADMİN PORTAL</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-site hover:text-white transition-all ${
              tabs === 0 && "bg-site text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <button className="ml-1 ">HABERLER</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-site hover:text-white transition-all ${
              tabs === 1 && "bg-site text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <button className="ml-1">Orders</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-site hover:text-white transition-all ${
              tabs === 2 && "bg-site text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <button className="ml-1">Categories</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-site hover:text-white transition-all ${
              tabs === 3 && "bg-site text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <button className="ml-1">Footer</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-site hover:text-white transition-all ${
              tabs === 4 && "bg-site text-white"
            }`}
            // onClick={closeAdminAccount}
            // onClick={"/ home"}
          >
            <button className="ml-1">
              <Link href="/">ÇIKIŞ</Link>
            </button>
            
          </li>
        </ul>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
      {isProductModal && <AddProduct setIsProductModal={setIsProductModal} />}
      <button
        className="btn-primary !w-12 !h-12 !p-0 absolute bottom-14 right-10 text-4xl"
        onClick={() => setIsProductModal(true)}
      >
        +
      </button>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Profile;
