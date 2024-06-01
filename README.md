# Update from Azim
## 1. Berkenaan dengan token
- Setiap kali user login, system akan create 1 jwt token and akan save ke dalam cookies untuk system fetch kemudian
- Details untuk token hanyalah (user id: id, username: username) untuk security purpose
- Untuk memudahkan system fetch details dalam token, saya buat AppProvider yang boleh return *'userToken'* yang secara automatik akan return json object yang mengandungi user id dan username.
- Cara panggil userToken: const { userToken } = useContext(AppContext)



PropertyPro+ is a revolutionary property management platform designed to simplify the process of buying, selling, and renting various types of properties, including accommodation, transportation and land. Our all-in-one solution combines the functionality of multiple property-related and accommodation apps and services into a single, user-friendly platform. PropertyPro+ empowers sellers, buyers and brokers by streamlining property transactions, saving time, reducing stress, and providing a seamless experience. It transforms the dream of finding the perfect property into a hassle-free reality. PropertyPro+ is set to become the go-to choice for anyone seeking a better property transaction experience.

.env file (do replace username & password with your corresponding username)
ATLAS_URI = mongodb+srv://<username>:<password>@cluster0.qltsjio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
MY_SECRET= WeGviBXRU9xTAD-O3dXNPLt4BNgUxdxcdoM69--YRfg
