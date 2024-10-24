type plant = {
    id: number;
    plantname: string;
    imageUrl: string;
    description: string;
    price: number;
}
type blog = {
    id: number;
    introduce: string;
    born: string;
    characteristic: string;
    care: string;
    image: string;
}
const blogs: blog[] = [
    {id: 1,
        introduce: "Bunny Ear Cactus is a small cactus with soft, furry spines.",
        born: "Dry, hot areas",
        characteristic: "Thorns soft as rabbit fur, beautiful flowers",
        care: "Needs lots of sunlight and moderate watering.",
        image: "https://cdn.tgdd.vn/Files/2021/08/01/1372249/dac-diem-cach-trong-va-cham-soc-xuong-rong-tai-tho-don-gian-cho-hoa-no-to-dep-202212031837028563.jpg"
    },
    {id: 2,
        introduce: "Aloe vera, also known as aloe, is a succulent plant with many medicinal and cosmetic uses. Aloe vera leaves contain a clear gel that soothes the skin, reduces inflammation, and moisturizes.",
        born: "Tropical and subtropical dry climates",
        characteristic: "Succulent leaves, with thorns on the leaf edges, yellow or orange flowers",
        care: "Adaptable to many light conditions, water moderately, avoid waterlogging",
        image: "https://cayxanh.us/wp-content/uploads/2020/02/cay-nha-dam-thuy-sinh.jpg"
    },
    {id: 3,
        introduce: "Mint is a herbaceous plant of the Lamiaceae family, known for its characteristic aroma and cool, spicy taste. Mint is widely used in culinary, beauty and medicine.",
        born: "Temperate climate zone",
        characteristic: "Oval leaves, serrated edges, small purple or white flowers, strong fragrance",
        care: "Suitable for planting in places with lots of light, loose soil, regular watering",
        image: "https://decoxdesign.com/upload/images/cau-xanh-trong-phong-tam-08-decox.jpg"
    }
];
const plants: plant[] = [
    {id: 1, plantname: "Aloe Vera", imageUrl: "https://d2rxt25e475whq.cloudfront.net/wp-content/uploads/2022/09/25140858/AdobeStock_314071672-1024x683.jpeg", description: "Aloe Vera is a succulent plant species of the genus Aloe. It is cultivated for agricultural and medicinal uses.", price: 10},
    {id: 2, plantname: "Basil", imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/266425_2200-732x549.jpg", description: "Basil is a culinary herb of the family Lamiaceae. It is also called the king of herbs. It is also called the king of herbs.", price: 5},
    {id: 3, plantname: "Cactus", imageUrl: "https://wowsomeblossome.com/cdn/shop/products/DSCF6534_2000x.jpg?v=1564506196", description: "Cacti are members of the plant family Cactaceae, in the order Caryophyllales. They are native to the Americas Caryophyllales.", price: 15},
    {id: 4, plantname: "Lavender", imageUrl: "https://www.homesake.in/cdn/shop/files/IH0F004-VT-4_theme.jpg?v=1704446959&width=1920", description: "Lavandula is a genus of 47 known species of flowering plants in the mint family, Lamiaceae in the mint family.", price: 7},
    {id: 5, plantname: "Mint", imageUrl: "https://static.wixstatic.com/media/nsplsh_4ef75a76330045a482f8950b6d657f69~mv2.jpg/v1/fill/w_2500,h_1875,al_c/nsplsh_4ef75a76330045a482f8950b6d657f69~mv2.jpg", description: "Mentha is a genus of plants in the family Lamiaceae. It is estimated that 13 to 18 species exist in the family Lamiaceae.", price: 6},
    {id: 6, plantname: "Rosemary", imageUrl: "https://exoticvegetablespune.com/wp-content/uploads/2022/01/ROSEMARY_PLANTS_1-removebg-preview.png", description: "Rosmarinus officinalis, commonly known as rosemary, is a woody, perennial herb with fragrant, evergreen, needle-like leaves.", price: 8},
    {id: 7, plantname: "Sage", imageUrl: "https://cdn.mos.cms.futurecdn.net/gfRZFUscG9PU5ujVxqsLiB-1200-80.jpg.webp", description: "Salvia officinalis is a perennial, evergreen subshrub, with woody stems, grayish leaves, and blue to purplish flowers with woody stems.", price: 9},
    {id: 8, plantname: "Thyme", imageUrl: "https://images.herzindagi.info/image/2024/Mar/tips-to-grow-thyme-plant.jpg", description: "Thyme is any member of the genus Thymus of aromatic perennial evergreen herbs in the mint family Lamiaceae perennial evergreen", price: 4},
    {id: 9, plantname: "Calathea", imageUrl: "https://hortology.co.uk/cdn/shop/files/Calathea-orbifolia-19x60cm-Nine-Plant-Pot-Olive-Green-22x20cm_1200x.jpg?v=1725882005", description: "Calathea is a genus of plants belonging to the family Marantaceae. There are several dozen species in this genus.", price: 12},
    {id: 10, plantname: "Monstera", imageUrl: "https://mowgarden.com/wp-content/uploads/2022/08/48-cay-monstera-borsi-leo-cot-3000k.jpg", description: "Monstera is a genus of about 50 species of flowering plants in the arum family, Araceae, native to tropical regions of the Americas.", price: 20},
    {id: 11, plantname: "Snake Plant", imageUrl: "https://www.myjunglehome.com.au/cdn/shop/products/snake-plant-sansevieria-robusta-18cm-pot-my-jungle-home-676258.jpg?v=1671202794", description: "The Snake Plant, also known as Mother-in-Law's Tongue, is a popular houseplant known for its air purifying properties", price: 10},
    {id: 12, plantname: "Spider Plant", imageUrl: "https://i0.wp.com/deepgreenpermaculture.com/wp-content/uploads/2024/04/Spider-plant-180259.png?ssl=1", description: "The Spider Plant is a popular houseplant known for its air purifying properties and low maintenance needs", price: 10}
];

export {plant, blog}
export {plants, blogs}