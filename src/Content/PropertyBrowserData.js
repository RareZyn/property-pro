class Property {
    constructor(type, state, location, itemName, price, image) {
        this.type = type;
        this.state = state;
        this.location = location;
        this.itemName = itemName;
        this.price = price;
        this.image = image;
    }
}

function generateRandomImage(){

}

function getPropertylist(){
    const propertyList = [
        new Property('Land', 'Kelantan', 'Kota Bharu', 'Land in Kota Bharu', 50000, generateRandomImage()),
        new Property('House', 'Kelantan', 'Tumpat', 'House in Tumpat', 150000, generateRandomImage()),
        new Property('Land', 'Kelantan', 'Pasir Mas', 'Land in Pasir Mas', 40000, generateRandomImage()),
        new Property('House', 'Kelantan', 'Bachok', 'House in Bachok', 120000, generateRandomImage()),
        new Property('Land', 'Selangor', 'Shah Alam', 'Land in Shah Alam', 250000, generateRandomImage()),
        new Property('House', 'Selangor', 'Subang Jaya', 'House in Subang Jaya', 350000, generateRandomImage()),
        new Property('Land', 'Selangor', 'Klang', 'Land in Klang', 200000, generateRandomImage()),
        new Property('House', 'Selangor', 'Petaling Jaya', 'House in Petaling Jaya', 400000, generateRandomImage()),
        new Property('Land', 'Terengganu', 'Kuala Terengganu', 'Land in Kuala Terengganu', 60000, generateRandomImage()),
        new Property('House', 'Terengganu', 'Dungun', 'House in Dungun', 180000, generateRandomImage()),
        new Property('Land', 'Terengganu', 'Kemaman', 'Land in Kemaman', 55000, generateRandomImage()),
        new Property('House', 'Terengganu', 'Marang', 'House in Marang', 160000, generateRandomImage()),
        new Property('Land', 'Kedah', 'Alor Setar', 'Land in Alor Setar', 70000, generateRandomImage()),
        new Property('House', 'Kedah', 'Sungai Petani', 'House in Sungai Petani', 200000, generateRandomImage()),
        new Property('Land', 'Kedah', 'Langkawi', 'Land in Langkawi', 90000, generateRandomImage()),
        new Property('House', 'Kedah', 'Kulim', 'House in Kulim', 220000, generateRandomImage()),
        new Property('Land', 'Kedah', 'Baling', 'Land in Baling', 80000, generateRandomImage()),
        new Property('House', 'Kedah', 'Padang Serai', 'House in Padang Serai', 210000, generateRandomImage())
    ];
    
    return propertyList;
}

export {getPropertylist};