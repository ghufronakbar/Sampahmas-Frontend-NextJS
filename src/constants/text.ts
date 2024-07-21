import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const english = {
    "TITLE": "Sampahmas",
    "DESCRIPTION" : "Sampahmas is a waste management application that is integrated with a waste vending machine. We designed the application in an attractive and easy-to-use manner for various groups. We provide various features such as the location of the nearest machine, redeeming garbage to points so that points can be exchanged for various goods or vouchers in the mart menu and we provide daily tasks so that you are more eager to collect sampahmas points." ,
    "VENDING_MACHINE":["Find Our", "Vending Machine"],
    "IDENTITIY_CARD": "Scan With Your Identity Card",
    "NEW_ARRIVALS": "New Arrivals",
    "SHOP_BY_COLLECTION": "Shop By Collection",
    "COLLECTIONS":["Mens","Womens","Kids"],
    "BEST_SELLER": "Best Seller",
    "SEE_ALL": "See All",
    "DIRECTION": "Direction",
    "GREEN_MARKET": "Green Market",
    "GREEN_MARKET_DESCRIPTION": "The marketplace that we provide for users to enjoy the points that have been collected then users can also sell their own products which can be in the form of processed plastic waste goods or not processed plastic.",
    "EXPLORE": "Explore",
    "ABOUT_US": "About Us",
    "ABOUT_US_DESCRIPTION":"Sampahmas is a waste management application that is integrated with waste vending machines. We have designed this app to be attractive and easy to use for everyone. We provide various features such as the location of the nearest machine, redeeming garbage into points so that points can be exchanged for various items or vouchers in the mart menu and we provide daily tasks to make you more excited to collect sampahmas points.",
    "LEARN_MORE": "Learn More",
    "OUR_JOURNEY": "Our Journey",
    "FEATURES": "Features",
    "FIND_VENDING": ["Find Vending","Find a Vending Machine around you, don't miss it!"],
    "EXCHANGE": ["Exchange","Redeem your plastic bottles into Sampay points and Enjoy the Rewards"],
    "ENJOY_SHOPPING":["Enjoy Shopping","Happy Shopping at Sampahmas, wish you a Happy Day"],
    "GET_STARTED": "Get Started",
}

const indonesian = {
    "TITLE": "Sampahmas",
    "DESCRIPTION" : "Sampahmas adalah aplikasi pengelolaan sampah yang terintegrasi dengan mesin penjual sampah. Kami mendesain aplikasi ini secara menarik dan mudah digunakan oleh berbagai kalangan. Kami menyediakan berbagai fitur seperti lokasi mesin terdekat, menukarkan sampah menjadi poin sehingga poin dapat ditukarkan dengan berbagai barang atau voucher di menu mart dan kami menyediakan tugas harian agar Anda semakin bersemangat mengumpulkan poin sampahmas." ,
    "VENDING_MACHINE":["Temukan", "Vending Machine"],
    "IDENTITIY_CARD": "Scan Dengan Kartu Identitas Anda",
    "NEW_ARRIVALS": "Barang Baru",
    "SHOP_BY_COLLECTION": "Koleksi Toko",
    "COLLECTIONS":["Pria","Wanita","Anak"],
    "BEST_SELLER": "Terlaris",
    "SEE_ALL": "Lihat Semua",
    "DIRECTION": "Petujuk",
    "GREEN_MARKET": "Toko Hijau",
    "GREEN_MARKET_DESCRIPTION": "Marketplace yang kami sediakan untuk para pengguna agar dapat menikmati poin yang sudah dikumpulkan kemudian para pengguna juga dapat menjual produk mereka sendiri yang dapat berupa barang barang olahan limbah plastik maupun buka olahan plastik.",
    "EXPLORE": "Jelajahi",
    "ABOUT_US": "Tentang Kami",
    "ABOUT_US_DESCRIPTION":"Sampahmas adalah aplikasi pengelolaan sampah yang terintegrasi dengan mesin penjual sampah. Kami mendesain aplikasi ini secara menarik dan mudah digunakan oleh berbagai kalangan. Kami menyediakan berbagai fitur seperti lokasi mesin terdekat, menukarkan sampah menjadi poin sehingga poin dapat ditukarkan dengan berbagai barang atau voucher di menu mart dan kami menyediakan tugas harian agar Anda semakin bersemangat mengumpulkan poin sampahmas.",
    "LEARN_MORE": "Pelajari Lebih Lanjut",  
    "OUR_JOURNEY": "Perjalanan Kami",
    "FEATURES": "Fitur",    
    "FIND_VENDING": ["Temukan Vending Machine","Temukan Vending Machine disekitar anda sekarang"],
    "EXCHANGE": ["Tukar","Tukarkan botol plastik anda menjadi poin Sampay dan Nikmati Rewardnya"],
    "ENJOY_SHOPPING": ["Selamat Belanja","Selamat Belanja di Sampahmas, semoga Anda menyukainya"],
    "GET_STARTED": "Mulai Sekarang",
}

const useText = () => {
    const router = useRouter()
    const lang = router.query.lang? router.query.lang : "en"
    const [language, setLanguage] = useState<string>("en")
    useEffect(() => {
        if(router.isReady){            
            setLanguage(lang as string || "en")
        }
    },[lang])
    const result = language === "en" ? english : language === "id" ? indonesian : english
    return result
}

export default useText