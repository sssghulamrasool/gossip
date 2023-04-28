"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./relatedslider.module.css";
import { useTheme } from "next-themes";
const RelatedTopics = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };
  interface TagsList {
    name: string;
    link: string;
  }

  const [tags, setTags] = useState<TagsList[]>([
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Flame Throwers",
      link: "/",
    },
    {
      name: "Hogwarts Championship",
      link: "/",
    },
    {
      name: "Fire",
      link: "/",
    },
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Wizards",
      link: "/",
    },
    {
      name: "Dragons",
      link: "/",
    },
    {
      name: "Fire Balls",
      link: "/",
    },
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Flame Throwers",
      link: "/",
    },
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Flame Throwers",
      link: "/",
    },
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Flame Throwers",
      link: "/",
    },
  ]);
  const { theme, setTheme } = useTheme();

  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <section className={`${styles.trending} trending `}>
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex items-center	">
            <div className={`${styles.trend_left}`}>
              <h4
                className={`inline-block ${styles.font_styls} text-brandDark2 dark:text-brandLightOpacity100 `}
              >
                Related Topics:
              </h4>
            </div>
            <Slider
              {...settings}
              className={`${styles.trend_right} ${
                styles.trendingteass
              } trendingteass ${
                isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
              }`}
            >
              {tags.map((item, index) => {
                return (
                  <a
                    href="#"
                    className={`${styles.tags} bg-grayCard 
                    text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                    dark:hover:text-brandLightOpacity100
                    dark:hover:bg-brandLightOpacity20 `}
                    key={index}
                  >
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedTopics;
