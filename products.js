const allProducts = [
    // ==================== NUTRIQUE - PERROS (CACHORROS) ====================
    { 
        id: 70003, 
        name: "Nutrique Toy & Mini Puppy x 1kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "cachorro", 
        weight: "1 kg", 
        price: 450, 
        image: "https://bestforpets.cl/tienda/10016-large_default/nutrique-toy-mini-puppy.jpg", 
        icon: "🐕" 
    },
    { 
        id: 70004, 
        name: "Nutrique Toy & Mini Puppy x 3kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "cachorro", 
        weight: "3 kg", 
        price: 1250, 
        image: "https://http2.mlstatic.com/D_NQ_NP_825360-MLA92379960690_092025-O.webp", 
        icon: "🐕" 
    },
    { 
        id: 70005, 
        name: "Nutrique Medium Puppy x 1kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "cachorro", 
        weight: "1 kg", 
        price: 450, 
        image: "https://http2.mlstatic.com/D_NQ_NP_903652-MLU80003807200_102024-O.webp", 
        icon: "🐕" 
    },
    { 
        id: 70006, 
        name: "Nutrique Medium Puppy x 3kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "cachorro", 
        weight: "3 kg", 
        price: 1250, 
        image: "https://http2.mlstatic.com/D_NQ_NP_903652-MLU80003807200_102024-O.webp", 
        icon: "🐕" 
    },
    { 
        id: 70007, 
        name: "Nutrique Medium Puppy x 12kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "cachorro", 
        weight: "12 kg", 
        price: 3500, 
        image: "https://http2.mlstatic.com/D_NQ_NP_903652-MLU80003807200_102024-O.webp", 
        icon: "🐕" 
    },
    { 
        id: 70008, 
        name: "Nutrique Large Puppy x 1kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "cachorro", 
        weight: "1 kg", 
        price: 450, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIF5Q8KM0S4VSZprDaga_nh3v1fHOXMt_vJg&s", 
        icon: "🐕" 
    },
    { 
        id: 70010, 
        name: "Nutrique Large Puppy x 15kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "cachorro", 
        weight: "15 kg", 
        price: 4200, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIF5Q8KM0S4VSZprDaga_nh3v1fHOXMt_vJg&s", 
        icon: "🐕" 
    },
    { 
        id: 70055, 
        name: "Nutrique Mother & Baby x 12kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "cachorro", 
        weight: "12 kg", 
        price: 3800, 
        image: "https://tiendademascotasar.vtexassets.com/arquivos/ids/159528-800-auto?v=638071505811570000&width=800&height=auto&aspect=true", 
        icon: "🐕" 
    },

    // ==================== NUTRIQUE - PERROS (ADULTOS) ====================
    { 
        id: 70011, 
        name: "Nutrique Toy & Mini Adult x 7.5kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "adulto", 
        weight: "7.5 kg", 
        price: 2400, 
        image: "https://palacioanimal.com.ar/imagenes/publicaciones/611742/0_thumb_611742_21ae3027f7890f8d71abe83556b76092.webp", 
        icon: "🐕" 
    },
    { 
        id: 70014, 
        name: "Nutrique Medium Adult x 12kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "adulto", 
        weight: "12 kg", 
        price: 3500, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZmVUfaYUIYQRn_dRaM6A-sfdgoU5ipioWQ&s", 
        icon: "🐕" 
    },
    { 
        id: 70018, 
        name: "Nutrique Large Adult x 15kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "adulto", 
        weight: "15 kg", 
        price: 4500, 
        image: "http://petify.uy/web/wp-content/uploads/nutrique-envase-perro-young-large-e1707408782121.webp", 
        icon: "🐕" 
    },
    { 
        id: 70020, 
        name: "Nutrique Senior x 7.5kg", 
        brand: "Nutrique", 
        type: "perro", 
        stage: "senior", 
        weight: "7.5 kg", 
        price: 2400, 
        image: "http://petify.uy/web/wp-content/uploads/nutrique-envase-perro-young-large-e1707408782121.webp", 
        icon: "🐕" 
    },

    // ==================== NUTRIQUE - GATOS ====================
    { 
        id: 70025, 
        name: "Nutrique Gato Cachorro Kitten x 7.5kg", 
        brand: "Nutrique", 
        type: "gato", 
        stage: "cachorro", 
        weight: "7.5 kg", 
        price: 2600, 
        image: "https://http2.mlstatic.com/D_NQ_NP_834098-MLU73581767355_122023-O.webp", 
        icon: "🐈" 
    },
    { 
        id: 70028, 
        name: "Nutrique Gato Adulto Indoor x 7.5kg", 
        brand: "Nutrique", 
        type: "gato", 
        stage: "adulto", 
        weight: "7.5 kg", 
        price: 2400, 
        image: "https://http2.mlstatic.com/D_NQ_NP_787219-MLA93504626231_092025-O.webp", 
        icon: "🐈" 
    },
    { 
        id: 70031, 
        name: "Nutrique Gato Senior Mature x 7.5kg", 
        brand: "Nutrique", 
        type: "gato", 
        stage: "senior", 
        weight: "7.5 kg", 
        price: 2400, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWufSYMxRs6mwY_Sz8pLVxTj8zT0x9pmmWoQ&s", 
        icon: "🐈" 
    },

    // ==================== VITALCAN THERAPY - PERROS ====================
    { 
        id: 40100, 
        name: "Therapy Cardiac Health 2kg", 
        brand: "Vitalcan Therapy", 
        type: "perro", 
        stage: "terapia", 
        weight: "2 kg", 
        price: 1500, 
        image: "https://http2.mlstatic.com/D_NQ_NP_758489-MLC51470679437_092022-O.webp", 
        icon: "⚕️" 
    },
    { 
        id: 40101, 
        name: "Therapy Cardiac Health 10kg", 
        brand: "Vitalcan Therapy", 
        type: "perro", 
        stage: "terapia", 
        weight: "15 kg", 
        price: 5800, 
        image: "http://mundoanimalsantafe.com.ar/wp-content/uploads/2020/04/hypo_caninos-1-300x300.png", 
        icon: "⚕️" 
    },

    // ==================== VITALCAN BELCAN - PERROS ====================
    { 
        id: 12501, 
        name: "Belcan x 15 Kg", 
        brand: "Belcan", 
        type: "perro", 
        stage: "adulto", 
        weight: "15 kg", 
        price: 1800, 
        image: "https://http2.mlstatic.com/D_NQ_NP_617987-MLU73785265398_012024-O.webp", 
        icon: "🐕" 
    },
    { 
        id: 11769, 
        name: "Belcan x 22 Kg", 
        brand: "Belcan", 
        type: "perro", 
        stage: "adulto", 
        weight: "22 kg", 
        price: 2500, 
        image: "https://www.etra.com.ar/337-thickbox_default/belcan-adulto-x-22-kg.jpg", 
        icon: "🐕" 
    },

    // ==================== VITALCAN BELCAT - GATOS ====================
    { 
        id: 11799, 
        name: "Belcat x 0,5 Kg", 
        brand: "Belcat", 
        type: "gato", 
        stage: "adulto", 
        weight: "0.5 kg", 
        price: 250, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDVl6eZm0BBegp6Rjw7wllFr29dL-ViF3Mg&s", 
        icon: "🐈" 
    },
];
