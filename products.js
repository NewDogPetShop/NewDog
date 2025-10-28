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
        image: "images/toymini1k.png", 
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
        image: "images/toymini3k.png", 
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
        image: "images/puppymedium.png", 
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
        image: "images/puuppy3kmed.png", 
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
        image: "images/puppymedium.png", 
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
        image: "images/largepuppy.png", 
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
        image: "images/largepuppy.png", 
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
        image: "images/momandbaby.png", 
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
        image: "images/toyminiadult.png", 
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
        image: "images/mediumadult.png", 
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
        image: "images/senior.png", 
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
        image: "images/senior.png", 
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
        image: "images/gatocachorro.png", 
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
        image: "images/gatoadulto.png", 
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
        image: "images/gatosenior.png", 
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
        image: "images/cardiaco2kg.png", 
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
        image: "images/cardiaco.png", 
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
        image: "images/belcan15kg.png", 
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
        image: "images/belcan22kg.png", 
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
