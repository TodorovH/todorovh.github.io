'use strict';

var DataObjects = [
    {
        title: 'Intensive Mineral Hand Treatment',
        id: 'intensive-mineral-hand-treatment',
        img: 'public/img/Hand_Cream.jpg',
        url: 'https://www.arianna-skincare.com/intensive-mineral-hand-treatment.html',
        price: '$25.00',
        features: [
            'Instantly Smooths Rough, Irritated and Dry Skin',
            'Lasting Moisture for up to 12 Hours',
            'Waterproof',
            'All-natural Ingredients and Paraben-free'
        ],
        description: "Arianna's mineral-enriched hand cream was specifically designed" + 
        "to penetrate quickly to protect, nourish and elevate moisture in the hands while" +
        "protecting them from environmental elements and household damage.",
        availability: "IN STOCK",
        SKU: 'AR111',
        productId: 37,
        reviews: '15 Reviews'
    },
    {
        title: 'Ultra Rich Mineral Body Butter',
        id: 'ultra-rich-mineral-body-butter',
        img: 'public/img/body_butter_jar_lavander.jpg',
        url: 'https://www.arianna-skincare.com/ultra-rich-mineral-body-butter.html',
        price: '$80.00',
        features: [
            'Rich and Creamy Formula',
            'Heals and Moisturizes Beyond Dry Skin',
            'Lasting Intense Hydration.',
            'Waterproof',
            'Prevents Moisture Loss',
            'Calms & Soothes Eczema Symptoms'
        ],
        description: "Arianna's best selling Ultra Rich Mineral Body Butter is the ultimate" + 
        "spa-strength solution for extra dry and sensitive skin. Its superb blend of dead sea" +
        "minerals, natural plant extracts and Shea butter targets dry, damaged skin to provide 24 hour intense-hydration.",
        availability: "IN STOCK",
        SKU: 'AR105',
        productId: 66,
        reviews: '22 Reviews'
    },
    {
        title: 'Ultra Exfoliating Body Treatment',
        id: 'ultra-exfoliating-body-treatment',
        img: 'public/img/Salt_Scrub_-_natural_scent.jpg',
        url: 'https://www.arianna-skincare.com/ultra-exfoliating-body-treatment.html',
        price: '$90.00',
        features: [
            'Targets Dullness and Uneven Texture',
            'Exfoliates Skin to Remove Dead Skin Cells',
            'Anti-bacterial Treatment Formulated to Improve Eczema Symptoms',
            'Packed with Dead Sea Minerals and Natural Oils',
            'The Perfect Solution for Dry Skin'
        ],
        description: "A raw, gentle salt scrub featuring luminous crystals to exfoliate deeply" +
        "and rejuvenate dry, rough skin. For skin that’s smooth, hydrated, and glowing.",
        availability: "IN STOCK",
        SKU: "AR101",
        productId: 62,
        reviews: '15 Reviews'
    },
    {
        title: 'Collagen Boost Eye Serum Treatment',
        id: 'collagen-boost-eye-serum-treatment',
        img: 'public/img/eye_serum1.jpg',
        url: 'https://www.arianna-skincare.com/collagen-boost-eye-serum-treatment.html',
        price: '$300.00',
        features: [
            "Helps to Instantly Reduce and Minimizes Wrinkles Around the Eye",
            "Promotes the Production of Collagen",
            "Helps to Remove under Eye Puffiness and Dark Circles",
            "Lightweight Texture yet Deeply Hydrating",
            "Long lasting Treatment"
        ],
        description: "Arianna's Collagen Boost Anti-Aging Eye Serum Treatment is a scientific" +
        "breakthrough in natural eye care. It is formulated with a powerhouse of ingredients that" +
        "moisturize and improve blood circulation while simultaneously reducing the appearance of" +
        "puffy-looking eyes and dark circles. This Eye Serum is ultra-gentle while being uncompromisingly" +
        "effective, with an immediate tightening effect on the skin to smooth out wrinkles.",
        availability: 'IN STOCK',
        SKU: "AR303",
        productId: 51,
        reviews: '16 Reviews'
    },
    {
        title: 'Skin Renewal Facial Peel',
        id: 'skin-renewal-facial-peel',
        img: 'public/img/facial_peel.jpg',
        url: 'https://www.arianna-skincare.com/shop/face-care/skin-renewal-facial-peel.html',
        price: '$180.00',
        features: [
            "Instantly Exfoliates and Detoxifies the Skin",
            "Deeply Cleanses Pores",
            "Removes Skin Impurities",
            "Reduces Sun Spots, Age Spots",
            "Excellent for Acne Prone Skin",
            "Non-abrasive Facial Peel",
            "Reinforces Collagen Synthasis"
        ],
        description: "This Renewal Gentle Cleansing Facial Peel is ideal for cleansing the skin thoroughly." +
        "It evens out skin tone, removes dead cells & toxins and re-balances pH levels. This reinforces collagen" +
        "synthesis, while delivering a powerful dose of vitamins to the cells. The skin renewal facial peel is" +
        "infused with nourishing Dead Sea Minerals. This non-abrasive peel will leave your skin feeling radiant" +
        "and revitalized.",
        availability: "IN STOCK",
        SKU: "AR313",
        productId: 47,
        reviews: '12 Reviews'
    },
    {
        title: 'Hydrating Mineral Body Lotion',
        id: 'hydrating-mineral-body-lotion',
        img: 'public/img/body_lotion_bottle.jpg',
        url: 'https://www.arianna-skincare.com/shop/body-care/hydrating-mineral-body-lotion.html',
        price: '$60.00',
        features: [
            "Everyday Use Lightweight Moisturizer",
            "Helps Retain Natural Moisture of Skin",
            "Comes in 3 soothing scents: Chamomile & Lavender, Milk & Honey and Exotic",
            "Water Based non Greasy Lotion"
        ],
        description: "The Hydrating Mineral Body Lotion is a light, softly scented, richly emollient" +
        "lotion designed for daily use by people with all skin types.",
        availability: "IN STOCK",
        SKU: "AR108",
        productId: 72,
        reviews: '9 Reviews'
    },
    {
        title: 'Instant Repair Collagen Eye Cream',
        id: 'instant-repair-collagen-eye-cream',
        img: 'public/img/eye_cream_jar_50.jpg',
        url: 'https://www.arianna-skincare.com/shop/face-care/instant-repair-collagen-eye-cream.html',
        price: '$300.00',
        features: [
            "Reduces Dark Circles and Puffiness under Eyes",
            "Moisturizes Skin around the Eyes",
            "Instantly Reduces Fine Lines and Wrinkles",
            "Promotes Collagen Production"
        ],
        description: "This luxurious Instant Repair Anti-Aging Collagen Eye Cream helps nurture and firms" +
        "the delicate skin around the eyes, creating an appearance of health and radiance. It improves blood" +
        "circulation, evens out skin tone and helps to provide an immediate lifting & tightening effect to" +
        "smooth out fine lines & wrinkles.",
        availability: "IN STOCK",
        SKU: "AR307",
        productId: 49,
        reviews: '11 Reviews'
    },
    {
        title: 'Skin Balance Revitalizing Gel Cream',
        id: 'skin-balance-revitalizing-gel-cream',
        img: 'public/img/gel_cream_jar_50.jpg',
        url: 'https://www.arianna-skincare.com/shop/face-care/skin-balance-revitalizing-gel-cream.html',
        price: '$180.00',
        features: [
            "Light Daily Facial Moisturizer",
            "Excellent Make-up Primer or Base",
            "Helps to Reduce the Appearance of Pore Size",
            "Long-lasting Hydration",
            "Restore & Maintain Moisture",
            "Non-greasy Finish"
        ],
        description: "Our Skin Balance Revitalizing Gel Cream is water-based and targets normal-oily skin." +
        "This light gel cream instantly cools and refreshes skin, providing intensive 24-hour hydration while" +
        "strengthening skin’s natural barrier in order to prevent future moisture loss leaving skin surface smooth & refreshed.",
        availability: 'IN STOCK',
        SKU: "AR302",
        productId: 48,
        reviews: '4 Reviews'
    },
    {
        title: 'Cellular Collagen Facial Serum',
        id: 'cellular-collagen-face-serum',
        img: 'public/img/face_serum.jpg',
        url: 'https://www.arianna-skincare.com/cellular-collagen-face-serum.html',
        price: '$300.00',
        features: [
            "Instantly Firms and Tightens Skin to Reduce Wrinkles",
            "Helps Reduce the Visibility of Sun and Aging Spots",
            "Promotes Collagen Production",
            "Helps Nourish and Moisturize Skin throughout the Day"
        ],
        description: "This concentrated multi-defense, anti-aging, fast-absorbing serum is a unique blend of" +
        "active ingredients that target specific aging issues and prevent damage from free radicals. The added" +
        "Colloidal Gold actively reduces general signs of aging like expression lines, wrinkles and age spots" +
        "while simultaneously restoring moisture and nourishment.",
        availability: "IN STOCK",
        SKU: "AR304",
        productId: 54,
        reviews: '13 Reviews'
    },
    {
        title: 'Deep Cleansing Mud Gel',
        id: 'deep-cleansing-mud-gel',
        img: 'public/img/mud_gel_s.jpg',
        url: 'https://www.arianna-skincare.com/shop/cleansing/deep-cleansing-mud-gel.html',
        price: '$80.00',
        features: [
            "Removes Make-up",
            "Contains Real Dead Sea Mud",
            "Daily Face Wash",
            "Perfectly Suited for Oily and Sensitive Skin",
            "Removes Excess Oils from Skin",
            "Evens Out Skin-tone"
        ],
        description: "Arianna's cleansing Mud Gel Face Wash is known for its beneficial properties and ability to" +
        "clear the skin surface of pore-clogging impurities such as dirt, oil, makeup, and impurities. The gel restores" +
        "the natural pH balance while delivering vitamins and oils essential for a glowing, healthy look.",
        availability: "IN STOCK",
        SKU: "AR403",
        productId: 46,
        reviews: '8 Reviews'
    }
];