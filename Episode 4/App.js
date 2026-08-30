import react from 'react';
import ReactDOM from 'react-dom/client';

// Header
//     - logo 
//     - nav items 
// Body
//     - search bar
//     - Restaurant Container 
//         - Restaurant Cards 
//             - image 
//             - name 
//             - eta 
//             - rating 
//             - cuisine
// Footer
//     - copyright
//     - contact us

const Header = () => {
    return <>
            <div className="header">
                <img className="logo" src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/68044/optimized_product_thumb_stage.jpg"></img>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Offers</li>
                        <li>Account</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
    </>
}

//Static Restaurant Card
// const RestaurantCard = () => {
//     return <>
//         <div className='restaurant-card'>
//             <img className='restaurant-logo' src="https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style-1014x1536.jpg"></img>
//             <h3 className='margin-0'>Meghana Foods</h3>
//             <div className='rating-cuisine'>
//                 <h4 className='margin-0'>4.3 star</h4>
//                 <h4 className='margin-0'>20-35 min</h4>
//             </div>
//             <h5 className='margin-0'>Biryani, Mughlai, Lukcnow</h5>
//         </div>
//     </>
// }

const RestaurantList = [
    {
      "info": {
        "id": "375976",
        "name": "Beijing Bites",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/1a7cce9f-0e98-4fc4-9708-b5794b0603cd_375976.jpg",
        "locality": "Geddalahalli",
        "areaName": "Hennur",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Chinese",
          "Thai"
        ],
        "avgRating": 4.4,
        "parentId": "103",
        "avgRatingString": "4.4",
        "totalRatingsString": "12K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-45 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/beijing-bites-geddalahalli-hennur-rest375976",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "186110",
        "name": "The Biryani Life",
        "cloudinaryImageId": "tupdt8j7sde8zuguajsl",
        "locality": "Next to Brigade Hyper market",
        "areaName": "Kothanur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "8496",
        "avgRatingString": "4.0",
        "totalRatingsString": "1.5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-06-30 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/the-biryani-life-next-to-brigade-hyper-market-kothanur-rest186110",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "409679",
        "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/25/c2c9dac3-c061-4716-b9f8-17f655a441ba_409679.JPG",
        "locality": "Gubbi Cross",
        "areaName": "Hennur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 3.9,
        "veg": true,
        "parentId": "5655",
        "avgRatingString": "3.9",
        "totalRatingsString": "1.1K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "Serves only 100% vegetarian food, with no non-veg items."
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "theme": ""
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/frozen-bottle-milkshakes-desserts-and-ice-cream-gubbi-cross-hennur-rest409679",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "648847",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Hennur",
        "areaName": "Hennur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "61955",
        "avgRatingString": "4.2",
        "totalRatingsString": "4.0K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 02:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "70% OFF",
          "subHeader": "UPTO ₹130"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.2",
            "ratingCount": "119"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/chinese-wok-hennur-rest648847",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "648848",
        "name": "Big Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_648848.JPG",
        "locality": "K R Puram",
        "areaName": "Hennur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "434792",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.4K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 02:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "70% OFF",
          "subHeader": "UPTO ₹130"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/big-bowl-k-r-puram-hennur-rest648848",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "271237",
        "name": "The Good Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/4f7ad164-df8e-4ad6-b41c-4a894d259ccb_271237.jpg",
        "locality": "bagalur road",
        "areaName": "Kothanur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "7918",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.1K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-06-30 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-bagalur-road-kothanur-rest271237",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "382643",
        "name": "Wendy's Burgers",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/404af9a1-c70c-41e7-8d98-f3517e8eca37_382643.JPG",
        "locality": "bagalur road",
        "areaName": "Geddalahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "wrap"
        ],
        "avgRating": 4,
        "parentId": "972",
        "avgRatingString": "4.0",
        "totalRatingsString": "5.9K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-06-30 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/wendys-burgers-bagalur-road-geddalahalli-rest382643",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "152787",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/192663f4-ff47-4c20-a3cc-3cbc1e503e28_152787.JPG",
        "locality": "bagalur road",
        "areaName": "Kothanur",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Bakery",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "4444",
        "avgRatingString": "4.2",
        "totalRatingsString": "2.2K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-06-30 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹79"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-bagalur-road-kothanur-rest152787",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "524078",
        "name": "CakeZone Patisserie",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/24/2e4e1113-4e07-4315-b8a3-fe4a7ce5f9cf_524078.JPG",
        "locality": "KOTHANUR POST",
        "areaName": "Kothanur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Sweets",
          "Ice Cream"
        ],
        "avgRating": 4,
        "parentId": "7003",
        "avgRatingString": "4.0",
        "totalRatingsString": "3.5K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹54"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/cakezone-patisserie-post-kothanur-rest524078",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "617670",
        "name": "Bakingo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/17/5ddfda0a-4ee3-464f-9b72-85240b91e4af_617670.JPG",
        "locality": "Akasawani Layout",
        "areaName": "Nagavara & Hennur",
        "costForTwo": "₹299 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "3818",
        "avgRatingString": "4.6",
        "totalRatingsString": "7.9K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/bakingo-akasawani-layout-nagavara-and-hennur-rest617670",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "668018",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/3cf61f12-10f9-4c82-bc81-6d148dd28f13_668018.JPG",
        "locality": "Bhartiya Mall",
        "areaName": "Thanisandra Main Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.6",
        "totalRatingsString": "426",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 00:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹51"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-bhartiya-mall-thanisandra-main-road-rest668018",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "190272",
        "name": "Polar Bear",
        "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
        "locality": "Kothanur",
        "areaName": "Hennur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "726",
        "avgRatingString": "4.6",
        "totalRatingsString": "5.9K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
              "description": "Top-rated for Ice Cream, based on user votes."
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Top-rated for Ice Cream, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                    "theme": ""
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/polar-bear-kothanur-hennur-rest190272",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "560705",
        "name": "Wow! China",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/fcf4debc-cb12-4120-a3e9-358f8d635af5_560705.JPG",
        "locality": "MSR Elements Mall",
        "areaName": "Tanisandra Main Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "fastfood",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 3.6,
        "parentId": "226836",
        "avgRatingString": "3.6",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "70% OFF",
          "subHeader": "UPTO ₹130"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/wow-china-msr-elements-mall-tanisandra-main-road-rest560705",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23353",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/2362a4bb-45ad-42cc-9d80-85044a497644_23353.jpg",
        "locality": "Byatarayanapura",
        "areaName": "Sahakar Nagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.4,
        "parentId": "2120",
        "avgRatingString": "4.4",
        "totalRatingsString": "47K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
              "description": "Top-rated for Andhra Food, based on user votes."
            },
            {
              "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
              "description": "Top-rated for Biryani, based on user votes."
            },
            {
              "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
              "description": "Top-rated for Corporate, based on user votes."
            },
            {
              "imageId": "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
              "description": "Top-rated for Naati Style Biryani, based on user votes."
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Top-rated for Andhra Food, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                    "theme": ""
                  }
                },
                {
                  "attributes": {
                    "description": "Top-rated for Biryani, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                    "theme": ""
                  }
                },
                {
                  "attributes": {
                    "description": "Top-rated for Corporate, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                    "theme": ""
                  }
                },
                {
                  "attributes": {
                    "description": "Top-rated for Naati Style Biryani, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                    "theme": ""
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "11K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/nandhana-palace-byatarayanapura-sahakar-nagar-rest23353",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "661854",
        "name": "Taco Bell",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/05db3d88-0836-4cb0-ad6f-1faa517d76db_661854.JPG",
        "locality": "Thanisandra Main Rd",
        "areaName": "Bhartiya City Mall",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Mexican",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.4,
        "parentId": "1557",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.0K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-45 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "brand_cards/Badges%202026/51_Best%20in%20Global%20Flavours2026.png",
              "description": "Top-rated for Global Flavours, based on user votes."
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Top-rated for Global Flavours, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/51_Best%20in%20Global%20Flavours2026.png",
                    "theme": ""
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "70% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.3",
            "ratingCount": "108"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/taco-bell-thanisandra-main-rd-bhartiya-city-mall-rest661854",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "503009",
        "name": "Biryani By Kilo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/688d7289-11f0-48d6-8332-0b323b6fc341_503009.JPG",
        "locality": "Nagawara",
        "areaName": "Nagawara",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Hyderabadi",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 4,
        "parentId": "130",
        "avgRatingString": "4.0",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-45 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    "imageId": "newg.png",
                    "theme": ""
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.5",
            "ratingCount": "102"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/biryani-by-kilo-nagawara-rest503009",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "509444",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/79a0ad32-7581-4c67-8aee-b03a6a6629ad_509444.JPG",
        "locality": "Kothanur",
        "areaName": "Hennur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.1,
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "3.8K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
              "description": "Top-rated for Bolt, based on user votes."
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Top-rated for Bolt, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                    "theme": ""
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kfc-kothanur-hennur-rest509444",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "518647",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/3c3810d0-7d4f-4822-9765-47fcb3af7b74_518647.jpg",
        "locality": "Kothanur",
        "areaName": "Kothanur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "9.0K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-40 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 05:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/burger-king-kothanur-rest518647",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "216376",
        "name": "Apsara Ice Creams",
        "cloudinaryImageId": "hxaw9wrwne5c2xmklx46",
        "locality": "Hennur",
        "areaName": "Kothanur",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "35219",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-06-30 23:30:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹93"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "623"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/apsara-ice-creams-hennur-kothanur-rest216376",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "762540",
        "name": "Mad Over Donuts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/22/5f37d11c-f2c0-4a4f-93ed-55670224e611_762540.JPG",
        "locality": "Yelahanka",
        "areaName": "Phoenix Mall of Asia",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "611",
        "avgRatingString": "4.0",
        "totalRatingsString": "362",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 6.1,
          "serviceability": "SERVICEABLE",
          "slaString": "45-55 mins",
          "lastMileTravelString": "6.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2026-07-01 00:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "70% OFF",
          "subHeader": "UPTO ₹140"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f6ae4d33-2b03-4838-b547-99cdf8b0c97c"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mad-over-donuts-yelahanka-phoenix-mall-of-asia-rest762540",
        "type": "WEBLINK"
      }
    }
  ];

//Dynamic Restaurant Card(with props)
// const RestaurantCard = ({resName, rating, cuisine, time}) => {
//     return <>
//         <div className='restaurant-card'>
//             <img className='restaurant-logo' src="https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style-1014x1536.jpg"></img>
//             <h3 className='margin-0'>{resName}</h3>
//             <div className='rating-cuisine'>
//                 <h4 className='margin-0'>{rating + " star"}</h4>
//                 <h4 className='margin-0'>{time + " min"}</h4>
//             </div>
//             <h5 className='margin-0'>{cuisine}</h5>
//         </div>
//     </>
// }

//Dynamic Restaurant Card(with props, using map) https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/
const RestaurantCard = (restaurant) => {
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRatingString, sla } = restaurant?.data?.info;
    return <>
        <div className='restaurant-card'>
            <img className='restaurant-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <h3 className='margin-0'>{name}</h3>
            <div className='rating-cuisine'>
                <h4 className='margin-0'>{avgRatingString + " star"}</h4>
                <h4 className='margin-0'>{sla?.slaString + " min"}</h4>
            </div>
            <h5 className='margin-0 cuisine'>{cuisines.join(",")}</h5>
        </div>
    </>
}

const Body = () => {
    return <>
            <div className='body'>
                <input className='search' placeholder='Search'></input>
                <div className='restaurant-container'>
                    {/* Static Restaurant Card
                    <RestaurantCard/>
                    <RestaurantCard/> */}

                    {/* Dynamic Restaurant Card(with props)
                    <RestaurantCard resName="Meghana Foods" rating="4.3" time="20-35" cuisine="Biryani, Mughlai, Lucknow"/>
                    <RestaurantCard resName="KFC" rating="3.9" time="40-55" cuisine="Chicken, Burger"/>                  */}

                    {/* Dynamic Restaurant Card(with props, using map) */}
                    {RestaurantList.map(restaurant => 
                        <RestaurantCard key={restaurant?.info.id} data={restaurant}/>
                    )}                    

                </div>
            </div>
    </>
}

const AppLayout = () => {
    return <>
        <div className="app-layout">
            <Header/>
            <Body/>
        </div>
    </>
}

const rootEle = ReactDOM.createRoot(document.querySelector("#root"));
rootEle.render(<AppLayout/>);