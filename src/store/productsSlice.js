import { createSlice } from "@reduxjs/toolkit";

import strawberryWatermelonBottle from "../assets/strawberry-watermelon-bottle.png";
import kiwiLemonBottle from "../assets/kiwi-lemon-bottle.png";
import mangoPineappleBottle from "../assets/mango-pineapple-bottle.png";
import lemon from "../assets/lemon.png";
import kiwi from "../assets/kiwi.png";
import mango from "../assets/mango.png";
import pineapple from "../assets/pineapple.png";
import strawberry from "../assets/strawberry.png";
import watermelon from "../assets/watermelon.png";
import strawberryWatermelonThumbnail1 from "../assets/strawberry-watermelon-thumbnail-1.jpg";
import strawberryWatermelonThumbnail2 from "../assets/strawberry-watermelon-thumbnail-2.jpg";
import strawberryWatermelonThumbnail3 from "../assets/strawberry-watermelon-thumbnail-3.jpg";
import strawberryWatermelonThumbnail4 from "../assets/strawberry-watermelon-thumbnail-4.jpg";
import threeBottlesImage from "../assets/three-bottles.png";
import strawberryWatermelonSplashImage from "../assets/strawberry-watermelon-splash.jpg";
import kiwiLemonThumbnail1 from "../assets/kiwi-lemon-thumbnail-1.jpg";
import kiwiLemonThumbnail2 from "../assets/kiwi-lemon-thumbnail-2.jpg";
import kiwiLemonThumbnail3 from "../assets/kiwi-lemon-thumbnail-3.jpg";
import kiwiLemonThumbnail4 from "../assets/kiwi-lemon-thumbnail-4.jpg";
import kiwiLemonSplashImage from "../assets/kiwi-lemon-splash.jpg";
import mangoPineappleThumbnail1 from "../assets/mango-pineapple-thumbnail-1.jpg";
import mangoPineappleThumbnail2 from "../assets/mango-pineapple-thumbnail-2.jpg";
import mangoPineappleThumbnail3 from "../assets/mango-pineapple-thumbnail-3.jpg";
import mangoPineappleThumbnail4 from "../assets/mango-pineapple-thumbnail-4.jpg";
import mangoPineappleSplashImage from "../assets/mango-pineapple-splash.jpg";

const initialState = {
  products: [
    {
      id: 1,
      image: strawberryWatermelonBottle,
      name: "Fokus Hydration - Strawberry Watermelon",
      alias: "Strawberry Watermelon",
      description: "Refreshing strawberries & juicy watermelon.",
      ingredients: [strawberry, watermelon],
      backgroundColor: "#FF6262",
      price: "Rs.150.00",
      tag: "Best Seller",
      thumbnails: [
        strawberryWatermelonThumbnail1,
        strawberryWatermelonThumbnail2,
        strawberryWatermelonThumbnail3,
        strawberryWatermelonThumbnail4,
      ],
      shippingInfo: [
        "Free Shipping on all orders for 24 Hours",
        "Orders will be delivered in 10-15 working days",
        "Prepaid orders only",
      ],
      tax: "Tax included. Shipping calculated at checkout",
      ingredientsDetail: [
        {
          title: "Vitamin D3",
          description:
            "Lack of sunshine got your vibe down? Vitamin D3 steps in as your mood booster and immune system’s best friend. It’s like a sip of sunlight—strong bones, strong vibes.",
        },
        {
          title: "Water",
          description:
            "Pure water is the OG fuel for your body and brain, keeping you cool, calm, and collected—even on chaotic days.",
        },
        {
          title: "Coconut Water (22%)",
          description:
            "Coconut water is nature’s hydration hack, packed with electrolytes to keep you refreshed and keep going.",
        },
        {
          title: "Sucralose",
          description:
            "Sucralose brings the flavor, skips the calories, and keeps you on track. It’s your sweet fix, made smarter.",
        },
        {
          title: "Taurine",
          description:
            "Taurine is the energy ninja that steps in to keep you focused and energized. Whether it’s work or play, this is the endurance boost you need.",
        },
        {
          title: "Ginseng Extract",
          description:
            "Ginseng is your go-to for a natural boost. It powers up your focus and keeps you moving, no matter how long the day.",
        },
        {
          title: "Ginkgo Biloba Extract",
          description:
            "Ginkgo Biloba clears the mental clutter, improving focus and memory so you’re always on top of your game.",
        },
        {
          title: "Creatine",
          description:
            "Creatine powers up your strength and recovery, turning your workouts into beast mode. Push harder, recover faster, and keep leveling up.",
        },
        {
          title: "Glutamine",
          description:
            "Glutamine restores your energy like a pro and keeps your muscles and immunity in the game. Built for the grind.",
        },
        {
          title: "LCLT (L-Carnitine L-Tartrate)",
          description:
            "LCLT helps convert fat into fuel, giving you long-lasting energy and a metabolic edge.",
        },
        {
          title: "5-HTP",
          description:
            "5-HTP restores balance, boosting serotonin levels to help you stay calm, happy, and in control.",
        },
        {
          title: "Inositol",
          description:
            "Inositol helps calm the overthinking and clears up your headspace. A relaxed mind ready to crush the day.",
        },
      ],
      ingredientsImage: { src: threeBottlesImage, alt: "Product ingredients" },
      features: [
        { src: "feature1", text: "Made in India" },
        { src: "feature2", text: "No Added Sugar" },
      ],
      splashImage: {
        src: strawberryWatermelonSplashImage,
        alt: "Splash Image",
      },
    },
    {
      id: 2,
      image: kiwiLemonBottle,
      name: "Fokus Hydration - Kiwi Lemon",
      alias: "Kiwi Lemon",
      description: "Zesty kiwi & tangy lemon.",
      ingredients: [kiwi, lemon],
      backgroundColor: "#95DA4A",
      price: "Rs.150.00",
      tag: "Best Seller",
      thumbnails: [
        kiwiLemonThumbnail1,
        kiwiLemonThumbnail2,
        kiwiLemonThumbnail3,
        kiwiLemonThumbnail4,
      ],
      shippingInfo: [
        "Free Shipping on all orders for 24 Hours",
        "Orders will be delivered in 10-15 working days",
        "Prepaid orders only",
      ],
      tax: "Tax included. Shipping calculated at checkout",
      ingredientsDetail: [
        {
          title: "Vitamin D3",
          description:
            "Lack of sunshine got your vibe down? Vitamin D3 steps in as your mood booster and immune system’s best friend. It’s like a sip of sunlight—strong bones, strong vibes.",
        },
        {
          title: "Water",
          description:
            "Pure water is the OG fuel for your body and brain, keeping you cool, calm, and collected—even on chaotic days.",
        },
        {
          title: "Coconut Water (22%)",
          description:
            "Coconut water is nature’s hydration hack, packed with electrolytes to keep you refreshed and keep going.",
        },
        {
          title: "Sucralose",
          description:
            "Sucralose brings the flavor, skips the calories, and keeps you on track. It’s your sweet fix, made smarter.",
        },
        {
          title: "Taurine",
          description:
            "Taurine is the energy ninja that steps in to keep you focused and energized. Whether it’s work or play, this is the endurance boost you need.",
        },
        {
          title: "Ginseng Extract",
          description:
            "Ginseng is your go-to for a natural boost. It powers up your focus and keeps you moving, no matter how long the day.",
        },
        {
          title: "Ginkgo Biloba Extract",
          description:
            "Ginkgo Biloba clears the mental clutter, improving focus and memory so you’re always on top of your game.",
        },
        {
          title: "Creatine",
          description:
            "Creatine powers up your strength and recovery, turning your workouts into beast mode. Push harder, recover faster, and keep leveling up.",
        },
        {
          title: "Glutamine",
          description:
            "Glutamine restores your energy like a pro and keeps your muscles and immunity in the game. Built for the grind.",
        },
        {
          title: "LCLT (L-Carnitine L-Tartrate)",
          description:
            "LCLT helps convert fat into fuel, giving you long-lasting energy and a metabolic edge.",
        },
        {
          title: "5-HTP",
          description:
            "5-HTP restores balance, boosting serotonin levels to help you stay calm, happy, and in control.",
        },
        {
          title: "Inositol",
          description:
            "Inositol helps calm the overthinking and clears up your headspace. A relaxed mind ready to crush the day.",
        },
      ],
      ingredientsImage: { src: threeBottlesImage, alt: "Product ingredients" },
      features: [
        { src: "feature1", text: "Made in India" },
        { src: "feature2", text: "No Added Sugar" },
      ],
      splashImage: {
        src: kiwiLemonSplashImage,
        alt: "Splash Image",
      },
    },
    {
      id: 3,
      image: mangoPineappleBottle,
      name: "Fokus Hydration - Mango Pineapple",
      alias: "Mango Pineapple",
      description: "Refreshing mango & juicy pineapple.",
      ingredients: [mango, pineapple],
      backgroundColor: "#FFE061",
      price: "Rs.150.00",
      tag: "Best Seller",
      thumbnails: [
        mangoPineappleThumbnail1,
        mangoPineappleThumbnail2,
        mangoPineappleThumbnail3,
        mangoPineappleThumbnail4,
      ],
      shippingInfo: [
        "Free Shipping on all orders for 24 Hours",
        "Orders will be delivered in 10-15 working days",
        "Prepaid orders only",
      ],
      tax: "Tax included. Shipping calculated at checkout",
      ingredientsDetail: [
        {
          title: "Vitamin D3",
          description:
            "Lack of sunshine got your vibe down? Vitamin D3 steps in as your mood booster and immune system’s best friend. It’s like a sip of sunlight—strong bones, strong vibes.",
        },
        {
          title: "Water",
          description:
            "Pure water is the OG fuel for your body and brain, keeping you cool, calm, and collected—even on chaotic days.",
        },
        {
          title: "Coconut Water (22%)",
          description:
            "Coconut water is nature’s hydration hack, packed with electrolytes to keep you refreshed and keep going.",
        },
        {
          title: "Sucralose",
          description:
            "Sucralose brings the flavor, skips the calories, and keeps you on track. It’s your sweet fix, made smarter.",
        },
        {
          title: "Taurine",
          description:
            "Taurine is the energy ninja that steps in to keep you focused and energized. Whether it’s work or play, this is the endurance boost you need.",
        },
        {
          title: "Ginseng Extract",
          description:
            "Ginseng is your go-to for a natural boost. It powers up your focus and keeps you moving, no matter how long the day.",
        },
        {
          title: "Ginkgo Biloba Extract",
          description:
            "Ginkgo Biloba clears the mental clutter, improving focus and memory so you’re always on top of your game.",
        },
        {
          title: "Creatine",
          description:
            "Creatine powers up your strength and recovery, turning your workouts into beast mode. Push harder, recover faster, and keep leveling up.",
        },
        {
          title: "Glutamine",
          description:
            "Glutamine restores your energy like a pro and keeps your muscles and immunity in the game. Built for the grind.",
        },
        {
          title: "LCLT (L-Carnitine L-Tartrate)",
          description:
            "LCLT helps convert fat into fuel, giving you long-lasting energy and a metabolic edge.",
        },
        {
          title: "5-HTP",
          description:
            "5-HTP restores balance, boosting serotonin levels to help you stay calm, happy, and in control.",
        },
        {
          title: "Inositol",
          description:
            "Inositol helps calm the overthinking and clears up your headspace. A relaxed mind ready to crush the day.",
        },
      ],
      ingredientsImage: { src: threeBottlesImage, alt: "Product ingredients" },
      features: [
        { src: "feature1", text: "Made in India" },
        { src: "feature2", text: "No Added Sugar" },
      ],
      splashImage: {
        src: mangoPineappleSplashImage,
        alt: "Splash Image",
      },
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
