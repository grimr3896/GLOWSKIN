import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    "id": "cerave-hydrating-cleanser",
    "name": "CeraVe Hydrating Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$14.00",
    "image_url": "https://i.pinimg.com/736x/40/38/8b/40388be97d443b9b1b825026cabf5d35.jpg",
    "benefits": [
      "Gentle cleansing that removes dirt, oil, and makeup without stripping skin",
      "Restores and maintains the skin barrier with 3 essential ceramides (1, 3, 6-II)",
      "Hyaluronic acid attracts hydration and helps skin retain natural moisture",
      "MVE Technology provides 24-hour continuous hydration",
      "Non-comedogenic, fragrance-free, and paraben-free",
      "Suitable for normal to dry skin types",
      "National Eczema Association certified",
      "Leaves skin feeling hydrated, not tight or dry"
    ],
    "ingredients": "Water, Glycerin, Cetearyl Alcohol, PEG-40 Stearate, Stearyl Alcohol, Potassium Phosphate, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Glyceryl Stearate, Behentrimonium Methosulfate, Sodium Lauroyl Lactylate, Sodium Hyaluronate, Cholesterol, Phenoxyethanol, Disodium EDTA, Dipotassium Phosphate, Tocopherol, Phytosphingosine, Xanthan Gum, Cetyl Alcohol, Polysorbate 20, Ethylhexylglycerin",
    "how_to_use": [
      "Wet your face with lukewarm water",
      "Massage the cleanser onto your skin in gentle, circular motions",
      "Lather between your palms first if preferred",
      "Rinse thoroughly with lukewarm water",
      "Gently pat your skin dry with a clean towel",
      "Follow with your moisturizer and sunscreen",
      "Use twice daily, morning and night"
    ],
    "reviews": [
      { "id": "cerave-hyd-rev-1", "rating": 5, "comment": "Finally found a cleanser that doesn't make my skin tight! My eczema has improved so much.", "user_name": "EczemaWarrior", "date": "2024-03-15" },
      { "id": "cerave-hyd-rev-2", "rating": 4, "comment": "Love how hydrating this is. Good for morning and night. Only reason not 5 stars is the price.", "user_name": "SkincareLover", "date": "2024-03-10" },
      { "id": "cerave-hyd-rev-3", "rating": 5, "comment": "Been using for 3 weeks and my skin barrier has visibly improved. Highly recommend.", "user_name": "HealthySkin", "date": "2024-03-05" }
    ]
  },
  {
    "id": "cerave-foaming-cleanser",
    "name": "CeraVe Foaming Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$18.99",
    "image_url": "https://i.pinimg.com/1200x/b1/2d/23/b12d233ddacbe02ebe7b605d4c65fbaf.jpg",
    "benefits": [
      "Lightweight foaming formula perfect for oily and acne-prone skin",
      "Contains 3 essential ceramides to maintain skin barrier",
      "Niacinamide helps control oil production and reduces irritation",
      "Hyaluronic acid provides lightweight hydration without heaviness",
      "Removes excess oil, dirt, and makeup without over-drying",
      "Non-comedogenic and fragrance-free formula",
      "Oil-free and won't leave residue",
      "Suitable for normal to oily skin types"
    ],
    "ingredients": "Water, Glycerin, Sodium Lauroyl Lactylate, Ceramide NP, Ceramide AP, Ceramide EOP, Niacinamide, Sodium Hyaluronate, Cholesterol, Panthenol, Allantoin, Dimethicone, Citric Acid, Sodium Hydroxide, Sodium Benzoate, Xanthan Gum, Methylisothiazolinone",
    "how_to_use": [
      "Wet your face with lukewarm water",
      "Pump 1-2 times into your palms",
      "Massage onto your face in gentle, circular motions",
      "Work into a light foam",
      "Rinse thoroughly with lukewarm water",
      "Pat dry with a soft towel",
      "Use morning and night as part of your skincare routine",
      "Follow with toner and moisturizer appropriate for your skin type"
    ],
    "reviews": [
      { "id": "cerave-foam-rev-1", "rating": 5, "comment": "Best foaming cleanser for oily skin I've found. Removes all oil without over-drying!", "user_name": "OilySkinRelief", "date": "2024-03-12" },
      { "id": "cerave-foam-rev-2", "rating": 4, "comment": "Cleans well and doesn't leave my skin feeling stripped. Light foaming action is nice.", "user_name": "GentleCleanse", "date": "2024-03-08" },
      { "id": "cerave-foam-rev-3", "rating": 5, "comment": "My breakouts have decreased significantly. The niacinamide really helps control oil.", "user_name": "ClearSkinJourney", "date": "2024-03-01" }
    ]
  },
  {
    "id": "cetaphil-gentle-cleanser",
    "name": "Cetaphil Gentle Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$13.99",
    "image_url": "https://i.pinimg.com/736x/87/51/61/8751611e9bd241e7f70369c735dee585.jpg",
    "benefits": [
      "Ultra-gentle, soap-free formula suitable for sensitive skin",
      "Removes makeup, dirt, and oil without disrupting skin barrier",
      "Hypoallergenic and fragrance-free",
      "Non-comedogenic - won't clog pores",
      "Dermatologist recommended for all skin types",
      "pH balanced to match natural skin pH",
      "Can be used on face and body",
      "Won't over-dry or strip the skin"
    ],
    "ingredients": "Water, Cetyl Palmitate, Stearyl Alcohol, Cetearyl Alcohol, Sodium Lauroyl Sarcosinate, Phenoxyethanol, Methylparaben, Propylparaben, Steareth-20, Citric Acid, Sodium Citrate, Disodium EDTA",
    "how_to_use": [
      "Dampen face with water or apply directly to dry skin",
      "Gently massage onto face and neck",
      "Rinse thoroughly with water",
      "Pat dry with a soft cloth",
      "Use 2-3 times daily or as needed",
      "For sensitive skin, use gentle circular motions",
      "Can also be used as a hand wash and body cleanser",
      "Follow with appropriate moisturizer"
    ],
    "reviews": [
      { "id": "cetaphil-gen-rev-1", "rating": 5, "comment": "So gentle on my sensitive skin! No irritation, no dryness. My dermatologist recommends this.", "user_name": "SensitiveSoul", "date": "2024-03-14" },
      { "id": "cetaphil-gen-rev-2", "rating": 4, "comment": "Good gentle option. Works well for daily use. Mild cleanser but does the job perfectly.", "user_name": "DailyGlow", "date": "2024-03-09" },
      { "id": "cetaphil-gen-rev-3", "rating": 5, "comment": "Perfect for my reactive skin. Zero irritation and my skin feels clean. Can't imagine switching.", "user_name": "ReactiveSkinHero", "date": "2024-03-04" }
    ]
  },
  {
    "id": "la-roche-posay-effaclar-cleanser",
    "name": "La Roche-Posay Effaclar Purifying Foaming Gel",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$14.99",
    "image_url": "https://i.pinimg.com/736x/a0/1d/34/a01d34e3194c64b9dac120ab3dacb7e4.jpg",
    "benefits": [
      "Foaming gel specifically formulated for oily, acne-prone skin",
      "Contains salicylic acid to exfoliate and unclog pores",
      "Zinc PCA helps control sebum production",
      "Removes excess oil without over-drying the skin",
      "La Roche-Posay Thermal Spring Water soothes sensitive skin",
      "Reduces appearance of blemishes and blackheads",
      "Oil control that respects skin barrier",
      "Suitable for oily and combination skin types"
    ],
    "ingredients": "Water, Sodium Laureth Sulfate, Zinc PCA, Salicylic Acid, Lactic Acid, Glycerin, Sodium Chloride, Magnesium Sulfate, Potassium Sorbate, Sodium Benzoate, Disodium EDTA, Sodium Hydroxide, Phenoxyethanol",
    "how_to_use": [
      "Wet face with water",
      "Apply to face and massage gently for 30 seconds",
      "Work into a light lather",
      "Rinse thoroughly with lukewarm water",
      "Pat dry completely",
      "Use morning and evening",
      "For sensitive skin, start with once daily use",
      "Follow with La Roche-Posay toner and moisturizer"
    ],
    "reviews": [
      { "id": "lrp-eff-rev-1", "rating": 5, "comment": "Salicylic acid cleanser that actually doesn't dry me out. Pores look cleaner and acne cleared!", "user_name": "AcneFree", "date": "2024-03-13" },
      { "id": "lrp-eff-rev-2", "rating": 4, "comment": "Great for acne-prone skin. A bit pricey but it works. My breakouts have improved noticeably.", "user_name": "SkinInvest", "date": "2024-03-11" },
      { "id": "lrp-eff-rev-3", "rating": 5, "comment": "Professional grade cleanser. The zinc helps control my oily skin. Highly effective.", "user_name": "ProSkincare", "date": "2024-03-07" }
    ]
  },
  {
    "id": "simple-refreshing-facial-wash",
    "name": "Neutrogena Ultra Gentle Creamy Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$10.00",
    "image_url": "https://i.pinimg.com/736x/5b/bf/8e/5bbf8e44bd01217a4e1a313a4195b569.jpg",
    "benefits": [
      "Creamy, soft formula that cleans without stripping",
      "Soap-free and dye-free for sensitive skin",
      "Hypoallergenic and non-comedogenic",
      "Maintains skin's natural moisture barrier"
    ],
    "ingredients": "Water, Glycerin, Cetearyl Alcohol, Polyglyceryl-10 Laurate, Ethylhexylglycerin, Cetyl Alcohol, Stearyl Alcohol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Hydroxide, Panthenol",
    "how_to_use": [
      "Wet face with lukewarm water",
      "Apply cleanser to hands and massage gently onto face",
      "Rinse thoroughly",
      "Use morning and evening"
    ],
    "reviews": [
      { "id": "neu-ugc-rev-1", "rating": 5, "comment": "Creamy, soft formula that cleans without stripping. My skin feels soft after use!", "user_name": "SoftSkinFan", "date": "2024-03-20" },
      { "id": "neu-ugc-rev-2", "rating": 4, "comment": "Good value for the price. Works well for sensitive skin. Doesn't irritate my face.", "user_name": "BudgetBeauty", "date": "2024-03-18" },
      { "id": "neu-ugc-rev-3", "rating": 5, "comment": "My dermatologist recommended this and I'm so glad. Very gentle yet effective.", "user_name": "DermApproved", "date": "2024-03-15" }
    ]
  },
  {
    "id": "neutrogena-oil-free-acne-wash",
    "name": "Neutrogena Ultra Gentle Foaming Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$10.99",
    "image_url": "https://i.pinimg.com/736x/71/75/a4/7175a4209f5f3853d5203a8e1140607f.jpg",
    "benefits": [
      "Light and refreshing foaming action",
      "Gentle enough for sensitive skin",
      "Removes oil and dirt without over-drying",
      "Clinically proven quality"
    ],
    "ingredients": "Water, Glycerin, Cocamidopropyl Betaine, Sodium Lauroyl Sarcosinate, Potassium Laurate, Ethylhexylglycerin, Citric Acid, Sodium Benzoate",
    "how_to_use": [
      "Wet face with water",
      "Pump cleanser into hands and work into a lather",
      "Massage onto face in circular motions",
      "Rinse completely",
      "Use daily morning and night"
    ],
    "reviews": [
      { "id": "neu-ugf-rev-1", "rating": 5, "comment": "Light and refreshing foaming cleanser. Perfect for my combination skin. Not too drying.", "user_name": "ComboSkinQueen", "date": "2024-03-22" },
      { "id": "neu-ugf-rev-2", "rating": 4, "comment": "Works well for oily areas. Gentle enough for sensitive skin. Good balance overall.", "user_name": "BalancedLife", "date": "2024-03-19" },
      { "id": "neu-ugf-rev-3", "rating": 5, "comment": "Effective foaming action without harsh chemicals. My skin looks clearer and feels balanced.", "user_name": "CleanBeautyAlly", "date": "2024-03-16" }
    ]
  },
  {
    "id": "panoxyl-acne-foaming-wash",
    "name": "Olay Hydrating Facial Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/736x/9b/32/35/9b3235987a223a5cc52474816a38c93f.jpg",
    "benefits": [
      "Hydrating formula that refreshes mature skin",
      "Gentle daily cleansing for all skin types",
      "Affordable and effective",
      "Creamy texture for added moisture"
    ],
    "ingredients": "Water, Glycerin, Myristic Acid, Palmitic Acid, Stearic Acid, Potassium Hydroxide, Panthenol, Tocopheryl Acetate, Sodium Benzoate",
    "how_to_use": [
      "Wet hands and face",
      "Massage cleanser onto face",
      "Rinse thoroughly",
      "Use twice daily"
    ],
    "reviews": [
      { "id": "olay-hyd-rev-1", "rating": 5, "comment": "Affordable and effective! My skin feels hydrated after cleansing. Love the lightweight feel.", "user_name": "HydrationSeeker", "date": "2024-03-25" },
      { "id": "olay-hyd-rev-2", "rating": 4, "comment": "Good cleanser for the price. Hydrating formula is nice. Works well for daily use.", "user_name": "PracticalSkincare", "date": "2024-03-21" },
      { "id": "olay-hyd-rev-3", "rating": 5, "comment": "Perfect gentle cleanser that's affordable. My mature skin looks refreshed and hydrated.", "user_name": "MatureGlow", "date": "2024-03-17" }
    ]
  },
  {
    "id": "cerave-moisturizing-cream",
    "name": "CeraVe Moisturizing Cream",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$23.99",
    "image_url": "https://i.pinimg.com/736x/2a/22/8b/2a228b3a0b8b3d8497b6154f9c26ffab.jpg",
    "benefits": [
      "Rich, non-greasy formula for very dry and sensitive skin",
      "Contains 3 essential ceramides to repair skin barrier",
      "Hyaluronic acid provides deep hydration",
      "MVE Technology delivers continuous moisturization",
      "Free from fragrance and dyes",
      "Non-comedogenic - won't clog pores",
      "Provides lasting 24-hour moisture",
      "Suitable for dry, eczema-prone, and sensitive skin"
    ],
    "ingredients": "Water, Glycerin, Petrolatum, Cetyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Cholesterol, Dimethicone, Phytosphingosine, Stearic Acid, Stearyl Alcohol, Polysorbate 60, Carbomer, Xanthan Gum, Disodium EDTA, Phenoxyethanol, Methylparaben, Propylparaben",
    "how_to_use": [
      "After cleansing, apply to slightly damp skin",
      "Use fingertips to gently massage in upward motions",
      "Allow product to fully absorb before applying makeup",
      "Use morning and evening",
      "Can be applied to face, neck, and body",
      "For very dry areas, use a bit more product",
      "Works well under sunscreen during the day",
      "Can be mixed with serums for enhanced hydration"
    ]
  },
  {
    "id": "neutrogena-hydro-boost",
    "name": "Neutrogena Hydro Boost Water Gel Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$11.99",
    "image_url": "https://i.pinimg.com/736x/cf/f8/70/cff870c8a70014b6c85c26e41fe29524.jpg",
    "benefits": [
      "Gel texture is refreshing and lightweight",
      "Hydrates while cleansing",
      "Perfect for oily skin types",
      "Contains hyaluronic acid"
    ],
    "ingredients": "Water, Glycerin, Cocamidopropyl Hydroxysultaine, Sodium Cocoyl Isethionate, Sodium Hyaluronate, Panthenol, Citric Acid, Sodium Benzoate",
    "how_to_use": [
      "Apply to wet face",
      "Massage gently and rinse",
      "Use morning and night"
    ],
    "reviews": [
      { "id": "neu-hbw-rev-1", "rating": 5, "comment": "Gel texture is so refreshing! Light hydration without feeling heavy. Perfect for oily skin.", "user_name": "GelLover", "date": "2024-03-28" },
      { "id": "neu-hbw-rev-2", "rating": 4, "comment": "Great gel cleanser. Hydrating and not stripping. Good value product.", "user_name": "OilyButHydrated", "date": "2024-03-24" },
      { "id": "neu-hbw-rev-3", "rating": 5, "comment": "Love the water gel formula. So lightweight and hydrating. Perfect for summer!", "user_name": "SummerSkin", "date": "2024-03-20" }
    ]
  },
  {
    "id": "cosrx-low-ph-cleanser",
    "name": "COSRX Low-pH Good Morning Gel Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$12.00",
    "image_url": "https://i.pinimg.com/1200x/1c/27/55/1c2755d695bbe90273f47128dd741ee6.jpg",
    "benefits": [
      "Korean beauty favorite",
      "Low pH level helps maintain skin barrier",
      "Gentle yet effective cleansing",
      "Tea tree oil for oil control"
    ],
    "ingredients": "Water, Cocamidopropyl Betaine, Sodium Lauroyl Methyl Isethionate, Polysorbate 20, Styrax Japonicus Branch/Fruit/Leaf Extract, Saccharomyces Ferment, Cryptomeria Japonica Leaf Extract, Nelumbo Nucifera Leaf Extract, Pinus Palustris Leaf Extract, Ulmus Davidiana Root Extract, Oenothera Biennis (Evening Primrose) Flower Extract, Pueraria Lobata Root Extract, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Allantoin, Caprylyl Glycol, Ethylhexylglycerin, Betaine Salicylate, Citric Acid, Ethyl Hexanediol, 1,2-Hexanediol, Trisodium Ethylenediamine Disuccinate, Sodium Benzoate, Disodium EDTA",
    "how_to_use": [
      "Massage gently over wet skin",
      "Rinse with lukewarm water",
      "Gently pat face dry",
      "Follow with the rest of your routine"
    ],
    "reviews": [
      { "id": "cosrx-rev-1", "rating": 5, "comment": "Korean beauty at its finest! The low pH is great for my skin barrier. Very gentle yet effective.", "user_name": "KBeautyFan", "date": "2024-03-30" },
      { "id": "cosrx-rev-2", "rating": 4, "comment": "Good gel cleanser. Gentle on my skin and doesn't leave residue. Worth trying.", "user_name": "SkinWise", "date": "2024-03-26" },
      { "id": "cosrx-rev-3", "rating": 5, "comment": "This changed my skincare routine! Low pH cleansing is the way. My skin is healthier.", "user_name": "HealthSkinJourney", "date": "2024-03-22" }
    ]
  },
  {
    "id": "vanicream-cleanser",
    "name": "Vanicream Gentle Facial Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$10.99",
    "image_url": "https://i.pinimg.com/736x/96/58/46/965846621c59e74844fc9a321aa114ad.jpg",
    "benefits": [
      "Perfect for sensitive skin",
      "Free of common chemical irritants",
      "Dermatologist tested",
      "Non-comedogenic and soap-free"
    ],
    "ingredients": "Water, Glycerin, Coco-Glucoside, Sodium Cocoyl Glycinate, Acrylates Copolymer, Caprylyl Glycol, Mica, Sodium Chloride, 1,2-Hexanediol, Titanium Dioxide, Sodium Hydroxide, Disodium EDTA",
    "how_to_use": [
      "Apply to wet face",
      "Lather and rinse",
      "Use as often as needed"
    ],
    "reviews": [
      { "id": "vani-cl-rev-1", "rating": 5, "comment": "Perfect for very sensitive skin. Free of dyes and fragrance. My reactive skin finally feels calm.", "user_name": "CalmSkinSeeker", "date": "2024-04-01" },
      { "id": "vani-cl-rev-2", "rating": 4, "comment": "Minimal ingredients approach works great. No irritation at all. Recommend for sensitive skin.", "user_name": "PureAndSimple", "date": "2024-03-28" },
      { "id": "vani-cl-rev-3", "rating": 5, "comment": "No fragrance, no dyes, no nonsense. Just a good gentle cleanser. Best for sensitive skin.", "user_name": "NoNonsenseCleanse", "date": "2024-03-24" }
    ]
  },
  {
    "id": "cerave-daily-lotion",
    "name": "CeraVe Daily Moisturizing Lotion",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$14.99",
    "image_url": "https://i.pinimg.com/736x/2a/f5/6f/2af56f479603e04d4a5b40d897eafae3.jpg",
    "benefits": [
      "Lightweight formula for all day hydration",
      "Contains 3 essential ceramides",
      "Hyaluronic acid for moisture retention",
      "Non-greasy and fast absorbing"
    ],
    "ingredients": "Water, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Cetyl Alcohol, Potassium Phosphate, Ceramide NP, Ceramide AP, Ceramide EOP, Cholestrerol, Hyaluronic Acid",
    "how_to_use": [
      "Apply liberally as often as needed",
      "Use on face and body",
      "Safe for sensitive skin"
    ],
    "reviews": [
      { "id": "cerave-dl-rev-1", "rating": 5, "comment": "This moisturizer changed my life! So lightweight yet deeply hydrating. My skin glows!", "user_name": "LotionLover", "date": "2024-04-02" },
      { "id": "cerave-dl-rev-2", "rating": 4, "comment": "Good daily moisturizer. Absorbs well and doesn't leave greasiness. Nice and affordable.", "user_name": "DailyHydrator", "date": "2024-03-30" },
      { "id": "cerave-dl-rev-3", "rating": 5, "comment": "Perfect for sensitive skin. My dermatitis flare-ups have reduced dramatically.", "user_name": "SensitiveStrong", "date": "2024-03-25" }
    ]
  },
  {
    "id": "cetaphil-night-cream",
    "name": "Cetaphil Rich Hydrating Night Cream",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$16.99",
    "image_url": "https://i.pinimg.com/736x/87/b2/3e/87b23e48952276b14613cdbaed058d38.jpg",
    "benefits": [
      "Deep hydration during the night",
      "Contains hyaluronic acid and pro-vitamin complex",
      "Non-comedogenic and fragrance-free",
      "Ideal for dry to very dry skin"
    ],
    "ingredients": "Water, Hydrogenated Polydecene, Caprylic/Capric Triglyceride, Dimethicone, Glycerin, Cetearyl Olivate, Sorbitan Olivate, Sodium Hyaluronate, Tocopheryl Acetate, Panthenol",
    "how_to_use": [
      "Apply to clean face in the PM",
      "Gently massage into skin",
      "Wake up to hydrated skin"
    ],
    "reviews": [
      { "id": "cet-nc-rev-1", "rating": 5, "comment": "Night cream that actually works! Wake up to plump, hydrated skin. Best night cream ever!", "user_name": "NightOwl", "date": "2024-04-05" },
      { "id": "cet-nc-rev-2", "rating": 4, "comment": "Rich formula but doesn't feel heavy. Good hydration for overnight use.", "user_name": "SleepyGlow", "date": "2024-04-01" },
      { "id": "cet-nc-rev-3", "rating": 5, "comment": "My skin barrier is so much stronger. Wake up feeling moisturized and refreshed.", "user_name": "BarrierBoss", "date": "2024-03-28" }
    ]
  },
  {
    "id": "neutrogena-hydro-water",
    "name": "Neutrogena Hydro Boost Water Gel",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$15.99",
    "image_url": "https://i.pinimg.com/236x/80/cb/3d/80cb3d2db73bca59483320c29415ccdf.jpg",
    "benefits": [
      "Instantly quenches dry skin",
      "Hyaluronic acid for intense hydration",
      "Oil-free and non-comedogenic",
      "Unique water gel formula"
    ],
    "ingredients": "Water, Dimethicone, Glycerin, Sodium Hyaluronate, Phenoxyethanol, Cetearyl Olivate, Sorbitan Olivate, Polyacrylamide, C13-14 Isoparaffin, Laureth-7, Carbomer, Chlorphenesin, Sodium Hydroxide, Fragrance",
    "how_to_use": [
      "Apply evenly to face and neck",
      "Use morning and evening",
      "Can be used under makeup"
    ],
    "reviews": [
      { "id": "neu-hwg-rev-1", "rating": 5, "comment": "The best moisturizer for oily skin! Instantly quenches dry skin without greasiness.", "user_name": "OilySkinSuccess", "date": "2024-04-06" },
      { "id": "neu-hwg-rev-2", "rating": 4, "comment": "Really nice texture. Absorbs quickly and keeps skin hydrated all day. Good value.", "user_name": "QuickHydrate", "date": "2024-04-03" },
      { "id": "neu-hwg-rev-3", "rating": 5, "comment": "My go-to for years. The hyaluronic acid really makes a difference in skin texture.", "user_name": "LongTimeFan", "date": "2024-03-30" }
    ]
  },
  {
    "id": "lrp-purifying-cleanser",
    "name": "La Roche-Posay Toleriane Purifying Foaming Cleanser",
    "category": "skincare",
    "subcategory": "cleansers",
    "price": "$14.99",
    "image_url": "https://i.pinimg.com/736x/82/38/54/8238541334997c67f81b1b9d038379ba.jpg",
    "benefits": [
      "Removes excess oil while maintaining moisture",
      "Contains ceramide-3 and niacinamide",
      "Fragrance-free and paraben-free",
      "Ideal for normal to oily skin"
    ],
    "ingredients": "Water, Glycerin, Myristic Acid, Potassium Hydroxide, Glyceryl Stearate SE, Stearic Acid, Lauric Acid, Palmitic Acid, Coco-Glucoside, Tetrasodium EDTA",
    "how_to_use": [
      "Lather in hands with water",
      "Massage into face and rinse",
      "Use morning and evening"
    ],
    "reviews": [
      { "id": "lrp-pfc-rev-1", "rating": 5, "comment": "This moisturizer is like a drink for my skin! My pores look cleaner and skin feels purified.", "user_name": "PurityGlow", "date": "2024-04-08" },
      { "id": "lrp-pfc-rev-2", "rating": 4, "comment": "Good for oily skin. Cleanses deeply without stripping. Skin feels fresh after use.", "user_name": "FreshFace", "date": "2024-04-04" },
      { "id": "lrp-pfc-rev-3", "rating": 5, "comment": "The best cleanser I've used for my oily T-zone. Controls shine all day.", "user_name": "ShineControlHero", "date": "2024-03-31" }
    ]
  },
  {
    "id": "olay-complete-spf",
    "name": "Olay Complete All Day Moisturizer SPF 15",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$13.99",
    "image_url": "https://i.pinimg.com/736x/16/be/e0/16bee012675908f0260492ea38914619.jpg",
    "benefits": [
      "Daily moisturizer with sun protection",
      "Contains Vitamin E and B3",
      "Oil-free and non-greasy",
      "Gentle formula for sensitive skin"
    ],
    "ingredients": "Octinoxate 6%, Zinc Oxide 3%, Water, Glycerin, Isohexadecane, Isopropyl Isostearate, Niacinamide, Tocopheryl Acetate, Panthenol, Cetyl Alcohol",
    "how_to_use": [
      "Apply to face and neck daily",
      "Use as part of morning routine",
      "Reapply if exposed to sun for long periods"
    ],
    "reviews": [
      { "id": "olay-co-rev-1", "rating": 5, "comment": "Classic for a reason! Love having SPF and moisturizer in one step. So easy for mornings.", "user_name": "SimpleSteps", "date": "2024-04-10" },
      { "id": "olay-co-rev-2", "rating": 4, "comment": "Good all-around moisturizer. Lightweight and the SPF is a nice bonus. Doesn't feel heavy.", "user_name": "MorningMover", "date": "2024-04-06" },
      { "id": "olay-co-rev-3", "rating": 5, "comment": "My mother used this and now I do too. A reliable favorite that keeps my skin soft.", "user_name": "LegacySkincare", "date": "2024-04-02" }
    ]
  },
  {
    "id": "vanicream-moisturizer",
    "name": "Vanicream Facial Moisturizer",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/736x/68/f7/7f/68f77f662835768b515d45a5064032d8.jpg",
    "benefits": [
      "Contains hyaluronic acid and five ceramides",
      "Free of dyes, fragrance, and parabens",
      "Dermatologist tested",
      "Non-comedogenic"
    ],
    "ingredients": "Water, Squalane, Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Hyaluronate",
    "how_to_use": [
      "Apply as needed to face and neck",
      "Use morning or night",
      "Can be used under makeup"
    ],
    "reviews": [
      { "id": "van-fm-rev-1", "rating": 5, "comment": "Simple and effective. No irritation for my extremely sensitive skin. Highly recommend.", "user_name": "NoIrritation", "date": "2024-04-12" },
      { "id": "van-fm-rev-2", "rating": 4, "comment": "Good basic moisturizer. Not heavy, not greasy. Just works well for daily use.", "user_name": "BasicBeauty", "date": "2024-04-08" },
      { "id": "van-fm-rev-3", "rating": 5, "comment": "Finally a moisturizer that doesn't break me out! Love the minimal ingredients.", "user_name": "ClearSkinFan", "date": "2024-04-04" }
    ]
  },
  {
    "id": "cetaphil-moist-cream",
    "name": "Cetaphil Moisturizing Cream",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/736x/71/95/c4/7195c4eea780377333f76cd00ee862fc.jpg",
    "benefits": [
      "Rich cream for intense hydration",
      "Contains sweet almond oil and Vitamin E",
      "Fragrance-free and hypoallergenic",
      "Clinically proven for 48 hour hydration"
    ],
    "ingredients": "Water, Glycerin, Petrolatum, Dicaprylyl Ether, Dimethicone, Glyceryl Stearate, Cetyl Alcohol, Helianthus Annuus (Sunflower) Seed Oil, Peg-30 Stearate, Panthenol, Niacinamide, Prunus Amygdalus Dulcis (Sweet Almond) Oil",
    "how_to_use": [
      "Apply to clean skin",
      "Use on face or body as needed",
      "Safe for daily use"
    ],
    "reviews": [
      { "id": "cet-mc-rev-1", "rating": 5, "comment": "Rich and creamy! Best for dry elbows and knees, but I use it on my face too.", "user_name": "MoistureMaster", "date": "2024-04-15" },
      { "id": "cet-mc-rev-2", "rating": 4, "comment": "Very thick cream. Great for winter months. Keeps my skin from peeling.", "user_name": "WinterSkin", "date": "2024-04-11" },
      { "id": "cet-mc-rev-3", "rating": 5, "comment": "Perfect for very dry skin. A little goes a long way. Love the hydration.", "user_name": "DrySkinNoMore", "date": "2024-04-07" }
    ]
  },
  {
    "id": "neu-light-night",
    "name": "Neutrogena Lightweight Night Cream",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/1200x/7e/22/d9/7e22d9faeede7206e134d62f4560fa0a.jpg",
    "benefits": [
      "Oil-free formula for overnight use",
      "Wont clog pores while hydrating",
      "Dermatologist tested",
      "Wont leave greasy residue"
    ],
    "ingredients": "Water, Glycerin, Isopropyl Isostearate, Niacinamide, Stearyl Alcohol, Cetyl Alcohol, Polyethylene, Panthenol, Behenyl Alcohol, Aluminum Starch Octenylsuccinate, Tocopheryl Acetate",
    "how_to_use": [
      "Apply to clean skin in the PM",
      "Massage until absorbed",
      "Use as part of nightly routine"
    ],
    "reviews": [
      { "id": "neu-lnc-rev-1", "rating": 5, "comment": "Perfect lightweight night cream. Doesn't feel heavy and my skin feels soft in the morning.", "user_name": "NightSoft", "date": "2024-04-18" },
      { "id": "neu-lnc-rev-2", "rating": 4, "comment": "Good night cream for oily skin. Not greasy at all. Absorbs quickly.", "user_name": "OilyNightCare", "date": "2024-04-14" },
      { "id": "neu-lnc-rev-3", "rating": 5, "comment": "Love the texture. My skin looks refreshed and hydrated without breakouts.", "user_name": "FreshMornings", "date": "2024-04-10" }
    ]
  },
  {
    "id": "cerave-pm-lotion",
    "name": "CeraVe PM Facial Moisturizing Lotion",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$15.99",
    "image_url": "https://i.pinimg.com/736x/10/95/3c/10953c81de9e3ad1e8baed8a79372e94.jpg",
    "benefits": [
      "Ultra-lightweight night moisturizer",
      "Contains 3 essential ceramides and niacinamide",
      "Controlled release for all night hydration",
      "Fragrance-free and oil-free"
    ],
    "ingredients": "Water, Glycerin, Caprylic/Capric Triglyceride, Niacinamide, Cetearyl Alcohol, Potassium Phosphate, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol",
    "how_to_use": [
      "Apply liberally to face and neck at night",
      "Allow to fully absorb",
      "Non-comedogenic for all night wear"
    ],
    "reviews": [
      { "id": "cerave-pm-rev-1", "rating": 5, "comment": "Best PM moisturizer! My skin barrier feels so strong and healthy. Love the niacinamide.", "user_name": "PMLover", "date": "2024-04-20" },
      { "id": "cerave-pm-rev-2", "rating": 4, "comment": "Good night moisturizer. Light and effective. Doesn't irritate my skin.", "user_name": "SimplePMRoutine", "date": "2024-04-16" },
      { "id": "cerave-pm-rev-3", "rating": 5, "comment": "This helps so much with my redness. Wake up feeling calm and hydrated.", "user_name": "CalmWakeup", "date": "2024-04-12" }
    ]
  },
  {
    "id": "lrp-double-repair",
    "name": "La Roche-Posay Toleriane Double Repair Face Moisturizer",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$19.99",
    "image_url": "https://i.pinimg.com/736x/10/e9/09/10e909c799aec29b8056e8462e0b5ffc.jpg",
    "benefits": [
      "Repairs skin barrier after 1 hour",
      "48-hour hydration",
      "Contains prebiotic thermal water and ceramides",
      "Fragrance-free and dermatologist tested"
    ],
    "ingredients": "Water, Glycerin, Dimethicone, Hydrogenated Polyisobutene, Niacinamide, Ammonium Polyacryloyldimethyl Taurate, Myristyl Myristate, Stearic Acid, Ceramide NP, Potassium Cetyl Phosphate",
    "how_to_use": [
      "Apply to face and neck morning and evening",
      "Massage gently into skin",
      "Allow to absorb completely"
    ],
    "reviews": [
      { "id": "lrp-dr-rev-1", "rating": 5, "comment": "Amazing for sensitive skin! Repairs the barrier so quickly. My skin feels protected.", "user_name": "BarrierHero", "date": "2024-04-22" },
      { "id": "lrp-dr-rev-2", "rating": 4, "comment": "Good moisturizer. Hydrating and doesn't irritate. A bit thicker than expected but nice.", "user_name": "SensitiveRepair", "date": "2024-04-18" },
      { "id": "lrp-dr-rev-3", "rating": 5, "comment": "Finally found a moisturizer that works for my reactive skin. Top quality.", "user_name": "ReactiveSkinSuccess", "date": "2024-04-14" }
    ]
  },
  {
    "id": "olay-regenerist-cream",
    "name": "Olay Regenerist Micro-Sculpting Cream",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$25.99",
    "image_url": "https://i.pinimg.com/1200x/d7/98/b4/d798b4d68a0c6b7d53234ae70b80d1e7.jpg",
    "benefits": [
      "Visibly firms skin and reduces wrinkles",
      "Hyaluronic acid and amino-peptides for hydration",
      "Results in just one day",
      "Rich and luxurious texture"
    ],
    "ingredients": "Water, Glycerin, Isohexadecane, Niacinamide, Isostearyl Isostearate, Palmitoyl Pentapeptide-4, Panthenol, Hyaluronic Acid, Cetyl Alcohol, Stearyl Alcohol",
    "how_to_use": [
      "Apply to face and neck as part of AM/PM routine",
      "Massage into skin using upward motions",
      "Focus on areas with fine lines"
    ],
    "reviews": [
      { "id": "olay-reg-rev-1", "rating": 5, "comment": "Best anti-aging cream for the price. My skin feels so much firmer and smoother. Love it!", "user_name": "FirmSkinFan", "date": "2024-04-25" },
      { "id": "olay-reg-rev-2", "rating": 4, "comment": "Rich and moisturizing. Good value anti-aging option. Works well for dry skin.", "user_name": "MatureBeauty", "date": "2024-04-21" },
      { "id": "olay-reg-rev-3", "rating": 5, "comment": "I've tried many expensive creams but this one is the best. Visible results quickly.", "user_name": "ValueAntiAge", "date": "2024-04-17" }
    ]
  },
  {
    "id": "aveeno-daily-lotion",
    "name": "Aveeno Daily Moisturizing Lotion",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/1200x/83/34/ca/8334caf4b8a8e0236adc68dfbcf155b4.jpg",
    "benefits": [
      "Clinically proven to improve skin health in one day",
      "Fragrance-free and non-greasy",
      "Colloidal oatmeal for skin soothing",
      "Hypoallergenic and non-comedogenic"
    ],
    "ingredients": "Water, Glycerin, Distearyldimonium Chloride, Petrolatum, Isopropyl Palmitate, Cetyl Alcohol, Dimethicone, Avena Sativa (Oat) Kernel Flour, Allantoin, Benzyl Alcohol, Sodium Chloride",
    "how_to_use": [
      "Apply to skin as often as needed",
      "Safe for daily use on face and body",
      "Massaging into dry areas for extra relief"
    ],
    "reviews": [
      { "id": "avee-dml-rev-1", "rating": 5, "comment": "A staple in my bathroom! So soothing for my dry skin. Simple and very effective.", "user_name": "SimpleClean", "date": "2024-04-28" },
      { "id": "avee-dml-rev-2", "rating": 4, "comment": "Reliable daily moisturizer. Keeps skin soft without any irritation. Good for all day.", "user_name": "DailySoftSkin", "date": "2024-04-24" },
      { "id": "avee-dml-rev-3", "rating": 5, "comment": "My doctor recommended this for my dry skin and it's worked wonders. So soothing.", "user_name": "SoothedSkin", "date": "2024-04-20" }
    ]
  },
  {
    "id": "ord-niacinamide",
    "name": "The Ordinary Niacinamide 10% + Zinc 1%",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$6.00",
    "image_url": "https://i.pinimg.com/1200x/22/65/df/2265df356e56d92776af495547a7e462.jpg",
    "benefits": [
      "Reduces appearance of blemishes",
      "Balances visible sebum activity",
      "High-strength vitamin and mineral blemish formula",
      "Vegan and cruelty-free"
    ],
    "ingredients": "Water, Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin, Isoceteth-20, Ethylene Brassylate, Acacia Senegal Gum, Xanthan Gum",
    "how_to_use": [
      "Apply to entire face morning and evening before heavier creams",
      "Patch testing prior to use is advised",
      "Keep out of reach of children"
    ],
    "reviews": [
      { "id": "ord-ni-rev-1", "rating": 5, "comment": "Changed my skin texture completely! My pores look smaller and less oily. Best budget buy.", "user_name": "TextureQueen", "date": "2024-05-01" },
      { "id": "ord-ni-rev-2", "rating": 4, "comment": "Great for controlling oil. A bit sticky if you use too much, so use sparingly. Works well.", "user_name": "OilFree", "date": "2024-04-28" },
      { "id": "ord-ni-rev-3", "rating": 5, "comment": "My breakouts are significantly reduced. The ordinary really hit it out of the park with this.", "user_name": "BlemishFree", "date": "2024-04-24" }
    ]
  },
  {
    "id": "paulas-choice-bha",
    "name": "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    "category": "skincare",
    "subcategory": "exfoliants",
    "price": "$34.00",
    "image_url": "https://i.pinimg.com/1200x/2b/50/fe/2b50fe596d08f9fc375fad40d3a08242.jpg",
    "benefits": [
      "Unclogs and shrinks enlarged pores",
      "Smooths and evens skin tone",
      "Lightweight liquid formula",
      "Dermatologist tested and fragrance-free"
    ],
    "ingredients": "Water, Methylpropanediol, Butylene Glycol, Salicylic Acid, Polysorbate 20, Camellia Oleifera (Green Tea) Leaf Extract, Sodium Hydroxide, Tetrasodium EDTA",
    "how_to_use": [
      "Apply once or twice daily after cleansing/toning",
      "Lightly soak a cotton pad and apply over entire face",
      "Do not rinse"
    ],
    "reviews": [
      { "id": "pc-bha-rev-1", "rating": 5, "comment": "The holy grail of exfoliants! My blackheads are gone and skin is so smooth. Must have.", "user_name": "HolyGrailSkin", "date": "2024-05-03" },
      { "id": "pc-bha-rev-2", "rating": 4, "comment": "Very effective. Start slow if you have sensitive skin. Noticeable difference in pore size.", "user_name": "PorePro", "date": "2024-04-30" },
      { "id": "pc-bha-rev-3", "rating": 5, "comment": "Finally a product that actually clears pores. My skin has never looked better.", "user_name": "ClearConscscience", "date": "2024-04-26" }
    ]
  },
  {
    "id": "ord-peeling-sol",
    "name": "The Ordinary AHA 30% + BHA 2% Peeling Solution",
    "category": "skincare",
    "subcategory": "exfoliants",
    "price": "$9.00",
    "image_url": "https://i.pinimg.com/736x/ac/bc/77/acbc77e5d0847582b8ce97bd7a7e693c.jpg",
    "benefits": [
      "10-minute exfoliating facial",
      "Improves skin radiance and appearance of texture",
      "Reduces appearance of blemishes",
      "Vegan and cruelty-free"
    ],
    "ingredients": "Glycolic Acid, Water, Aloe Barbadensis Leaf Water, Sodium Hydroxide, Daucus Carota Sativa Extract, Propanediol, Cocamidopropyl Dimethylamine, Salicylic Acid, Lactic Acid, Tartaric Acid, Citric Acid",
    "how_to_use": [
      "Use in the PM, no more than twice per week",
      "Clean face and wait for skin to dry",
      "Do not use on wet skin",
      "Apply evenly using fingertips, avoiding eye area",
      "Leave on for no more than 10 minutes",
      "Rinse thoroughly with lukewarm water"
    ],
    "reviews": [
      { "id": "ord-peel-rev-1", "rating": 5, "comment": "Incredible results for a low price! My skin feels like a baby's after each use. Love it.", "user_name": "BabySkinFans", "date": "2024-05-05" },
      { "id": "ord-peel-rev-2", "rating": 4, "comment": "Powerful stuff! Be careful not to leave it on too long. Brightens skin instantly.", "user_name": "BrightEyes", "date": "2024-05-02" },
      { "id": "ord-peel-rev-3", "rating": 5, "comment": "The red peel is legendary. My uneven skin tone is finally evening out. Very effective.", "user_name": "EvenGlow", "date": "2024-04-28" }
    ]
  },
  {
    "id": "glo-solution",
    "name": "Glossier Solution Exfoliating Skin Perfector",
    "category": "skincare",
    "subcategory": "exfoliants",
    "price": "$24.00",
    "image_url": "https://i.pinimg.com/736x/0c/f9/1e/0cf91edb1c66c8d6793eb20f5d9edc4e.jpg",
    "benefits": [
      "Aha, BHA, and PHA blend",
      "Daily chemical exfoliant",
      "Clears acne and improves skin texture",
      "Cruelty-free and vegan"
    ],
    "ingredients": "Water, Salicylic Acid, Glycolic Acid, Lactic Acid, Gluconolactone, Niacinamide, Glycerin, Aloe Barbadensis Leaf Juice",
    "how_to_use": [
      "Press down on pump with cotton pad",
      "Sweep over clean face and neck",
      "Use once daily"
    ],
    "reviews": [
      { "id": "glo-sol-rev-1", "rating": 5, "comment": "Simplified my routine. Clears my minor breakouts and leaves a nice glow. Iconic product.", "user_name": "IconicGlow", "date": "2024-05-07" },
      { "id": "glo-sol-rev-2", "rating": 4, "comment": "Good daily exfoliant. Not too harsh. Helps with keep my skin clear and smooth.", "user_name": "SmoothOperator", "date": "2024-05-04" },
      { "id": "glo-sol-rev-3", "rating": 5, "comment": "Love the pump packaging. My skin texture has improved so much since I started using this.", "user_name": "PumpItUp", "date": "2024-05-01" }
    ]
  },
  {
    "id": "de-tlc-serum",
    "name": "Drunk Elephant T.L.C. Framboos Glycolic Night Serum",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$90.00",
    "image_url": "https://i.pinimg.com/236x/80/cb/3d/80cb3d2db73bca59483320c29415ccdf.jpg",
    "benefits": [
      "Refines and resurfaces skin",
      "AHA/BHA blend",
      "Reduces fine lines and wrinkles",
      "Vegan and cruelty-free"
    ],
    "ingredients": "Water, Glycolic Acid, Butylene Glycol, Glycerin, Sodium Hydroxide, Salicylic Acid, Lactic Acid, Tartaric Acid, Citric Acid, Raspberry Fruit Extract",
    "how_to_use": [
      "Apply to clean, dry face at night",
      "Avoid eye area",
      "May cause slight tingling at first"
    ],
    "reviews": [
      { "id": "de-tlc-rev-1", "rating": 5, "comment": "Pricey but worth every penny! My face is so much clearer and smoother. Drunk Elephant wins.", "user_name": "WorthTheHype", "date": "2024-05-09" },
      { "id": "de-tlc-rev-2", "rating": 4, "comment": "Luxury serum that delivers. My fine lines are less visible. Great addition to nighttime routine.", "user_name": "LuxuryLover", "date": "2024-05-06" },
      { "id": "de-tlc-rev-3", "rating": 5, "comment": "Framboos is magic in a bottle. My dull skin is gone, replaced with a vibrant glow.", "user_name": "VibrantVibes", "date": "2024-05-03" }
    ]
  },
  {
    "id": "sr-good-genes",
    "name": "Sunday Riley Good Genes All-In-One Lactic Acid Treatment",
    "category": "skincare",
    "subcategory": "exfoliants",
    "price": "$85.00",
    "image_url": "https://i.pinimg.com/1200x/c1/56/97/c156970ef669445dfec4db7d31614d26.jpg",
    "benefits": [
      "Clarifies and smooths skin",
      "Reduces appearance of dark spots",
      "Immediate results and long-term benefits",
      "Cruelty-free and vegan"
    ],
    "ingredients": "Water, Lactic Acid, Glycolic Acid, Squalane, Yeast Extract, Licorice Root Extract, Lemongrass Extract, Arnica Extract",
    "how_to_use": [
      "Apply 1-2 pumps to clean, dry skin",
      "Can be used as a treatment mask",
      "Use AM or PM"
    ],
    "reviews": [
      { "id": "sr-gg-rev-1", "rating": 5, "comment": "Immediate results! My skin looks so much brighter and clearer after just one use. Worth the investment.", "user_name": "BrightSkinNow", "date": "2024-05-12" },
      { "id": "sr-gg-rev-2", "rating": 4, "comment": "Lactic acid works wonders. A bit expensive but it really delivers on its promises. Skin feels very smooth.", "user_name": "LacticLover", "date": "2024-05-08" },
      { "id": "sr-gg-rev-3", "rating": 5, "comment": "The smell is a bit strong but the results are undeniable. My dark spots are fading fast.", "user_name": "FadeAway", "date": "2024-05-04" }
    ]
  },
  {
    "id": "sc-ce-ferulic",
    "name": "SkinCeuticals C E Ferulic",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$182.00",
    "image_url": "https://i.pinimg.com/736x/98/1a/27/981a27e045c07c0ac79f1b3b4e6878c1.jpg",
    "benefits": [
      "Provides advanced environmental protection",
      "Visibly improves appearance of fine lines and wrinkles",
      "Brightens skin's complexion",
      "Neutralizes free radicals"
    ],
    "ingredients": "Water, Ethoxydiglycol, L-Ascorbic Acid (Vitamin C), Propylene Glycol, Glycerin, Laureth-23, Alpha Tocopherol (Vitamin E), Phenoxyethanol, Triethanolamine, Ferulic Acid, Panthenol, Sodium Hyaluronate",
    "how_to_use": [
      "Apply 4-5 drops to dry face, neck, and chest in the AM",
      "Massage into skin until fully absorbed",
      "Follow with moisturizer and sunscreen"
    ],
    "reviews": [
      { "id": "sc-ce-rev-1", "rating": 5, "comment": "The gold standard of Vitamin C serums! My skin has never looked more radiant and protected.", "user_name": "VitaminCStar", "date": "2024-05-15" },
      { "id": "sc-ce-rev-2", "rating": 4, "comment": "Expensive but lasts a long time. Smells a bit metallic but work better than any other C serum.", "user_name": "SeriousGlow", "date": "2024-05-11" },
      { "id": "sc-ce-rev-3", "rating": 5, "comment": "My dermatologist recommended this for environmental protection. It's truly effective and medical grade.", "user_name": "DermProtects", "date": "2024-05-07" }
    ]
  },
  {
    "id": "ord-ha-serum",
    "name": "The Ordinary Hyaluronic Acid 2% + B5",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$8.00",
    "image_url": "https://i.pinimg.com/736x/16/53/a2/1653a2fd757b613575db588722dc3881.jpg",
    "benefits": [
      "Provides multi-depth hydration",
      "Contains Provitamin B5 for enhanced hydration",
      "Vegan and cruelty-free",
      "Budget-friendly essential"
    ],
    "ingredients": "Water, Sodium Hyaluronate, Sodium Hyaluronate Crosspolymer, Panthenol, Ahnfeltia Concinna Extract, Glycerin, Trisodium Ethylenediamine Disuccinate, Citric Acid, Ethoxydiglycol",
    "how_to_use": [
      "Apply a few drops to face AM and PM before creams",
      "Gently pat into skin",
      "Apply to damp skin for best results"
    ],
    "reviews": [
      { "id": "ord-ha-rev-1", "rating": 5, "comment": "Simple and perfect. Hydrates my skin without any frills. Best value HA on the market.", "user_name": "HydroFan", "date": "2024-05-18" },
      { "id": "ord-ha-rev-2", "rating": 4, "comment": "A bit tacky but works well once absorbed. Great for layering under moisturizer.", "user_name": "LayeringExpert", "date": "2024-05-14" },
      { "id": "ord-ha-rev-3", "rating": 5, "comment": "Consistent performer. My skin feels plump and hydrated every morning.", "user_name": "PlumpPerfect", "date": "2024-05-10" }
    ]
  },
  {
    "id": "lrp-vit-c-serum",
    "name": "La Roche-Posay Pure Vitamin C10 Serum",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$45.00",
    "image_url": "https://i.pinimg.com/1200x/ec/f5/a0/ecf5a0d85bb97e7efa59187ba15ebcf2.jpg",
    "benefits": [
      "Anti-wrinkle cream with pure Vitamin C",
      "Ideal for sensitive skin",
      "Contains salicylic acid and neurosensine",
      "Brightens and smooths skin texture"
    ],
    "ingredients": "Water, Ascorbic Acid, Cyclohexasiloxane, Glycerin, Alcohol Denat., Potassium Hydroxide, Polymethylsilsesquioxane, Polysilicone-11, Dimethicone, Propylene Glycol, Pentaerythrityl Tetraethylhexanoate",
    "how_to_use": [
      "Apply to face and neck in the AM",
      "Avoid eye area",
      "Use in conjunction with SPF protection"
    ],
    "reviews": [
      { "id": "lrp-vc-rev-1", "rating": 5, "comment": "Finally a Vitamin C serum that doesn't irritate my sensitive skin! Brightens beautifully.", "user_name": "SensitiveGlow", "date": "2024-05-20" },
      { "id": "lrp-vc-rev-2", "rating": 4, "comment": "Good texture and results. My skin tone is much more even now. Nice light scent.", "user_name": "EvenTone", "date": "2024-05-16" },
      { "id": "lrp-vc-rev-3", "rating": 5, "comment": "Effective and gentle. One of the few C serums I can use daily. Highly recommend for sensitive types.", "user_name": "DailyBright", "date": "2024-05-12" }
    ]
  },
  {
    "id": "olay-ret-serum",
    "name": "Olay Regenerist Retinol 24 Night Serum",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$29.99",
    "image_url": "https://i.pinimg.com/736x/7a/af/61/7aaf6134926fae774420592d6e6de4ed.jpg",
    "benefits": [
      "Provides retinol benefits with minimal irritation",
      "Skin looks visibly smoother and brighter",
      "Contains Vitamin B3 and Retinoid Complex",
      "Fragrance-free and dye-free"
    ],
    "ingredients": "Water, Dimethicone, Glycerin, Retinol, Retinyl Propionate, Niacinamide, Tocopheryl Acetate, Caprylic/Capric Triglyceride, Phenoxyethanol, Ethylhexylglycerin",
    "how_to_use": [
      "Apply to face and neck in the PM after cleansing",
      "Use SPF protection the next morning",
      "Start with using every other night if new to retinol"
    ],
    "reviews": [
      { "id": "olay-ret-rev-1", "rating": 5, "comment": "Retinol that doesn't burn! My skin looks younger and fresher. Love that it's fragrance-free.", "user_name": "NoBurnRetinol", "date": "2024-05-22" },
      { "id": "olay-ret-rev-2", "rating": 4, "comment": "Good starter retinol. Gentle enough for nightly use once your skin adjusts.", "user_name": "StarterSkin", "date": "2024-05-18" },
      { "id": "olay-ret-rev-3", "rating": 5, "comment": "Noticeable difference in my fine lines after just a few weeks. Very impressed with the quality.", "user_name": "FineLinesGone", "date": "2024-05-14" }
    ]
  },
  {
    "id": "fenty-beauty-gloss-bomb",
    "name": "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    "category": "makeup",
    "subcategory": "lip products",
    "price": "$25.00",
    "image_url": "https://i.pinimg.com/736x/df/eb/fe/dfebfe6b3586fb4bdf669b5f930d48b8.jpg",
    "benefits": [
      "Ultimate high-shine lip gloss for all skin tones",
      "Non-sticky, comfortable formula",
      "Infused with shea butter to condition lips",
      "Available in multiple universally flattering shades",
      "Peach-vanilla scent is addictive",
      "Makes lips look instantly fuller and smoother",
      "Cult-favorite gloss beloved by beauty enthusiasts",
      "Vegan and cruelty-free"
    ],
    "ingredients": "Hydrogenated Polyisobutene, Hydrogenated Polydecene, Ethylene/Propylene/Styrene Copolymer, Butylene/Ethylene/Styrene Copolymer, PEG-8 Dimethicone, Butyrospermum Parkii (Shea Butter), Parfum, Tocopherol, CI 77891 (Titanium Dioxide), CI 77491 (Iron Oxides)",
    "how_to_use": [
      "Apply directly to lips with the wand applicator",
      "Wear alone for a natural high-shine look",
      "Layer over lipstick for added dimension",
      "Reapply throughout the day as desired",
      "The large wand allows for quick, one-swipe application",
      "Can be used over lip liner for a defined look",
      "Keep applicator clean for best results",
      "Store in a cool, dry place"
    ]
  },
  {
    "id": "mac-matte-lipstick",
    "name": "MAC Matte Lipstick",
    "category": "makeup",
    "subcategory": "lip products",
    "price": "$23.00",
    "image_url": "https://i.pinimg.com/1200x/87/df/e1/87dfe19e50d8fbd9e1b8af32104a371a.jpg",
    "benefits": [
      "Iconic matte lipstick with high color payoff",
      "Creamy, comfortable matte finish",
      "Available in hundreds of shades including cult classics",
      "Long-wearing and smudge-resistant",
      "Defines and shapes lips with ease",
      "Dermatologist tested formula",
      "The standard for professional-grade lip color",
      "Wide range of tones from nudes to bolds"
    ],
    "ingredients": "Octyldodecanol, Ricinus Communis (Castor) Seed Oil, Silica, Tricaprylyl Citrate, Ozokerite, Isononyl Isononanoate, Paraffin, Phenyl Trimethicone, Microcrystalline Wax, Ethylhexyl Palmitate, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Caprylic/Capric Triglyceride, Copernicia Cerifera (Carnauba) Wax, Stearyl Stearoyl Stearate, Ascorbyl Palmitate, Tocopherol, Vanillin",
    "how_to_use": [
      "Apply directly to lips from the bullet",
      "For more precision, use a lip brush",
      "Line lips first for a defined look",
      "Blot with a tissue for a soft-focus effect",
      "Reapply as desired for intensity",
      "Works best on exfoliated, moisturized lips",
      "Mix shades to create custom colors",
      "Classic bullet design for easy application"
    ]
  },
  {
    "id": "loreal-lash-paradise",
    "name": "L'Oréal Voluminous Lash Paradise Mascara",
    "category": "makeup",
    "subcategory": "mascara",
    "price": "$14.99",
    "image_url": "https://i.pinimg.com/736x/fd/70/32/fd7032871d1f5b70efabf40fafffbee6.jpg",
    "benefits": [
      "Volumizing and lengthening mascara for intense look",
      "Soft wavy brush catches every lash",
      "Smooth, creamy formula leaves lashes silky",
      "No flaking, no smudging, no clumping",
      "Dermatologist and ophthalmologist tested",
      "Suitable for sensitive eyes and contact lens wearers",
      "Available in multiple colors (Blackest Black, Black, Black Brown)",
      "High-end performance at drug store price"
    ],
    "ingredients": "Water, Paraffin, Potassium Cetyl Phosphate, Copernicia Cerifera Cera, Ethylene/Acrylic Acid Copolymer, Styrene/Acrylates/Ammonium Methacrylate Copolymer, Cera Alba, Synthetic Beeswax, Bis-Diglyceryl Polyacyladipate-2, Polybutene, Cetyl Alcohol, Steareth-20, Glyceryl Dibehenate, Steareth-2, Phenoxyethanol, Silica, Hydroxyethylcellulose, Acacia Senegal Gum",
    "how_to_use": [
      "Position brush at base of lashes",
      "Wiggle brush and sweep up to tips",
      "Apply multiple coats for added volume",
      "Avoid letting mascara dry between coats",
      "Remove easily with soap and water or makeup remover",
      "Keep wand clean for best application",
      "Replace every 3 months for hygiene",
      "Comes in waterproof version for extra longevity"
    ]
  },
  {
    "id": "maybelline-sky-high",
    "name": "Maybelline Lash Sensational Sky High Mascara",
    "category": "makeup",
    "subcategory": "mascara",
    "price": "$16.99",
    "image_url": "https://i.pinimg.com/1200x/2b/3a/a2/2b3aa20be4cba883ce14c955bb775381.jpg",
    "benefits": [
      "Lengthening mascara with exclusive Flex Tower brush",
      "Reaches every lash for full volume and length",
      "Infused with bamboo extract for healthy lashes",
      "Available in multiple intensities (Blackest Black, Very Black, Brownish Black)",
      "Smudge-proof and flake-proof for all-day wear",
      "Suitable for sensitive eyes and contact lens wearers",
      "Washable and waterproof versions available",
      "Trending favorite for extreme lash length"
    ],
    "ingredients": "Water, Propylene Glycol, Styrene/Acrylates/Ammonium Methacrylate Copolymer, Polyurethane-35, Cera Alba, Synthetic Fluorphlogopite, Glyceryl Stearate, Cetyl Alcohol, PEG-200 Glyceryl Stearate, Ethylenediamine/Stearyl Dimer Dilinoleate Copolymer, Copernicia Cerifera Cera, Stearic Acid, Palmitic Acid, Ethylene/VA Copolymer, Alcohol Denat., Paraffin",
    "how_to_use": [
      "Apply to base of lashes and sweep to tips",
      "Wiggle wand to ensure every lash is coated",
      "Layer for dramatic length and volume",
      "Use the tip of the wand for lower lashes",
      "Allow to dry completely",
      "Use makeup remover for easy cleaning",
      "Replace regularly every 3 months",
      "Great for daily use or special occasions"
    ]
  },
  {
    "id": "stila-stay-all-day-eyeliner",
    "name": "Stila Stay All Day Waterproof Liquid Eye Liner",
    "category": "makeup",
    "subcategory": "eyeliner",
    "price": "$28.00",
    "image_url": "https://i.pinimg.com/736x/4d/d7/6d/4dd76dab471cde92ab4368e226db6966.jpg",
    "benefits": [
      "Waterproof liquid eyeliner with precise felt tip applicator",
      "Stay-all-day formula won't smudge or run",
      "Easy-to-use tip for both thin and bold lines",
      "Dries quickly and stays vibrant",
      "Ophthalmologist tested",
      "Available in multiple colors including classic black",
      "Perfect for creating the perfect winged look",
      "Long-wear performance trusted by professionals"
    ],
    "ingredients": "Water, Styrene/Acrylates Copolymer, Butylene Glycol, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin, Sodium Dehydroacetate, CI 77266 (Carbon Black)",
    "how_to_use": [
      "Shake well before use",
      "Position tip as close to lash line as possible",
      "Draw small strokes to build a solid line",
      "Extend outwards for a winged effect",
      "Store horizontally for best ink flow",
      "Remove with oil-based makeup remover",
      "Suitable for all eye shapes",
      "Allow to dry for 30 seconds after application"
    ]
  },
  {
    "id": "neu-ret-oil",
    "name": "Neutrogena Rapid Wrinkle Repair Retinol Oil",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$24.99",
    "image_url": "https://i.pinimg.com/1200x/64/73/81/6473815c4d081f9ba87dcfce55d9d7e3.jpg",
    "benefits": [
      "Concentrated retinol oil for intense treatment",
      "Reduces appearance of deep wrinkles",
      "Hydrates and nourishes with precious oils",
      "Noticeable results in 1 week"
    ],
    "ingredients": "Isopropyl Myristate, Isopropyl Palmitate, Caprylic/Capric Triglyceride, Retinol, Vitamin E, Sunflower Seed Oil",
    "how_to_use": [
      "Apply 4-5 drops to clean, dry skin at night",
      "Massage gently into skin",
      "Follow with moisturizer"
    ],
    "reviews": [
      { "id": "neu-ro-rev-1", "rating": 5, "comment": "Powerful and effective! My deep wrinkles are visibly reduced. Best retinol oil I've found.", "user_name": "WrinkleWarrior", "date": "2024-05-25" },
      { "id": "neu-ro-rev-2", "rating": 4, "comment": "Rich oil but absorbs well. Retinol is strong so start slow. Very hydrating.", "user_name": "OilEnthusiast", "date": "2024-05-21" },
      { "id": "neu-ro-rev-3", "rating": 5, "comment": "I saw results in just a week as promised. My skin looks plump and rejuvenated.", "user_name": "FastResults", "date": "2024-05-17" }
    ]
  },
  {
    "id": "cerave-ret-serum",
    "name": "CeraVe Resurfacing Retinol Serum",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$18.99",
    "image_url": "https://i.pinimg.com/1200x/68/72/75/6872750849202160d5d049be760ccb6ed7e8.jpg",
    "benefits": [
      "Encapsulated retinol helps resurface skin",
      "Contains 3 essential ceramides and licorice root",
      "Reduces appearance of post-acne marks and pores",
      "Fragrance-free and non-comedogenic"
    ],
    "ingredients": "Water, Glycerin, Sodium Hyaluronate, Niacinamide, Retinol, Ceramide NP, Ceramide AP, Ceramide EOP, Licorice Root Extract, Phytosphingosine, Cholesterol",
    "how_to_use": [
      "Apply evenly to face daily",
      "Avoid contact with eyes and lips",
      "Use sunscreen during the day"
    ],
    "reviews": [
      { "id": "cer-rs-rev-1", "rating": 5, "comment": "Best for post-acne marks! My skin looks so much clearer and more even. Love CeraVe.", "user_name": "AcneMarkFree", "date": "2024-05-28" },
      { "id": "cer-rs-rev-2", "rating": 4, "comment": "Very gentle retinol. Good for sensitive skin starting out. Helps with texture and tone.", "user_name": "GentleRetinol", "date": "2024-05-24" },
      { "id": "cer-rs-rev-3", "rating": 5, "comment": "This has helped my skin so much. My pores are smaller and my overall tone is brighter.", "user_name": "BiggerGlow", "date": "2024-05-20" }
    ]
  },
  {
    "id": "inkey-ret-serum",
    "name": "The Inkey List Retinol Serum",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$12.00",
    "image_url": "https://i.pinimg.com/1200x/c1/56/97/c156970ef669445dfec4db7d31614d26.jpg",
    "benefits": [
      "Slow-release formula for low irritation",
      "Promotes skin renewal and collagen production",
      "Reduces fine lines and wrinkles",
      "Cruelty-free and vegan"
    ],
    "ingredients": "Water, Glycerin, Retinol, Retinyl Palmitate, Squalane, Phospholipids, Sodium Hyaluronate, Tocopherol",
    "how_to_use": [
      "Use in the PM after cleansing and before moisturizer",
      "Apply a pea-sized amount to face and neck",
      "Use 2-3 times a week at first"
    ],
    "reviews": [
      { "id": "ink-ret-rev-1", "rating": 5, "comment": "Solid and effective retinol for the price. My skin is looking much smoother. Simple and works.", "user_name": "BudgetBeauty", "date": "2024-05-30" },
      { "id": "ink-ret-rev-2", "rating": 4, "comment": "Good entry-level retinol. No irritation for me. Helps with fine lines and tone.", "user_name": "RetinolBeginner", "date": "2024-05-26" },
      { "id": "ink-ret-rev-3", "rating": 5, "comment": "My favorite budget brand! This serum is as good as the expensive ones. Highly recommend.", "user_name": "InkeyLover", "date": "2024-05-22" }
    ]
  },
  {
    "id": "pc-ret-treat",
    "name": "Paula's Choice 1% Retinol Treatment",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$60.00",
    "image_url": "https://i.pinimg.com/736x/98/1a/27/981a27e045c07c0ac79f1b3b4e6878c1.jpg",
    "benefits": [
      "Powerful 1% retinol for advanced aging concerns",
      "Contains peptides and vitamin C for rejuvenation",
      "Lightweight lotion formula",
      "Fragrance-free and dermatologist tested"
    ],
    "ingredients": "Water, Dimethicone, Retinol, Palmitoyl Tetrapeptide-7, Ascorbic Acid, Glycerin, Sodium Hyaluronate, Salix Alba (Willow) Bark Extract",
    "how_to_use": [
      "Apply to clean, dry skin after toning in the PM",
      "Use no more than 3 evenings a week at first",
      "Apply 1-2 pumps over face and neck"
    ],
    "reviews": [
      { "id": "pc-ret-rev-1", "rating": 5, "comment": "Serious results! My fine lines are noticeably smoother. Best intensive retinol treatment.", "user_name": "IntensiveCare", "date": "2024-06-01" },
      { "id": "pc-ret-rev-2", "rating": 4, "comment": "Strong stuff! Definitely do a patch test first. Deliver great results for mature skin.", "user_name": "AdvancedAging", "date": "2024-05-28" },
      { "id": "pc-ret-rev-3", "rating": 5, "comment": "Paula's Choice never misses. This treatment has totally transformed my skin texture.", "user_name": "PCSuperFan", "date": "2024-05-24" }
    ]
  },
  {
    "id": "roc-ret-night",
    "name": "RoC Retinol Correxion Deep Wrinkle Night Cream",
    "category": "skincare",
    "subcategory": "moisturizers",
    "price": "$22.99",
    "image_url": "https://i.pinimg.com/736x/2a/c6/00/2ac600bb4d4b221259e3031652e250f3.jpg",
    "benefits": [
      "Clinically proven to make skin look 10 years younger",
      "Reduces appearance of deep wrinkles and lines",
      "Powered by pure RoC Retinol and mineral complex",
      "Dermatologist tested and non-comedogenic"
    ],
    "ingredients": "Water, Glycerin, Retinol, Magnesium Aspartate, Zinc Gluconate, Copper Gluconate, Cetearyl Ethylhexanoate, Isopropyl Myristate",
    "how_to_use": [
      "Apply to face and neck as a PM treatment",
      "Can be used after a moisturizer",
      "Initial results visible in 4 weeks"
    ],
    "reviews": [
      { "id": "roc-rn-rev-1", "rating": 5, "comment": "A drugstore hero! My mother and I both use it and thrive. Best value for anti-aging.", "user_name": "DrugstoreHero", "date": "2024-06-03" },
      { "id": "roc-rn-rev-2", "rating": 4, "comment": "Reliable and effective. Good night cream that really helps with forehead lines.", "user_name": "ReliableRetinol", "date": "2024-05-30" },
      { "id": "roc-rn-rev-3", "rating": 5, "comment": "Ten years younger? Maybe! But my skin definitely looks firmer and more youthful.", "user_name": "YouthfulVibes", "date": "2024-05-26" }
    ]
  },
  {
    "id": "tha-witch-hazel",
    "name": "Thayers Witch Hazel Facial Toner with Aloe Vera",
    "category": "skincare",
    "subcategory": "toners",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/736x/bd/1a/40/bd1a40da47f34975e84fec5fda8dc3c7.jpg",
    "benefits": [
      "Alcohol-free toner soothes and hydrates",
      "Contains organic witch hazel and aloe vera",
      "Helps balance pH and cleanse without stripping",
      "Cruelty-free and vegan"
    ],
    "ingredients": "Water, Glycerin, Witch Hazel Extract, Aloe Barbadensis Leaf Juice, Phenoxyethanol, Fragrance, Citric Acid",
    "how_to_use": [
      "Apply with a cotton pad to face and neck",
      "Use after cleansing and before moisturizing",
      "Can be used throughout the day as a refresher"
    ],
    "reviews": [
      { "id": "tha-wh-rev-1", "rating": 5, "comment": "Love this toner! It's so refreshing and doesn't dry out my skin. A total staple.", "user_name": "TonerStaple", "date": "2024-06-05" },
      { "id": "tha-wh-rev-2", "rating": 4, "comment": "Good classic toner. Smells great and keeps my skin calm and balanced.", "user_name": "BalancedBeauty", "date": "2024-06-02" },
      { "id": "tha-wh-rev-3", "rating": 5, "comment": "My skin loves Thayers! So gentle and effective. Have been using it for years.", "user_name": "ThayersFan", "date": "2024-05-29" }
    ]
  },
  {
    "id": "ord-glycolic",
    "name": "The Ordinary Glycolic Acid 7% Toning Solution",
    "category": "skincare",
    "subcategory": "toners",
    "price": "$9.00",
    "image_url": "https://i.pinimg.com/1200x/84/c4/dd/84c4dd27a3073e392f45fd7a4e4145f6.jpg",
    "benefits": [
      "Exfoliates skin for improved radiance and clarity",
      "Contains Tasmanian Pepperberry to reduce irritation",
      "pH balanced at 3.6 for optimal results",
      "Vegan and cruelty-free"
    ],
    "ingredients": "Water, Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin",
    "how_to_use": [
      "Use in the PM after cleansing",
      "Saturate a cotton pad and sweep across face and neck",
      "Do not rinse"
    ],
    "reviews": [
      { "id": "ord-gly-rev-1", "rating": 5, "comment": "Best budget exfoliant! My skin texture has improved so much after adding this to my routine.", "user_name": "TextureLover", "date": "2024-06-08" },
      { "id": "ord-gly-rev-2", "rating": 4, "comment": "Effective but strong. Stick to using it at night. Brightens and smooths skin very well.", "user_name": "BrightSkin", "date": "2024-06-04" },
      { "id": "ord-gly-rev-3", "rating": 5, "comment": "Huge bottle for the price. Works wonders on body areas too. Highly recommend.", "user_name": "ValueExfoliant", "date": "2024-06-01" }
    ]
  },
  {
    "id": "the-ordinary-retinol-02",
    "name": "The Ordinary Retinol 0.2% in Squalane",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$11.00",
    "image_url": "https://i.pinimg.com/736x/5f/0f/bb/5f0fbbb81bde904a67f4faed22fd78c8.jpg",
    "benefits": [
      "Advanced retinol serum for anti-aging",
      "Reduces appearance of wrinkles and fine lines",
      "Improves skin texture and tone",
      "Squalane base provides hydration during treatment",
      "Gentle introduction to retinol",
      "Vegan and cruelty-free",
      "Fragrance-free and water-free formula",
      "High-value anti-aging treatment"
    ],
    "ingredients": "Squalane, Caprylic/Capric Triglyceride, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Hydroxymethoxyphenyl Decanone, BHT",
    "how_to_use": [
      "Apply a small amount to face in the PM",
      "Use after water-based serums but before heavier treatments",
      "Do not use with other retinoid treatments",
      "Avoid unprotected solar exposure",
      "Refrigerate after opening",
      "Retinoids can increase skin's sensitivity to UV radiation",
      "If irritation occurs, cease use",
      "Sun protection is essential during use"
    ]
  },
  {
    "id": "the-ordinary-vitamin-c-suspension",
    "name": "The Ordinary Vitamin C Suspension 23% + HA Spheres 2%",
    "category": "skincare",
    "subcategory": "serums",
    "price": "$10.50",
    "image_url": "https://i.pinimg.com/1200x/83/3b/21/833b21016070d5d049be760ccb6ed7e8.jpg",
    "benefits": [
      "Stable vitamin C suspension for brightening",
      "Visibly reverses signs of aging",
      "Brightens skin tone and reduces dark spots",
      "Hyaluronic acid spheres for surface smoothing",
      "Water-free and silicone-free formula",
      "Highly concentrated antioxidant protection",
      "Vegan and cruelty-free",
      "High potency results at an accessible price"
    ],
    "ingredients": "Ascorbic Acid, Squalane, Isodecyl Neopentanoate, Isononyl Isononanoate, Coconut Alkanes, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Silica Dimethyl Silylate, Sodium Hyaluronate, Glucomannan, Coco-Caprylate/Caprate, Butylene/Ethylene/Styrene Copolymer, Acrylates/Ethylhexyl Acrylate Crosspolymer, Trihydroxystearin, BHT",
    "how_to_use": [
      "Apply a small amount to face in the AM or PM (PM preferred)",
      "A tingling sensation can be expected after application",
      "Can be diluted with other serums/creams to reduce intensity",
      "Avoid contact with eyes",
      "Patch test before use",
      "If irritation persists, discontinue use",
      "Keep out of reach of children",
      "Storage in a cool, dark place is recommended"
    ]
  },
  {
    "id": "glow-recipe-watermelon-toner",
    "name": "Glow Recipe Watermelon Glow PHA + BHA Pore-Tight Toner",
    "category": "skincare",
    "subcategory": "toners",
    "price": "$38.00",
    "image_url": "https://i.pinimg.com/736x/6b/3c/ac/6b3cacc0521f07f5ad0bf222cfabd547.jpg",
    "benefits": [
      "Gentle PHA and BHA for pore-tightening and smoothing",
      "Hydrating watermelon extract and cactus water",
      "Bouncy, liquid texture that absorbs quickly",
      "Helps refine skin texture and minimize appearance of pores",
      "Cruelty-free and vegan formula",
      "Fragrance-free and alcohol-free",
      "Suitable for all skin types including oily and combination",
      "Leaves skin glowing and refreshed"
    ],
    "ingredients": "Water, Opuntia Ficus-Indica Stem Water, Gluconolactone, Glycerin, 1,2-Hexanediol, Salicylic Acid, Betaine Salicylate, Sodium Hyaluronate, Citrullus Lanatus (Watermelon) Fruit Extract, Panthenol, Althaea Rosea Root Extract, Citric Acid, Ethylhexylglycerin, Sodium Benzoate, Potassium Sorbate",
    "how_to_use": [
      "After cleansing, dispense into palms",
      "Gently pat onto face and neck until absorbed",
      "Use morning and night",
      "Follow with serum and moisturizer",
      "Layer for extra hydration if desired",
      "Can use with a cotton pad if preferred",
      "Store away from direct sunlight",
      "Safe for daily use"
    ]
  },
  {
    "id": "lan-cream-skin",
    "name": "Laneige Cream Skin Refiner",
    "category": "skincare",
    "subcategory": "toners",
    "price": "$33.00",
    "image_url": "https://i.pinimg.com/1200x/cb/0f/7f/cb0f7fef35356698e1d80596758aa803.jpg",
    "benefits": [
      "2-in-1 hybrid toner and moisturizer",
      "Deeply hydrates and strengthens skin's moisture barrier",
      "Lightweight, milky liquid formula",
      "Ideal for dry and sensitive skin types"
    ],
    "ingredients": "Water, Glycerin, Limnanthes Alba Seed Oil, 1,2-Hexanediol, Polyglyceryl-10 Stearate, Camellia Sinensis Leaf Extract",
    "how_to_use": [
      "Apply to clean face AM and PM",
      "Pat gently into skin until absorbed",
      "Follow with moisturizer if needed"
    ],
    "reviews": [
      { "id": "lan-cs-rev-1", "rating": 5, "comment": "So hydrating! It's like a toner and moisturizer in one. My skin loves it.", "user_name": "HydrationHealer", "date": "2024-06-10" },
      { "id": "lan-cs-rev-2", "rating": 4, "comment": "Great for dry skin. Very watery but leaves a soft, moisturizing layer. Nice for winter.", "user_name": "DrySkinNoMore", "date": "2024-06-06" },
      { "id": "lan-cs-rev-3", "rating": 5, "comment": "My morning go-to. Simplifies my routine and keeps me glowing all day.", "user_name": "MorningGlow", "date": "2024-06-02" }
    ]
  },
  {
    "id": "glo-watermelon",
    "name": "Glow Recipe Watermelon Glow PHA + BHA Pore-Tight Toner",
    "category": "skincare",
    "subcategory": "toners",
    "price": "$34.00",
    "image_url": "https://i.pinimg.com/736x/6b/3c/ac/6b3cacc0521f07f5ad0bf222cfabd547.jpg",
    "benefits": [
      "Gentle PHA and BHA for pore-tightening and smoothing",
      "Hydrating watermelon extract and hyaluronic acid",
      "Bouncy, liquid texture",
      "Vegan and cruelty-free"
    ],
    "ingredients": "Water, Opuntia Ficus-Indica Stem Water, Gluconolactone, Glycerin, Salicylic Acid, Citrullus Lanatus (Watermelon) Fruit Extract",
    "how_to_use": [
      "Apply with a cotton pad or fingertips to clean face",
      "Gently pat until absorbed",
      "Use daily in AM and PM"
    ],
    "reviews": [
      { "id": "glo-wa-rev-1", "rating": 5, "comment": "Smells amazing and works! My pores look smaller and skin feels smoother. Love the texture.", "user_name": "PoreTight", "date": "2024-06-12" },
      { "id": "glo-wa-rev-2", "rating": 4, "comment": "A bit sticky but very hydrating. The scent is lovely. Noticeable difference in skin clarity.", "user_name": "WatermelonFan", "date": "2024-06-08" },
      { "id": "glo-wa-rev-3", "rating": 5, "comment": "Cutest packaging and effective product. My skin feels fresh and balanced.", "user_name": "FreshFaceGlow", "date": "2024-06-04" }
    ]
  },
  {
    "id": "may-fit-me",
    "name": "Maybelline Fit Me Matte + Poreless Foundation",
    "category": "makeup",
    "subcategory": "foundation",
    "price": "$10.99",
    "image_url": "https://i.pinimg.com/736x/0c/f9/1e/0cf91edb1c66c8d6793eb20f5d9edc4e.jpg",
    "benefits": [
      "Natural-looking matte finish",
      "Blurs pores and controls shine",
      "Lightweight and breathable",
      "Matches skin tone and texture"
    ],
    "ingredients": "Water, Cyclohexasiloxane, Nylon-12, Isododecane, Alcohol Denat., Cyclopentasiloxane, Magnesium Sulfate",
    "how_to_use": [
      "Apply to clean, moisturized skin",
      "Use fingertips, brush, or sponge for application",
      "Blend outwards from center of face"
    ],
    "reviews": [
      { "id": "may-fm-rev-1", "rating": 5, "comment": "Best drugstore foundation! Controls my oily T-zone all day and looks so natural.", "user_name": "OilyFaceSavior", "date": "2024-06-15" },
      { "id": "may-fm-rev-2", "rating": 4, "comment": "Great range of shades. Good coverage without feeling heavy. Perfect for daily wear.", "user_name": "EverydayFound", "date": "2024-06-11" },
      { "id": "may-fm-rev-3", "rating": 5, "comment": "I keep coming back to this one. It performs better than many high-end brands.", "user_name": "BudgetQueen", "date": "2024-06-07" }
    ]
  },
  {
    "id": "lor-true-match",
    "name": "L'Oréal True Match Super-Blendable Foundation",
    "category": "makeup",
    "subcategory": "foundation",
    "price": "$13.99",
    "image_url": "https://i.pinimg.com/736x/98/1a/27/981a27e045c07c0ac79f1b3b4e6878c1.jpg",
    "benefits": [
      "Matches skin's unique undertone",
      "Pro-Vitamin B5 and Vitamin E for hydration",
      "Natural-looking coverage",
      "Fragrance-free and oil-free"
    ],
    "ingredients": "Water, Isododecane, Glycerin, Dimethicone, Panthenol, Tocopherol, Magnesium Sulfate",
    "how_to_use": [
      "Apply to face and blend with sponge or brush",
      "Layer for buildable coverage",
      "Follow with setting powder for longevity"
    ],
    "reviews": [
      { "id": "lor-tm-rev-1", "rating": 5, "comment": "Perfect match for my hard-to-match undertone. Blends like a dream and looks like skin.", "user_name": "UndertoneHero", "date": "2024-06-18" },
      { "id": "lor-tm-rev-2", "rating": 4, "comment": "Very lightweight and moisturizing. Doesn't settle into fine lines. Good medium coverage.", "user_name": "SkinLike", "date": "2024-06-14" },
      { "id": "lor-tm-rev-3", "rating": 5, "comment": "A reliable classic. Provides a healthy, natural finish that lasts all day.", "user_name": "ClassicMatch", "date": "2024-06-10" }
    ]
  },
  {
    "id": "est-double-wear",
    "name": "Estée Lauder Double Wear Stay-in-Place Foundation",
    "category": "makeup",
    "subcategory": "foundation",
    "price": "$48.00",
    "image_url": "https://i.pinimg.com/1200x/c1/56/97/c156970ef669445dfec4db7d31614d26.jpg",
    "benefits": [
      "24-hour long-wear performance",
      "Matte finish, oil-free formula",
      "Full coverage that resists smudging and transfer",
      "Available in 50+ shades"
    ],
    "ingredients": "Water, Cyclopentasiloxane, Trimethylsiloxysilicate, Butylene Glycol, PEG/PPG-18/18 Dimethicone, Magnesium Sulfate, Tocopheryl Acetate",
    "how_to_use": [
      "Apply with a foundation brush for full coverage",
      "Blend quickly in sections",
      "Apply to center of face and work outwards"
    ],
    "reviews": [
      { "id": "est-dw-rev-1", "rating": 5, "comment": "The goat of foundations! Literally does not move for 12+ hours. Flawless coverage.", "user_name": "LongwearLegend", "date": "2024-06-20" },
      { "id": "est-dw-rev-2", "rating": 4, "comment": "Heavy duty foundation. Great for special events. A bit drying, so moisturize well.", "user_name": "EventReady", "date": "2024-06-16" },
      { "id": "est-dw-rev-3", "rating": 5, "comment": "Finally found a foundation that stays on all day without breaking apart. Amazing quality.", "user_name": "StayPut", "date": "2024-06-12" }
    ]
  },
  {
    "id": "fen-pro-filtr",
    "name": "Fenty Beauty Pro Filt'r Soft Matte Longwear Foundation",
    "category": "makeup",
    "subcategory": "foundation",
    "price": "$40.00",
    "image_url": "https://i.pinimg.com/736x/0f/a9/be/0fa9be9723bdef3292b718eb3b0bf758.jpg",
    "benefits": [
      "Instantly smooth and blur appearance of pores",
      "Long-wear, oil-free formula",
      "Soft matte finish with buildable coverage",
      "Resistant to sweat and humidity"
    ],
    "ingredients": "Water, Dimethicone, Talc, PEG-10 Dimethicone, Trimethylsiloxysilicate, Magnesium Sulfate, Phenoxyethanol",
    "how_to_use": [
      "Apply to clean, moisturized skin",
      "Use 1-2 pumps for medium coverage",
      "Blend with a brush for a blurred finish"
    ],
    "reviews": [
      { "id": "fen-pf-rev-1", "rating": 5, "comment": "Shade range is incredible! Blurs my pores and looks amazing in photos. Go Fenty!", "user_name": "BlurMaster", "date": "2024-06-22" },
      { "id": "fen-pf-rev-2", "rating": 4, "comment": "Good matte foundation. Can dry down quickly, so blend fast. Great for oily skin.", "user_name": "MatteQueen", "date": "2024-06-18" },
      { "id": "fen-pf-rev-3", "rating": 5, "comment": "My skin looks so smooth with this. It really does filter your face! Love the range.", "user_name": "FilteredFace", "date": "2024-06-14" }
    ]
  },
  {
    "id": "nar-natural-radiant",
    "name": "NARS Natural Radiant Longwear Foundation",
    "category": "makeup",
    "subcategory": "foundation",
    "price": "$50.00",
    "image_url": "https://i.pinimg.com/736x/be/a9/5d/bea95d389bdd7804143e96dd1ca6e089.jpg",
    "benefits": [
      "16-hour fade-resistant wear",
      "Medium-to-full buildable coverage",
      "Natural, radiant finish",
      "High coverage with a lightweight feel"
    ],
    "ingredients": "Water, Dimethicone, Hydrogenated Polydecene, Propanediol, Butylene Glycol, PEG-9 Polydimethylsiloxyethyl Dimethicone, Magnesium Sulfate",
    "how_to_use": [
      "Warm a small amount between fingertips",
      "Press into face and blend from center outwards",
      "Layer for additional coverage where needed"
    ],
    "reviews": [
      { "id": "nar-nr-rev-1", "rating": 5, "comment": "Radiant and long-wearing. My skin looks glowing but the coverage is serious. Love it.", "user_name": "RadiantGlow", "date": "2024-06-25" },
      { "id": "nar-nr-rev-2", "rating": 4, "comment": "Beautiful finish. A little goes a long way. Does not feel heavy at all despite coverage.", "user_name": "GlowingCover", "date": "2024-06-21" },
      { "id": "nar-nr-rev-3", "rating": 5, "comment": "Holy grail foundation! Stays on all day and makes my skin look photoshopped.", "user_name": "NARSFanatic", "date": "2024-06-17" }
    ]
  },
  {
    "id": "tar-shape-tape",
    "name": "Tarte Shape Tape Full Coverage Concealer",
    "category": "makeup",
    "subcategory": "concealer",
    "price": "$31.00",
    "image_url": "https://i.pinimg.com/736x/be/a9/5d/bea95d389bdd7804143e96dd1ca6e089.jpg",
    "benefits": [
      "Full coverage for under-eyes and blemishes",
      "Tape technology for visible blurring",
      "16-hour long-wear, crease-proof formula",
      "Vegan and cruelty-free"
    ],
    "ingredients": "Water, Cyclopentasiloxane, Butylene Glycol, PEG-10 Dimethicone, Sodium Chloride, Magnesium Sulfate, Phenoxyethanol",
    "how_to_use": [
      "Apply dots under eyes or on blemishes",
      "Blend with a sponge or concealer brush",
      "Apply small amount at a time for best results"
    ],
    "reviews": [
      { "id": "tar-st-rev-1", "rating": 5, "comment": "The best concealer for dark circles! Full coverage and doesn't crease. Essential.", "user_name": "NoMoreCircles", "date": "2024-06-28" },
      { "id": "tar-st-rev-2", "rating": 4, "comment": "Strong coverage. Can be heavy so use sparingly. Blends out nicely and lasts all day.", "user_name": "CoverPro", "date": "2024-06-24" },
      { "id": "tar-st-rev-3", "rating": 5, "comment": "Finally a concealer that covers everything. My undereyes are bright and smooth.", "user_name": "BrightUnderEyes", "date": "2024-06-20" }
    ]
  },
  {
    "id": "may-age-rewind",
    "name": "Maybelline Instant Age Rewind Eraser Multi-Use Concealer",
    "category": "makeup",
    "subcategory": "concealer",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/1200x/77/37/e5/7737e5390a46c1063557ae093df314c6.jpg",
    "benefits": [
      "Multi-use concealer with sponge applicator",
      "Brightens dark circles and corrects imperfections",
      "Lightweight, non-greasy formula",
      "Infused with goji berry and haloxyl"
    ],
    "ingredients": "Water, Cyclopentasiloxane, Dimethicone, Glycerin, PEG-9 Polydimethylsiloxyethyl Dimethicone, Magnesium Sulfate, Lycium Barbarum Fruit Extract",
    "how_to_use": [
      "Twist collar of applicator to reveal product",
      "Dab under eyes or on blemishes",
      "Blend with fingertips or sponge"
    ],
    "reviews": [
      { "id": "may-ar-rev-1", "rating": 5, "comment": "Iconic for a reason! So easy to use and looks so natural under my eyes. Love it.", "user_name": "EasyBeauty", "date": "2024-07-02" },
      { "id": "may-ar-rev-2", "rating": 4, "comment": "Good daily concealer. Lightweight and brightens nicely. Very affordable and reliable.", "user_name": "DailyReliable", "date": "2024-06-28" },
      { "id": "may-ar-rev-3", "rating": 5, "comment": "I've used this for years. The built-in sponge makes application so quick for mornings.", "user_name": "SpeedyBeauty", "date": "2024-06-24" }
    ]
  },
  {
    "id": "nar-radiant-concealer",
    "name": "NARS Radiant Creamy Concealer",
    "category": "makeup",
    "subcategory": "concealer",
    "price": "$32.00",
    "image_url": "https://i.pinimg.com/1200x/7f/88/1b/7f881b50c1adc3e50033a5702e6cf814.jpg",
    "benefits": [
      "Award-winning creamy concealer",
      "Provides buildable, long-wear coverage",
      "Light-diffusing technology for radiant finish",
      "Ideal for all skin types"
    ],
    "ingredients": "Water, Dimethicone, Hydrogenated Polydecene, Propanediol, Butylene Glycol, PEG-9 Polydimethylsiloxyethyl Dimethicone, Magnesium Sulfate, Tocopheryl Acetate",
    "how_to_use": [
      "Apply directly to under-eyes or blemishes",
      "Blend with fingertips or a small brush",
      "Layer for additional coverage"
    ],
    "reviews": [
      { "id": "nar-rc-rev-1", "rating": 5, "comment": "So creamy and doesn't crease! Makes my skin look naturally flawless. Total winner.", "user_name": "CreamyConceal", "date": "2024-07-05" },
      { "id": "nar-rc-rev-2", "rating": 4, "comment": "Excellent concealer. Good range of shades and the radiance it adds is lovely. Stays put.", "user_name": "RadiantCover", "date": "2024-07-01" },
      { "id": "nar-rc-rev-3", "rating": 5, "comment": "My all-time favorite. It's the only concealer that looks natural on my dry undereyes.", "user_name": "DryEyeSolution", "date": "2024-06-27" }
    ]
  },
  {
    "id": "may-matte-ink",
    "name": "Maybelline SuperStay Matte Ink Liquid Lipstick",
    "category": "makeup",
    "subcategory": "lip products",
    "price": "$12.49",
    "image_url": "https://i.pinimg.com/736x/72/64/c8/7264c8fd1161eb381da92c2c9c354e1e.jpg",
    "benefits": [
      "16-hour long-wear matte finish",
      "Highly pigmented, saturated color",
      "Unique arrow applicator for precision",
      "Transfer-proof and smudge-resistant"
    ],
    "ingredients": "Isododecane, Dimethicone, Trimethylsiloxysilicate, Polymethylsilsesquioxane, Polypropylene",
    "how_to_use": [
      "Apply to clean, dry lips",
      "Start from the center and work outwards",
      "Allow to dry for transfer-proof wear"
    ],
    "reviews": [
      { "id": "may-mi-rev-1", "rating": 5, "comment": "Does not budge! I can eat and drink and it stays all day. Stunning shades too.", "user_name": "StayPutLips", "date": "2024-07-08" },
      { "id": "may-mi-rev-2", "rating": 4, "comment": "A bit drying but very effective. Best longwear liquid lip for the price by far.", "user_name": "MatteInkFan", "date": "2024-07-04" },
      { "id": "may-mi-rev-3", "rating": 5, "comment": "Love the precision applicator. Get a clean line every time. Color is so vibrant.", "user_name": "PrecisePout", "date": "2024-06-30" }
    ]
  },
  {
    "id": "fen-gloss-bomb",
    "name": "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    "category": "makeup",
    "subcategory": "lip products",
    "price": "$21.00",
    "image_url": "https://i.pinimg.com/1200x/cb/29/d9/cb29d94b07a18699558838dd88e61647.jpg",
    "benefits": [
      "Universal shimmer gloss with explosive shine",
      "Conditioning shea butter for lip comfort",
      "Non-sticky, hydrating feel",
      "Peach-vanilla scent"
    ],
    "ingredients": "Polybutene, Octyldodecanol, Phenylpropyldimethylsiloxysilicate, Silica Dimethyl Silylate, Butyrospermum Parkii Butter",
    "how_to_use": [
      "Wear alone or layer over lipstick",
      "Apply liberally to lips whenever shine is needed",
      "Reapply throughout the day"
    ],
    "reviews": [
      { "id": "fen-gb-rev-1", "rating": 5, "comment": "Best gloss ever! Not sticky, looks amazing on everyone, and smells divine. Obsessed.", "user_name": "GlossBoss", "date": "2024-07-11" },
      { "id": "fen-gb-rev-2", "rating": 4, "comment": "Beautiful high shine. The XXL applicator is great. Keeps my lips feeling soft and moist.", "user_name": "ShineLover", "date": "2024-07-07" },
      { "id": "fen-gb-rev-3", "rating": 5, "comment": "The scent is so good and the shimmer is perfect. Fenty does it again with this one.", "user_name": "FentyGlow", "date": "2024-07-03" }
    ]
  },
  {
    "id": "mac-ruby-woo",
    "name": "MAC Matte Lipstick - Ruby Woo",
    "category": "makeup",
    "subcategory": "lip products",
    "price": "$23.00",
    "image_url": "https://i.pinimg.com/1200x/5a/24/2d/5a242df3ce004f79489a103656684ea1.jpg",
    "benefits": [
      "The iconic retro matte red lipstick",
      "Long-wearing and highly pigmented",
      "Non-feathering and comfortable matte finish",
      "Matches all skin tones"
    ],
    "ingredients": "Octyldodecanol, Ricinus Communis Seed Oil, Silica, Tricaprylyl Citrate, Ozokerite, Isononyl Isononanoate",
    "how_to_use": [
      "Apply directly to lips from the bullet or use a lip brush",
      "Layer for more intense color",
      "Blot with tissue for a permanent look"
    ],
    "reviews": [
      { "id": "mac-rw-rev-1", "rating": 5, "comment": "The perfect red! Makes your teeth look white and lasts forever. Every woman needs this.", "user_name": "RedLipClassic", "date": "2024-07-14" },
      { "id": "mac-rw-rev-2", "rating": 4, "comment": "Very dry matte formula so prep your lips. But the color is incomparable and stays on.", "user_name": "MatteMaster", "date": "2024-07-10" },
      { "id": "mac-rw-rev-3", "rating": 5, "comment": "I've been wearing Ruby Woo for 10 years. It's the ultimate power red lipstick.", "user_name": "PowerRed", "date": "2024-07-06" }
    ]
  },
  {
    "id": "glo-boy-brow",
    "name": "Glossier Boy Brow",
    "category": "makeup",
    "subcategory": "eyebrow",
    "price": "$17.00",
    "image_url": "https://i.pinimg.com/736x/02/9f/d9/029fd961854cbc2d485b55c3e525f223.jpg",
    "benefits": [
      "Fluffy, groomed brows with natural hold",
      "Thickens and shapes brows effortlessly",
      "Contains conditioning oleic acid and lecithin",
      "Cruelty-free and vegan"
    ],
    "ingredients": "Water, Beeswax, Stearic Acid, Cetyl Alcohol, Lecithin, Copernicia Cerifera Wax",
    "how_to_use": [
      "Brush through brows in an upward motion",
      "Use short strokes to build volume",
      "Apply alone or over a brow pencil"
    ],
    "reviews": [
      { "id": "glo-bb-rev-1", "rating": 5, "comment": "Makes my sparse brows look so much fuller but still natural. It's my daily must-have.", "user_name": "BrowFull", "date": "2024-07-17" },
      { "id": "glo-bb-rev-2", "rating": 4, "comment": "Easy to use and gives a nice, clean look. Stays put all day without flaking. Simple.", "user_name": "DailyBrows", "date": "2024-07-13" },
      { "id": "glo-bb-rev-3", "rating": 5, "comment": "I've tried many brow gels but this one gives the best 'fluffy' effect. Love Glossier.", "user_name": "FluffyBrows", "date": "2024-07-09" }
    ]
  },
  {
    "id": "ben-brow-setter",
    "name": "Benefit Cosmetics 24-HR Brow Setter",
    "category": "makeup",
    "subcategory": "eyebrow",
    "price": "$26.00",
    "image_url": "https://i.pinimg.com/736x/f0/6a/64/f06a6474cf8d93d97186540af8c5f2a4.jpg",
    "benefits": [
      "Invisible brow shaping and setting gel",
      "24-hour long-wear, flake-free formula",
      "Custom-molded dual-sided wand for precision",
      "Quick-drying, no-mess application"
    ],
    "ingredients": "Water, Alcohol Denat., AMP-Acrylates/Allyl Methacrylate Copolymer, Glycerin",
    "how_to_use": [
      "Sweep through brows using the long-bristle side",
      "Use the short-bristle side to shape and sculpt",
      "Wear alone or over brow color"
    ],
    "reviews": [
      { "id": "ben-bs-rev-1", "rating": 5, "comment": "Strongest hold I've ever found! Keeping my brows in place transition from day to night.", "user_name": "StrongHold", "date": "2024-07-20" },
      { "id": "ben-bs-rev-2", "rating": 4, "comment": "Excellent setting gel. Dries fast and doesn't flake. Makes my brows look very polished.", "user_name": "PolishedBrows", "date": "2024-07-16" },
      { "id": "ben-bs-rev-3", "rating": 5, "comment": "I love the custom wand! Really lets you control every single hair. Stays all day.", "user_name": "PrecisionBrow", "date": "2024-07-12" }
    ]
  },
  {
    "id": "lor-lash-paradise",
    "name": "L'Oréal Lash Paradise Mascara",
    "category": "makeup",
    "subcategory": "mascara",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/1200x/b9/0d/e2/b90de2deacd7e3ccf9ec8ad7a63f042f.jpg",
    "benefits": [
      "Instant volume and length with a soft, feathery feel",
      "Intense black pigment stays vibrant",
      "Soft wavy brush with 200+ bristles",
      "Flake-free and smudge-resistant"
    ],
    "ingredients": "Water, Paraffin, Potassium Cetyl Phosphate, Copernicia Cerifera Cera",
    "how_to_use": [
      "Apply from base of lashes to tip in a zigzag motion",
      "Repeat for additional volume and length",
      "Remove easily with soap and water"
    ],
    "reviews": [
      { "id": "lor-lp-rev-1", "rating": 5, "comment": "Incredible volume! My lashes look like falsies but feel so soft. Best drugstore mascara.", "user_name": "VolumizedVibes", "date": "2024-07-23" },
      { "id": "lor-lp-rev-2", "rating": 4, "comment": "Very similar to high-end brands. Great length and the brush is very easy to use.", "user_name": "LengthLover", "date": "2024-07-19" },
      { "id": "lor-lp-rev-3", "rating": 5, "comment": "I always get compliments on my lashes when I wear this. Truly a paradise for lashes.", "user_name": "LashParadiseFan", "date": "2024-07-15" }
    ]
  },
  {
    "id": "may-sky-high",
    "name": "Maybelline Sky High Mascara",
    "category": "makeup",
    "subcategory": "mascara",
    "price": "$12.99",
    "image_url": "https://i.pinimg.com/1200x/22/65/df/2265df356e56d92776af495547a7e462.jpg",
    "benefits": [
      "Sky-high lash impact from every angle",
      "Limitless length and volume",
      "Exclusive Flex Tower mascara brush bends to volumize",
      "Infused with bamboo extract and fibers"
    ],
    "ingredients": "Water, Propylene Glycol, Styrene/Acrylates/Ammonium Methacrylate Copolymer",
    "how_to_use": [
      "Hold flexible brush against lashes and extend from root to tip",
      "Repeat until desired volume and length are achieved",
      "Allow to dry between coats"
    ],
    "reviews": [
      { "id": "may-sh-rev-1", "rating": 5, "comment": "Length for days! This mascara literally takes my lashes to the sky. Blown away by results.", "user_name": "SkyHighLimit", "date": "2024-07-26" },
      { "id": "may-sh-rev-2", "rating": 4, "comment": "Great separation and length. Zero clumping. Stays put and is easy to take off. Love it.", "user_name": "DefinedLashes", "date": "2024-07-22" },
      { "id": "may-sh-rev-3", "rating": 5, "comment": "Viral for a reason! My favorite new mascara. Delivers on every promise it makes.", "user_name": "ViralVibes", "date": "2024-07-18" }
    ]
  },
  {
    "id": "sti-stay-all-day",
    "name": "Stila Stay All Day Waterproof Liquid Eye Liner",
    "category": "makeup",
    "subcategory": "eyeliner",
    "price": "$24.00",
    "image_url": "https://i.pinimg.com/736x/ac/bc/77/acbc77e5d0847582b8ce97bd7a7e693c.jpg",
    "benefits": [
      "Waterproof liquid liner stays all day",
      "Precise felt-tip applicator for easy lining",
      "Fast-drying and smudge-proof",
      "Intense black pigment"
    ],
    "ingredients": "Water, Styrene/Acrylates Copolymer, Butylene Glycol, Sodium Hyaluronate",
    "how_to_use": [
      "Apply to clean, dry eyelid close to lash line",
      "Use small strokes to build your desired line",
      "Allow to dry for 30 seconds"
    ],
    "reviews": [
      { "id": "sti-sd-rev-1", "rating": 5, "comment": "Stayed all day through a wedding and many tears! Most reliable liquid liner on earth.", "user_name": "ReliableLiner", "date": "2024-07-29" },
      { "id": "sti-sd-rev-2", "rating": 4, "comment": "Easy to use even for beginners. The felt tip is very precise. Does not smudge at all.", "user_name": "BeginnerFriendly", "date": "2024-07-25" },
      { "id": "sti-sd-rev-3", "rating": 5, "comment": "My wing and I are inseparable thanks to Stila. Perfect black that never fades.", "user_name": "PerfectWing", "date": "2024-07-21" }
    ]
  },
  {
    "id": "nyx-epic-ink",
    "name": "NYX Professional Makeup Epic Ink Liner",
    "category": "makeup",
    "subcategory": "eyeliner",
    "price": "$10.00",
    "image_url": "https://i.pinimg.com/1200x/2b/50/fe/2b50fe596d08f9fc375fad40d3a08242.jpg",
    "benefits": [
      "High-precision liquid liner with brush tip",
      "Waterproof, pigmented formula stays put",
      "Creates smooth, fluid lines with ease",
      "Vegan and cruelty-free"
    ],
    "ingredients": "Water, Styrene/Acrylates Copolymer, Propylene Glycol, Sodium Dehydroacetate",
    "how_to_use": [
      "Glide brush tip along your lash line",
      "Wing it out for a dramatic cat-eye look",
      "Store horizontally for best flow"
    ],
    "reviews": [
      { "id": "nyx-ei-rev-1", "rating": 5, "comment": "Best brush tip liner for the price! Incredible precision and does not bleed. Love NYX.", "user_name": "BrushTipQueen", "date": "2024-08-01" },
      { "id": "nyx-ei-rev-2", "rating": 4, "comment": "Very waterproof and reliable. The ink flows perfectly. Great alternative to high-end liners.", "user_name": "NYXEpicFan", "date": "2024-07-28" },
      { "id": "nyx-ei-rev-3", "rating": 5, "comment": "I've tried everything but this is my go-to. My eyeliner looks sharp and stays sharp all day.", "user_name": "SharpLiners", "date": "2024-07-24" }
    ]
  }
];

