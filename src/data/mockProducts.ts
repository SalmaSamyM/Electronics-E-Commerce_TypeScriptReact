
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "MacBook Pro 16-inch",
    description: "Apple M1 Pro chip, 16GB RAM, 512GB SSD, 16-inch Liquid Retina XDR display. Experience the most powerful MacBook ever, designed for developers, photographers, filmmakers, 3D artists, and more.",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    category: "laptops",
    brand: "Apple",
    rating: 4.9,
    reviews: 245,
    stock: 15,
    discount: 10,
    isNew: true,
    specifications: {
      "Processor": "Apple M1 Pro chip",
      "RAM": "16GB unified memory",
      "Storage": "512GB SSD",
      "Display": "16-inch Liquid Retina XDR display",
      "Battery": "Up to 21 hours",
      "Ports": ["Thunderbolt 4", "HDMI", "SDXC card slot", "MagSafe 3"],
      "Operating System": "macOS"
    },
    features: [
      "Liquid Retina XDR display with extreme dynamic range",
      "Up to 21 hours of battery life",
      "Studio-quality three-mic array",
      "Six-speaker sound system with force-cancelling woofers"
    ]
  },
  {
    id: "2",
    name: "Dell XPS 15",
    description: "Intel Core i7, 16GB RAM, 1TB SSD, NVIDIA GeForce RTX 3050 Ti, 15.6-inch 4K UHD+ display. Enjoy stunning visuals and powerful performance in a premium compact design.",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "laptops",
    brand: "Dell",
    rating: 4.7,
    reviews: 178,
    stock: 10,
    isNew: false,
    specifications: {
      "Processor": "11th Gen Intel Core i7",
      "RAM": "16GB DDR4",
      "Storage": "1TB SSD",
      "Display": "15.6-inch 4K UHD+ (3840 x 2400)",
      "Graphics": "NVIDIA GeForce RTX 3050 Ti",
      "Battery": "Up to 13 hours",
      "Operating System": "Windows 11"
    },
    features: [
      "InfinityEdge 4K UHD+ display with 16:10 aspect ratio",
      "CNC machined aluminum chassis",
      "Killer Wi-Fi 6 AX1650",
      "Advanced thermal design"
    ]
  },
  {
    id: "3",
    name: "iPhone 14 Pro",
    description: "A16 Bionic chip, 6.1-inch Super Retina XDR display with ProMotion, 48MP main camera, Dynamic Island. Pushing the boundaries of what a smartphone can do.",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    images: [
      "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
    ],
    category: "smartphones",
    brand: "Apple",
    rating: 4.8,
    reviews: 320,
    stock: 25,
    isNew: true,
    specifications: {
      "Chip": "A16 Bionic",
      "Display": "6.1-inch Super Retina XDR",
      "Camera": "48MP main, 12MP ultra wide, 12MP telephoto",
      "Front Camera": "12MP TrueDepth",
      "Battery": "Up to 23 hours video playback",
      "Storage": "128GB, 256GB, 512GB, 1TB options",
      "Operating System": "iOS 16"
    },
    features: [
      "Dynamic Island - a new way to interact with iPhone",
      "Always-On display",
      "Emergency SOS via satellite",
      "Crash Detection"
    ]
  },
  {
    id: "4",
    name: "Samsung Galaxy S23 Ultra",
    description: "Snapdragon 8 Gen 2, 12GB RAM, 6.8-inch Dynamic AMOLED 2X, 200MP main camera, S Pen included. The ultimate smartphone for power users.",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1678911820864-e5a3eb171860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    images: [
      "https://images.unsplash.com/photo-1678911820864-e5a3eb171860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1675964143486-29d0ae29de44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      "https://images.unsplash.com/photo-1678911820864-e5a3eb171860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    category: "smartphones",
    brand: "Samsung",
    rating: 4.7,
    reviews: 285,
    stock: 20,
    discount: 5,
    isNew: true,
    specifications: {
      "Processor": "Snapdragon 8 Gen 2 for Galaxy",
      "RAM": "12GB",
      "Storage": "256GB, 512GB, 1TB options",
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Camera": "200MP wide, 12MP ultra-wide, 10MP telephoto with 3x optical zoom, 10MP telephoto with 10x optical zoom",
      "Battery": "5000mAh",
      "Operating System": "Android 13 with One UI 5.1"
    },
    features: [
      "Built-in S Pen with improved latency",
      "Enhanced Nightography for better low-light photos",
      "Ray Tracing for mobile gaming",
      "Armor Aluminum frame and Gorilla Glass Victus 2"
    ]
  },
  {
    id: "5",
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation, 30-hour battery life, Hi-Res Audio, 8 microphones for clear calls. The next generation of our award-winning headphones.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ],
    category: "accessories",
    brand: "Sony",
    rating: 4.8,
    reviews: 210,
    stock: 35,
    discount: 15,
    isNew: false,
    specifications: {
      "Driver": "30mm",
      "Frequency Response": "4Hz-40,000Hz",
      "Battery Life": "Up to 30 hours with NC on",
      "Charging Time": "3.5 hours (Full charge)",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.2, 3.5mm audio cable"
    },
    features: [
      "Industry-leading noise cancellation with two processors",
      "Exceptional sound quality with LDAC support",
      "Precise Voice Pickup technology for clear calls",
      "Speak-to-Chat automatically pauses music when you speak"
    ]
  },
  {
    id: "6",
    name: "iPad Pro 12.9-inch",
    description: "M2 chip, 12.9-inch Liquid Retina XDR display, Thunderbolt port, 5G connectivity. The ultimate iPad experience for professionals.",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    images: [
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80"
    ],
    category: "tablets",
    brand: "Apple",
    rating: 4.9,
    reviews: 175,
    stock: 12,
    discount: 0,
    isNew: true,
    specifications: {
      "Chip": "M2 with 8-core CPU and 10-core GPU",
      "Display": "12.9-inch Liquid Retina XDR",
      "Storage": "128GB, 256GB, 512GB, 1TB, 2TB options",
      "Camera": "12MP Wide and 10MP Ultra Wide",
      "Front Camera": "12MP Ultra Wide with Center Stage",
      "Ports": "Thunderbolt / USB 4",
      "Operating System": "iPadOS 16"
    },
    features: [
      "Liquid Retina XDR display with extreme dynamic range",
      "Thunderbolt connection for fast external storage and displays",
      "Apple Pencil hover experience",
      "Pro cameras with LiDAR Scanner for immersive AR"
    ]
  },
  {
    id: "7",
    name: "Bose QuietComfort Earbuds II",
    description: "Personalized noise cancellation, up to 6 hours of battery life, CustomTune technology. Our most advanced noise cancelling earbuds yet.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1606841854375-c93f4beaf187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    images: [
      "https://images.unsplash.com/photo-1606841854375-c93f4beaf187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1650195063833-31db98c6a7db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    ],
    category: "accessories",
    brand: "Bose",
    rating: 4.6,
    reviews: 156,
    stock: 22,
    discount: 0,
    isNew: true,
    specifications: {
      "Earbud Dimensions": "1.7 cm H x 3.0 cm W x 2.3 cm D",
      "Earbud Weight": "6.2 g each",
      "Battery Life": "Up to 6 hours (earbuds), 24 hours total with case",
      "Charging Time": "1 hour (earbuds), 3 hours (case)",
      "Connectivity": "Bluetooth 5.3"
    },
    features: [
      "CustomTune technology that personalizes audio and noise cancellation",
      "Adjustable Aware Mode with ActiveSense",
      "Personalized fit with three sizes of eartips and stability bands",
      "Touch controls for music, calls, and noise cancellation modes"
    ]
  },
  {
    id: "8",
    name: "Samsung 55\" OLED 4K Smart TV",
    description: "Quantum HDR OLED, Neural Quantum Processor, Dolby Atmos, Object Tracking Sound. Experience incredible contrast, pure blacks, and vibrant colors.",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    ],
    category: "tvs",
    brand: "Samsung",
    rating: 4.8,
    reviews: 89,
    stock: 5,
    discount: 10,
    isNew: false,
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K UHD (3840 x 2160)",
      "Display Type": "OLED",
      "Processor": "Neural Quantum Processor 4K",
      "Audio": "Dolby Atmos, Object Tracking Sound",
      "Smart TV": "Tizen OS with voice assistants",
      "Connectivity": "4 HDMI, 2 USB, Wi-Fi, Bluetooth"
    },
    features: [
      "OLED technology for perfect blacks and infinite contrast",
      "Neural Quantum Processor for 4K upscaling",
      "Gaming Hub for cloud gaming",
      "LaserSlim Design"
    ]
  },
  {
    id: "9",
    name: "ASUS ROG Strix Gaming Laptop",
    description: "Intel Core i9, NVIDIA RTX 4080, 32GB RAM, 1TB SSD, 17.3-inch QHD 240Hz display. Dominate your games with this powerful gaming laptop.",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    category: "laptops",
    brand: "ASUS",
    rating: 4.7,
    reviews: 124,
    stock: 8,
    discount: 5,
    isNew: true,
    specifications: {
      "Processor": "13th Gen Intel Core i9-13900H",
      "Graphics": "NVIDIA GeForce RTX 4080 16GB GDDR6",
      "RAM": "32GB DDR5",
      "Storage": "1TB PCIe 4.0 NVMe SSD",
      "Display": "17.3-inch QHD (2560 x 1440) 240Hz",
      "Cooling": "ROG Intelligent Cooling with liquid metal",
      "Keyboard": "Per-key RGB backlit",
      "Operating System": "Windows 11 Pro"
    },
    features: [
      "MUX Switch with NVIDIA Advanced Optimus",
      "ROG Intelligent Cooling with liquid metal and vapor chamber",
      "Comprehensive connectivity with Thunderbolt 4",
      "Dolby Atmos spatial sound"
    ]
  },
  {
    id: "10",
    name: "Google Pixel 7 Pro",
    description: "Google Tensor G2, 12GB RAM, 6.7-inch QHD+ LTPO display, 50MP triple camera system. The best of Google in a phone.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    images: [
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1667372834987-7076a6c55d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1669497823853-9f2cc6ab2e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    category: "smartphones",
    brand: "Google",
    rating: 4.6,
    reviews: 198,
    stock: 15,
    discount: 10,
    isNew: false,
    specifications: {
      "Processor": "Google Tensor G2",
      "RAM": "12GB LPDDR5",
      "Storage": "128GB, 256GB, 512GB options",
      "Display": "6.7-inch QHD+ LTPO OLED (1440 x 3120)",
      "Camera": "50MP wide, 12MP ultrawide, 48MP telephoto with 5x optical zoom",
      "Front Camera": "10.8MP",
      "Battery": "5000mAh",
      "Operating System": "Android 13"
    },
    features: [
      "Advanced camera features with Pixel's computational photography",
      "Real Tone technology for authentic skin tones",
      "Magic Eraser removes unwanted objects from photos",
      "Live Translate for conversations, signs, and messages"
    ]
  },
  {
    id: "11",
    name: "Apple AirPods Pro (2nd Generation)",
    description: "Active Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio, Up to 6 hours of listening time. The magic of AirPods, elevated.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "https://images.unsplash.com/photo-1606841854379-4171823669a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80"
    ],
    category: "accessories",
    brand: "Apple",
    rating: 4.8,
    reviews: 278,
    stock: 30,
    discount: 0,
    isNew: true,
    specifications: {
      "Chip": "H2",
      "Earbud Dimensions": "30.9 mm x 21.8 mm x 24.0 mm",
      "Case Dimensions": "45.2 mm x 60.6 mm x 21.7 mm",
      "Earbud Weight": "5.3 g each",
      "Case Weight": "50.8 g",
      "Battery Life": "Up to 6 hours (earbuds), 30 hours total with case",
      "Charging": "Lightning, MagSafe, or Qi wireless charging"
    },
    features: [
      "H2 chip for smarter noise cancellation and immersive sound",
      "Adaptive Transparency to hear the world around you",
      "Personalized Spatial Audio with dynamic head tracking",
      "Touch control including volume adjustment"
    ]
  },
  {
    id: "12",
    name: "DJI Mini 3 Pro Drone",
    description: "249g lightweight, 4K/60fps video, 48MP photos, 34-min flight time, tri-directional obstacle sensing. Professional-quality aerial content in a compact design.",
    price: 759.99,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    ],
    category: "cameras",
    brand: "DJI",
    rating: 4.9,
    reviews: 142,
    stock: 7,
    discount: 5,
    isNew: true,
    specifications: {
      "Weight": "< 249 g",
      "Camera": "1/1.3-inch CMOS sensor, 48MP",
      "Video": "4K/60fps, HDR, slow motion 1080p/120fps",
      "Max Flight Time": "34 minutes",
      "Max Transmission Distance": "12 km (FCC), 8 km (CE)",
      "Obstacle Sensing": "Forward, Backward, Downward",
      "Internal Storage": "1.2GB"
    },
    features: [
      "True Vertical Shooting for portraits and social media content",
      "FocusTrack suite including Spotlight 2.0, Point of Interest 3.0, and ActiveTrack 4.0",
      "MasterShots automated shooting modes",
      "Panorama mode for wide landscape shots"
    ]
  }
];

export const categories = [
  { id: "all", label: "All Categories" },
  { id: "laptops", label: "Laptops" },
  { id: "smartphones", label: "Smartphones" },
  { id: "accessories", label: "Accessories" },
  { id: "tablets", label: "Tablets" },
  { id: "tvs", label: "TVs" },
  { id: "cameras", label: "Cameras" }
];

export const brands = [
  { id: "all", label: "All Brands" },
  { id: "apple", label: "Apple" },
  { id: "samsung", label: "Samsung" },
  { id: "sony", label: "Sony" },
  { id: "google", label: "Google" },
  { id: "dell", label: "Dell" },
  { id: "asus", label: "ASUS" },
  { id: "bose", label: "Bose" },
  { id: "dji", label: "DJI" }
];

export const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "under-500", label: "Under $500" },
  { id: "500-1000", label: "500 - $1000" },
  { id: "1000-2000", label: "$1000 - $2000" },
  { id: "over-2000", label: "Over $2000" }
];

export const ratingOptions = [
  { id: "all", label: "All Ratings" },
  { id: "4-plus", label: "4+ Stars" },
  { id: "3-plus", label: "3+ Stars" },
  { id: "2-plus", label: "2+ Stars" },
  { id: "1-plus", label: "1+ Stars" }
];

export const getFilteredProducts = (
  products: Product[],
  filters: Record<string, string[]>
) => {
  return products.filter((product) => {
    // Category filter
    if (
      filters.category &&
      filters.category.length > 0 &&
      !filters.category.includes("all") &&
      !filters.category.includes(product.category)
    ) {
      return false;
    }

    // Brand filter
    if (
      filters.brand &&
      filters.brand.length > 0 &&
      !filters.brand.includes("all") &&
      !filters.brand.includes(product.brand.toLowerCase())
    ) {
      return false;
    }

    // Price filter
    if (filters.price && filters.price.length > 0 && !filters.price.includes("all")) {
      const price = product.price;
      let priceMatch = false;

      filters.price.forEach((range) => {
        if (range === "under-500" && price < 500) priceMatch = true;
        if (range === "500-1000" && price >= 500 && price <= 1000) priceMatch = true;
        if (range === "1000-2000" && price >= 1000 && price <= 2000) priceMatch = true;
        if (range === "over-2000" && price > 2000) priceMatch = true;
      });

      if (!priceMatch) return false;
    }

    // Rating filter
    if (filters.rating && filters.rating.length > 0 && !filters.rating.includes("all")) {
      let ratingMatch = false;

      filters.rating.forEach((range) => {
        if (range === "4-plus" && product.rating >= 4) ratingMatch = true;
        if (range === "3-plus" && product.rating >= 3) ratingMatch = true;
        if (range === "2-plus" && product.rating >= 2) ratingMatch = true;
        if (range === "1-plus" && product.rating >= 1) ratingMatch = true;
      });

      if (!ratingMatch) return false;
    }

    // Search filter
    if (filters.search && filters.search.length > 0) {
      const searchTerm = filters.search[0].toLowerCase();
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
      );
    }

    return true;
  });
};
