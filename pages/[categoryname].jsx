import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "@/app/component/footer/footer";
import NavBar from "@/app/component/navBar/navbar";
import { ShopContextProvider } from "@/app/component/Context/ShopContext";
import New_Collection from "@/app/component/new_collection/new_collection";
import men_banner from "@/app/component/assets/banner_mens.png";
import women_banner from "@/app/component/assets/banner_women.png";
import kids_banner from "@/app/component/assets/banner_kids.png";
import down_arrow from "@/app/component/assets/dropdown_icon.png";
import "@/app/globals.css";
import "./css/shop_category.css";

const ShopCategory = () => {
  const router = useRouter();
  const { categoryname } = router.query;

  return (
    <div className="shop_category">
      <div className="container">
        <div className="banner">
          <Image
            src={
              categoryname === "men"
                ? men_banner
                : categoryname === "women"
                ? women_banner
                : kids_banner
            }
            alt="Banner Image"
            className="banner_image"
          />
        </div>
        <div className="filter">
          <p>
            <span>Showing 1-12</span> out of 54 Products
          </p>
          <button className="sort">
            Sort by
            <Image src={down_arrow} alt="Sort icon" />
          </button>
        </div>
        <div className="products">
          <ShopContextProvider>
            <New_Collection />
          </ShopContextProvider>
          <button>Explore More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategory;
