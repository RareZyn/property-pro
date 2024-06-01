# Documentation from Azim
## 1. Berkenaan dengan token
- Setiap kali user login, system akan create 1 jwt token and akan save ke dalam cookies untuk system fetch kemudian
- Details untuk token hanyalah (user id: id, username: username) untuk security purpose
- Untuk memudahkan system fetch details dalam token, saya buat AppProvider yang boleh return *'userToken'* yang secara automatik akan return json object yang mengandungi user id dan username.
- Cara panggil userToken: ```const { userToken } = useContext(AppContext)```
- Tetapi useToken tidak sentiasa ada, ada ketika useToken mengandungi value null walaupun Cookies token tu dah ada, So, untuk guna userToken dalam code, mesti guna useEffect hook

## 2. Berkenaan utils getUser()
- Untuk mengelakkan guna axios untuk multiple page or component just to get user details, saya create satu function dalam utils untuk fetch user daripada mongoDB
- Namun,untuk dapatkan user details dalam frontend yang terlibat, mestilah menggunakan useEffect hook sebab fetching user data from an API is considered a side effect because it involves interacting with the outside world (i.e., making a network request) and can cause changes outside the component's local state.
- So, cara dapatkan details dari getUser() function dalam utils:
```
const {userToken} = useContext(AppContext);
  const[user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error('Failed to fetch user data:', error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log('No user token');
    }
  }, [userToken]);
```

UPDATE FRONT END
- sidebar updated
- display card dh betulkan ui
- property details page dh ditukar kepada propertyhousedetails, propertylanddetails and propertyvehicle detail
- create post boleh add media and preview
- popup share added (icon copy tu boleh tekan untuk copy link)

UPDATE FRONT END (aisyah)
AccountDetails.js - add icons and username, add @media to make badges responsive
VerifyPropertyHome.js - add @media for grid layout, import GeneralProperty.css
PropertyRejectionCard.js - add confirm and cancel button
PropertyRejectionCard.js- add @media for responsive design
DocumentRejectionCard.js + DocumentRejectionCard.css 
- create a separate card for document rejection popup and adjust position
VerifyPropertyCar.js - add details 
VerifyPropertyLand.js - add details 
VerifyPropertyHouse.js - add details 
Verify Property pages - make rejection card cancel button interactive
Verify Property pages- add @media for responsive design
NavHeader.js- change navigation so that when click "Broker" go to broker-login page
BrokerLogin.js- added show password checkbox
Login.js- added show password checkbox

PropertyPro+ is a revolutionary property management platform designed to simplify the process of buying, selling, and renting various types of properties, including accommodation, transportation and land. Our all-in-one solution combines the functionality of multiple property-related and accommodation apps and services into a single, user-friendly platform. PropertyPro+ empowers sellers, buyers and brokers by streamlining property transactions, saving time, reducing stress, and providing a seamless experience. It transforms the dream of finding the perfect property into a hassle-free reality. PropertyPro+ is set to become the go-to choice for anyone seeking a better property transaction experience.

.env file (do replace username & password with your corresponding username)
ATLAS_URI = mongodb+srv://<username>:<password>@cluster0.qltsjio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
MY_SECRET= WeGviBXRU9xTAD-O3dXNPLt4BNgUxdxcdoM69--YRfg
